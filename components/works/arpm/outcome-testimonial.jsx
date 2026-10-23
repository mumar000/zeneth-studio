"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function OutcomeTestimonial() {
  const reducedMotion = useReducedMotion();
  return (
    <section aria-labelledby="outcome-testimonial-heading" data-node-id="166:43" className="relative isolate overflow-hidden bg-[#870b2d] px-5 pt-24 text-white sm:px-8 sm:pt-28 2xl:aspect-[1920/1369] 2xl:px-0 2xl:py-0" style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}>
      <Image src="/works/arpm/search-product/house-outline-2x.png" alt="" fill aria-hidden="true" className="pointer-events-none object-cover opacity-5" sizes="100vw" />
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8, ease }} className="relative z-10">
        <p className="text-[18px] uppercase leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[9.219vw] 2xl:top-[7.13vw] 2xl:text-[1.25vw]">07 / The Outcome</p>
        <blockquote id="outcome-testimonial-heading" className="mt-7 max-w-[850px] text-[clamp(42px,5.4vw,64px)] leading-[1.1] 2xl:absolute 2xl:left-[9.219vw] 2xl:top-[11.042vw] 2xl:mt-0 2xl:w-[41.875vw] 2xl:text-[3.333vw]">“Our company president is also thrilled with how the site turned out.”</blockquote>
        <p className="mt-8 text-[20px] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[9.219vw] 2xl:top-[24.375vw] 2xl:mt-0 2xl:text-[1.25vw]">Christopher and Kaitlyn, ARPM project team</p>
      </motion.div>
      <div className="relative isolate mx-auto mt-12 aspect-[5/4] w-full max-w-[1200px] 2xl:absolute 2xl:inset-x-0 2xl:bottom-0 2xl:mt-0 2xl:h-[53.22vw] 2xl:max-w-none 2xl:aspect-auto">
        {/* Frame the visible device bounds, excluding the PNG's transparent margins. */}
        <motion.div initial={reducedMotion ? false : { opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.9, ease }} className="absolute bottom-0 right-0 z-10 aspect-[2619/2323] w-[82%] overflow-hidden 2xl:right-[4%] 2xl:w-[60%]">
          <Image src="/arpm-2.png" alt="ARPM website on a desktop Mac Studio mockup" width={4096} height={3072} quality={100} className="absolute max-w-none" style={{ width: "156.3956%", height: "132.2428%", left: "-28.9042%", top: "-19.0702%" }} sizes="(min-width: 1536px) 94vw, 128vw" />
        </motion.div>
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: 0.1, ease }} className="absolute bottom-0 left-0 z-20 aspect-[806/1644] w-[29%] overflow-hidden 2xl:left-[22%] 2xl:w-[20%]">
          <Image src="/works/arpm/testimonial/phone-transparent.png" alt="ARPM property listing viewed on mobile" width={922} height={1706} quality={100} className="absolute max-w-none" style={{ width: "114.3921%", height: "103.7713%", left: "-6.4516%", top: "-1.9465%" }} sizes="(min-width: 1536px) 23vw, 34vw" />
        </motion.div>
      </div>
    </section>
  );
}
