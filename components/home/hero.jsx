"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useAnimationConfig } from "@/hooks/use-performance";

export default function Hero() {
  const animConfig = useAnimationConfig();

  const marqueeTexts = [
    "We design and build digital experiences",
    "for founders who care about how they're perceived.",
  ];

  // Adjust this delay to match exactly when your loader shutter finishes
  const INITIAL_DELAY = animConfig.enabled ? 2.2 : 0.5;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animConfig.enabled ? 0.2 : 0.1,
        delayChildren: INITIAL_DELAY,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: animConfig.enabled ? 100 : 20,
      opacity: 0,
      filter: animConfig.useBlur ? "blur(20px)" : "blur(0px)",
      rotateX: animConfig.useComplexTransforms ? 20 : 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        type: "tween",
        duration: 1.2 * animConfig.durationMultiplier,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const marqueeVariants = {
    hidden: { y: animConfig.enabled ? "100%" : "0%" },
    visible: {
      y: "0%",
      transition: {
        duration: 1.5 * animConfig.durationMultiplier,
        ease: [0.22, 1, 0.36, 1],
        delay: INITIAL_DELAY + (animConfig.enabled ? 0.6 : 0),
      },
    },
  };

  return (
    <section className="relative w-full min-h-[78vh] sm:min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      <motion.div
        className="max-w-7xl w-full mx-auto perspective-1000"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="leading-[0.95] tracking-[-0.05em] text-4xl sm:text-6xl md:text-[7vw] lg:text-[5vw] font-[500] text-black"
          style={{
            fontFamily: "var(--font-sora)",
            willChange: animConfig.useWillChange ? "transform, opacity" : "auto",
          }}
        >
          <span className="italic font-romie  text-primary">Design</span> that
          makes <br className="hidden md:block" />
          brands look{" "}
          <span className="italic font-romie text-primary">serious.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-5 sm:mt-7 md:mt-10 text-sm sm:text-base md:text-xl font-[400] text-neutral-800"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Brand, product, web, and systems done properly.
        </motion.p>
      </motion.div>

      {/* Bottom marquee/ticker using react-fast-marquee */}
      <motion.div
        className="absolute bottom-0 left-0 right-0  bg-white/70 backdrop-blur-sm"
        variants={marqueeVariants}
        initial="hidden"
        animate="visible"
      >
        <Marquee
          gradient={false}
          speed={animConfig.enabled ? 90 : 60}
          pauseOnHover={false}
          className="py-2 sm:py-3 md:py-4"
        >
          <div className="flex items-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <React.Fragment key={i}>
                <span
                  className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black text-white text-sm sm:text-base md:text-lg font-[400] tracking-wide mr-6 sm:mr-10 md:mr-12"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  ZENETH STUDIO
                </span>
                <span
                  className="inline-flex items-center justify-center text-sm sm:text-base md:text-lg text-black/80 mr-6 sm:mr-10 md:mr-12"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {marqueeTexts[i % marqueeTexts.length]}
                </span>
              </React.Fragment>
            ))}
          </div>
        </Marquee>
      </motion.div>
    </section>
  );
}
