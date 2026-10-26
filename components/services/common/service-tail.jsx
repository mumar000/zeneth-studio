"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FaqSection from "@/components/home/faq-section";
import PortfolioCta from "@/components/home/portfolio-cta";
import { serviceSeoData } from "@/lib/service-seo-data";
import { primaryButtonClass } from "./type";

function RelatedWork({ projects }) {
  if (!projects?.length) return null;

  return (
    <section className="relative z-10 px-5 py-14 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">
          Related proof
        </p>
        <h2
          className="mt-4 max-w-3xl text-balance text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:text-[clamp(34px,4.6vw,56px)] md:leading-none"
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
              <span className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary">
                Case study
              </span>
              <span
                className="mt-4 block text-[30px] font-[700] leading-none tracking-[-0.03em] text-[#1a1a1a] md:text-[36px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </span>
              <span className="mt-4 block text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]">
                {project.detail}
              </span>
              <span className="mt-7 inline-flex font-mono text-xs font-[700] uppercase tracking-[0.14em] text-[#1a1a1a] transition-colors group-hover:text-primary">
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
          className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary"
        >
          {cta.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
          className="mt-5 max-w-[1000px] text-balance text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:mt-6 md:text-[clamp(34px,4.6vw,56px)] md:leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-[760px] text-[16px] leading-[1.55] text-[#4a4752] md:mt-6 md:text-[18px]"
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
          <Link href={cta.href || "/contact"} className={primaryButtonClass}>
            {cta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServiceTail({ portfolioCta, serviceSlug, showRelatedWork = true }) {
  const seo = serviceSeoData[serviceSlug];

  return (
    <>
      {showRelatedWork && <RelatedWork projects={seo?.relatedWork} />}
      <nav aria-label="Related services" className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-6 gap-y-3 px-5 py-6 text-sm md:px-8">
        <span className="font-[600]">Related services:</span>
        {[
          ["brand-identity", "Brand identity"],
          ["interface-design", "Web & UI/UX design"],
          ["web-development", "Web development"],
        ].filter(([slug]) => slug !== serviceSlug).map(([slug, label]) => (
          <Link key={slug} href={`/services/${slug}`} className="inline-flex min-h-11 items-center font-[600] text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{label}</Link>
        ))}
      </nav>
      <FaqSection faqs={seo?.faqs} heading={seo?.faqHeading || "Service Questions"} />
      {portfolioCta ? <CustomPortfolioCta cta={portfolioCta} /> : <PortfolioCta />}
    </>
  );
}
