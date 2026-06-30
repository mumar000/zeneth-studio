"use client";

import React from "react";
import { motion } from "framer-motion";
import ServicePanel from "./service-panel";

const SERVICES = [
  {
    price: "$9999",
    title: "Brand Identity",
    description:
      "For brands that look inconsistent, unclear, or too close to everyone else in the market.",
    bullets: [
      "Visual direction, logo system, color, type, and brand assets",
      "Messaging basics so the brand sounds as clear as it looks",
      "Launch-ready files and simple rules your team can actually use",
    ],
    exploreLabel: "Explore Brand Identity",
    exploreHref: "#",
    getLabel: "Get One For Your Brand",
    getHref: "#",
    image: "/services1.webp",
    imageAlt: "Brand Identity showcase",
  },
  // Service 2 — replace with your content & image
  {
    price: "$XXXX",
    title: "Service Two",
    description: "Your description here.",
    bullets: [
      "Bullet point one",
      "Bullet point two",
      "Bullet point three",
    ],
    exploreLabel: "Explore Service Two",
    exploreHref: "#",
    getLabel: "Get One For Your Brand",
    getHref: "#",
    image: "/services2.webp",
    imageAlt: "Service Two showcase",
  },
  // Service 3 — replace with your content & image
  {
    price: "$XXXX",
    title: "Service Three",
    description: "Your description here.",
    bullets: [
      "Bullet point one",
      "Bullet point two",
      "Bullet point three",
    ],
    exploreLabel: "Explore Service Three",
    exploreHref: "#",
    getLabel: "Get One For Your Brand",
    getHref: "#",
    image: "/services3.webp",
    imageAlt: "Service Three showcase",
  },
];

export default function ServicesDetail() {
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
          A Focused team of designers, developers
          <br className="hidden sm:block" /> and thinkers creating work that lasts.
        </motion.h2>

        <div className="mt-14 md:mt-20 flex flex-col gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <ServicePanel key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
