"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionIntro from "@/components/services/common/section-intro";

export function CapabilityTicker({ items }) {
  return (
    <div className="border-y border-black bg-[#fbf9ff]">
      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-[serviceTicker_42s_linear_infinite] items-center motion-reduce:animate-none">
          {[...items, ...items].map((item, index) => (
            <div key={`${item}-${index}`} className="flex h-[54px] items-center gap-9 px-5 text-[15px] font-[500] uppercase tracking-[0.035em] text-[#15151a] md:h-[66px] md:px-8 md:text-[16px]" style={{ fontFamily: "var(--font-sora)" }}>
              <span className="whitespace-nowrap">{item}</span><span className="text-[14px] leading-none text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShowcaseStrip({ images }) {
  return (
    <section className="bg-[#f6f0fb] pb-24 pt-3 md:pb-28">
      <div className="flex gap-2 overflow-x-auto px-1.5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-2.5">
        {images.map((image, index) => (
          <motion.div key={`${image.src}-${index}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }} className="relative h-[260px] w-[290px] shrink-0 overflow-hidden rounded-[8px] bg-[#ddd3eb] sm:w-[330px] md:h-[358px] md:w-[330px] lg:w-[346px]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 346px, (min-width: 768px) 330px, 290px" className="object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function MethodSection({ service }) {
  return (
    <section className="border-t border-black/10 bg-[#f6f0fb] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1380px]">
        <SectionIntro eyebrow={service.methodEyebrow} title={service.methodTitle} description={service.methodDescription} maxWidth="max-w-[960px]" />
        <div className="mt-16 grid overflow-hidden rounded-[18px] md:mt-[66px] md:grid-cols-2 lg:grid-cols-3">
          {service.methodCards.map((card, index) => (
            <motion.article key={card.label} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }} className={`flex min-h-[300px] flex-col justify-start rounded-[18px] border border-[#151225] px-8 py-12 md:min-h-[302px] md:px-12 md:py-[50px] ${card.tint ? "bg-[#e6d9fb]" : "bg-[#fffdf8]"}`}>
              <p className="text-[16px] font-[700] uppercase leading-none tracking-[0.08em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>{card.number} / {card.label}</p>
              <h3 className="mt-9 max-w-[320px] text-[26px] font-[600] leading-[1.08] tracking-[-0.04em] text-[#151225] md:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3>
              <p className="mt-7 max-w-[390px] text-[16px] font-[400] leading-[1.48] text-[#151225]" style={{ fontFamily: "var(--font-sora)" }}>{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DiagnosticSection({ service }) {
  return (
    <section className="bg-[#f6f0fb] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1836px]">
        <SectionIntro eyebrow={service.diagnosticEyebrow} title={service.diagnosticTitle} description={service.diagnosticDescription} maxWidth="max-w-[1120px]" />
        <div className="mt-20 overflow-hidden rounded-[18px] border border-[#151225] md:mt-24">
          {service.diagnosticRows.map((row) => (
            <div key={row.problem} className="grid min-h-[132px] border-b border-[#151225] last:border-b-0 md:min-h-[166px] md:grid-cols-2">
              <div className="flex items-center gap-7 bg-[#fffdf8] px-7 py-8 md:px-16 lg:px-[66px]"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd9ce] text-[18px] font-[700] leading-none text-[#ff573f]">x</span><p className="text-[19px] font-[700] leading-[1.25] tracking-[-0.02em] text-[#858585] md:text-[23px] lg:text-[25px]" style={{ fontFamily: "var(--font-mono)" }}>{row.problem}</p></div>
              <div className={`flex items-center gap-7 px-7 py-8 md:px-16 lg:px-[90px] ${row.accent ? "bg-[var(--accent-yellow)]" : "bg-[#e6d9fb]"}`}><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-[17px] font-[700] leading-none text-white">✓</span><p className="text-[19px] font-[700] leading-[1.25] tracking-[-0.02em] text-[#151225] md:text-[23px] lg:text-[25px]" style={{ fontFamily: "var(--font-mono)" }}>{row.outcome}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofSection({ service }) {
  return (
    <section className="bg-[#f6f0fb] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1836px]">
        <SectionIntro eyebrow={service.proofEyebrow} title={service.proofTitle} description={service.proofDescription} />
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {service.proofCards.map((card, index) => (
            <motion.article key={card.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }} className="overflow-hidden rounded-[18px] bg-white">
              <div className="relative h-[290px] bg-[#21120d] sm:h-[390px] md:h-[545px]"><Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /></div>
              <div className="px-8 pb-14 pt-9 md:px-[60px] md:pb-14 md:pt-[58px]"><h3 className="text-[38px] font-[700] leading-none tracking-[-0.055em] text-[#202024] md:text-[50px]" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3><p className="mt-6 max-w-[760px] text-[19px] font-[400] leading-[1.45] tracking-[-0.035em] text-black md:text-[23px]" style={{ fontFamily: "var(--font-display)" }}>{card.description}</p><div className="mt-11 flex flex-wrap gap-3">{card.tags.map((tag) => <span key={tag} className="rounded-[8px] border border-black bg-[#eadcff] px-4 py-3 text-[15px] font-[400] leading-none tracking-[0.02em] text-black md:text-[16px]" style={{ fontFamily: "var(--font-mono)" }}>{tag}</span>)}</div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PipelineSection({ service }) {
  return (
    <section className="bg-[#f6f0fb] px-5 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1836px]">
        <SectionIntro eyebrow={service.pipelineEyebrow} title={service.pipelineTitle} description={service.pipelineDescription} maxWidth="max-w-[840px]" />
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {service.pipelineCards.map((card, index) => (
            <motion.article key={card.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }} className="min-h-[266px] rounded-[18px] border border-black bg-white px-10 py-12 md:px-10 md:py-12">
              <p className="text-[16px] font-[700] uppercase tracking-[0.08em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>{card.number} // Phase</p><h3 className="mt-9 text-[31px] font-[700] leading-none tracking-[-0.045em] text-[#151225] md:text-[34px]" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3><p className="mt-5 max-w-[340px] text-[17px] font-[400] leading-[1.45] text-[#151225] md:text-[18px]" style={{ fontFamily: "var(--font-sora)" }}>{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
