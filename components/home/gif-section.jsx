"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import OptimizedMedia from "@/components/optimized-media";

export default function GifSection() {
  const sectionRef = useRef(null);
  const [reduceAnimations, setReduceAnimations] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Check for reduced motion preference and low-end devices
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Detect low-end device
    const isLowEnd =
      (navigator.deviceMemory && navigator.deviceMemory < 4) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);

    setReduceAnimations(prefersReducedMotion || isLowEnd);
  }, []);

  // Smooth spring for buttery control (only if animations enabled)
  const smooth = useSpring(scrollYProgress, {
    stiffness: reduceAnimations ? 300 : 180,
    damping: reduceAnimations ? 30 : 26,
    restDelta: 0.001,
  });

  // Elegantly subtle transforms (reduced on low-end devices)
  const scale = useTransform(
    smooth,
    [0, 0.5, 1],
    reduceAnimations ? [1, 1, 1] : [0.98, 1.03, 1.0],
  );
  const opacity = useTransform(smooth, [0, 0.12], [0, 1]);
  const y = useTransform(smooth, [0, 1], reduceAnimations ? [0, 0] : [24, -24]);
  const radius = useTransform(
    smooth,
    [0, 0.3, 1],
    reduceAnimations ? [0, 0, 0] : [24, 12, 0],
  );
  const glowOpacity = useTransform(
    smooth,
    [0, 0.3, 1],
    reduceAnimations ? [0, 0, 0] : [0, 0.25, 0.35],
  );
  const overlayOpacity = useTransform(smooth, [0, 1], [0.25, 0.08]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen"
      aria-label="Featured showcase"
    >
      {/* Sticky viewport with full-screen cover */}
      <motion.div className="sticky top-0 h-screen" style={{ opacity }}>
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={{
            scale,
            y,
            borderRadius: radius,
            willChange: reduceAnimations ? "auto" : "transform",
          }}
        >
          {/* Soft radial glow (disabled on low-end) */}
          {!reduceAnimations && (
            <motion.div
              className="absolute inset-0"
              style={{ opacity: glowOpacity }}
            >
              <div className="absolute -inset-24 rounded-full blur-[140px] bg-primary/30" />
            </motion.div>
          )}

          {/* Optimized media with device detection */}
          <OptimizedMedia
            gifSrc="/hero-image.gif"
            fallbackSrc="/hero-image.gif"
            alt="Showcase animation"
            fill={true}
            sizes="100vw"
            priority={false}
            objectFit="cover"
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
