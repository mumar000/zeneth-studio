"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const stages = [
  { number: "01", title: "DESIGN APPROVED", description: "Real Content in Figma", image: "/works/arpm/getting-live/design-approved.png", imageWidth: 1132, imageHeight: 672, imageClass: "left-[9.7%] top-[25.3%] w-[83%]" },
  { number: "02", title: "LEGACY BRIDGE", description: "Old and new data aligned", diagram: "bridge" },
  { number: "03", title: "PLUGIN MIGRATION", description: "Size wall and failed unpack", diagram: "migration" },
  { number: "04", title: "HOST-NATIVE PUSH", description: "Dev mirrored to production", diagram: "push" },
  { number: "05", title: "ARPM.COM", description: "Polished Through July", image: "/works/arpm/getting-live/arpm-live.png", imageWidth: 1208, imageHeight: 736, logo: "/works/arpm/getting-live/wordpress.png", imageClass: "left-[5.5%] top-[24%] w-[89%]" },
];

function Pill({ children, dark = false, maroon = false }) {
  return <span className={`rounded-full px-2 py-1 text-[9px] leading-none tracking-[0.02em] ${maroon ? "bg-[#870b2d] text-white" : dark ? "bg-[#222] text-white" : "bg-[#e8e5de] text-[#222]"}`}>{children}</span>;
}

function Diagram({ type }) {
  const isBridge = type === "bridge";
  const isMigration = type === "migration";
  return (
    <div className="absolute left-[8%] top-[23%] flex h-[41%] w-[84%] flex-col items-center justify-center gap-2 text-center">
      {isBridge ? (
        <>
          <div className="flex gap-1"><Pill>Legacy shortcodes</Pill><Pill>ACF property data</Pill><Pill>Houzez fields</Pill></div>
          <div className="h-4 w-px bg-[#222]/50" />
          <Pill dark>Custom Bridge</Pill>
          <div className="h-4 w-px bg-[#222]/50" />
          <Pill maroon>One searchable property model</Pill>
        </>
      ) : isMigration ? (
        <>
          <div className="flex items-center gap-2"><Pill>Old Site Plugins</Pill><span className="text-xs">→</span><Pill maroon>Migrated to</Pill></div>
          <div className="h-6 w-px bg-[#222]/50" />
          <Pill dark>New Site</Pill>
        </>
      ) : (
        <>
          <Pill>Dev Site</Pill>
          <div className="h-5 w-px bg-[#222]/50" />
          <Pill maroon>Host-Native Push</Pill>
          <div className="h-5 w-px bg-[#222]/50" />
          <Pill dark>Production Site</Pill>
        </>
      )}
    </div>
  );
}

function StageCard({ stage, index, reducedMotion }) {
  const desktopLeft = ["2xl:left-[4.323vw]", "2xl:left-[22.708vw]", "2xl:left-[41.094vw]", "2xl:left-[59.479vw]", "2xl:left-[77.865vw]"][index];
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.07, ease }}
      className={`relative min-h-[360px] overflow-hidden rounded-[30px] bg-white px-7 py-6 text-[#222] 2xl:absolute 2xl:top-[33.854vw] 2xl:h-[19.948vw] 2xl:min-h-0 2xl:w-[17.76vw] 2xl:px-[1.72vw] 2xl:py-[1.51vw] ${desktopLeft}`}
    >
      <div className="flex items-center justify-between text-[16px] leading-[1.4] tracking-[0.03em] 2xl:text-[0.833vw]">
        <span>{stage.number}</span>
        {stage.logo ? <Image src={stage.logo} alt="WordPress" width={44} height={44} className="h-auto w-[38px] 2xl:w-[2.3vw]" /> : index === 0 ? <Image src="/works/arpm/getting-live/figma.png" alt="Figma" width={32} height={32} className="h-auto w-[28px] 2xl:w-[1.67vw]" /> : null}
      </div>
      {stage.image ? <Image src={stage.image} alt="Launch stage visual" width={stage.imageWidth} height={stage.imageHeight} quality={100} className={`absolute h-auto ${stage.imageClass}`} sizes="(min-width: 1536px) 15vw, 300px" /> : <Diagram type={stage.diagram} />}
      <div className="absolute bottom-6 left-7 right-6 2xl:bottom-[1.51vw] 2xl:left-[1.72vw] 2xl:right-[1.25vw]">
        <h3 className="text-[20px] leading-[1.25] tracking-[0.03em] 2xl:text-[1.25vw]">{stage.title}</h3>
        <p className="mt-2 text-[15px] leading-[1.35] tracking-[0.03em] text-black/45 2xl:mt-[0.42vw] 2xl:text-[0.833vw]">{stage.description}</p>
      </div>
    </motion.article>
  );
}

export default function GettingLive() {
  const reducedMotion = useReducedMotion();
  return (
    <section aria-labelledby="getting-live-heading" data-node-id="166:70" className="relative isolate overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:aspect-[1920/1143] 2xl:px-0 2xl:py-0" style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}>
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease }}>
        <p className="text-[18px] uppercase leading-[1.4] tracking-[0.03em] text-black/60 sm:text-[24px] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[8.021vw] 2xl:text-[1.25vw]">06 / Getting It Live</p>
        <h2 id="getting-live-heading" className="mt-7 max-w-[760px] text-[clamp(42px,5.4vw,64px)] leading-[1.1] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[11.667vw] 2xl:mt-0 2xl:w-[35.313vw] 2xl:text-[3.333vw]">The glamorous part:<br />knowing what not to do.</h2>
        <p className="mt-8 max-w-[620px] text-[20px] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[57.396vw] 2xl:top-[20vw] 2xl:mt-0 2xl:w-[28.229vw] 2xl:text-[1.25vw]">A giant migration package failed overnight. WP Engine restored the backup. We stopped forcing a fragile route and used the host’s native staging-to-production push instead.</p>
      </motion.div>
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:mt-0 2xl:block">
        {stages.map((stage, index) => <StageCard key={stage.number} stage={stage} index={index} reducedMotion={reducedMotion} />)}
      </div>
    </section>
  );
}
