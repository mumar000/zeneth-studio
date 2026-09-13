"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { homepageFaqs } from "@/lib/homepage-faqs";

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-[12px] md:rounded-[14px]"
      style={{ backgroundColor: open ? "#D4C8F5" : "#E2D8F7" }}
      animate={{ backgroundColor: open ? "#D4C8F5" : "#E2D8F7" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      whileHover={{ backgroundColor: "#DAD0F7" }}
    >
      {/* Question row */}
      <h3>
        <button
          type="button"
          id={`faq-trigger-${index}`}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          onClick={() => setOpen((current) => !current)}
          className="flex min-h-11 w-full items-center justify-between px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black md:px-7 md:py-6"
        >
          <span
            className="text-[15px] font-[500] leading-[1.35] text-[#1a1a1a] md:text-[18px]"
            style={{ fontFamily: "var(--font-sora)", letterSpacing: "0.02em" }}
          >
            {faq.q}
          </span>

          {/* Animated ⊕ → × icon */}
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 135 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#1a1a1a]/40 md:h-8 md:w-8"
          >
            <svg width="15" height="15" viewBox="0 0 13 13" fill="none">
              <line x1="6.5" y1="1" x2="6.5" y2="12" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="1" y1="6.5" x2="12" y2="6.5" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </motion.span>
        </button>
      </h3>

      {/* Keep answers in the HTML so search and AI crawlers can read them. */}
      <motion.div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{
          height: { type: "spring", stiffness: 380, damping: 32 },
          opacity: { duration: 0.22, ease: "easeInOut" },
        }}
        className="overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{
            y: open ? 0 : -18,
            filter: open ? "blur(0px)" : "blur(4px)",
          }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="px-5 pb-5 md:px-7 md:pb-7"
        >
          <div className="mb-4 h-px bg-[#1a1a1a]/10 md:mb-5" />
          <p
            className="max-w-[560px] text-[14px] leading-[1.6] text-[#3a3a3a] md:text-[16px] md:leading-[1.75]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {faq.a}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function FaqSection({
  faqs = homepageFaqs,
  heading = "Frequently Asked Questions",
}) {
  const headingWords = heading.split(" ");

  return (
    <section className="relative z-10 w-full  px-4 py-14 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">

          {/* Left: heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="text-3xl font-[700] leading-[1.0] tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {headingWords.map((word, index) => (
              <React.Fragment key={`${word}-${index}`}>
                {index > 0 && <br />}
                {word}
              </React.Fragment>
            ))}
          </motion.h2>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col gap-[10px]"
          >
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
