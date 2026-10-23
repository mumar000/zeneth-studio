"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Reveal from "@/components/reveal";
import { testimonials } from "@/lib/testimonials";

const byId = Object.fromEntries(testimonials.map((t) => [t.id, t]));

const videos = {
  voyager: {
    type: "video",
    id: "voyager",
    name: "Voyager Supplements",
    src: "/testimonial-1-web.mp4",
    poster: "/testimonials/voyager-poster.webp",
    logo: { src: "/voyager-supplements-logo.png", alt: "Voyager Supplements" },
  },
  jack: {
    type: "video",
    id: "jack-patel",
    name: "Jack Patel",
    src: "/jack-patel-testimonial.mp4",
    poster: "/testimonials/jack-patel-poster.webp",
  },
};

const quote = (id) => ({ type: "quote", ...byId[id] });

const items = [
  videos.voyager,
  quote("evan-jones"),
  quote("lauren-kuhn"),
  videos.jack,
  quote("max-kolb"),
  quote("bienvinido-onia"),
  quote("drew-ayasse"),
  quote("darcey-self"),
];

const display = { fontFamily: "var(--font-display)" };
const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";
// Track padding lines the first card up with the 1200px header column.
const edge = "sm:px-[max(1.5rem,calc((100%-1200px)/2+1.5rem))] sm:scroll-px-[max(1.5rem,calc((100%-1200px)/2+1.5rem))]";
// Clearance for the fixed navbar when the section pins.
const NAV_CLEARANCE = 96;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

function QuoteCard({ t }) {
  const [open, setOpen] = useState(false);
  const fullId = `review-${t.id}`;

  return (
    <figure
      className={`flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 transition-[translate,box-shadow,border-color] duration-300 ${ease} hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_20px_40px_-20px_rgba(28,16,48,0.28)] sm:p-7`}
    >
      <div className="relative min-h-0 flex-1">
        <blockquote hidden={open}>
          <p className="text-[20px] font-[500] leading-[1.3] tracking-[-0.015em] text-[#1a1a1a] sm:text-[22px]" style={display}>
            &ldquo;{t.pullQuote}&rdquo;
          </p>
        </blockquote>
        {/* Full review scrolls inside the card, so the row never changes height. */}
        <blockquote
          id={fullId}
          hidden={!open}
          data-lenis-prevent
          tabIndex={open ? 0 : -1}
          className="absolute inset-0 overflow-y-auto overscroll-contain pb-8 pr-2 text-[15px] leading-[1.6] text-[#4a4752] [mask-image:linear-gradient(to_bottom,#000_80%,transparent)] focus-visible:outline-none motion-safe:animate-swap"
        >
          <p>&ldquo;{t.quote}&rdquo;</p>
        </blockquote>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={fullId}
        onClick={() => setOpen((value) => !value)}
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start font-mono text-[11px] font-[700] uppercase leading-none tracking-[0.14em] text-primary decoration-2 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {open ? "Show less" : "Read full review"}
      </button>

      <figcaption className="mt-3 flex items-center gap-3 border-t border-black/10 pt-5">
        {t.avatar ? (
          <Image src={t.avatar} alt="" width={44} height={44} sizes="44px" className="size-11 flex-none rounded-full object-cover" />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-11 flex-none place-items-center rounded-full bg-[#efe6ff] font-mono text-[14px] font-[700] text-[#4b12b0]"
          >
            {initials(t.name)}
          </span>
        )}
        <span className="min-w-0">
          <span className="block text-[15px] font-[700] leading-tight text-[#1a1a1a]">{t.name}</span>
          <span className="mt-0.5 block text-[13px] leading-snug text-[#4a4752]">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function VideoCard({ item, playing, onPlay, onStop }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  // Pause when another story starts or this card scrolls out of view.
  useEffect(() => {
    const video = videoRef.current;
    if (!playing) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(([entry]) => !entry.isIntersecting && onStop(item.id), {
      threshold: 0.25,
    });
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [playing, item.id, onStop]);

  function play() {
    const video = videoRef.current;
    video.muted = false;
    // Called inside the click so mobile browsers allow sound.
    video.play().catch(() => {});
    onPlay(item.id);
  }

  return (
    <div
      ref={cardRef}
      className={`group relative h-full overflow-hidden rounded-3xl border border-black bg-black text-white transition-[translate,box-shadow] duration-300 ${ease} hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(28,16,48,0.45)]`}
    >
      {/* preload="none": nothing downloads until someone presses play. */}
      <video
        ref={videoRef}
        src={item.src}
        preload="none"
        playsInline
        controls={playing}
        onEnded={() => onStop(item.id)}
        aria-label={`${item.name} client story`}
        className={`absolute inset-0 size-full object-contain ${playing ? "" : "invisible"}`}
      />

      {!playing && (
        <>
          <Image
            src={item.poster}
            alt=""
            fill
            sizes="(max-width: 639px) 82vw, 320px"
            className={`object-cover transition-transform duration-700 ${ease} group-hover:scale-[1.04]`}
          />
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent from-45% to-black/75 p-[22px]">
            {item.logo ? (
              <span className="self-start rounded-[10px] bg-black/60 px-3 py-2">
                <Image src={item.logo.src} alt={item.logo.alt} width={120} height={26} className="h-[26px] w-auto" />
              </span>
            ) : (
              <span />
            )}
            <button
              type="button"
              onClick={play}
              aria-label={`Play ${item.name} client story`}
              className="grid size-[72px] place-items-center self-center rounded-full border-2 border-black bg-primary text-white shadow-[4px_4px_0_#000] transition-[translate,box-shadow] duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Play className="ml-1 size-6" fill="currentColor" strokeWidth={0} aria-hidden="true" />
            </button>
            <div>
              <span className="block text-[17px] font-[700] leading-tight">{item.name}</span>
              <span className="mt-1 block font-mono text-[11px] font-[700] uppercase leading-none tracking-[0.14em] text-[#e3dceb]">
                Client story · Video
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  const railRef = useRef(null);
  const barRef = useRef(null);
  const goRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const stop = useCallback((id) => setPlayingId((current) => (current === id ? null : current)), []);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const rail = railRef.current;
    const bar = barRef.current;
    const cards = Array.from(rail.children);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const setEdgeState = (start, end) =>
      setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
    const scrollPage = (top, immediate = false) => {
      if (window.lenis) window.lenis.scrollTo(top, immediate ? { immediate: true } : { duration: 1.1 });
      else window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
    };

    /* Reduced motion: a plain sideways scroller, no pinning. */
    if (reduce) {
      const measure = () => {
        frame = 0;
        const max = track.scrollWidth - track.clientWidth;
        setEdgeState(track.scrollLeft <= 4, track.scrollLeft >= max - 4);
        bar.style.transform = `scaleX(${max > 0 ? track.scrollLeft / max : 1})`;
      };
      const onScroll = () => {
        if (!frame) frame = requestAnimationFrame(measure);
      };
      goRef.current = (dir) => {
        const x = track.scrollLeft;
        const points = cards.map((card) => card.offsetLeft);
        const target =
          dir > 0 ? (points.find((p) => p > x + 4) ?? track.scrollWidth) : ([...points].reverse().find((p) => p < x - 4) ?? 0);
        track.scrollTo({ left: target });
      };
      const resizeObserver = new ResizeObserver(onScroll);
      resizeObserver.observe(track);
      track.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        track.removeEventListener("scroll", onScroll);
      };
    }

    /* Pinned: the section sticks while vertical scroll drives the rail sideways.
       Scroll position maps 1:1 to rail position, so Lenis supplies the smoothing. */
    section.dataset.mode = "pinned";
    let distance = 0;
    let stickyTop = NAV_CLEARANCE;
    let visibleWidth = 0;
    let offsets = [];
    let widths = [];
    let lastX = -1;

    function layout() {
      const style = getComputedStyle(track);
      visibleWidth = track.clientWidth - (parseFloat(style.paddingLeft) || 0) - (parseFloat(style.paddingRight) || 0);
      offsets = cards.map((card) => card.offsetLeft);
      widths = cards.map((card) => card.offsetWidth);
      distance = Math.max(0, rail.offsetWidth - visibleWidth);
      const height = sticky.offsetHeight;
      stickyTop = Math.max(NAV_CLEARANCE, (window.innerHeight - height) / 2);
      sticky.style.top = `${stickyTop}px`;
      section.style.height = `${height + distance}px`;
      lastX = -1;
      update();
    }

    // How far the rail has travelled, from the section's position on screen.
    const currentX = () => clamp(stickyTop - section.getBoundingClientRect().top, 0, distance);

    function update() {
      frame = 0;
      const x = Math.round(currentX() * 10) / 10;
      if (x === lastX) return;
      lastX = x;
      const progress = distance ? x / distance : 1;
      rail.style.transform = `translate3d(${-x}px,0,0)`;
      bar.style.transform = `scaleX(${progress})`;

      // Cards are dealt in from the right edge: they rise and straighten as they enter.
      const zone = visibleWidth * 0.32;
      for (let i = 0; i < cards.length; i++) {
        const enter = clamp((visibleWidth - (offsets[i] - x)) / zone, 0, 1);
        const rest = 1 - enter;
        const card = cards[i].firstElementChild;
        if (rest > 0.001) {
          card.style.transform = `translate3d(0,${(rest * 44).toFixed(1)}px,0) rotate(${(rest * 4).toFixed(2)}deg)`;
          card.style.opacity = (0.25 + 0.75 * enter).toFixed(3);
        } else if (card.style.transform) {
          card.style.transform = "";
          card.style.opacity = "";
        }
      }
      setEdgeState(progress <= 0.002, progress >= 0.998);
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    let layoutFrame = 0;
    const onResize = () => {
      cancelAnimationFrame(layoutFrame);
      layoutFrame = requestAnimationFrame(layout);
    };

    goRef.current = (dir) => {
      const x = currentX();
      let target =
        dir > 0 ? (offsets.find((o) => o > x + 4) ?? distance) : ([...offsets].reverse().find((o) => o < x - 4) ?? 0);
      target = clamp(target, 0, distance);
      const pinStart = window.scrollY + section.getBoundingClientRect().top - stickyTop;
      scrollPage(pinStart + target);
    };

    // Keyboard focus on an off-screen card scrolls the page to bring it in.
    function onFocusIn(event) {
      const i = cards.findIndex((card) => card.contains(event.target));
      if (i < 0) return;
      const left = offsets[i] - currentX();
      if (left >= 0 && left + widths[i] <= visibleWidth) return;
      const pinStart = window.scrollY + section.getBoundingClientRect().top - stickyTop;
      scrollPage(pinStart + clamp(offsets[i], 0, distance), true);
    }

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(sticky);
    resizeObserver.observe(rail);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("focusin", onFocusIn);
    layout();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(layoutFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      track.removeEventListener("focusin", onFocusIn);
      delete section.dataset.mode;
      section.style.height = "";
      sticky.style.top = "";
      rail.style.transform = "";
      cards.forEach((card) => {
        card.firstElementChild.style.transform = "";
        card.firstElementChild.style.opacity = "";
      });
    };
  }, []);

  const arrowClass =
    "grid size-[52px] place-items-center rounded-full border-2 border-black bg-white text-black transition-[background-color,color,opacity] duration-150 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30";

  return (
    <section ref={sectionRef} aria-labelledby="testimonials-title" className="group/t relative z-10">
      <div ref={stickyRef} className="py-14 group-data-[mode=pinned]/t:sticky md:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-10">
            <div className="flex flex-col gap-3.5">
              <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
                Client testimonials
              </span>
              <h2
                id="testimonials-title"
                className="text-[clamp(34px,4.6vw,56px)] font-[700] leading-none tracking-[-0.035em] text-[#1a1a1a]"
                style={display}
              >
                What clients say
              </h2>
            </div>

            <div className="hidden gap-2.5 sm:flex">
              <button
                type="button"
                aria-label="Previous testimonials"
                disabled={edges.start}
                onClick={() => goRef.current?.(-1)}
                className={arrowClass}
              >
                <ArrowLeft className="size-5" strokeWidth={2.2} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                disabled={edges.end}
                onClick={() => goRef.current?.(1)}
                className={arrowClass}
              >
                <ArrowRight className="size-5" strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          {/* Pinned mode clips only sideways, so lifted and rotating cards are never cut off. */}
          <div
            ref={trackRef}
            role="region"
            aria-label="Client testimonials"
            className={`snap-x snap-mandatory overflow-x-auto scroll-px-4 px-4 py-2 [scrollbar-width:none] group-data-[mode=pinned]/t:snap-none group-data-[mode=pinned]/t:overflow-x-clip group-data-[mode=pinned]/t:overflow-y-visible [&::-webkit-scrollbar]:hidden ${edge}`}
          >
            <div ref={railRef} className="relative flex w-max gap-4 group-data-[mode=pinned]/t:will-change-transform">
              {items.map((item) => (
                <article
                  key={item.id}
                  aria-label={item.type === "video" ? `${item.name}, video` : `Review by ${item.name}`}
                  className="h-[360px] w-[min(82vw,340px)] flex-none snap-start sm:h-[380px] sm:w-[320px]"
                >
                  {item.type === "video" ? (
                    <VideoCard item={item} playing={playingId === item.id} onPlay={setPlayingId} onStop={stop} />
                  ) : (
                    <QuoteCard t={item} />
                  )}
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-6 max-w-[1200px] px-4 sm:px-6">
          <div aria-hidden="true" className="h-0.5 overflow-hidden rounded-full bg-black/10">
            <div ref={barRef} className="h-full origin-left bg-primary" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
