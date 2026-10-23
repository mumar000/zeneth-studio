"use client";

import { useEffect, useRef, useState } from "react";
import {
  COUNTRIES,
  isDaylight,
  isLowEndDevice,
  landDots,
  prefersReducedMotion,
  sunPosition,
  timeIn,
  useLocalTimeZone,
  useMinute,
  zoneLabel,
} from "./client-data";
import { SkyIcon, YouBadge } from "./time-card";

const TAU = Math.PI * 2;
const D2R = Math.PI / 180;
const MOVE = 1500; // ms to fly to a country
const HOLD = 3600; // ms to rest on it before moving on
const DRIFT = 0.0035; // deg/ms of idle spin while resting
const LAT_LIMIT = 50;

// Front-facing dots are batched by kind and depth: one fill per bucket.
const KINDS = [
  { color: "#C4B2F2", alpha: [0.45, 0.75, 1] }, // land, daytime
  { color: "#8E80B4", alpha: [0.4, 0.7, 0.95] }, // land, night
  { color: "#A47BFF", alpha: [0.55, 0.8, 1] }, // client country
  { color: "#7221FC", alpha: [0.7, 0.9, 1] }, // active client country
];
const BACK = KINDS.length * 3;

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const display = { fontFamily: "var(--font-display)" };

function toVector(lat, lon) {
  const cl = Math.cos(lat * D2R);
  return [cl * Math.cos(lon * D2R), cl * Math.sin(lon * D2R), Math.sin(lat * D2R)];
}

// A great-circle path between two countries, lifted off the surface in the middle.
function buildArc(a, b, steps = 64) {
  const va = toVector(a.lat, a.lon);
  const vb = toVector(b.lat, b.lon);
  const omega = Math.acos(clamp(va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2], -1, 1));
  const sinO = Math.sin(omega) || 1;
  const peak = Math.min(0.3, omega * 0.12);
  const lat = new Float32Array(steps + 1);
  const lon = new Float32Array(steps + 1);
  const alt = new Float32Array(steps + 1);
  for (let i = 0; i <= steps; i++) {
    const s = i / steps;
    const ka = Math.sin((1 - s) * omega) / sinO;
    const kb = Math.sin(s * omega) / sinO;
    const x = ka * va[0] + kb * vb[0];
    const y = ka * va[1] + kb * vb[1];
    const z = ka * va[2] + kb * vb[2];
    lat[i] = Math.atan2(z, Math.hypot(x, y));
    lon[i] = Math.atan2(y, x);
    alt[i] = peak * Math.sin(Math.PI * s);
  }
  return { lat, lon, alt, steps };
}

export default function ClientGlobe() {
  const minute = useMinute();
  const localTz = useLocalTimeZone();
  const [active, setActive] = useState(0);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const barRefs = useRef([]);
  const minuteRef = useRef(minute);
  const focusRef = useRef(null);

  useEffect(() => {
    minuteRef.current = minute;
  }, [minute]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = prefersReducedMotion();
    const lowEnd = isLowEndDevice();
    const dprCap = lowEnd ? 1.5 : 2;
    const frameGap = lowEnd ? 30 : 0; // ~30fps cap on weak machines

    // Typed arrays keep the per-frame loop allocation-free.
    const all = landDots().filter((d) => d.sparse);
    const n = all.length;
    const sinLat = new Float32Array(n);
    const cosLat = new Float32Array(n);
    const lonRad = new Float32Array(n);
    const kind = new Uint8Array(n);
    const day = new Uint8Array(n);
    all.forEach((d, i) => {
      sinLat[i] = Math.sin(d.lat * D2R);
      cosLat[i] = Math.cos(d.lat * D2R);
      lonRad[i] = d.lon * D2R;
      kind[i] = d.kind;
    });
    const buffers = Array.from({ length: BACK + 1 }, () => new Float32Array(n * 3));
    const counts = new Int32Array(BACK + 1);
    let dayMinute = null;

    let size = 0;
    let dpr = 1;
    let sphere = null; // the static sphere and glow, pre-rendered on resize

    const view = { lon: -60, lat: 10 };
    let current = 0;
    let tween = null;
    let arc = null;
    let hold = { start: 0, end: 0 };
    let arrivedAt = 0;
    let dragging = false;
    let velocity = 0;
    let lastPointer = null;
    let visible = false;
    let frame = 0;
    let last = 0;

    function refreshDaylight() {
      const m = minuteRef.current ?? Math.floor(Date.now() / 60000);
      if (m === dayMinute) return;
      dayMinute = m;
      const sun = sunPosition(m);
      for (let i = 0; i < n; i++) day[i] = isDaylight(all[i].lat, all[i].lon, sun) ? 1 : 0;
    }

    function renderSphere() {
      sphere = document.createElement("canvas");
      sphere.width = sphere.height = Math.round(size * dpr);
      const s = sphere.getContext("2d");
      s.scale(dpr, dpr);
      const c = size / 2;
      const R = size * 0.42;

      const glow = s.createRadialGradient(c, c, R * 0.92, c, c, R * 1.18);
      glow.addColorStop(0, "rgba(114,33,252,0.22)");
      glow.addColorStop(1, "rgba(114,33,252,0)");
      s.fillStyle = glow;
      s.fillRect(0, 0, size, size);

      const body = s.createRadialGradient(c - R * 0.38, c - R * 0.42, R * 0.05, c, c, R);
      body.addColorStop(0, "#FFFFFF");
      body.addColorStop(0.55, "#F4EEFE");
      body.addColorStop(1, "#DCCDF8");
      s.fillStyle = body;
      s.beginPath();
      s.arc(c, c, R, 0, TAU);
      s.fill();

      s.strokeStyle = "rgba(114,33,252,0.18)";
      s.lineWidth = 1;
      s.stroke();
    }

    function focus(index, byUser) {
      const now = performance.now();
      const target = COUNTRIES[index];
      if (index !== current) {
        if (!reduce) arc = { ...buildArc(COUNTRIES[current], target), start: now };
        current = index;
        setActive(index);
      }
      const dl = ((target.lon - view.lon + 540) % 360) - 180;
      tween = {
        start: now,
        from: { ...view },
        to: { lon: view.lon + dl, lat: clamp(target.lat * 0.7, -35, 35) },
      };
      velocity = 0;
      arrivedAt = now + (reduce ? 0 : MOVE);
      hold = { start: arrivedAt, end: arrivedAt + HOLD * (byUser ? 2 : 1) };
      barRefs.current.forEach((bar) => bar && (bar.style.transform = "scaleX(0)"));
      invalidate();
    }
    focusRef.current = focus;

    function project(sl, cl, lon, l0, sp, cp, out) {
      const dl = lon - l0;
      const cdl = Math.cos(dl);
      out[0] = cl * Math.sin(dl);
      out[1] = cp * sl - sp * cl * cdl;
      out[2] = sp * sl + cp * cl * cdl;
    }
    const p = new Float32Array(3);

    function update(t, dt) {
      if (tween && !dragging) {
        const k = reduce ? 1 : easeInOut(Math.min(1, (t - tween.start) / MOVE));
        view.lon = tween.from.lon + (tween.to.lon - tween.from.lon) * k;
        view.lat = tween.from.lat + (tween.to.lat - tween.from.lat) * k;
        if (k >= 1) tween = null;
      } else if (!dragging && Math.abs(velocity) > 0.0004) {
        // Inertia after a flick.
        view.lon += velocity * dt;
        velocity *= 0.94 ** (dt / 16.7);
      } else if (!dragging && !reduce) {
        view.lon += DRIFT * dt;
      }

      if (!reduce && !dragging && !tween && Math.abs(velocity) <= 0.0004 && t > hold.end) {
        focus((current + 1) % COUNTRIES.length, false);
      }
    }

    function draw(t) {
      const R = size * 0.42;
      const c = size / 2;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(sphere, 0, 0, size, size);

      const l0 = view.lon * D2R;
      const p0 = view.lat * D2R;
      const cp = Math.cos(p0);
      const sp = Math.sin(p0);
      const base = R * 0.0118;
      const activeCode = COUNTRIES[current].code;

      // Graticule: faint lines that make the rotation read as 3D.
      ctx.strokeStyle = "rgba(114,33,252,0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let m = -180; m < 180; m += 30) {
        let pen = false;
        for (let la = -90; la <= 90; la += 6) {
          project(Math.sin(la * D2R), Math.cos(la * D2R), m * D2R, l0, sp, cp, p);
          if (p[2] < 0) { pen = false; continue; }
          const x = c + R * p[0];
          const y = c - R * p[1];
          if (pen) ctx.lineTo(x, y); else ctx.moveTo(x, y);
          pen = true;
        }
      }
      for (let la = -60; la <= 60; la += 30) {
        let pen = false;
        const sl = Math.sin(la * D2R);
        const cl = Math.cos(la * D2R);
        for (let lo = -180; lo <= 180; lo += 6) {
          project(sl, cl, lo * D2R, l0, sp, cp, p);
          if (p[2] < 0) { pen = false; continue; }
          const x = c + R * p[0];
          const y = c - R * p[1];
          if (pen) ctx.lineTo(x, y); else ctx.moveTo(x, y);
          pen = true;
        }
      }
      ctx.stroke();

      // Bucket every dot, then draw each bucket as a single path.
      counts.fill(0);
      for (let i = 0; i < n; i++) {
        project(sinLat[i], cosLat[i], lonRad[i], l0, sp, cp, p);
        const z = p[2];
        let bucket;
        let r;
        if (z < 0) {
          bucket = BACK;
          r = base * 0.55;
        } else {
          const type = kind[i] === activeCode ? 3 : kind[i] > 1 ? 2 : day[i] ? 0 : 1;
          bucket = type * 3 + (z < 0.35 ? 0 : z < 0.7 ? 1 : 2);
          r = base * (0.55 + 0.45 * z) * (type === 3 ? 1.25 : 1);
        }
        const o = counts[bucket]++ * 3;
        const buf = buffers[bucket];
        buf[o] = c + R * p[0];
        buf[o + 1] = c - R * p[1];
        buf[o + 2] = r;
      }

      // Far side shows through faintly, like a glass globe.
      ctx.globalAlpha = 0.09;
      ctx.fillStyle = "#7221FC";
      ctx.beginPath();
      const back = buffers[BACK];
      for (let j = 0; j < counts[BACK]; j++) {
        const o = j * 3;
        const r = back[o + 2];
        ctx.rect(back[o] - r, back[o + 1] - r, r * 2, r * 2);
      }
      ctx.fill();

      for (let type = 0; type < KINDS.length; type++) {
        ctx.fillStyle = KINDS[type].color;
        for (let depth = 0; depth < 3; depth++) {
          const bucket = type * 3 + depth;
          if (!counts[bucket]) continue;
          const buf = buffers[bucket];
          ctx.globalAlpha = KINDS[type].alpha[depth];
          ctx.beginPath();
          for (let j = 0; j < counts[bucket]; j++) {
            const o = j * 3;
            ctx.moveTo(buf[o] + buf[o + 2], buf[o + 1]);
            ctx.arc(buf[o], buf[o + 1], buf[o + 2], 0, TAU);
          }
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // Flight arc from the previous country, drawn above the surface.
      if (arc) {
        const age = t - arc.start;
        const head = easeInOut(clamp(age / MOVE, 0, 1));
        const tail = easeInOut(clamp((age - MOVE * 0.55) / MOVE, 0, 1));
        if (tail >= 1) {
          arc = null;
        } else {
          ctx.strokeStyle = "#7221FC";
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          let pen = false;
          let hx = 0;
          let hy = 0;
          let headShown = false;
          const from = Math.floor(tail * arc.steps);
          const to = Math.ceil(head * arc.steps);
          for (let i = from; i <= to; i++) {
            const la = arc.lat[i];
            project(Math.sin(la), Math.cos(la), arc.lon[i], l0, sp, cp, p);
            const lift = 1 + arc.alt[i];
            const hidden = p[2] < 0 && lift * Math.hypot(p[0], p[1]) < 1;
            if (hidden) { pen = false; headShown = false; continue; }
            const x = c + R * lift * p[0];
            const y = c - R * lift * p[1];
            if (pen) ctx.lineTo(x, y); else ctx.moveTo(x, y);
            pen = true;
            hx = x;
            hy = y;
            headShown = true;
          }
          ctx.stroke();
          if (headShown && head < 1) {
            ctx.fillStyle = "#7221FC";
            ctx.beginPath();
            ctx.arc(hx, hy, 3.5, 0, TAU);
            ctx.fill();
          }
        }
      }

      // Pins stand out along the surface normal, so they lean with the globe.
      const grow = reduce ? 1 : easeInOut(clamp((t - arrivedAt) / 600, 0, 1));
      for (let i = 0; i < COUNTRIES.length; i++) {
        const country = COUNTRIES[i];
        const isActive = i === current;
        project(Math.sin(country.lat * D2R), Math.cos(country.lat * D2R), country.lon * D2R, l0, sp, cp, p);
        if (p[2] < 0.05) continue;
        const fade = clamp((p[2] - 0.05) * 5, 0, 1);
        const lift = 1 + (isActive ? 0.06 + 0.08 * grow : 0.05);
        const bx = c + R * p[0];
        const by = c - R * p[1];
        const hx = c + R * lift * p[0];
        const hy = c - R * lift * p[1];

        ctx.globalAlpha = fade;
        ctx.fillStyle = "rgba(26,16,48,0.22)";
        ctx.beginPath();
        ctx.ellipse(bx, by, 4, 4 * p[2], 0, 0, TAU);
        ctx.fill();

        ctx.strokeStyle = "#1a1a1a";
        ctx.lineWidth = isActive ? 2 : 1.5;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(hx, hy);
        ctx.stroke();

        if (isActive) {
          if (!reduce) {
            const ping = (t % 2400) / 2400;
            ctx.strokeStyle = `rgba(114,33,252,${0.6 * (1 - ping) * fade})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(hx, hy, 9 + ping * 24, 0, TAU);
            ctx.stroke();
          }
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(hx, hy, 9, 0, TAU);
          ctx.fill();
          ctx.strokeStyle = "#1a1a1a";
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.fillStyle = "#7221FC";
          ctx.beginPath();
          ctx.arc(hx, hy, 5, 0, TAU);
          ctx.fill();
        } else {
          ctx.fillStyle = "#A47BFF";
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(hx, hy, 4.5, 0, TAU);
          ctx.fill();
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      const bar = barRefs.current[current];
      if (bar && !reduce) {
        const q = dragging ? null : clamp((t - hold.start) / (hold.end - hold.start), 0, 1);
        if (q !== null) bar.style.transform = `scaleX(${q})`;
      }
    }

    function tick(t) {
      frame = 0;
      if (!visible || !size) return;
      if (frameGap && t - last < frameGap) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const dt = last ? Math.min(64, t - last) : 16.7;
      last = t;
      refreshDaylight();
      update(t, dt);
      draw(t);
      // With reduced motion, only draw while something is actually moving.
      const moving = dragging || tween || arc || Math.abs(velocity) > 0.0004;
      if (!reduce || moving) frame = requestAnimationFrame(tick);
    }

    function invalidate() {
      if (!frame && visible) {
        last = 0;
        frame = requestAnimationFrame(tick);
      }
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      if (!w || w === size) return;
      size = w;
      dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      canvas.width = canvas.height = Math.round(size * dpr);
      renderSphere();
      invalidate();
    });
    resizeObserver.observe(wrap);

    // Stops the loop entirely when the globe is off-screen or its tab is hidden.
    const visibleObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        // Restart the current hold so the tour doesn't jump on return.
        const now = performance.now();
        if (!tween) hold = { start: now, end: now + HOLD };
        invalidate();
      }
    });
    visibleObserver.observe(wrap);

    function onPointerDown(event) {
      dragging = true;
      tween = null;
      arc = null;
      velocity = 0;
      lastPointer = { x: event.clientX, y: event.clientY, t: event.timeStamp };
      wrap.setPointerCapture(event.pointerId);
      invalidate();
    }

    function onPointerMove(event) {
      if (!dragging) return;
      const k = 180 / wrap.clientWidth;
      const dx = event.clientX - lastPointer.x;
      const dy = event.clientY - lastPointer.y;
      const dt = Math.max(1, event.timeStamp - lastPointer.t);
      view.lon -= dx * k;
      view.lat = clamp(view.lat + dy * k, -LAT_LIMIT, LAT_LIMIT);
      velocity = velocity * 0.6 + ((-dx * k) / dt) * 0.4;
      lastPointer = { x: event.clientX, y: event.clientY, t: event.timeStamp };
    }

    function onPointerUp() {
      if (!dragging) return;
      dragging = false;
      const now = performance.now();
      hold = { start: now, end: now + HOLD };
      invalidate();
    }

    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerup", onPointerUp);
    wrap.addEventListener("pointercancel", onPointerUp);

    focus(0, false);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibleObserver.disconnect();
      wrap.removeEventListener("pointerdown", onPointerDown);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerup", onPointerUp);
      wrap.removeEventListener("pointercancel", onPointerUp);
      focusRef.current = null;
    };
  }, []);

  const country = COUNTRIES[active];
  const isYou = country.tz === localTz;

  return (
    <div className="grid items-center gap-8 overflow-hidden rounded-[24px] border border-black/10 bg-white px-5 pb-8 pt-6 md:rounded-[32px] md:p-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6">
      <div
        ref={wrapRef}
        className="relative mx-auto aspect-square w-full max-w-[540px] cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Globe showing our client countries: USA, UK, UAE and Australia"
          className="absolute inset-0 size-full"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <div className="flex min-h-[150px] flex-col items-center gap-2.5 lg:items-start">
          <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
            {String(active + 1).padStart(2, "0")} / {String(COUNTRIES.length).padStart(2, "0")}
          </span>
          <div key={active} className="flex flex-col items-center gap-2.5 motion-safe:animate-swap lg:items-start">
            <span
              className="text-[clamp(44px,5.4vw,72px)] font-[700] leading-[0.95] tracking-[-0.04em]"
              style={display}
            >
              {country.name}
            </span>
            <span className="flex items-center gap-2.5 text-[28px] font-[700] tabular-nums tracking-[-0.02em]" style={display}>
              <SkyIcon country={country} minute={minute} className="size-5" />
              {timeIn(country.tz, minute)}
              <span className="text-[15px] font-[600] tracking-normal text-[#4a4752]">{zoneLabel(country, minute)}</span>
            </span>
            {isYou && <YouBadge className="px-2.5 py-1.5 text-[11px] uppercase tracking-[0.1em]" />}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
          {COUNTRIES.map((c, i) => (
            <button
              key={c.tz}
              type="button"
              aria-pressed={i === active}
              onClick={() => focusRef.current?.(i, true)}
              className="relative min-h-11 overflow-hidden rounded-full border-2 border-black bg-white px-4 font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-black transition-[background-color,color,translate] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aria-pressed:bg-black aria-pressed:text-white"
            >
              {c.name}
              <span
                ref={(el) => {
                  barRefs.current[i] = el;
                }}
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-primary"
                style={{ transform: "scaleX(0)" }}
              />
            </button>
          ))}
        </div>
        <span className="text-[13px] text-[#4a4752]">Drag the globe, or pick a country.</span>
      </div>
    </div>
  );
}
