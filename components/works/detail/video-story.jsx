"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export default function VideoStory({ src, poster, eyebrow, title, accent }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && !shouldReduceMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-6 md:px-12 lg:pl-24 lg:pr-12"
    >
      <div className="relative aspect-video overflow-hidden rounded-3xl bg-black shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between bg-gradient-to-b from-black/75 via-black/20 to-transparent px-6 pb-20 pt-6 text-white md:px-10 md:pt-9">
          <div>
            <p
              className="text-[10px] font-[700] uppercase tracking-[0.22em]"
              style={{ color: accent, fontFamily: "var(--font-mono)" }}
            >
              {eyebrow}
            </p>
            <h2
              className="mt-2 text-2xl font-[600] tracking-[-0.035em] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
