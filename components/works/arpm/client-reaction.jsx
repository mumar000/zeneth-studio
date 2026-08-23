"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function ClientReaction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="client-reaction-heading"
      className="relative isolate overflow-hidden bg-[#f6f4ef] px-5 pb-20 pt-24 text-white sm:px-8 sm:pt-28 2xl:aspect-[1920/1789] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:67"
    >
      <div className="absolute inset-x-0 top-0 h-[59%] bg-[#870b2d] 2xl:h-[60.833vw]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[59%] overflow-hidden 2xl:h-[60.833vw]" data-node-id="75:228">
        <Image
          src="/works/arpm/client-reaction/house-outline-2x.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="select-none object-cover object-top opacity-5"
        />
      </div>

      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.65, ease }}
        className="relative z-10 text-center text-[14px] font-[400] uppercase leading-none sm:text-[16px] 2xl:absolute 2xl:left-1/2 2xl:top-[6.146vw] 2xl:-translate-x-1/2 2xl:text-[0.833vw]"
      >
        Client Reaction
      </motion.p>

      <motion.h2
        id="client-reaction-heading"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.85, delay: 0.08, ease }}
        className="relative z-10 mx-auto mt-7 max-w-[965px] text-center text-[clamp(36px,6vw,64px)] font-[400] leading-[1.2] 2xl:absolute 2xl:left-1/2 2xl:top-[8.542vw] 2xl:mt-0 2xl:w-[50.26vw] 2xl:-translate-x-1/2 2xl:text-[3.333vw]"
      >
        “That’s beautiful and clean. Truly what we hoped you might come up with.
        Amazing.”
      </motion.h2>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 55, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 1.05, delay: 0.12, ease }}
        className="relative z-10 mx-auto mt-12 aspect-[665/1291] w-[min(88vw,430px)] 2xl:absolute 2xl:left-1/2 2xl:top-[23.594vw] 2xl:mt-0 2xl:w-[34.635vw] 2xl:-translate-x-1/2"
        data-node-id="70:132"
      >
        <Image
          src="/works/arpm/client-reaction/phone-4x.png"
          alt="The approved ARPM mobile About page displayed in an iPhone mockup"
          fill
          quality={100}
          sizes="(min-width: 1536px) 34.635vw, 430px"
          className="object-contain"
          style={{ clipPath: "inset(0.9% 2% 0.8% 2% round 13% 6.5%)" }}
        />
      </motion.div>
    </section>
  );
}
