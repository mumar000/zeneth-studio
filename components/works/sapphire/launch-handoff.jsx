"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const serif = '"PP Editorial Old", "Romie Trial", "Times New Roman", serif';
const sans = '"SF Pro", "Helvetica Neue", sans-serif';

const pillars = [
  {
    nodeId: "201:1002",
    titleNodeId: "201:1003",
    numberNodeId: "201:1004",
    copyNodeId: "201:1006",
    titleWidth: "max-w-[353px]",
    title: "Launch without the usual assets",
    copy: "High-quality imagery became a bridge, designed to be replaced as Sapphire's own project library grew.",
  },
  {
    nodeId: "201:1007",
    titleNodeId: "201:1008",
    numberNodeId: "201:1009",
    copyNodeId: "201:1011",
    titleWidth: "max-w-[390px]",
    title: "Build the business underneath",
    copy: "Responsive WordPress development, lead forms, lender links, FAQ content, license details, and reliable routing.",
  },
  {
    nodeId: "201:1012",
    titleNodeId: "201:1013",
    numberNodeId: "201:1014",
    copyNodeId: "201:1016",
    titleWidth: "max-w-[253px]",
    title: "Hand over control",
    copy: "Editing walkthroughs gave Evan a clear way to change wording, replace photos, and keep the site alive after launch.",
  },
];

export default function LaunchHandoff() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Sapphire launch and handoff"
      className="bg-[#f3efe7] px-[clamp(20px,7.35vw,141px)] pb-[clamp(104px,7.19vw,138px)] text-[#0c0c0c]"
    >
      <div className="mx-auto grid max-w-[1632px] grid-cols-1 gap-16 md:grid-cols-3 md:gap-[clamp(36px,5vw,96px)] 2xl:grid-cols-[412px_412px_392px] 2xl:justify-between 2xl:gap-0">
        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease }}
            className="flex flex-col items-start md:min-h-[310px]"
            data-node-id={pillar.nodeId}
          >
            <span
              className="inline-flex h-[47px] min-w-[55px] items-center justify-center rounded-full bg-white px-4 text-[22.7px] leading-[1.2] tracking-[-0.05em]"
              style={{ fontFamily: sans }}
              data-node-id={pillar.numberNodeId}
            >
              01
            </span>

            <h2
              className={`mt-[30px] ${pillar.titleWidth} text-[clamp(42px,2.5vw,48px)] font-[200] italic leading-[1.2] tracking-[-0.03em]`}
              style={{ fontFamily: serif }}
              data-node-id={pillar.titleNodeId}
            >
              {pillar.title}
            </h2>

            <p
              className="mt-4 max-w-[412px] text-[clamp(18px,1.25vw,24px)] font-[300] leading-[1.3] tracking-[-0.03em] md:mt-auto"
              style={{ fontFamily: sans }}
              data-node-id={pillar.copyNodeId}
            >
              {pillar.copy}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
