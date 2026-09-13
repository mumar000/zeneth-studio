"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FaqSection from "@/components/home/faq-section";
import PortfolioCta from "@/components/home/portfolio-cta";
import { serviceSeoData } from "@/lib/service-seo-data";

function RelatedWork({ projects }) {
  if (!projects?.length) return null;

  return (
    <section className="relative z-10 px-5 py-14 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p
          className="text-[12px] font-[700] uppercase tracking-[0.13em] text-primary"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Related proof
        </p>
        <h2
          className="mt-4 max-w-3xl text-[36px] font-[700] leading-[1] tracking-[-0.04em] text-[#202024] md:text-[64px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          See the service working in real projects.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group rounded-[16px] border border-black/10 bg-white p-6 shadow-[0_12px_36px_rgba(28,16,48,0.06)] transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_44px_rgba(28,16,48,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:p-8"
            >
              <span
                className="text-[11px] font-[700] uppercase tracking-[0.12em] text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Case study
              </span>
              <span
                className="mt-4 block text-[30px] font-[650] leading-none tracking-[-0.035em] text-[#202024] md:text-[40px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </span>
              <span className="mt-4 block text-[15px] leading-relaxed text-black/60 md:text-[16px]">
                {project.detail}
              </span>
              <span className="mt-7 inline-flex text-sm font-[700] text-black transition-colors group-hover:text-primary">
                Read case study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomPortfolioCta({ cta }) {
  return (
    <section className="relative z-10 w-full  px-5 py-14 text-center md:px-8 md:py-28">
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

export default function ServiceTail({ portfolioCta, serviceSlug }) {
  const seo = serviceSeoData[serviceSlug];

  return (
    <>
      <RelatedWork projects={seo?.relatedWork} />
      <FaqSection faqs={seo?.faqs} heading={seo?.faqHeading || "Service Questions"} />
      {portfolioCta ? <CustomPortfolioCta cta={portfolioCta} /> : <PortfolioCta />}
    </>
  );
}
