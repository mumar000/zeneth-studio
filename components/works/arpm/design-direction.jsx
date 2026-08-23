"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const principles = [
  {
    number: "01",
    desktopTop: "2xl:top-[25.781vw]",
    title: "Intent after inventory",
    description: "Research, development, and strategic planning for growth.",
  },
  {
    number: "02",
    desktopTop: "2xl:top-[34.167vw]",
    title: "Availability at a glance",
    description: "Status belongs on the card, not buried in the detail page.",
  },
  {
    number: "03",
    desktopTop: "2xl:top-[42.552vw]",
    title: "Real content for real approval",
    description:
      "Figma used ARPM photography, mission, and inventory before the president review.",
  },
];

export default function DesignDirection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="design-direction-heading"
      className="relative overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:aspect-[1920/1027] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:66"
    >
      <motion.h2
        id="design-direction-heading"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.85, ease }}
        className="relative z-10 mx-auto max-w-[1100px] text-center text-[clamp(38px,5.2vw,64px)] font-[400] leading-[1.1] 2xl:absolute 2xl:left-1/2 2xl:top-[3.906vw] 2xl:w-[57.292vw] 2xl:-translate-x-1/2 2xl:text-[3.333vw]"
      >
        A modern leasing experience,
        <br />
        without <span className="text-[#870b2d]">abandoning 1978.</span>
      </motion.h2>

      <div className="mx-auto mt-16 grid min-w-0 max-w-[1478px] grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[455px_minmax(0,1fr)] lg:items-end lg:gap-0 2xl:mt-0 2xl:block 2xl:max-w-none">
        <div className="min-w-0 2xl:contents">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="relative z-10 max-w-[526px] text-[20px] font-[400] leading-[1.2] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[11.51vw] 2xl:top-[16.615vw] 2xl:w-[27.396vw] 2xl:text-[1.25vw]"
          >
            Maroon remained the anchor. The existing mark stayed recognizable.
            Around it, the interface became quieter, faster to scan, and
            dramatically more useful on mobile.
          </motion.p>

          <motion.ol
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
            }}
            className="relative z-10 mt-10 space-y-[10px] lg:mt-12 2xl:absolute 2xl:inset-0 2xl:mt-0 2xl:block"
          >
            {principles.map((principle) => (
              <motion.li
                key={principle.number}
                variants={
                  shouldReduceMotion
                    ? undefined
                    : {
                        hidden: { opacity: 0, x: -24 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
                      }
                }
                className={`grid min-h-[150px] min-w-0 grid-cols-[38px_minmax(0,1fr)] gap-4 rounded-[20px] border border-dashed border-black/10 bg-white px-7 py-8 2xl:absolute 2xl:left-[11.51vw] 2xl:h-[7.813vw] 2xl:min-h-0 2xl:w-[23.698vw] 2xl:grid-cols-[2.76vw_minmax(0,1fr)] 2xl:gap-0 2xl:rounded-[1.042vw] 2xl:px-[1.563vw] 2xl:py-[1.719vw] ${principle.desktopTop}`}
              >
                <span className="text-[20px] font-[400] leading-[1.2] tracking-[0.03em] sm:text-[24px] 2xl:text-[1.25vw]">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-[20px] font-[400] leading-[1.2] tracking-[0.03em] sm:text-[24px] 2xl:text-[1.25vw]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-[320px] text-[15px] font-[400] leading-[1.2] text-[#222]/60 sm:text-[16px] 2xl:mt-[0.417vw] 2xl:text-[0.833vw]">
                    {principle.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.12, ease }}
          className="relative z-0 aspect-[1164/708] min-w-0 w-[125%] -translate-x-[10%] lg:w-[115%] lg:-translate-x-[3%] 2xl:absolute 2xl:left-[35.052vw] 2xl:top-[16.615vw] 2xl:w-[60.625vw] 2xl:translate-x-0"
          data-node-id="69:121"
        >
          <Image
            src="/works/arpm/design-direction/ipad-hands-4x.png"
            alt="The modern ARPM leasing experience displayed on an iPad held in two hands"
            fill
            quality={100}
            sizes="(min-width: 1536px) 60.625vw, (min-width: 1024px) 65vw, 125vw"
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
