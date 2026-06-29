"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LAVENDER = "#E9DCFF";
const CREAM = "#FFFDF8";

const QUOTE =
  "This is our 2nd project with Zeneth. Simply put, they're best in the game.";

// Real brand logos live in /public/home-logo (home-logo1 = Féroce, home-logo3 = Resight)
const FEROCE = { src: "/home-logo/home-logo1.png", w: 122, h: 18 };
const RESIGHT = { src: "/home-logo/home-logo3.png", w: 117, h: 30 };

const testimonials = [
  { tone: LAVENDER, logo: FEROCE, avatar: "/testimonials/avatar1.png" },
  { tone: CREAM, logo: RESIGHT, avatar: "/testimonials/avatar2.png" },
  { tone: LAVENDER, logo: FEROCE, avatar: "/testimonials/avatar3.png" },
  { tone: CREAM, logo: RESIGHT, avatar: "/testimonials/avatar4.png" },
].map((t) => ({
  ...t,
  quote: QUOTE,
  name: "Drew Ayesse",
  role: "Founder & CEO - Feroce",
}));

export default function HappyBrands() {
  return (
    <section className="relative z-10 w-full px-4 sm:px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1800px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-[700] tracking-[-0.03em] text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          300+ Happy Brands Worldwide
        </motion.h2>

        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="flex min-h-[360px] md:min-h-[380px] flex-col rounded-[20px] border border-black/10 p-7 md:p-9"
              style={{ backgroundColor: t.tone }}
            >
              <Image
                src={t.logo.src}
                width={t.logo.w}
                height={t.logo.h}
                alt="Brand logo"
                className="object-contain object-left"
              />

              <blockquote
                className="flex flex-1 items-center text-lg md:text-xl leading-[1.45] text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                <span>&ldquo;{t.quote}&rdquo;</span>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  width={40}
                  height={40}
                  alt={t.name}
                  className="rounded-[9px] object-cover ring-1 ring-black/10"
                />
                <span className="leading-tight">
                  <span
                    className="block text-sm font-[700] text-[#1a1a1a]"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="block text-sm text-black/55"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
