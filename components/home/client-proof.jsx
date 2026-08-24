"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FEATURED_TESTIMONIAL } from "./happy-brands";

const VIDEOS = [
  { id: 1, src: "/testimonial-1-web.mp4", poster: null },
];

const STEPS = [
  {
    number: "01",
    title: "Scope the truth",
    description:
      "We look at what exists, what's unclear, and what is hurting trust before touching the design.",
  },
  {
    number: "02",
    title: "Design the system",
    description:
      "We shape the visual direction, key pages, and reusable patterns so the whole site feels connected.",
  },
  {
    number: "03",
    title: "Build with intent",
    description:
      "We turn the approved direction into a clean live site with responsive pages, CMS/product setup, and launch support.",
  },
];

function VideoCard({ video, index, onOpen }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !video.src) return;

    if (isInView && !shouldReduceMotion) {
      videoElement.play().catch(() => {});
    } else {
      videoElement.pause();
    }
  }, [isInView, shouldReduceMotion, video.src]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-[18px] border border-black/10 bg-[#111] shadow-[0_18px_50px_rgba(20,12,35,0.16)] transition-[box-shadow,border-color] duration-300 hover:border-primary/45 hover:shadow-[0_24px_70px_rgba(114,33,252,0.2)] sm:rounded-[24px]"
    >
      <button
        type="button"
        onClick={() => onOpen(video.src)}
        aria-label="Play client testimonial video"
        className="absolute inset-0 h-full w-full cursor-pointer bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary"
      >
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute left-3 top-3 z-10 flex items-center rounded-lg border border-white/15 bg-black/35 px-2.5 py-2 shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:rounded-xl sm:px-3.5 sm:py-2.5">
          <Image
            src="/voyager-supplements-logo.png"
            alt="Voyager Supplements"
            width={500}
            height={195}
            className="h-auto w-[96px] sm:w-[128px]"
          />
        </span>
        <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 via-black/20 to-transparent px-4 pb-4 pt-16 text-left text-white sm:px-6 sm:pb-6 sm:pt-24">
          <span>
            <span
              className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-white/60"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Client story
            </span>
            <span
              className="mt-1 block text-sm font-[500] tracking-[-0.02em] sm:mt-1.5 sm:text-base"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Watch the full story
            </span>
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-colors duration-200 group-hover:bg-white group-hover:text-black sm:h-10 sm:w-10">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </span>
      </button>
    </motion.div>
  );
}

export default function ClientProof() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <>
      {/* ── CLIENT PROOF: video cards ── */}
      <section className="relative z-10 w-full px-4 py-12 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center text-[10px] font-[700] uppercase tracking-[0.18em] text-primary md:mb-14 md:text-[11px] md:tracking-[0.22em]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Client Proof
          </motion.p>

          <div className="mx-auto grid max-w-[1180px] items-stretch gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
            <div className="flex min-w-0 items-center">
              {VIDEOS.map((video, i) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={i}
                  onOpen={setActiveVideo}
                />
              ))}
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="flex min-h-[250px] flex-col justify-between rounded-[16px] border border-black bg-[#C9B8F5] p-5 sm:rounded-[20px] sm:p-6 md:min-h-[340px] md:rounded-[24px] md:p-9"
            >
              <Image
                src={FEATURED_TESTIMONIAL.logo.src}
                width={FEATURED_TESTIMONIAL.logo.w}
                height={FEATURED_TESTIMONIAL.logo.h}
                alt="Feroce"
                className="h-auto w-[112px] object-contain object-left md:w-[132px]"
              />

              <blockquote
                className="my-6 max-w-[29ch] text-[22px] font-[500] leading-[1.14] tracking-[-0.035em] text-[#171717] md:my-8 md:max-w-[27ch] md:text-[34px] md:leading-[1.08] md:tracking-[-0.045em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;{FEATURED_TESTIMONIAL.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-black/15 pt-4">
                <Image
                  src={FEATURED_TESTIMONIAL.avatar}
                  width={40}
                  height={40}
                  alt={FEATURED_TESTIMONIAL.name}
                  className="rounded-[9px] object-cover ring-1 ring-black/10"
                />
                <span className="leading-tight">
                  <span
                    className="block text-[13px] font-[700] leading-[1.2] text-[#171717] md:text-[14px]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {FEATURED_TESTIMONIAL.name}
                  </span>
                  <span
                    className="mt-0.5 block text-[11px] leading-[1.35] text-black/60 md:mt-0 md:text-[13px]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {FEATURED_TESTIMONIAL.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS: 3-column grid ── */}
      <section className="relative z-10 w-full border-y-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-black">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-start justify-center bg-[#FEFEF4] px-5 py-6 text-left md:items-center md:px-20 md:py-10 md:text-center"
            >
              <h3
                className="text-[18px] font-[500] leading-[1.15] tracking-[-0.025em] text-[#1a1a1a] md:text-[26px] md:font-[400] md:tracking-normal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number} / {step.title}
              </h3>
              <p
                className="mt-2.5 max-w-[400px] text-[13px] leading-[1.55] text-black/60 md:mt-6 md:text-[16px] md:leading-[1.3] md:text-[#3a3a3a]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Client testimonial video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveVideo(null);
            }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl sm:rounded-[28px]"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                autoFocus
                aria-label="Close client testimonial video"
                className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:top-5"
              >
                <X className="h-5 w-5" />
              </button>
              <video
                src={activeVideo}
                autoPlay
                controls
                playsInline
                className="max-h-[85vh] w-full bg-black object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
