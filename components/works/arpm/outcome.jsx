"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const phones = [
  ["phone-1.png", "ARPM property search on mobile"],
  ["phone-2.png", "ARPM property detail on mobile"],
  ["phone-3.png", "ARPM leasing experience on mobile"],
  ["phone-4.png", "ARPM property listing interface on mobile"],
  ["phone-5.png", "ARPM property listing detail on mobile"],
  ["phone-6.png", "ARPM mobile application flow"],
];

export default function Outcome() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      aria-labelledby="outcome-heading"
      data-node-id="166:71"
      className="relative isolate overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:px-0 2xl:pb-[5vw] 2xl:pt-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
    >
      <motion.div className="relative 2xl:h-[50vw]" initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease }}>
        <p className="text-[18px] uppercase leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[5.885vw] 2xl:text-[1.25vw]">07 / The Outcome</p>
        <h2 id="outcome-heading" className="mt-7 max-w-[700px] text-[clamp(42px,5.4vw,64px)] leading-[1.1] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[9.531vw] 2xl:mt-0 2xl:w-[35.313vw] 2xl:text-[3.333vw]">Confidence,<br />restored.</h2>
        <p className="mt-8 max-w-[620px] text-[20px] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[57.396vw] 2xl:top-[14.896vw] 2xl:mt-0 2xl:w-[28.229vw] 2xl:text-[1.25vw]">The project launched with its property history preserved, its applications operating, and its most important customer journey rebuilt around actual renter behavior.</p>
        <ul className="mt-10 space-y-5 text-[20px] leading-[1.4] tracking-[0.03em] text-black/60 sm:text-[24px] 2xl:absolute 2xl:left-[59.792vw] 2xl:top-[26.042vw] 2xl:mt-0 2xl:w-[22.083vw] 2xl:space-y-[2.656vw] 2xl:text-[1.25vw]">
          <li>360+ properties preserved</li>
          <li>Multi-floorplan search working</li>
          <li>Applications and PayPal uninterrupted</li>
          <li>Mobile leasing experience modernized</li>
          <li>Two failed attempts finally closed</li>
        </ul>
      </motion.div>

      <div className="relative mx-auto mt-16 grid w-full max-w-[1600px] grid-cols-3 items-start gap-x-[4%] 2xl:mt-0 2xl:w-[84vw] 2xl:max-w-none">
        {[0, 1, 2].map((column) => (
          <div key={column} className="flex min-w-0 flex-col gap-3 sm:gap-6 2xl:gap-[1.5vw]" style={{ paddingTop: `${column * 60}%` }}>
            {[column, column + 3].map((index) => {
              const [file, alt] = phones[index];
              return (
                <motion.figure key={file} initial={reducedMotion ? false : { y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay: column * 0.07, ease }} className="relative aspect-[548/1020] w-full shrink-0">
                  <Image src={`/works/arpm/outcome/${file}`} alt={alt} fill quality={90} className="object-contain object-top" sizes="(min-width: 1536px) 26vw, 31vw" />
                </motion.figure>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
