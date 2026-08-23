"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function ExecutiveDirection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="executive-direction-heading"
      className="mt-px overflow-hidden bg-[#f6f4ef] px-4 py-12 sm:px-7 sm:py-16 min-[1280px]:h-[675px] min-[1280px]:px-[47px] min-[1280px]:pb-[81px] min-[1280px]:pt-[37px]"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:63"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto flex min-h-[460px] max-w-[1825px] flex-col overflow-hidden rounded-[24px] border border-[#d9d5cc] px-5 pb-8 pt-7 sm:px-8 min-[1280px]:h-[557px] min-[1280px]:max-w-none min-[1280px]:rounded-[28px] min-[1280px]:p-0"
        data-node-id="166:33"
      >
        <motion.h2
          id="executive-direction-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
          className="flex flex-wrap items-center justify-center gap-x-2 text-center text-[20px] font-[400] leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] sm:text-[24px] min-[1280px]:absolute min-[1280px]:left-1/2 min-[1280px]:top-[30px] min-[1280px]:h-[48px] min-[1280px]:-translate-x-1/2 min-[1280px]:flex-nowrap min-[1280px]:gap-x-1"
        >
          <span className="whitespace-nowrap">Executive approved</span>
          <Image
            src="/works/arpm/executive-direction/figma-logo-4x.png"
            alt="Figma"
            width={344}
            height={192}
            className="h-[36px] w-auto sm:h-[48px]"
            data-node-id="56:3371"
          />
          <span className="whitespace-nowrap">direction</span>
        </motion.h2>

        <div className="mt-10 overflow-x-auto pb-3 sm:mt-12 min-[1280px]:absolute min-[1280px]:left-[44px] min-[1280px]:right-[44px] min-[1280px]:top-[139px] min-[1280px]:mt-0 min-[1280px]:overflow-visible min-[1280px]:pb-0">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="min-w-[940px] min-[1280px]:min-w-0"
          >
            <Image
              src="/works/arpm/executive-direction/approved-screens-4x.png"
              alt="The executive-approved ARPM website direction displayed across the complete Figma presentation"
              width={6944}
              height={1115}
              quality={100}
              sizes="(min-width: 1280px) calc(100vw - 182px), 940px"
              className="h-auto w-full"
              data-node-id="56:3358"
            />
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.34, ease }}
          className="mx-auto mt-auto w-full max-w-[528px] pt-6 min-[1280px]:absolute min-[1280px]:bottom-[28px] min-[1280px]:left-1/2 min-[1280px]:mt-0 min-[1280px]:-translate-x-1/2 min-[1280px]:pt-0"
        >
          <Image
            src="/works/arpm/executive-direction/figma-toolbar-4x.png"
            alt="Figma design toolbar"
            width={2112}
            height={192}
            quality={100}
            sizes="(min-width: 640px) 528px, calc(100vw - 72px)"
            className="h-auto w-full"
            data-node-id="56:3373"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
