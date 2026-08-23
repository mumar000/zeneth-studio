"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function OutcomeTestimonial() {
  const reducedMotion = useReducedMotion();
  return (
    <section aria-labelledby="outcome-testimonial-heading" data-node-id="166:43" className="relative isolate overflow-hidden bg-[#870b2d] px-5 py-24 text-white sm:px-8 sm:py-28 2xl:aspect-[1920/1369] 2xl:px-0 2xl:py-0" style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}>
      <Image src="/works/arpm/search-product/house-outline-2x.png" alt="" fill aria-hidden="true" className="pointer-events-none object-cover opacity-5" sizes="100vw" />
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8, ease }} className="relative z-10">
        <p className="text-[18px] uppercase leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[9.219vw] 2xl:top-[7.13vw] 2xl:text-[1.25vw]">07 / The Outcome</p>
        <blockquote id="outcome-testimonial-heading" className="mt-7 max-w-[850px] text-[clamp(42px,5.4vw,64px)] leading-[1.1] 2xl:absolute 2xl:left-[9.219vw] 2xl:top-[11.042vw] 2xl:mt-0 2xl:w-[41.875vw] 2xl:text-[3.333vw]">“Our company president is also thrilled with how the site turned out.”</blockquote>
        <p className="mt-8 text-[20px] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[9.219vw] 2xl:top-[24.375vw] 2xl:mt-0 2xl:text-[1.25vw]">Christopher and Kaitlyn, ARPM project team</p>
      </motion.div>
      <motion.div initial={reducedMotion ? false : { opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.9, ease }} className="relative z-10 mx-auto mt-16 w-full max-w-[760px] 2xl:absolute 2xl:left-[62.24vw] 2xl:top-[17.76vw] 2xl:mt-0 2xl:w-[57.188vw]">
        <Image src="/works/arpm/testimonial/mac-studio.png" alt="ARPM website on a desktop Mac Studio mockup" width={1098} height={927} quality={100} className="block h-auto w-full" sizes="(min-width: 1536px) 57.188vw, 760px" />
      </motion.div>
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: 0.1, ease }} className="relative z-20 mx-auto -mt-16 w-[230px] sm:-mt-24 sm:w-[300px] 2xl:absolute 2xl:left-[25.156vw] 2xl:top-[29.583vw] 2xl:mt-0 2xl:w-[19.792vw]">
        <Image src="/works/arpm/testimonial/phone.png" alt="ARPM property listing viewed on mobile" width={380} height={703} quality={100} className="block h-auto w-full" sizes="(min-width: 1536px) 19.792vw, 300px" />
      </motion.div>
    </section>
  );
}
