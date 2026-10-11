"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LAVENDER = "#E9DCFF";
const YELLOW = "#F8E574";
const CREAM = "#FFFDF8";

const rows = [
  {
    n: "01",
    cat: "Brand",
    tone: LAVENDER,
    usual: {
      title: "The identity stops at the logo.",
      desc: "Every new page, presentation, and post needs someone to invent the rest.",
    },
    nymbor: {
      title: "The whole brand has a vocabulary.",
      desc: "Logo, type, color, imagery, and layout rules give every application a recognizable starting point.",
    },
  },
  {
    n: "02",
    cat: "Design",
    tone: YELLOW,
    usual: {
      title: "The mockup only fits the mockup.",
      desc: "Longer headlines, smaller screens, and real product information expose the missing decisions.",
    },
    nymbor: {
      title: "Real content gets designed in.",
      desc: "We work through page hierarchy, mobile layouts, and interaction states before the build begins.",
    },
  },
  {
    n: "03",
    cat: "Build",
    tone: LAVENDER,
    usual: {
      title: "The live site loses the details.",
      desc: "Spacing, typography, and interactions drift when design decisions get lost during handoff.",
    },
    nymbor: {
      title: "The details survive launch.",
      desc: "Design and development review the same pages, from responsive behavior to the final form submission.",
    },
  },
  {
    n: "04",
    cat: "Handoff",
    tone: YELLOW,
    usual: {
      title: "Nobody knows how to update it.",
      desc: "The project is finished, but changing a page or creating a new asset still needs an explanation.",
    },
    nymbor: {
      title: "Your team can take it from here.",
      desc: "We organize the brand files, explain the CMS, and document the decisions you will need after launch.",
    },
  },
];

const labelCls =
  "text-[10px] font-[700] uppercase tracking-[0.1em] text-black/45 md:text-lg md:font-[600] md:normal-case md:tracking-normal lg:text-xl";
const titleCls =
  "mt-2.5 font-[family-name:var(--font-display)] text-[24px] font-[500] not-italic leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:mt-5 md:font-mono md:text-[32px] md:leading-[1.2] md:tracking-[-0.05em]";
const descCls =
  "mt-2.5 max-w-[560px] text-[13px] leading-[1.5] text-black/55 md:mt-5 md:text-lg md:leading-[1.25] lg:text-[20px]";

export default function WebsiteGaps() {
  return (
    <section className="relative z-10 w-full px-4 py-14 sm:px-6 md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto max-w-[1840px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-center"
        >
          <p
            className="text-[10px] font-[700] uppercase tracking-[0.16em] text-primary md:text-base md:tracking-normal"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Why work with Nymbor
          </p>
          <h2
            className="mx-auto mt-5 max-w-[1120px] text-[32px] font-[650] leading-[1.02] tracking-[-0.04em] text-[#1a1a1a] md:mt-9 md:text-7xl md:font-[700] md:leading-[0.98] md:tracking-[-0.03em] lg:text-[80px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A good idea should survive every handoff.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mt-7 overflow-hidden rounded-[14px] border border-black/70 md:mt-20 md:rounded-[20px]"
        >
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="flex min-h-[50px] items-center px-4 md:min-h-[74px] md:border-r md:px-16 lg:px-16"
              style={{ backgroundColor: CREAM }}
            >
              <span
                className="text-[11px] font-[700] uppercase tracking-[0.1em] text-black/45 md:text-xl md:font-[400] md:tracking-[0.08em] lg:text-[24px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Where projects get stuck
              </span>
            </div>
            <div
              className="hidden min-h-[74px] items-center px-8 md:flex md:px-16 lg:px-[7.75rem]"
              style={{ backgroundColor: CREAM }}
            >
              <span
                className="text-base uppercase tracking-[0.08em] text-primary md:text-xl lg:text-[24px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                The Nymbor Way
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row) => (
            <div
              key={row.n}
              className="relative grid grid-cols-1 border-t border-black/70 md:grid-cols-2"
            >
              {/* Usual (left) */}
              <div
                className="flex flex-col justify-center px-4 py-5 md:min-h-[260px] md:border-r md:border-black/70 md:px-16 md:py-12 lg:px-16"
                style={{ backgroundColor: CREAM }}
              >
                <p className={labelCls}>
                  {row.n} / {row.cat}
                </p>
                <h3
                  className={`${titleCls} text-black/50 line-through decoration-2 decoration-black/40`}
                >
                  {row.usual.title}
                </h3>
                <p className={descCls}>{row.usual.desc}</p>
              </div>

              {/* Nymbor (right) */}
              <div
                className="flex flex-col justify-center border-t border-black/70 px-4 py-5 md:min-h-[260px] md:border-t-0 md:px-16 md:py-12 lg:px-[7.75rem]"
                style={{ backgroundColor: row.tone }}
              >
                <p
                  className="mb-3 text-[10px] font-[700] uppercase tracking-[0.1em] text-primary md:hidden"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  The Nymbor Way
                </p>
                <p className={labelCls}>
                  {row.n} / {row.cat}
                </p>
                <h3 className={titleCls}>
                  {row.nymbor.title}
                </h3>
                <p className={descCls}>{row.nymbor.desc}</p>
              </div>

              {/* Arrow on the divider (desktop) */}
              <span className="absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/15 bg-white md:grid">
                <ArrowRight className="h-6 w-6 text-[#1a1a1a]" strokeWidth={2} />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
