"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { primaryButtonClass, secondaryButtonClass } from "./type";

export default function ServiceHero({ service }) {
  return (
    <section className="relative flex w-full items-start justify-center overflow-hidden bg-[#f6f0fb] px-5 pb-14 pt-36 text-center md:min-h-[760px] md:px-8 md:pb-[90px] md:pt-[234px]">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="mx-auto flex w-full max-w-[1224px] flex-col items-center"
      >
        <p className="flex items-center gap-3 font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {service.eyebrow}
        </p>
        <h1 className="mt-7 max-w-[1224px] text-balance text-[clamp(42px,7vw,88px)] font-[700] leading-[0.98] tracking-[-0.04em] text-[#1a1a1a] md:mt-10" style={{ fontFamily: "var(--font-display)" }}>
          {service.headline}
        </h1>
        <p className="mt-6 max-w-[620px] text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-[#4a4752] md:mt-7">
          {service.description}
        </p>
        <p
          className="mt-4 font-mono text-xs font-[700] uppercase tracking-[0.14em] text-primary md:mt-5 md:text-sm"
        >
          Starting at {service.startingPrice}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 md:mt-[34px]">
          <Link href="/contact" className={primaryButtonClass}>
            {service.ctaLabel}
          </Link>
          {service.secondaryCtaLabel && service.secondaryCtaHref && (
            <Link href={service.secondaryCtaHref} className={secondaryButtonClass}>
              {service.secondaryCtaLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
