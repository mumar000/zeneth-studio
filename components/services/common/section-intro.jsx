"use client";

import { motion } from "framer-motion";

export default function SectionIntro({ eyebrow, title, description, maxWidth = "max-w-[900px]" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} className={`mx-auto ${maxWidth} text-center`}>
      <p className="text-[12px] font-[700] uppercase tracking-[0.09em] text-primary md:text-[15px]" style={{ fontFamily: "var(--font-mono)" }}>{eyebrow}</p>
      <h2 className="mt-5 text-[30px] font-[700] leading-[1.05] tracking-[-0.04em] text-[#202024] md:mt-9 md:text-[56px] md:leading-[1.03] md:tracking-[-0.045em]" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      {description && <p className="mx-auto mt-4 max-w-[760px] text-[15px] font-[400] text-black/75 md:mt-7 md:text-[20px]" style={{ fontFamily: "var(--font-sora)" }}>{description}</p>}
    </motion.div>
  );
}
