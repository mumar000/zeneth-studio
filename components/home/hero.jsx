"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Hero() {
  const marqueeTexts = [
    "We design and build digital experiences",
    "for founders who care about how they’re perceived.",
  ];

  // Adjust this delay to match exactly when your loader shutter finishes
  const INITIAL_DELAY = 2.5;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each element revealing
        delayChildren: INITIAL_DELAY,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      filter: "blur(20px)",
      rotateX: 20,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1], // "Luxury" ease curve
      },
    },
  };

  const marqueeVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: INITIAL_DELAY + 0.6, // Enters slightly after the text
      },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 text-center overflow-hidden">
      <motion.div
        className="max-w-7xl w-full mx-auto perspective-1000"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="leading-[0.95] tracking-[-0.05em] text-[4vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[5vw] font-[500] text-black"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          <span className="italic font-[400] text-primary">Design</span> that
          makes
          <br className="hidden md:block" />
          brands look{" "}
          <span className="italic font-[400] text-primary">serious.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 md:mt-10 text-base font-[400] sm:text-lg md:text-2xl text-neutral-800"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Brand, product, web, and systems done properly.
        </motion.p>
      </motion.div>

      {/* Bottom marquee/ticker using react-fast-marquee */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 border-y border-black/80 bg-white/70 backdrop-blur-sm"
        variants={marqueeVariants}
        initial="hidden"
        animate="visible"
      >
        <Marquee
          gradient={false}
          speed={55}
          pauseOnHover={false}
          className="py-3 md:py-4"
        >
          <div className="flex items-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <React.Fragment key={i}>
                <span
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-black text-white text-lg font-[400] tracking-wide mr-12"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  ZENETH STUDIO
                </span>
                <span
                  className="inline-flex items-center justify-center text-lg text-black/80 mr-12"
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
