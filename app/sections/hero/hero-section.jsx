"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection({ startAnimation = true }) {
  const letters = ["Z", "E", "N", "E", "T", "H"];
  const containerRef = useRef(null);

  // Track scroll progress specific to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Add smooth spring physics to match scrub: 1 feel (faster response)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  // Transform values for image expansion - grows with scroll
  const imageHeight = useTransform(smoothProgress, [0, 0.5], ["40vh", "100vh"]);
  const imageWidth = useTransform(smoothProgress, [0, 0.5], ["100%", "100%"]);
  const imageBorderRadius = useTransform(
    smoothProgress,
    [0, 0.5],
    ["24px", "0px"],
  );

  // 3D Perspective transforms for dramatic effect
  const rotateX = useTransform(smoothProgress, [0, 0.25, 0.5], [25, 10, 0]); // Tilt from top
  const rotateY = useTransform(smoothProgress, [0, 0.25, 0.5], [-8, -3, 0]); // Slight horizontal rotation
  const scale = useTransform(smoothProgress, [0, 0.25, 0.5], [0.7, 0.85, 1]); // Start smaller
  const translateZ = useTransform(
    smoothProgress,
    [0, 0.25, 0.5],
    [-300, -100, 0],
  ); // Depth in 3D space

  // Fade in and stay visible
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.5], [0.6, 0.85, 1]); // Fade in and stay at 1

  // Only show video while in hero section
  const videoVisibility = useTransform(scrollYProgress, (value) =>
    value < 1 ? "block" : "none",
  );

  // Container animation for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Letter animation with smooth spring
  const letterVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        mass: 0.5,
      },
    },
  };

  // Subtitle container
  const subtitleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  // Subtitle animation
  const subtitleVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full z-10 overflow-hidden bg-gradient-to-br from-black via-[#0f0a1a] to-[#0f0a1a] px-4 sm:px-6 lg:px-2"
    >
      {/* Central Mesh Gradient - Optimized for GPU */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full opacity-40 blur-[200px]"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          perspective: 1000,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full pt-8 sm:pt-12 md:pt-16 lg:pt-0">
        {/* Main ZENITH Text - Positioned at Top */}
        <div className="flex flex-col items-start justify-start w-full">
          <motion.div
            className="flex items-center justify-start w-full gap-0 sm:gap-1 md:gap-2 mb-2 sm:mb-4 md:mb-4 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-[15vw] lg:-translate-y-6 2xl:-translate-y-8  sm:text-[16vw] md:text-[18vw] lg:text-[20vw] xl:text-[25vw] font-medium leading-none text-primary tracking-widest"
                style={{
                  fontFamily: "var(--font-sora)",
                  letterSpacing: "-0.9rem",
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle Row */}
          <motion.div
            className="flex flex-col -translate-y-14 md:-translate-y-18 lg:-translate-y-20 2xl:-translate-y-26 sm:flex-row items-start sm:items-center justify-between w-full px-4 md:px-6 lg:px-4 gap-2 sm:gap-0"
            variants={subtitleContainerVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
          >
            <motion.p
              variants={subtitleVariants}
              className="text-sm sm:text-base   md:text-lg  lg:text-2xl 2xl:text-3xl  text-foreground/90 tracking-wide"
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Creative Studio
            </motion.p>
            <motion.p
              variants={subtitleVariants}
              className="text-sm sm:text-base  md:text-lg  lg:text-2xl 2xl:text-3xl  text-foreground/90 tracking-wide sm:text-right"
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              Only The Peak Nothing Less.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll-Triggered Image - Fixed position, expands with scroll */}
        <motion.div
          className="fixed bottom-0 left-1/2"
          style={{
            height: imageHeight,
            width: imageWidth,
            x: "-50%",
            perspective: "2000px",
            perspectiveOrigin: "center center",
            zIndex: 50,
            display: videoVisibility,
          }}
        >
          <motion.div
            className="overflow- w-full h-full"
            style={{
              borderRadius: imageBorderRadius,
              rotateX: rotateX,
              rotateY: rotateY,
              scale: scale,
              translateZ: translateZ,
              opacity: opacity,
              transformStyle: "preserve-3d",
              willChange: "transform",
              backfaceVisibility: "",
            }}
          >
            {/* Replace this div with your actual image */}
            <Image
              src={"/hero-image.gif"}
              alt="Hero Image"
              width={1920}
              height={1080}
              className="object-contain shadow-2xl shadow-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
