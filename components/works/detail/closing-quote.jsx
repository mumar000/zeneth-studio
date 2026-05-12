"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ClosingQuote({ text, accent, bg }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Accent bar stretches in from 0 width to full
  const barScale = useTransform(scrollYProgress, [0.05, 0.6], [0, 1]);
  // Text reveals upward
  const textY = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.55], [0, 1]);
  // Subtle parallax for depth
  const innerY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-10">
      <div
        className="relative rounded-3xl overflow-hidden min-h-[60vh] flex items-start p-8 md:p-16 lg:p-24"
        style={{ backgroundColor: bg || "#15171c" }}
      >
        <motion.div
          style={{ scaleX: barScale, backgroundColor: accent || "#F59E0B" }}
          className="absolute left-8 md:left-16 lg:left-24 top-[42%] w-32 md:w-44 h-3 rounded-full origin-left will-change-transform"
        />

        <motion.h2
          style={{ y: textY, opacity: textOpacity }}
          className="relative ml-auto max-w-[60%] text-3xl md:text-5xl lg:text-6xl font-[400] leading-tight tracking-tight text-white/40 will-change-transform"
        >
          {text}
        </motion.h2>

        <motion.div
          style={{ y: innerY }}
          className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="w-full h-full rounded-full"
            style={{ backgroundColor: accent || "#F59E0B" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
