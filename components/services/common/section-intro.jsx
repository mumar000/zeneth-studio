"use client";

import { motion } from "framer-motion";

export default function SectionIntro({ eyebrow, title, description, maxWidth = "max-w-[900px]" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} className={`mx-auto ${maxWidth} text-center`}>
      <p className="font-mono text-xs font-[700] uppercase leading-none tracking-[0.16em] text-primary">{eyebrow}</p>
      <h2 className="mt-5 text-balance text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:mt-6 md:text-[clamp(34px,4.6vw,56px)] md:leading-none" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      {description && <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.55] text-[#4a4752] md:mt-6 md:text-[18px]">{description}</p>}
    </motion.div>
  );
}
