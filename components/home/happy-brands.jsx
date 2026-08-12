"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LAVENDER = "#C9B8F5";
const CREAM = "#FFFFFF";

const QUOTE =
  "This is our 2nd project with Nymbor. Simply put, they're best in the game.";

// Real brand logos live in /public/home-logo (home-logo1 = Féroce, home-logo3 = Resight)
const FEROCE = { src: "/home-logo/home-logo1.png", w: 122, h: 18 };
const RESIGHT = { src: "/home-logo/home-logo3.png", w: 117, h: 30 };

const testimonials = [
  { tone: LAVENDER, logo: FEROCE, avatar: "/testimonials/avatar1.png" },
  { tone: CREAM, logo: RESIGHT, avatar: "/testimonials/avatar2.png" },
  { tone: LAVENDER, logo: FEROCE, avatar: "/testimonials/avatar3.png" },
  { tone: "#FFFDF8", logo: RESIGHT, avatar: "/testimonials/avatar4.png" },
].map((t) => ({
  ...t,
  quote: QUOTE,
  name: "Drew Ayesse",
  role: "Founder & CEO - Feroce",
}));

export default function HappyBrands() {
  return (
    <section className="relative z-10 w-full px-4 py-14 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1800px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-center text-3xl font-[700] tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          300+ Happy Brands Worldwide
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-0 md:mt-20 lg:grid-cols-4">
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
              className="relative flex min-h-[285px] flex-col rounded-[15px] border border-black p-5 sm:min-h-[320px] sm:border-y sm:border-l-0 sm:border-r md:min-h-[420px] md:p-10"
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
                className="absolute inset-x-5 top-1/2 -translate-y-1/2 text-left text-lg leading-[1.4] text-[#1a1a1a] sm:text-xl md:inset-x-10 md:text-2xl"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                <span>&ldquo;{t.quote}&rdquo;</span>
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3">
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
