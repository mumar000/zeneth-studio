"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Who do you work with?",
    a: "We work with founders, startups, and growing brands who take their visual identity seriously. If you're ready to invest in design that converts, we're your team.",
  },
  {
    q: "Can you redesign my existing Shopify store?",
    a: "Yes. We specialize in Shopify redesigns — from full UX overhauls to conversion-focused refreshes. We work in custom themes and Liquid.",
  },
  {
    q: "What does Zeneth Studio do?",
    a: "We build brand identities, design high-converting websites, and develop them to production — everything from visual strategy to live site.",
  },
  {
    q: "What makes Zeneth Studio different?",
    a: "We don't separate strategy from execution. The same team that thinks about your positioning also designs and builds your product. No handoffs, no lost context.",
  },
  {
    q: "Do you help with product pages?",
    a: "Product page optimization is one of our most common engagements — we audit, redesign, and rebuild pages to reduce bounce and increase conversion.",
  },
  {
    q: "Can you improve conversion rate?",
    a: "It's what we're built for. We combine design, copy framing, and UX analysis to systematically remove friction from the buyer journey.",
  },
  {
    q: "Do you work with existing brands?",
    a: "Absolutely. Many of our clients come to us with an existing brand that needs evolution — not a rebrand from scratch. We meet you where you are.",
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setOpen((o) => !o)}
      className="cursor-pointer rounded-[12px] overflow-hidden select-none md:rounded-[14px]"
      style={{ backgroundColor: open ? "#D4C8F5" : "#E2D8F7" }}
      animate={{ backgroundColor: open ? "#D4C8F5" : "#E2D8F7" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      whileHover={{ backgroundColor: "#DAD0F7" }}
    >
      {/* Question row */}
      <div className="flex items-center justify-between px-5 py-4 md:px-7 md:py-6">
        <span
          className="text-[15px] leading-[1.35] text-[#1a1a1a] font-[500] md:text-[18px]"
          style={{ fontFamily: "var(--font-sora)", letterSpacing: "0.02em" }}
        >
          {faq.q}
        </span>

        {/* Animated ⊕ → × icon */}
        <motion.div
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#1a1a1a]/40 md:h-8 md:w-8"
        >
          <svg width="15" height="15" viewBox="0 0 13 13" fill="none">
            <line x1="6.5" y1="1" x2="6.5" y2="12" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="1" y1="6.5" x2="12" y2="6.5" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      {/* Animated answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 380, damping: 32 },
              opacity: { duration: 0.22, ease: "easeInOut" },
            }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={{ y: -18, filter: "blur(4px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              exit={{ y: -10, filter: "blur(4px)" }}
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
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section className="relative z-10 w-full bg-[#F0EBFB] px-4 py-14 sm:px-6 md:px-10 md:py-28">
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
            Frequently
            <br />Asked
            <br />Questions
          </motion.h2>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col gap-[10px]"
          >
            {FAQS.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
