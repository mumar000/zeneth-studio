"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Maximize2, X } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    src: "/testimonial-1-web.mp4",
    poster: null,
    name: "Voyager Supplements",
    logo: {
      src: "/voyager-supplements-logo.png",
      alt: "Voyager Supplements",
    },
  },
  {
    id: 2,
    src: "/jack-patel-testimonial.mp4",
    poster: null,
    name: "Jack Patel",
  },
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
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const isInView = useInView(cardRef, { amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, { stiffness: 420, damping: 34 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !video.src) return;

    if (isInView && !shouldReduceMotion) {
      videoElement.play().catch(() => {});
    } else {
      videoElement.pause();
    }
  }, [isInView, shouldReduceMotion, video.src]);

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const coordinateScaleX = card.offsetWidth / bounds.width;
    const coordinateScaleY = card.offsetHeight / bounds.height;
    cursorX.set((event.clientX - bounds.left) * coordinateScaleX);
    cursorY.set((event.clientY - bounds.top) * coordinateScaleY);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      onPointerMove={handlePointerMove}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setIsCursorVisible(true);
      }}
      onPointerLeave={() => setIsCursorVisible(false)}
      className="group relative mx-auto aspect-[3/4] w-full max-w-[300px] cursor-pointer overflow-hidden rounded-[22px] border border-black/10 bg-[#111] shadow-[0_18px_50px_rgba(20,12,35,0.16)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_24px_70px_rgba(114,33,252,0.2)] sm:aspect-[9/16] sm:max-w-[390px] sm:rounded-[32px] md:cursor-none"
    >
      <button
        type="button"
        onClick={() => onOpen(video.src)}
        aria-label={`Play ${video.name} testimonial video`}
        className="absolute inset-0 h-full w-full cursor-pointer bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary md:cursor-none"
      >
        <video
          ref={videoRef}
          src={isInView ? video.src : undefined}
          poster={video.poster}
          muted
          loop
          playsInline
          preload={isInView ? "metadata" : "none"}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {video.logo && (
          <span className="pointer-events-none absolute left-3 top-3 z-10 flex items-center rounded-lg border border-white/15 bg-black/35 px-2.5 py-2 shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:rounded-xl sm:px-3.5 sm:py-2.5">
            <Image
              src={video.logo.src}
              alt={video.logo.alt}
              width={500}
              height={195}
              className="h-auto w-[82px] sm:w-[128px]"
            />
          </span>
        )}
        <AnimatePresence>
          {isCursorVisible && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-30 hidden md:block"
              style={{ x: cursorXSpring, y: cursorYSpring }}
              initial={{ opacity: 0, scale: 0.72 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.72 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-black/10 bg-white/95 px-4 py-3 text-[11px] font-[600] uppercase tracking-[0.11em] text-black shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <Maximize2 className="h-4 w-4" strokeWidth={1.7} />
                Expand video
              </span>
            </motion.span>
          )}
        </AnimatePresence>
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
              {video.name}
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
      <section className="relative z-10 w-full px-4 py-8 sm:px-6 md:px-10 md:py-14">
        <div className="mx-auto max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-center text-[10px] font-[700] uppercase tracking-[0.18em] text-primary md:mb-4 md:text-[11px] md:tracking-[0.22em]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Client Proof
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
            className="mx-auto mb-6 max-w-[900px] text-center text-[32px] font-[500] leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-[42px] md:mb-10 md:text-[56px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Listen to the stories behind the work.
          </motion.h2>

          <div className="mx-auto grid max-w-[860px] grid-cols-1 items-stretch justify-items-center gap-5 sm:grid-cols-2 sm:gap-6">
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
