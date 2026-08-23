"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const inputs = [
  {
    title: "Legacy shortcodes",
    description: "Floorplan tabs embedded inside years of property descriptions",
  },
  {
    title: "ACF property data",
    description: "Amenities, responsibilities, pricing tables, operational truth",
  },
  {
    title: "Houzez fields",
    description: "Modern status, search, maps, cards, and future inventory",
  },
];

const inputTops = ["2xl:top-[19.688vw]", "2xl:top-[28.854vw]", "2xl:top-[38.021vw]"];

export default function DataBridge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="data-bridge-heading"
      className="relative overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:-mt-2 2xl:aspect-[1920/1070] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:68"
    >
      <motion.h2
        id="data-bridge-heading"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-[1200px] text-center text-[clamp(38px,5vw,64px)] font-[400] leading-[1.1] 2xl:absolute 2xl:left-1/2 2xl:top-[6.719vw] 2xl:-translate-x-1/2 2xl:whitespace-nowrap 2xl:text-[3.333vw]"
      >
        Three data worlds. One honest interface.
      </motion.h2>

      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.08, ease }}
        className="mx-auto mt-7 max-w-[780px] text-center text-[20px] font-[400] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-1/2 2xl:top-[11.771vw] 2xl:mt-0 2xl:w-[40.625vw] 2xl:-translate-x-1/2 2xl:text-[1.25vw]"
      >
        The breakthrough was not choosing between old and new. It was building a
        bridge that allowed both to work together.
      </motion.p>

      <div className="relative mx-auto mt-16 max-w-[1502px] 2xl:mt-0 2xl:max-w-none">
        <div className="space-y-4 2xl:contents">
          {inputs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.09, ease }}
              className={`rounded-[15px] bg-white px-7 py-6 2xl:absolute 2xl:left-[8.281vw] 2xl:h-[8.073vw] 2xl:w-[22.813vw] 2xl:px-[2.031vw] 2xl:py-[1.25vw] ${inputTops[index]}`}
            >
              <h3 className="text-[20px] font-[400] leading-[1.4] sm:text-[24px] 2xl:text-[1.25vw]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[360px] text-[16px] font-[400] leading-[1.4] tracking-[0.03em] text-black/60 sm:text-[18px] 2xl:mt-[0.365vw] 2xl:text-[1.042vw]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative mx-auto my-12 flex min-h-[150px] w-full max-w-[320px] items-center justify-center rounded-[24px] border border-dashed border-black/15 bg-white/60 2xl:absolute 2xl:left-[48.646vw] 2xl:top-[29.01vw] 2xl:my-0 2xl:min-h-0 2xl:w-[15.625vw] 2xl:-translate-x-1/2 2xl:border-0 2xl:bg-transparent">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="text-center text-[46px] font-[400] leading-[1.1] sm:text-[54px] 2xl:text-[3.333vw]"
          >
            Custom
            <br />
            Bridge
          </motion.p>
        </div>

        <div aria-hidden="true" className="hidden 2xl:block">
          <Image src="/works/arpm/data-bridge/connector-top.svg" alt="" width={174} height={173} className="absolute left-[31.094vw] top-[23.646vw] h-[8.958vw] w-[9.063vw]" />
          <Image src="/works/arpm/data-bridge/connector-bottom.svg" alt="" width={174} height={177} className="absolute left-[31.094vw] top-[32.604vw] h-[9.167vw] w-[9.063vw]" />
          <Image src="/works/arpm/data-bridge/input-line.svg" alt="" width={128} height={1} className="absolute left-[31.198vw] top-[32.604vw] h-px w-[6.667vw]" />
          <Image src="/works/arpm/data-bridge/node-b.svg" alt="" width={20} height={20} className="absolute left-[39.792vw] top-[32.083vw] size-[1.042vw]" />
          <Image src="/works/arpm/data-bridge/node-inner.svg" alt="" width={10} height={10} className="absolute left-[40.052vw] top-[32.344vw] size-[0.521vw]" />
          <Image src="/works/arpm/data-bridge/output-line.svg" alt="" width={77} height={1} className="absolute left-[57.083vw] top-[32.604vw] h-px w-[4.01vw]" />
          <Image src="/works/arpm/data-bridge/node-a.svg" alt="" width={20} height={20} className="absolute left-[56.042vw] top-[32.083vw] size-[1.042vw]" />
          <Image src="/works/arpm/data-bridge/node-inner.svg" alt="" width={10} height={10} className="absolute left-[56.302vw] top-[32.344vw] size-[0.521vw]" />
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
          className="rounded-[15px] bg-white px-7 py-8 2xl:absolute 2xl:left-[61.094vw] 2xl:top-[25.781vw] 2xl:h-[13.646vw] 2xl:w-[30.573vw] 2xl:px-[3.385vw] 2xl:py-[2.448vw]"
        >
          <span className="inline-flex rounded-full bg-[#870b2d] px-4 py-[10px] text-[14px] font-[400] leading-[1.4] text-white 2xl:text-[0.729vw]">
            The Output
          </span>
          <h3 className="mt-5 text-[21px] font-[500] uppercase leading-[1.4] sm:text-[24px] 2xl:mt-[1.094vw] 2xl:text-[1.25vw]">
            One searchable property model
          </h3>
          <p className="mt-3 max-w-[458px] text-[16px] font-[400] leading-[1.4] tracking-[0.03em] text-black/40 sm:text-[20px] 2xl:mt-[0.313vw] 2xl:text-[1.042vw]">
            Any floorplan can match. Bed counts show honest ranges. Available
            inventory rises first.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
