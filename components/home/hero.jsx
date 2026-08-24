"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { useAnimationConfig } from "@/hooks/use-performance";

// Widths are pre-scaled so every logo renders at a uniform 30px height
// (no CSS dimension override => no next/image aspect-ratio warning, no CLS).
const LOGO_HEIGHT = 30;
const clientLogos = [
  { src: "/home-logo/home-logo1.png", w: 204 },
  { src: "/home-logo/home-logo2.png", w: 100 },
  { src: "/home-logo/home-logo3.png", w: 150 },
  { src: "/home-logo/home-logo4.png", w: 116 },
  { src: "/home-logo/home-logo5.png", w: 100 },
  { src: "/home-logo/home-logo6.png", w: 100 },
  { src: "/home-logo/home-logo7.png", w: 100 },
  { src: "/home-logo/home-logo8.png", w: 129 },
];

export default function Hero() {
  const animConfig = useAnimationConfig();
  const marqueeRef = useRef(null);
  const marqueeInView = useInView(marqueeRef, { amount: 0.01 });

  const itemVariants = {
    hidden: {
      y: animConfig.enabled ? 32 : 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        type: "tween",
        duration: 0.75 * animConfig.durationMultiplier,
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
        delay: animConfig.enabled ? 0.2 : 0,
      },
    },
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6 md:min-h-screen md:px-8">
      <div
        className="max-w-5xl w-full mx-auto perspective-1000"
      >
        <h1
          className="leading-[1.02] tracking-[-0.03em] text-[2.75rem] 2xl:text-[5.8rem] md:text-5xl lg:text-[5.5rem] font-[700] text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your <span className="text-primary">brand</span> and website{" "}
          <br className="hidden md:block" />
          finally working as <span className="text-primary">one.</span>
        </h1>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-6 md:mt-8 md:max-w-lg 2xl:max-w-3xl lg:leading-8 text-base 2xl:text-2xl lg:text-lg md:text-md  font-[400] text-neutral-700"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Nymbor connects brand identity, interface design, and web development
          for founders and small teams that want one clear, launch-ready system.
        </motion.p>

        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="mt-9 sm:mt-11">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-7 py-3.5 text-xs sm:text-sm font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      {/* Bottom marquee with grayscale client logos */}
      <motion.div
        ref={marqueeRef}
        className="absolute bottom-0 left-0 right-0"
        variants={marqueeVariants}
        initial="hidden"
        animate="visible"
      >
        <Marquee
          play={marqueeInView}
          gradient={true}
          gradientColor="#ffffff"
          gradientWidth={64}
          speed={animConfig.enabled ? 55 : 40}
          pauseOnHover={false}
          className="py-4 sm:py-5 md:py-6"
        >
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              width={logo.w}
              height={LOGO_HEIGHT}
              alt="Client logo"
              className="mx-7 sm:mx-9 md:mx-12 object-contain opacity-80 grayscale transition-opacity"
            />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
