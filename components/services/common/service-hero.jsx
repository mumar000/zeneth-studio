"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceHero({ service }) {
  return (
    <section className="relative flex min-h-[760px] w-full items-start justify-center overflow-hidden bg-[#f6f0fb] px-5 pb-[78px] pt-[214px] text-center md:px-8 md:pb-[90px] md:pt-[234px]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="mx-auto flex w-full max-w-[1224px] flex-col items-center"
      >
        <p className="flex items-center gap-3 text-[14px] font-[400] uppercase leading-none text-primary md:text-[16px]" style={{ fontFamily: "var(--font-sora)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {service.eyebrow}
        </p>
        <h1 className="mt-[43px] max-w-[1224px] text-[48px] font-[700] leading-[0.98] tracking-[-0.064em] text-[#202024] sm:text-[64px] md:text-[78px] lg:text-[86px]" style={{ fontFamily: "var(--font-display)" }}>
          {service.headline}
        </h1>
        <p className="mt-[37px] max-w-[925px] text-[21px] font-[400] leading-[1.42] tracking-[-0.055em] text-[#252528] md:text-[25px]" style={{ fontFamily: "var(--font-display)" }}>
          {service.description}
        </p>
        <div className="mt-[34px] flex flex-wrap items-center justify-center gap-[10px]">
          <Link href="/contact" className="inline-flex min-h-[59px] items-center justify-center rounded-[8px] border border-black bg-primary px-[28px] py-4 text-xs font-[700] uppercase tracking-[0.14em] text-white transition-colors duration-200 ease-out hover:bg-[var(--accent-yellow)] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm" style={{ fontFamily: "var(--font-mono)" }}>
            {service.ctaLabel}
          </Link>
          {service.secondaryCtaLabel && (
            <Link href={service.secondaryCtaHref || "#"} className="inline-flex min-h-[59px] items-center justify-center rounded-[8px] border border-[#151225] bg-transparent px-[28px] py-4 text-[13px] font-[700] uppercase tracking-[0.16em] text-[#151225] transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" style={{ fontFamily: "var(--font-mono)" }}>
              {service.secondaryCtaLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
