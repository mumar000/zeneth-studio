"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function Callout({ children, className, reducedMotion }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease }}
      className={`flex items-start gap-3 rounded-[10px] bg-[#222] px-3 py-3 text-[14px] leading-[1.25] tracking-[0.03em] text-white 2xl:absolute 2xl:w-[11.51vw] 2xl:px-[0.68vw] 2xl:py-[0.63vw] 2xl:text-[0.729vw] ${className}`}
    >
      <span className="mt-[3px] size-2 shrink-0 rounded-full bg-white" />
      <span>{children}</span>
    </motion.div>
  );
}

export default function Miracle() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="miracle-heading"
      data-node-id="166:69"
      className="relative isolate overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:aspect-[1920/1388] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease }}
        className="relative z-10 mx-auto max-w-[1602px] 2xl:contents"
      >
        <p className="text-[18px] uppercase leading-[1.4] tracking-[0.03em] text-black/60 sm:text-[24px] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[11.146vw] 2xl:text-[1.25vw]">
          05 / The Miracle
        </p>
        <h2 id="miracle-heading" className="mt-7 max-w-[700px] text-[clamp(42px,5.4vw,64px)] leading-[1.1] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[14.792vw] 2xl:mt-0 2xl:w-[34.64vw] 2xl:text-[3.333vw]">
          Hundreds of floorplans.
          <br />
          Zero full rewrite.
        </h2>
        <p className="mt-8 max-w-[620px] text-[20px] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[24.583vw] 2xl:mt-0 2xl:w-[30.47vw] 2xl:text-[1.25vw]">
          The previous site stored floorplan features as old bracketed tab code inside property descriptions. Re-entering every listing was the wall that stopped the first team.
          <br /><br />
          A custom parser read those old tabs and transformed them into a modern button experience. Structured ACF pricing remained intact. Attached media became the gallery automatically.
        </p>
        <div className="mt-14 max-w-[600px] border-t border-black pt-7 2xl:absolute 2xl:left-[8.49vw] 2xl:top-[47.031vw] 2xl:mt-0 2xl:w-[28.958vw] 2xl:pt-[1.25vw]">
          <blockquote className="text-[20px] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:text-[1.25vw]">
            “Brilliant idea on parsing those short codes.”
          </blockquote>
        </div>
      </motion.div>

      <motion.figure
        initial={reducedMotion ? false : { opacity: 0, y: 30, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease }}
        className="relative mx-auto mt-16 max-w-[811px] overflow-hidden rounded-[15px] border-[5px] border-black/10 2xl:absolute 2xl:left-[48.698vw] 2xl:top-[8.646vw] 2xl:mt-0 2xl:w-[42.24vw]"
      >
        <Image src="/works/arpm/miracle/property-detail.png" alt="ARPM property detail showing recovered floorplan controls and gallery" width={3292} height={4336} quality={100} className="block h-auto w-full" sizes="(min-width: 1536px) 42.24vw, 811px" />
      </motion.figure>

      <Callout reducedMotion={reducedMotion} className="mt-5 2xl:left-[85vw] 2xl:top-[18.438vw] 2xl:mt-0">Attached galleries recovered automatically</Callout>
      <Callout reducedMotion={reducedMotion} className="mt-5 2xl:left-[42.917vw] 2xl:top-[30.938vw] 2xl:mt-0">Legacy tabs parsed into clean floorplan controls</Callout>
      <Callout reducedMotion={reducedMotion} className="mt-5 2xl:left-[83.698vw] 2xl:top-[50.052vw] 2xl:mt-0">Existing application and payment flow preserved</Callout>
    </section>
  );
}
