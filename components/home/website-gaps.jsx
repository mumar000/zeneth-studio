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

const labelCls = "text-sm font-medium text-black/55";
const titleCls = "mt-3 text-2xl md:text-3xl text-[#1a1a1a]";
const descCls = "mt-4 text-base leading-relaxed text-black/55 max-w-lg";

export default function WebsiteGaps() {
  return (
    <section className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-24 md:py-24">
      <div className="mx-auto container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto max-w-6xl text-center text-5xl sm:text-6xl md:text-7xl font-[700] leading-[1.05] tracking-[-0.03em] text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Most websites die in the gaps between people.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mt-14 md:mt-20 overflow-hidden rounded-[24px] border border-black/15"
        >
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="px-8 md:px-12 py-5 border-b border-black/15 md:border-r"
              style={{ backgroundColor: CREAM }}
            >
              <span
                className="text-xs uppercase tracking-[0.18em] text-black/50"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                The Usual Way
              </span>
            </div>
            <div
              className="hidden md:block px-8 md:px-12 py-5 border-b border-black/15"
              style={{ backgroundColor: CREAM }}
            >
              <span
                className="text-xs uppercase tracking-[0.18em] text-primary"
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
              className="relative grid grid-cols-1 md:grid-cols-2 border-t border-black/15"
            >
              {/* Usual (left) */}
              <div
                className="px-8 md:px-12 py-10 md:py-14 md:border-r border-black/15"
                style={{ backgroundColor: CREAM }}
              >
                <p className={labelCls}>
                  {row.n} / {row.cat}
                </p>
                <h3
                  className={`${titleCls} text-black/60 line-through decoration-black/40`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {row.usual.title}
                </h3>
                <p className={descCls}>{row.usual.desc}</p>
              </div>

              {/* Zeneth (right) */}
              <div
                className="px-8 md:px-12 py-10 md:py-14 border-t border-black/15 md:border-t-0"
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
              <span className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/15 bg-white shadow-sm md:grid">
                <ArrowRight className="h-5 w-5 text-[#1a1a1a]" strokeWidth={2} />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
