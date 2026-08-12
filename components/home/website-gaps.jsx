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
      title: "Logo file and vibes",
      desc: "A pretty PDF, a color palette, maybe a few rules. Then the website has to guess the rest",
    },
    zeneth: {
      title: "A system the site can use.",
      desc: "Type, spacing, sections, buttons, image style, and visual rules shaped for real pages.",
    },
  },
  {
    n: "02",
    cat: "Design",
    tone: YELLOW,
    usual: {
      title: "Pretty screens that break.",
      desc: "The mockup looks sharp until real content, mobile views, and the platform touch it.",
    },
    zeneth: {
      title: "Layouts built for the real thing.",
      desc: "Pages are designed around the build, not fantasy sections that collapse later",
    },
  },
  {
    n: "03",
    cat: "Build",
    tone: LAVENDER,
    usual: {
      title: "The dev “gets it close.”",
      desc: "Spacing changes. Motion disappears. The live site becomes a softer version of the idea",
    },
    zeneth: {
      title: "The details survive launch.",
      desc: "The build keeps the design decisions intact, so the site does not lose its edge at the end.",
    },
  },
  {
    n: "04",
    cat: "Handoff",
    tone: YELLOW,
    usual: {
      title: "Feedback through a filter.",
      desc: "Your notes turn into tickets, summaries, and “let me ask the team” moments.",
    },
    zeneth: {
      title: "You talk to the people making it.",
      desc: "Cleaner calls, fewer translations, and a project that does not need a middleman to make sense",
    },
  },
];

const labelCls = "text-xs font-[600] text-black/55 md:text-lg lg:text-xl";
const titleCls = "mt-3 text-xl leading-[1.15] text-[#1a1a1a] md:mt-5 md:text-3xl lg:text-[34px]";
const descCls = "mt-3 max-w-[560px] text-sm leading-[1.45] text-black/55 md:mt-5 md:text-lg md:leading-[1.25] lg:text-[20px]";

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
            className="text-sm font-[700] uppercase text-primary sm:text-base"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Why This Exists
          </p>
          <h2
            className="mx-auto mt-7 max-w-[1120px] text-3xl font-[700] leading-[0.98] tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl md:mt-9 md:text-7xl lg:text-[80px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Most websites die in the gaps between people.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mt-8 overflow-hidden rounded-[16px] border border-black/70 md:mt-20 md:rounded-[20px]"
        >
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="flex min-h-[56px] items-center px-5 md:min-h-[74px] md:border-r md:px-16 lg:px-16"
              style={{ backgroundColor: CREAM }}
            >
              <span
                className="text-base uppercase tracking-[0.08em] text-black/50 md:text-xl lg:text-[24px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                The Usual Way
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
                The Zeneth Way
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
                className="flex flex-col justify-center px-5 py-6 md:min-h-[260px] md:border-r md:border-black/70 md:px-16 md:py-12 lg:px-16"
                style={{ backgroundColor: CREAM }}
              >
                <p className={labelCls}>
                  {row.n} / {row.cat}
                </p>
                <h3
                  className={`${titleCls} text-black/50 line-through decoration-2 decoration-black/40`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {row.usual.title}
                </h3>
                <p className={descCls}>{row.usual.desc}</p>
              </div>

              {/* Zeneth (right) */}
              <div
                className="flex flex-col justify-center border-t border-black/70 px-5 py-6 md:min-h-[260px] md:border-t-0 md:px-16 md:py-12 lg:px-[7.75rem]"
                style={{ backgroundColor: row.tone }}
              >
                <p className={labelCls}>
                  {row.n} / {row.cat}
                </p>
                <h3 className={titleCls} style={{ fontFamily: "var(--font-mono)" }}>
                  {row.zeneth.title}
                </h3>
                <p className={descCls}>{row.zeneth.desc}</p>
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
