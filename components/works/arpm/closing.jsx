"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Closing() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="arpm-closing-heading"
      data-node-id="166:72"
      className="relative isolate overflow-hidden bg-[#f6f4ef] px-5 py-20 text-[#222] sm:px-8 sm:py-24 2xl:aspect-[1920/649] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
    >
      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease }}
        className="text-[14px] uppercase leading-[1.2] tracking-[0.03em] text-black/60 2xl:absolute 2xl:left-[6.042vw] 2xl:top-[6.719vw]"
      >
        Designed and developed by
        <span className="mt-2 block text-[24px] leading-[1.2] text-[#222]">Asad Rizvi</span>
      </motion.p>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8, delay: 0.08, ease }}
        className="mt-16 max-w-[900px] 2xl:absolute 2xl:left-[35.26vw] 2xl:top-[6.719vw] 2xl:mt-0 2xl:w-[59.479vw]"
      >
        <p className="inline-flex rounded-full bg-black/[0.05] px-6 py-5 text-[16px] leading-none">Associated Realty Property Management</p>
        <h2 id="arpm-closing-heading" className="mt-7 max-w-[845px] text-[clamp(42px,5.4vw,64px)] leading-[1.3] 2xl:mt-[1.563vw] 2xl:text-[3.333vw]">
          The website was the visible change. The finish was the real transformation.
        </h2>
      </motion.div>

      <motion.a
        href="https://www.arpm.com"
        target="_blank"
        rel="noreferrer"
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={reducedMotion ? undefined : { y: -3, scale: 1.02 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.16, ease }}
        className="mt-10 inline-flex items-center gap-[10px] rounded-full bg-[#870b2d] px-6 py-5 text-[16px] leading-none text-white 2xl:absolute 2xl:left-[35.26vw] 2xl:top-[26.302vw] 2xl:mt-0 2xl:px-[1.25vw] 2xl:py-[1.25vw] 2xl:text-[0.833vw]"
      >
        <span>VISIT LIVE WEBSITE</span>
        <Image src="/works/arpm/closing/arrow.svg" alt="" width={10} height={1} className="h-auto w-[10px] 2xl:w-[0.521vw]" />
      </motion.a>
    </section>
  );
}
