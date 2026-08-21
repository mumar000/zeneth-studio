"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FaqSection from "@/components/home/faq-section";
import PortfolioCta from "@/components/home/portfolio-cta";

function CustomPortfolioCta({ cta }) {
  return (
    <section className="relative z-10 w-full bg-[#F0EBFB] px-5 py-14 text-center md:px-8 md:py-28">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[12px] font-[700] uppercase tracking-[0.13em] text-primary md:text-[15px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {cta.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
          className="mt-5 max-w-[1120px] text-[32px] font-[700] leading-[1.06] tracking-[-0.04em] text-[#202024] sm:text-[40px] md:mt-10 md:text-[82px] md:tracking-[-0.045em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-[760px] text-[15px] text-[#202024]/75 md:mt-7 md:text-[20px]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {cta.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-6 md:mt-9"
        >
          <Link
            href={cta.href || "/contact"}
            className="inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-7 py-3.5 text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {cta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServiceTail({ portfolioCta }) {
  return (
    <>
      <FaqSection />
      {portfolioCta ? <CustomPortfolioCta cta={portfolioCta} /> : <PortfolioCta />}
    </>
  );
}
