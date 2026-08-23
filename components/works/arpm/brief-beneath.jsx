"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function BriefBeneath() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="brief-beneath-heading"
      className="relative mt-px overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:aspect-[1920/1573] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:64"
    >
      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.65, ease }}
        className="text-center text-[16px] font-[400] leading-none 2xl:absolute 2xl:left-1/2 2xl:top-[4.895vw] 2xl:-translate-x-1/2"
      >
        The brief beneath the brief
      </motion.p>

      <motion.blockquote
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.85, delay: 0.08, ease }}
        className="mx-auto mt-9 max-w-[1109px] text-center text-[clamp(34px,5.4vw,64px)] font-[400] leading-[1.2] 2xl:absolute 2xl:left-1/2 2xl:top-[7.292vw] 2xl:mt-0 2xl:w-[57.76vw] 2xl:-translate-x-1/2 2xl:text-[3.333vw]"
      >
        “After attempting to do this with two other dev teams and failing, you
        made it happen for us and it’s brilliant.”
      </motion.blockquote>

      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, delay: 0.22 }}
        className="mt-7 text-center text-[14px] font-[400] uppercase leading-none 2xl:absolute 2xl:left-1/2 2xl:top-[20.885vw] 2xl:mt-0 2xl:-translate-x-1/2 2xl:text-[0.833vw]"
      >
        ARPM project team
      </motion.p>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 48, scale: 0.975 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.12, ease }}
        className="relative mx-auto mt-12 aspect-[1080/912] w-[min(118%,1080px)] 2xl:absolute 2xl:left-[21.875vw] 2xl:top-[23.281vw] 2xl:mt-0 2xl:w-[56.25vw]"
        data-node-id="52:358"
      >
        <Image
          src="/works/arpm/brief-beneath/mac-studio-4x.png"
          alt="The redesigned ARPM property search displayed on a Mac Studio monitor"
          fill
          quality={100}
          sizes="(min-width: 1536px) 56.25vw, 1080px"
          className="object-contain"
        />
        <span
          aria-hidden="true"
          className="absolute left-[4%] top-[61%] text-[16px] font-[400] text-white sm:text-[20px] 2xl:left-[-1.302vw] 2xl:top-[29.792vw] 2xl:text-[1.25vw]"
        >
          01
        </span>
      </motion.div>

      <motion.h2
        id="brief-beneath-heading"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.8, ease }}
        className="mt-12 text-center text-[clamp(36px,5vw,64px)] font-[400] leading-[1.2] 2xl:absolute 2xl:left-1/2 2xl:top-[74.74vw] 2xl:mt-0 2xl:-translate-x-1/2 2xl:whitespace-nowrap 2xl:text-[3.333vw]"
      >
        Not a redesign. <span className="text-[#870b2d]">A rescue mission.</span>
      </motion.h2>
    </section>
  );
}
