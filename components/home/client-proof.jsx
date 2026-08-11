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

const VIDEOS = [
  { id: 1, src: "/testimonial-1-web.mp4", poster: null },
  { id: 2, src: null, poster: null },
  { id: 3, src: null, poster: null },
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
      className={`group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[24px] bg-[#111] transition-[box-shadow,border-color] duration-300 ${
        video.src
          ? "border border-black/10 shadow-[0_18px_50px_rgba(20,12,35,0.16)] hover:border-[#7C3AED]/45 hover:shadow-[0_24px_70px_rgba(69,30,120,0.24)]"
          : "rounded-[18px]"
      }`}
    >
      {video.src ? (
        <button
          type="button"
          onClick={() => onOpen(video.src)}
          aria-label="Play client testimonial video"
          className="absolute inset-0 h-full w-full bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#7C3AED]"
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
          <span className="pointer-events-none absolute left-5 top-5 z-10 flex items-center rounded-xl border border-white/15 bg-black/35 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
            <Image
              src="/voyager-supplements-logo.png"
              alt="Voyager Supplements"
              width={500}
              height={195}
              className="h-auto w-[118px] sm:w-[128px]"
            />
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 via-black/20 to-transparent px-6 pb-6 pt-24 text-left text-white">
            <span>
              <span
                className="block text-[10px] font-[600] uppercase tracking-[0.2em] text-white/60"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Client story
              </span>
              <span
                className="mt-1.5 block text-base font-[500] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Watch the full story
              </span>
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-colors duration-200 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </span>
        </button>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2e2e] to-[#111111]" />
          <PlayButton />
        </>
      )}
    </motion.div>
  );
}

function PlayButton() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span className="w-[60px] h-[60px] rounded-full bg-[#7C3AED] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 4.5L18 11L7 17.5V4.5Z" fill="white" />
        </svg>
      </span>
    </span>
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
      <section className="relative z-10 w-full px-4 sm:px-6 md:px-10 py-16 md:py-24 bg-[#F0EBFB]">
        <div className="mx-auto max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-[11px] font-[600] tracking-[0.22em] uppercase text-[#7C3AED] mb-10 md:mb-14"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Client Proof
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {VIDEOS.map((video, i) => (
              <VideoCard
                key={video.id}
                video={video}
                index={i}
                onOpen={setActiveVideo}
              />
            ))}
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
              className="bg-[#FEFEF4] px-10 py-10 md:px-20 md:py-10 flex flex-col items-center justify-center text-center"
            >
              <h3
                className="text-[22px] md:text-[26px] font-[400] text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number} — {step.title}
              </h3>
              <p
                className="mt-6 text-[16px] leading-[1.3] text-[#3a3a3a] max-w-[400px]"
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
