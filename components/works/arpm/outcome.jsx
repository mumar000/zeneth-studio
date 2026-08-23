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

const placements = [
  "2xl:left-[20.677vw] 2xl:top-[26.979vw] 2xl:w-[27.188vw]",
  "2xl:left-[48.958vw] 2xl:top-[101.563vw] 2xl:w-[27.188vw]",
  "2xl:left-[20.677vw] 2xl:top-[79.792vw] 2xl:w-[27.188vw]",
  "2xl:left-[77.24vw] 2xl:top-[59.531vw] 2xl:w-[27.188vw]",
  "2xl:left-[35.104vw] 2xl:top-[48.698vw] 2xl:w-[28.542vw]",
  "2xl:left-[63.75vw] 2xl:top-[112.656vw] 2xl:w-[27.865vw]",
];

export default function Outcome() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      aria-labelledby="outcome-heading"
      data-node-id="166:71"
      className="relative isolate overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:aspect-[1920/3392] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
    >
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease }}>
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

      <div className="mt-16 flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 sm:gap-12 2xl:contents">
        {phones.map(([file, alt], index) => (
          <motion.figure key={file} initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay: index * 0.07, ease }} className={`relative w-full max-w-[430px] 2xl:absolute ${placements[index]}`}>
            <Image src={`/works/arpm/outcome/${file}`} alt={alt} width={[522, 522, 522, 522, 548, 535][index]} height={[1015, 1015, 1015, 1015, 1015, 1020][index]} quality={100} className="block h-auto w-full" sizes="(min-width: 1536px) 28vw, 430px" />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
