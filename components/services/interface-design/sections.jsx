"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionIntro from "@/components/services/common/section-intro";

export function ScreenShowcase({ images }) {
  return <section id="screen-work" className="bg-[#f6f0fb] px-5 pb-24 pt-6 md:px-8 md:pb-32 md:pt-10"><div className="mx-auto grid max-w-[1800px] gap-4 lg:grid-cols-3">{images.map((image, index) => <motion.div key={image.alt} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }} className="relative h-[260px] overflow-hidden rounded-[12px] border-[3px] border-[#ddd8e6] bg-white md:h-[386px]"><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover object-top" /></motion.div>)}</div></section>;
}

export function DiagnosisSection({ section }) {
  return <section className="bg-[#f6f0fb] px-5 py-20 md:px-8 md:py-24 lg:py-28"><div className="mx-auto max-w-[1800px]"><SectionIntro eyebrow={section.eyebrow} title={section.title} description={section.description} maxWidth="max-w-[980px]" /><div className="mt-16 grid gap-6 lg:grid-cols-3">{section.cards.map((card, index) => <motion.article key={card.label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }} className="min-h-[340px] rounded-[18px] border border-black bg-white px-8 py-12 shadow-[4px_5px_0_0_#000] md:px-[58px] md:py-14"><p className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary">{card.number}{" // "}{card.label}</p><h3 className="mt-11 max-w-[470px] text-[26px] font-[700] leading-[1.08] tracking-[-0.03em] text-[#1a1a1a] md:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3><p className="mt-11 max-w-[430px] text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]">{card.body}</p></motion.article>)}</div></div></section>;
}

export function DecisionEngineSection({ section }) {
  return <section className="bg-[#f6f0fb] px-5 py-20 md:px-8 md:py-24 lg:py-28"><div className="mx-auto max-w-[1800px]"><SectionIntro eyebrow={section.eyebrow} title={section.title} description={section.description} maxWidth="max-w-[760px]" /><div className="mt-16 grid gap-3 md:grid-cols-2 xl:grid-cols-5">{section.cards.map((card, index) => <motion.article key={card.label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }} className={`min-h-[300px] rounded-[18px] border border-[#151225] px-8 py-10 md:px-12 ${card.tint ? "bg-[#e6d9fb]" : "bg-white"}`}><span className={`inline-flex rounded-full px-3 py-2 font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-[#151225] ${card.tint ? "bg-white" : "bg-[#e6d9fb]"}`} style={{ fontFamily: "var(--font-mono)" }}>{card.label}</span><h3 className="mt-12 text-[22px] font-[700] leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[24px]" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3><p className="mt-7 text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]">{card.body}</p></motion.article>)}</div><div className="mx-auto mt-28 max-w-[660px] rounded-[8px] border border-black bg-[var(--accent-yellow)] px-9 py-7"><span className="inline-flex rounded-[5px] bg-black px-3 py-2 font-mono text-xs font-[700] uppercase leading-none tracking-[0.12em] text-white">{section.noteLabel}</span><p className="mt-4 text-[16px] leading-[1.55] text-[#1a1a1a]">{section.note}</p></div></div></section>;
}

export function RebuildComparisonSection({ section }) {
  return (
    <section className="bg-[#f6f0fb] px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          maxWidth="max-w-[980px]"
        />

        <div className="mt-12 grid gap-4 md:mt-14 lg:grid-cols-2">
          {[section.before, section.after].map((panel, index) => (
            <motion.article
              key={panel.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="overflow-hidden rounded-[16px] border border-black/10 bg-white p-4 shadow-[0_14px_40px_rgba(28,16,48,0.06)] md:p-6"
            >
              <span
                className={`inline-flex rounded-full px-3 py-2 text-xs font-[700] uppercase leading-none tracking-[0.12em] md:text-[12px] ${
                  index === 0
                    ? "bg-[#ffe4de] text-[#d9341d]"
                    : "bg-[#dcc8ff] text-primary"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {panel.label}
              </span>
              <div className="relative mt-4 h-[520px] overflow-hidden rounded-[12px] bg-[#ede8f5] md:h-[720px] lg:h-[920px]">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  width={638}
                  height={2060}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="h-auto w-full object-top"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {section.results.map((result, index) => (
            <motion.article
              key={result.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="rounded-[14px] border border-black/15 bg-white px-6 py-7 md:px-7 md:py-8"
            >
              <p
                className="text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {result.label}
              </p>
              <h3
                className="mt-5 text-[22px] font-[700] leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[24px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {result.title}
              </h3>
              <p
                className="mt-4 text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]"
              >
                {result.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LiveWorkSection({ section }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = section.tabs[activeIndex];
  return <section className="bg-[#f6f0fb] px-5 py-20 md:px-8 md:py-24 lg:py-28"><div className="mx-auto max-w-[1800px]"><SectionIntro eyebrow={section.eyebrow} title={section.title} maxWidth="max-w-[980px]" /><div className="mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-4">{section.tabs.map((tab, index) => <button key={tab.label} type="button" onClick={() => setActiveIndex(index)} className={`min-h-[52px] rounded-full border border-black px-6 font-mono text-xs font-[700] uppercase tracking-[0.14em] transition-colors duration-200 md:px-7 md:text-sm ${index === activeIndex ? "bg-primary text-white" : "bg-white text-[#151225] hover:bg-[#eee7fb]"}`}>{tab.label}</button>)}</div><motion.div key={active.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }} className="relative mt-12 h-[520px] overflow-hidden rounded-[12px] border-[3px] border-[#ddd8e6] bg-white md:h-[720px] lg:h-[830px]"><Image src={active.image} alt={active.alt} fill sizes="100vw" priority={activeIndex === 0} className="object-cover object-top" /></motion.div></div></section>;
}

export function SystemTimelineSection({ section }) {
  return (
    <section className="bg-[#f6f0fb] px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="relative mx-auto grid max-w-[1420px] gap-10 md:grid-cols-[35%_1fr] md:items-start md:gap-12 lg:gap-16">
        <div className="self-start md:sticky md:top-24 md:z-10 md:h-fit md:pr-4 lg:top-28">
          <p
            className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {section.eyebrow}
          </p>
          <h2
            className="mt-5 max-w-[500px] text-balance text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:text-[clamp(34px,4.6vw,56px)] md:leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {section.title}
          </h2>
          <p
            className="mt-5 max-w-[430px] text-[16px] leading-[1.55] text-[#4a4752] md:text-[18px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {section.description}
          </p>
        </div>

        <div className="relative pl-7 md:pl-14">
          <div className="absolute bottom-0 left-[8px] top-0 w-px bg-primary/45 md:left-[23px]" />
          {section.phases.map((phase, index) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative pb-5 last:pb-0 md:pb-6"
            >
              <span className="absolute -left-[26px] top-7 h-[18px] w-[18px] rounded-full border-[5px] border-primary bg-[#f6f0fb] md:-left-[39px]" />
              <article className="rounded-[14px] border border-black/15 bg-white px-5 py-6 shadow-[0_8px_24px_rgba(28,16,48,0.04)] md:px-7 md:py-7">
                <p
                  className="text-xs font-[700] uppercase leading-none tracking-[0.12em] text-primary"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {phase.label}
                </p>
                <h3
                  className="mt-3 text-[22px] font-[700] leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[24px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {phase.title}
                </h3>
                <p
                  className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-[#4a4752] md:text-[16px]"
                >
                  {phase.body}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
