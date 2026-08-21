"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const heroEase = [0.22, 1, 0.36, 1];

export default function ArpmHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="arpm-case-study-title"
      className="relative isolate min-h-[680px] w-full overflow-hidden bg-gradient-to-b from-[#f6f4ef] to-[#ffb3c8] md:min-h-0 md:aspect-[16/9]"
      data-node-id="166:31"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: heroEase }}
        className="absolute left-1/2 top-[72px] z-20 -translate-x-1/2 rounded-full bg-white px-5 py-4 sm:px-6 sm:py-5 md:top-[5.37%] md:p-6"
        data-node-id="52:702"
      >
        <p
          className="whitespace-nowrap text-[10px] font-[400] uppercase leading-normal tracking-[-0.02em] text-[rgba(30,30,30,0.6)] sm:text-[12px] md:text-[clamp(12px,0.833vw,16px)]"
          style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
          data-node-id="52:360"
        >
          Associated Realty Property Management
        </p>
      </motion.div>

      <motion.h1
        id="arpm-case-study-title"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.28, ease: heroEase }}
        className="absolute left-1/2 top-[160px] z-20 w-[92%] -translate-x-1/2 text-center text-[clamp(30px,2.5vw,48px)] font-[500] uppercase leading-[1.2] tracking-[-0.03em] md:top-[13.333%] md:w-[630px]"
        style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
        data-node-id="52:369"
      >
        <span className="block text-[#1e1e1e]">The third team in.</span>
        <span className="block text-[#870b2d]">The first to get it live.</span>
      </motion.h1>

      <motion.p
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.05, delay: 0.42, ease: heroEase }}
        className="absolute left-[calc(50%+min(40.78125vw,783px))] top-[72%] z-0 -translate-x-1/2 whitespace-nowrap text-center text-[clamp(132px,19.134vw,367.377px)] font-[500] uppercase leading-[1.2] tracking-[-0.03em] text-white md:top-[66.852%]"
        style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
        data-node-id="67:41"
      >
        Associated Realty Property Management
      </motion.p>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 70, scale: 0.965 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.15, delay: 0.32, ease: heroEase }}
        className="absolute bottom-[-1px] left-1/2 z-10 w-[165%] -translate-x-1/2 sm:w-[138%] md:bottom-auto md:top-[28.611%] md:h-[71.389%] md:w-[66.042%]"
        data-node-id="63:31"
      >
        <Image
          src="/works/arpm/hero/ipad-hands-4x.png"
          alt="Hands holding an iPad displaying the redesigned Associated Realty Property Management website"
          width={5072}
          height={3084}
          priority
          quality={100}
          sizes="(min-width: 768px) 67vw, 165vw"
          className="h-auto w-full md:h-full"
        />
      </motion.div>
    </section>
  );
}
