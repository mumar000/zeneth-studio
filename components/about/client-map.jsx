"use client";

import { useEffect, useRef } from "react";
import { GRID_H, GRID_W } from "./world-grid";
import {
  COUNTRIES,
  isDaylight,
  isLowEndDevice,
  landDots,
  mapPosition,
  prefersReducedMotion,
  sunPosition,
  useLocalTimeZone,
  useMinute,
} from "./client-data";
import TimeCard from "./time-card";

const TAU = Math.PI * 2;
const REVEAL_MS = 1600;
// land by day, land by night, client by day, client by night
const COLORS = ["#E4DCF5", "#BDAEDF", "#7221FC", "#5A14D6"];
// UK and UAE are only a few dots wide, so they get a soft glow.
const SMALL_COUNTRIES = [COUNTRIES[1], COUNTRIES[2]];

const sideClass = {
  left: "right-[22px] top-0 -translate-y-1/2",
  right: "left-[22px] top-0 -translate-y-1/2",
  top: "bottom-[22px] left-0 -translate-x-1/2",
};

const legend = [
  { label: "Our clients", color: "#7221FC" },
  { label: "Daytime now", color: "#E4DCF5" },
  { label: "Night now", color: "#BDAEDF" },
];

export default function ClientMap() {
  const minute = useMinute();
  const localTz = useLocalTimeZone();
  const cardRef = useRef(null);
  const tiltRef = useRef(null);
  const canvasRef = useRef(null);
  const minuteRef = useRef(minute);
  const redrawRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const tilt = tiltRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = prefersReducedMotion();
    const dprCap = isLowEndDevice() ? 1.5 : 2;

    const dots = landDots();
    const day = new Uint8Array(dots.length);
    let dayMinute = null;
    let width = 0;
    let dpr = 1;
    let revealStart = 0;
    let revealDone = reduce;
    let frame = 0;

    // Day/night only changes once a minute, so it's cached between frames.
    function refreshDaylight() {
      const m = minuteRef.current ?? Math.floor(Date.now() / 60000);
      if (m === dayMinute) return;
      dayMinute = m;
      const sun = sunPosition(m);
      for (let i = 0; i < dots.length; i++) day[i] = isDaylight(dots[i].lat, dots[i].lon, sun) ? 1 : 0;
    }

    function draw(t) {
      frame = 0;
      if (!width) return;
      refreshDaylight();
      const height = (width * GRID_H) / GRID_W;
      const cell = width / GRID_W;
      const radius = cell * 0.34;
      const progress = revealDone ? 2 : Math.max(0, (t - revealStart) / REVEAL_MS);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // One path and one fill per colour keeps this to four draw calls.
      for (let bucket = 0; bucket < COLORS.length; bucket++) {
        ctx.fillStyle = COLORS[bucket];
        ctx.beginPath();
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i];
          const client = d.kind > 1;
          if ((client ? 2 : 0) + (day[i] ? 0 : 1) !== bucket) continue;
          let scale = 1;
          if (!revealDone) {
            // A wave sweeps west to east and each dot grows in behind it.
            const local = Math.min(1, (progress * 1.25 - d.c / GRID_W) * 5);
            if (local <= 0) continue;
            scale = 1 - (1 - local) ** 3;
          }
          const r = radius * (client ? 1.08 : 1) * scale;
          const x = (d.c + 0.5) * cell;
          const y = (d.r + 0.5) * cell;
          ctx.moveTo(x + r, y);
          ctx.arc(x, y, r, 0, TAU);
        }
        ctx.fill();
      }

      if (progress > 0.9) {
        for (const country of SMALL_COUNTRIES) {
          const { x, y } = mapPosition(country);
          const px = (x / 100) * width;
          const py = (y / 100) * height;
          const glow = ctx.createRadialGradient(px, py, 0, px, py, cell * 5);
          glow.addColorStop(0, "rgba(114,33,252,.4)");
          glow.addColorStop(1, "rgba(114,33,252,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, cell * 5, 0, TAU);
          ctx.fill();
        }
      }

      if (!revealDone && progress >= 1.3) revealDone = true;
      if (!revealDone) frame = requestAnimationFrame(draw);
    }

    redrawRef.current = () => {
      if (revealDone && !frame) draw(0);
    };

    const resizeObserver = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (!w || w === width) return;
      width = w;
      dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(((w * GRID_H) / GRID_W) * dpr);
      if (revealDone) draw(0);
    });
    resizeObserver.observe(canvas);

    // Reveal once, the first time the card is mostly in view.
    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        revealObserver.disconnect();
        card.dataset.in = "";
        if (!revealDone) {
          revealStart = performance.now();
          frame = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.25 },
    );
    revealObserver.observe(card);

    // Pauses the pin pings while the card is off-screen.
    const visibleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) card.dataset.visible = "";
      else delete card.dataset.visible;
    });
    visibleObserver.observe(card);

    // Pointer tilt: eased in a short rAF loop that stops as soon as it settles.
    let tiltFrame = 0;
    let targetX = 0;
    let targetY = 0;
    let rotX = 0;
    let rotY = 0;

    function stepTilt() {
      rotX += (targetX - rotX) * 0.1;
      rotY += (targetY - rotY) * 0.1;
      if (Math.abs(targetX - rotX) + Math.abs(targetY - rotY) < 0.01) {
        rotX = targetX;
        rotY = targetY;
        tilt.style.transform = rotX || rotY ? `rotateX(${rotX}deg) rotateY(${rotY}deg)` : "";
        tiltFrame = 0;
        return;
      }
      tilt.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      tiltFrame = requestAnimationFrame(stepTilt);
    }

    function onPointerMove(event) {
      const rect = card.getBoundingClientRect();
      targetX = (0.5 - (event.clientY - rect.top) / rect.height) * 7;
      targetY = ((event.clientX - rect.left) / rect.width - 0.5) * 9;
      if (!tiltFrame) tiltFrame = requestAnimationFrame(stepTilt);
    }

    function onPointerLeave() {
      targetX = 0;
      targetY = 0;
      if (!tiltFrame) tiltFrame = requestAnimationFrame(stepTilt);
    }

    const canTilt = !reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canTilt) {
      card.addEventListener("pointermove", onPointerMove, { passive: true });
      card.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(tiltFrame);
      resizeObserver.disconnect();
      revealObserver.disconnect();
      visibleObserver.disconnect();
      card.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("pointerleave", onPointerLeave);
      redrawRef.current = null;
    };
  }, []);

  // Repaint day and night when the minute ticks over.
  useEffect(() => {
    minuteRef.current = minute;
    redrawRef.current?.();
  }, [minute]);

  return (
    <div
      ref={cardRef}
      className="group/map relative overflow-hidden rounded-[24px] border border-black/10 bg-white px-3.5 pb-[18px] pt-7 [perspective:1600px] md:rounded-[32px] md:px-6 md:pb-10 md:pt-[72px] lg:px-10 lg:pb-12"
    >
      <div className="mx-auto max-w-[1060px] origin-bottom transform-3d transition-[transform,opacity] duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] js:motion-safe:not-group-data-[in]/map:opacity-0 js:motion-safe:not-group-data-[in]/map:[transform:rotateX(32deg)_translate3d(0,40px,-80px)]">
        <div ref={tiltRef} className="relative transform-3d">
          <canvas ref={canvasRef} aria-hidden="true" className="block aspect-[180/70] w-full" />

          <div className="absolute inset-0 transform-3d">
            {COUNTRIES.map((country, i) => {
              const { x, y } = mapPosition(country);
              return (
                <div
                  key={country.tz}
                  className="absolute size-0 transform-3d"
                  style={{ left: `${x}%`, top: `${y}%`, "--d": `${0.5 + i * 0.25}s` }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[7px] -top-[7px] size-3.5 translate-z-3.5 rounded-full border-2 border-white bg-primary shadow-[0_0_0_1.5px_#7221fc,0_6px_14px_rgba(114,33,252,0.4)] transition-[scale] delay-(--d) duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] after:absolute after:-inset-[3px] after:rounded-full after:border-2 after:border-primary after:opacity-0 after:content-[''] md:-left-[9px] md:-top-[9px] md:size-[18px] md:border-[3px] js:motion-safe:not-group-data-[in]/map:scale-0 motion-safe:group-data-[in]/map:after:animate-pin-ping motion-safe:not-group-data-[visible]/map:after:[animation-play-state:paused]"
                  />
                  <TimeCard
                    country={country}
                    minute={minute}
                    isYou={country.tz === localTz}
                    className={`absolute hidden whitespace-nowrap shadow-[4px_4px_0_#000] md:flex ${sideClass[country.side]} translate-z-10 transition-[opacity,translate] delay-[calc(var(--d)+0.2s)] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:scale-[0.85] js:motion-safe:not-group-data-[in]/map:translate-z-0 js:motion-safe:not-group-data-[in]/map:opacity-0`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-[22px] flex flex-wrap justify-center gap-x-[22px] gap-y-3 text-[13px] font-[600] text-[#4a4752]"
      >
        {legend.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-2">
            <i className="inline-block size-2.5 rounded-full" style={{ background: item.color }} />
            {item.label}
          </span>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-2.5 md:hidden">
        {COUNTRIES.map((country) => (
          <li key={country.tz}>
            <TimeCard country={country} minute={minute} isYou={country.tz === localTz} className="flex h-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
