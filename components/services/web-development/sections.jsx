"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Radio } from "lucide-react";
import SectionIntro from "@/components/services/common/section-intro";
import { primaryButtonClass, secondaryButtonClass } from "@/components/services/common/type";

export function BuildPreview({ preview }) {
  return (
    <section id="build-work" className="bg-[#f9f4ff] px-5 pb-20 pt-4 md:px-8 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="mx-auto max-w-[1792px] overflow-hidden rounded-[4px] border border-[#ded7e8] bg-[#050505] p-2"
      >
        <div className="relative aspect-[1792/966] overflow-hidden bg-[#050505]">
          <Image
            src={preview.image}
            alt={preview.alt}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}

export function DiagnosticProtocolSection({ section }) {
  return (
    <section className="bg-[#f9f4ff] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1268px]">
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          maxWidth="max-w-[906px]"
        />

        <div className="mt-14 overflow-visible md:mt-16">
          {section.rows.map((row, index) => (
            <motion.div
              key={row.problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
              className="relative grid border border-black bg-transparent md:grid-cols-[1fr_1fr]"
            >
              <div className="min-h-[176px] rounded-[10px] bg-transparent px-8 py-10 md:px-[52px]">
                <div className="flex items-start gap-5">
                  <span className="mt-0.5 text-primary">✺</span>
                  <div>
                    <h3 className="text-[20px] font-[700] leading-[1.15] tracking-[-0.02em] text-primary md:text-[22px]" style={{ fontFamily: "var(--font-display)" }}>
                      {row.problem}
                    </h3>
                    <p className="mt-5 max-w-[445px] text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]">
                      {row.detail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="min-h-[176px] border-t border-black bg-white px-8 py-10 md:border-l md:border-t-0 md:px-[75px]">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-primary">✺</span>
                  <div>
                    <h3 className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary">
                      The Nymbor Fix:
                    </h3>
                    <p className="mt-5 max-w-[445px] text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]">
                      {row.fix}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 hidden h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-[24px] text-white md:flex">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProtocolPanel({ title, stats }) {
  if (!stats?.length) return null;

  return (
    <div className="mt-auto rounded-[12px] bg-black p-6 text-white md:p-8">
      <p className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em]">
        {title || "Build Protocol"}
      </p>
      <div className="mt-4 h-px bg-white/35" />
      <div className={`mt-4 grid gap-3 ${stats.length === 2 ? "md:grid-cols-2" : stats.length > 2 ? "md:grid-cols-3" : ""}`}>
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-[8px] bg-white/10 px-5 py-4 md:px-6 md:py-5">
            <p className="font-mono text-[11px] font-[700] uppercase leading-none tracking-[0.12em] text-white/55">
              {stat.label}
            </p>
            <p className="mt-2 text-[20px] font-[700] leading-tight tracking-[-0.02em] md:text-[22px]" style={{ fontFamily: "var(--font-display)" }}>
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
      className={`flex min-h-[390px] flex-col rounded-[15px] bg-white p-6 md:min-h-[520px] md:p-[54px] ${card.className}`}
    >
      <div className="flex items-start justify-between gap-6">
        <span className="rounded-[7px] border border-black bg-[#f9f4ff] px-4 py-2 font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em]">
          {card.badge}
        </span>
        {card.meta && (
          <span className="pt-2 text-right font-mono text-xs font-[700] uppercase tracking-[0.12em] text-[#4a4752]">
            {card.meta}
          </span>
        )}
      </div>

      <div className="mt-14 flex min-h-[92px] items-center md:mt-16">
        {card.logo && card.showTitleWithLogo ? (
          <div className="flex items-center gap-7">
            <Image
              src={card.logo}
              alt={`${card.title} logo`}
              width={card.logoWidth || 72}
              height={card.logoHeight || 72}
              className="h-auto w-[58px] object-contain md:w-[72px]"
            />
            <h3 className="text-[clamp(34px,3.6vw,44px)] font-[700] leading-none tracking-[-0.035em] text-[#1a1a1a]" style={{ fontFamily: "var(--font-display)" }}>
              {card.title}
            </h3>
          </div>
        ) : card.logo ? (
          <Image
            src={card.logo}
            alt={`${card.title} logo`}
            width={card.logoWidth || 260}
            height={card.logoHeight || 90}
            className={card.logoClassName || "h-auto max-h-[108px] w-auto max-w-full object-contain"}
          />
        ) : (
          <h3 className="max-w-[500px] text-[clamp(34px,3.6vw,44px)] font-[700] leading-[1.05] tracking-[-0.035em] text-[#1a1a1a]" style={{ fontFamily: "var(--font-display)" }}>
            {card.title}
          </h3>
        )}
      </div>

      <p className="mt-8 max-w-[650px] text-[16px] leading-[1.55] text-[#4a4752] md:text-[18px]">
        {card.description}
      </p>

      {card.stats ? (
        <ProtocolPanel title={card.protocolTitle} stats={card.stats} />
      ) : (
        <div className="mt-auto flex items-center justify-between gap-5 border-t border-black/15 pt-4">
          <span className="font-mono text-xs font-[700] uppercase tracking-[0.12em] text-primary">{card.footerLeft}</span>
          <span className="text-right text-[14px] text-[#4a4752] md:text-[15px]">{card.footerRight}</span>
        </div>
      )}
    </motion.article>
  );
}

export function BuildCategoriesSection({ section }) {
  return (
    <section className="bg-[#f9f4ff] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1792px]">
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          maxWidth="max-w-[858px]"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {section.cards.map((card, index) => (
            <BuildCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SystemSynthesisSection({ section }) {
  return (
    <section className="bg-[#f9f4ff] px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-[1792px] gap-7 rounded-[16px] bg-[#050505] px-5 py-8 text-white md:gap-10 md:px-[74px] md:py-[76px] lg:grid-cols-[0.92fr_1.58fr] lg:items-center">
        <div>
          <p className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-white/75">
            {section.eyebrow}
          </p>
          <h2 className="mt-7 max-w-[620px] text-balance text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] md:text-[clamp(34px,3.4vw,44px)] md:leading-[1.02]" style={{ fontFamily: "var(--font-display)" }}>
            {section.title}
          </h2>
          <p className="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-white/80 md:text-[18px]">
            {section.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {section.actions?.map((action, index) => (
              <Link
                key={action.label}
                href={action.href}
                className={index === 0 ? primaryButtonClass : `${secondaryButtonClass} !bg-[var(--accent-yellow)]`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {section.cards.map((card, cardIndex) => (
            <article key={card.title} className="relative min-h-[324px] rounded-[12px] bg-[#171717] px-7 py-8">
              <div className="flex min-h-[48px] items-start justify-between gap-5">
                <p className="font-mono text-xs font-[700] uppercase leading-snug tracking-[0.12em] text-white/60">
                  {card.label}
                </p>
                {cardIndex === 0 && (
                  <span className="grid h-12 w-12 grid-cols-2 gap-1 rounded-[8px] bg-black p-2.5" aria-hidden="true">
                    <span className="rounded-full bg-[#ff4f36]" />
                    <span className="rounded-full bg-primary" />
                    <span className="rounded-full bg-[#1fc96e]" />
                    <span className="rounded-full bg-[#08b7ff]" />
                  </span>
                )}
                {cardIndex === 1 && <Code2 className="h-11 w-11 text-white" strokeWidth={2.5} />}
                {cardIndex === 2 && <Radio className="h-10 w-10 text-white" strokeWidth={2.2} />}
              </div>
              <div className="mt-5 h-px bg-white/35" />
              <h3 className="mt-9 max-w-[235px] text-[22px] font-[700] leading-[1.12] tracking-[-0.02em] text-white md:text-[24px]" style={{ fontFamily: "var(--font-display)" }}>
                {card.title}
              </h3>
              <ul className="mt-12 space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className={`w-fit rounded-[4px] px-4 py-2 font-mono text-xs font-[700] leading-none tracking-[0.04em] ${
                      itemIndex === 1 ? "bg-[var(--accent-yellow)] text-black" : "bg-primary text-white"
                    }`}
                  >
                    - {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DevelopmentTimelineSection({ section }) {
  return (
    <section className="bg-[#f9f4ff] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1792px]">
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          maxWidth="max-w-[858px]"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {section.steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
              className="min-h-[260px] rounded-[10px] border border-black bg-white px-6 py-8 md:min-h-[350px] md:px-[56px] md:py-12"
            >
              <span className="inline-flex rounded-[10px] border border-black bg-[#f9f4ff] px-5 py-4 font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em]">
                Stage {step.number}
              </span>
              <h3 className="mt-20 text-[24px] font-[700] leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </h3>
              <p className="mt-5 max-w-[430px] text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]">
                {step.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WebDevelopmentSections({ service }) {
  return (
    <>
      <BuildPreview preview={service.preview} />
      <DiagnosticProtocolSection section={service.buildSystem} />
      <BuildCategoriesSection section={service.buildCategories} />
      <SystemSynthesisSection section={service.systemSynthesis} />
      <DevelopmentTimelineSection section={service.figmaToLive} />
    </>
  );
}
