"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function GifSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for buttery control
  const smooth = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001,
  });

  // Elegantly subtle transforms
  const scale = useTransform(smooth, [0, 0.5, 1], [0.98, 1.03, 1.0]);
  const opacity = useTransform(smooth, [0, 0.12], [0, 1]);
  const y = useTransform(smooth, [0, 1], [24, -24]);
  const radius = useTransform(smooth, [0, 0.3, 1], [24, 12, 0]);
  const glowOpacity = useTransform(smooth, [0, 0.3, 1], [0, 0.25, 0.35]);
  const overlayOpacity = useTransform(smooth, [0, 1], [0.25, 0.08]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen"
      aria-label="Featured GIF"
    >
      {/* Sticky viewport with full-screen cover */}
      <motion.div className="sticky top-0 h-screen" style={{ opacity }}>
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={{ scale, y, borderRadius: radius, willChange: "transform" }}
        >
          {/* Soft radial glow */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: glowOpacity }}
          >
            <div className="absolute -inset-24 rounded-full blur-[140px] bg-primary/30" />
          </motion.div>

          {/* Full-screen GIF */}
          <Image
            src="/hero-image.gif"
            alt="Showcase animation"
            fill
            unoptimized
            sizes="100vw"
            priority={false}
            className="object-cover"
          />

          {/* Subtle top-to-bottom shading for depth */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ opacity: overlayOpacity }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.02)_35%,rgba(0,0,0,0)_60%)]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
