"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const projectFacts = [
  { label: "Role", value: "Design & development" },
  { label: "Platform", value: "WordPress / Houzez" },
  { label: "Investment", value: "$7.5K engagement" },
  { label: "Launched", value: "June 2026" },
];

export default function ProjectOverview() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 28 };

  return (
    <section
      aria-labelledby="arpm-overview-heading"
      className="relative isolate overflow-hidden bg-[#870b2d] px-5 py-20 text-white sm:px-8 lg:px-[7.5vw] lg:py-[83px] min-[1280px]:h-[736px] min-[1280px]:px-0 min-[1280px]:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:32"
    >
      <Image
        src="/works/arpm/project-overview/house-outline-2x.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover opacity-5"
        aria-hidden="true"
        data-node-id="75:232"
      />

      <div className="relative z-10 mx-auto grid max-w-[1632px] gap-16 lg:grid-cols-[minmax(250px,490px)_minmax(0,994px)] lg:gap-[clamp(72px,7.5vw,144px)] min-[1280px]:max-w-none min-[1280px]:gap-0">
        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease }}
          className="min-[1280px]:absolute min-[1280px]:left-[7.5vw] min-[1280px]:top-[109px] min-[1280px]:w-[307px]"
        >
          <p className="text-[16px] font-[400] uppercase leading-[0.75] tracking-[0.05em] text-white/60 sm:text-[20px]">
            Case Study
          </p>
          <h2
            id="arpm-overview-heading"
            className="mt-[20px] max-w-[340px] text-[18px] font-[400] uppercase leading-[1.2] tracking-[0.05em] sm:text-[20px]"
          >
            Associated Realty Property Management
          </h2>
        </motion.div>

        <div className="min-[1280px]:absolute min-[1280px]:left-[40.521vw] min-[1280px]:top-[83px] min-[1280px]:w-[51.771vw]">
          <motion.div
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            <p className="inline-flex rounded-full bg-white/5 px-6 py-4 text-[15px] font-[400] leading-none sm:text-[16px]">
              About The Project
            </p>
            <p className="mt-[30px] max-w-[994px] text-[clamp(28px,1.875vw,36px)] font-[400] leading-[1.5] tracking-[-0.025em]">
              A two-year-old redesign had already defeated two development teams.
              The real problem was not the homepage. It was 360+ legacy
              properties, fragmented floorplan data, operational forms, and a
              search experience that had to understand all of it.
            </p>
          </motion.div>

          <motion.dl
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
            }}
            className="mt-14 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 min-[1280px]:mt-[52px] 2xl:mt-[65px] 2xl:grid-cols-[213px_218px_220px_160px] 2xl:justify-between"
          >
            {projectFacts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={
                  shouldReduceMotion
                    ? undefined
                    : {
                        hidden: { opacity: 0, y: 18 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                      }
                }
              >
                <dt className="text-[14px] font-[400] uppercase leading-[0.965] tracking-[0.05em] text-white/60">
                  {fact.label}
                </dt>
                <dd className="mt-[15px] text-[20px] font-[400] uppercase leading-[1.2] tracking-[-0.02em] sm:text-[24px]">
                  {fact.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
