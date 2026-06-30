"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicePanel({
  price,
  title,
  description,
  bullets,
  exploreLabel,
  exploreHref = "#",
  getLabel,
  getHref = "#",
  image,
  imageAlt = "Service showcase",
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] rounded-[24px] overflow-hidden border border-black/10"
    >
      {/* Left: text content */}
      <div className="bg-white px-10 py-12 md:px-14 md:py-16 flex flex-col">
        <p
          className="text-[#7C3AED] font-medium text-[15px]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          [Starting at {price}]
        </p>

        <h3
          className="mt-4 text-[52px] md:text-[68px] font-[700] leading-[1.0] tracking-[-0.03em] text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>

        <p
          className="mt-5 text-[15px] leading-[1.65] text-black/45 max-w-[300px]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {description}
        </p>

        <ul className="mt-10 space-y-6" style={{ fontFamily: "var(--font-sora)" }}>
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-[15px] text-[#1a1a1a] leading-[1.55]"
            >
              <span className="mt-0.5 text-[#7C3AED] text-base flex-shrink-0">✳</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-14 flex flex-wrap gap-3">
          <Link
            href={exploreHref}
            className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-[#f5f5f5] px-6 py-3 text-sm text-[#1a1a1a] hover:bg-black/5 transition-colors"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {exploreLabel} →
          </Link>
          <Link
            href={getHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm text-white hover:bg-black/80 transition-colors"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {getLabel} →
          </Link>
        </div>
      </div>

      {/* Right: dark image panel */}
      <div className="relative min-h-[380px] lg:min-h-0 bg-[#1c1208] flex items-center justify-center overflow-hidden">
        {image && (
          <Image
            src={image}
            fill
            alt={imageAlt}
            className="object-contain p-10 md:p-14"
          />
        )}
      </div>
    </motion.div>
  );
}
