"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceHero({ service }) {
  return (
    <section className="relative flex w-full items-start justify-center overflow-hidden bg-[#f6f0fb] px-5 pb-14 pt-36 text-center md:min-h-[760px] md:px-8 md:pb-[90px] md:pt-[234px]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="mx-auto flex w-full max-w-[1224px] flex-col items-center"
      >
        <p className="flex items-center gap-3 text-[12px] font-[700] uppercase text-primary md:text-[14px]" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {service.eyebrow}
        </p>
        <h1 className="mt-7 max-w-[1224px] text-[38px] font-[700] leading-[1] tracking-[-0.05em] text-[#202024] sm:text-[46px] md:mt-[43px] md:text-[78px] md:leading-[0.98] md:tracking-[-0.064em] lg:text-[86px]" style={{ fontFamily: "var(--font-display)" }}>
          {service.headline}
        </h1>
        <p className="mt-5 max-w-[760px] text-[16px] font-[400] text-[#252528]/75 md:mt-8 md:text-[20px]" style={{ fontFamily: "var(--font-sora)" }}>
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-[10px] md:mt-[34px]">
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-black bg-primary px-5 py-3 text-[11px] font-[700] uppercase tracking-[0.12em] text-white transition-colors duration-200 ease-out hover:bg-[var(--accent-yellow)] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:min-h-[59px] md:px-[28px] md:py-4 md:text-sm md:tracking-[0.14em]" style={{ fontFamily: "var(--font-mono)" }}>
            {service.ctaLabel}
          </Link>
          {service.secondaryCtaLabel && (
            <Link href={service.secondaryCtaHref || "#"} className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-[#151225] bg-transparent px-5 py-3 text-[11px] font-[700] uppercase tracking-[0.12em] text-[#151225] transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:min-h-[59px] md:px-[28px] md:py-4 md:text-[13px] md:tracking-[0.16em]" style={{ fontFamily: "var(--font-mono)" }}>
              {service.secondaryCtaLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
