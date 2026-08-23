"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE = "/works/sapphire/hero/pool-hero.webp";
const heroEase = [0.22, 1, 0.36, 1];

const projectFacts = [
  { label: "Industry", value: "Pool & wellness", nodeId: "201:49" },
  {
    label: "Market",
    value: "Residential + commercial",
    nodeId: "201:50",
  },
  { label: "Scope", value: "Brand to website", nodeId: "201:51" },
  { label: "Direction", value: "Quiet luxury", nodeId: "201:52" },
];

export default function SapphireHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="sapphire-case-study-title"
      className="relative isolate h-[100svh] min-h-[780px] w-full overflow-hidden bg-[#0c0c0c] md:h-auto md:min-h-[680px] xl:aspect-[1920/1086] xl:min-h-0"
      data-node-id="201:38"
    >
      <motion.div
        className="absolute inset-0"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: heroEase }}
      >
        <Image
          src={HERO_IMAGE}
          alt="A tranquil outdoor swimming pool surrounded by mature trees"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-center"
          data-node-id="201:46"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <motion.p
        className="absolute left-[clamp(24px,4.635vw,89px)] top-[clamp(30px,6.17vw,67px)] z-10 max-w-[calc(100%-48px)] text-[clamp(13px,1.25vw,24px)] font-[400] leading-[1.2] tracking-[-0.03em] text-white"
        style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.16, ease: heroEase }}
        data-node-id="201:47"
      >
        Brand identity / Web design / WordPress development
      </motion.p>

      <motion.h1
        id="sapphire-case-study-title"
        className="absolute left-1/2 top-[25%] z-10 w-[calc(100%-48px)] max-w-[773px] -translate-x-1/2 text-center text-[clamp(43px,5vw,96px)] font-[200] leading-[1.2] tracking-[-0.03em] text-[#fffaef] md:top-[33.89%]"
        style={{
          fontFamily:
            '"PP Editorial Old", "Romie Trial", "Times New Roman", serif',
        }}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.28, ease: heroEase }}
        data-node-id="201:57"
      >
        <span className="block">New company.</span>
        <span className="block">No project photos. Still had to look premium.</span>
      </motion.h1>

      <div className="absolute inset-x-0 bottom-0 z-10 px-[clamp(24px,4.635vw,89px)] pb-8 md:pb-[clamp(42px,7.64vw,83px)]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <motion.p
            className="max-w-[414px] text-[clamp(15px,1.042vw,20px)] font-[400] leading-[1.2] tracking-[-0.03em] text-white"
            style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease: heroEase }}
            data-node-id="201:48"
          >
            Sapphire needed to earn trust before the portfolio existed. We
            built the world first, then gave the business somewhere to grow.
          </motion.p>

          <motion.dl
            className="grid w-full grid-cols-2 gap-x-7 gap-y-5 md:w-[min(38vw,605px)] md:gap-x-[clamp(50px,8vw,154px)] md:gap-y-7"
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.09, delayChildren: 0.7 },
              },
            }}
          >
            {projectFacts.map((fact) => (
              <motion.div
                key={fact.label}
                className="min-w-0"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: heroEase },
                  },
                }}
                data-node-id={fact.nodeId}
              >
                <dt
                  className="mb-1 text-[11px] font-[400] uppercase leading-[1.2] tracking-[-0.03em] text-white/60 md:text-[clamp(12px,0.833vw,16px)]"
                  style={{
                    fontFamily: '"SF Pro", "Helvetica Neue", sans-serif',
                  }}
                >
                  {fact.label}
                </dt>
                <dd
                  className="text-[13px] font-[400] leading-[1.2] tracking-[-0.03em] text-white md:text-[clamp(13px,0.833vw,16px)]"
                  style={{
                    fontFamily: '"SF Pro", "Helvetica Neue", sans-serif',
                  }}
                >
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
