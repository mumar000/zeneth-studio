"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
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
// Track padding lines the first card up with the 1200px header column.
const edge = "sm:px-[max(1.5rem,calc((100%-1200px)/2+1.5rem))] sm:scroll-px-[max(1.5rem,calc((100%-1200px)/2+1.5rem))]";

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
      className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 sm:p-7"
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
          className="absolute inset-0 overflow-y-auto overscroll-contain pb-8 pr-2 text-[15px] leading-[1.6] text-[#4a4752] [mask-image:linear-gradient(to_bottom,#000_80%,transparent)] focus-visible:outline-none"
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
      className="relative h-full overflow-hidden rounded-3xl border border-black bg-black text-white"
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
            className="object-cover"
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
              className="grid size-[72px] place-items-center self-center rounded-full border-2 border-black bg-primary text-white shadow-[4px_4px_0_#000] hover:bg-[#5a14d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
  const trackRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const stop = useCallback((id) => setPlayingId((current) => (current === id ? null : current)), []);

  useEffect(() => {
    const track = trackRef.current;
    function measure() {
      const max = track.scrollWidth - track.clientWidth;
      const start = track.scrollLeft <= 4;
      const end = track.scrollLeft >= max - 4;
      setEdges((previous) =>
        previous.start === start && previous.end === end ? previous : { start, end },
      );
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    track.addEventListener("scroll", measure, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", measure);
    };
  }, []);

  function browse(direction) {
    const track = trackRef.current;
    const card = track.querySelector("article");
    track.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: "instant" });
  }

  const arrowClass =
    "grid size-[52px] place-items-center rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30";

  return (
    <section aria-labelledby="testimonials-title" className="relative z-10 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-10">
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
              aria-controls="testimonials-track"
              disabled={edges.start}
              onClick={() => browse(-1)}
              className={arrowClass}
            >
              <ArrowLeft className="size-5" strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              aria-controls="testimonials-track"
              disabled={edges.end}
              onClick={() => browse(1)}
              className={arrowClass}
            >
              <ArrowRight className="size-5" strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        id="testimonials-track"
        ref={trackRef}
        role="region"
        aria-label="Client testimonials, scroll sideways"
        tabIndex={0}
        className={`snap-x snap-mandatory overflow-x-auto scroll-px-4 px-4 pb-4 pt-1 [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary [&::-webkit-scrollbar]:hidden ${edge}`}
      >
        <div className="relative flex w-max gap-4">
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
    </section>
  );
}
