"use client";

import { motion } from "framer-motion";

export default function SectionIntro({ eyebrow, title, description, maxWidth = "max-w-[900px]" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} className={`mx-auto ${maxWidth} text-center`}>
      <p className="text-[15px] font-[700] uppercase tracking-[0.09em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>{eyebrow}</p>
      <h2 className="mt-9 text-[38px] font-[700] leading-[1.03] tracking-[-0.045em] text-[#202024] md:text-[56px]" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      {description && <p className="mx-auto mt-8 max-w-[850px] text-[18px] font-[400] leading-[1.45] tracking-[-0.035em] text-black md:text-[22px]" style={{ fontFamily: "var(--font-display)" }}>{description}</p>}
    </motion.div>
  );
}
