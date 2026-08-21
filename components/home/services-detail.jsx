"use client";

import React from "react";
import { motion } from "framer-motion";
import ServicePanel from "./service-panel";

const SERVICES = [
  {
    price: "$1,000",
    title: "Brand Identity",
    description:
      "For brands that look inconsistent, unclear, or too close to everyone else in the market.",
    bullets: [
      "Visual direction, logo system, color, type, and brand assets",
      "Messaging basics so the brand sounds as clear as it looks",
      "Launch-ready files and simple rules your team can actually use",
    ],
    exploreLabel: "Explore Brand Identity",
    exploreHref: "/services/brand-identity",
    getLabel: "Get One For Your Brand",
    getHref: "/contact",
    video: "/feroce/feroce-video.mp4",
    videoLabel: "Brand Identity showcase",
  },
  {
    price: "$1,500",
    title: "Web & Interface Design",
    description:
      "High-fidelity website and interface design for teams that need sharper pages, clearer flow, and a better experience before anything gets built.",
    bullets: [
      "Fixes messy layouts, weak hierarchy, and unclear user paths",
      "Turns your offer into clean pages people can actually understand",
      "Best for brands with a site that exists but does not convert well",
    ],
    exploreLabel: "Explore Web Design",
    exploreHref: "/services/interface-design",
    getLabel: "Get One For Your Brand",
    getHref: "/contact",
    image: "/projects/letsgrub/1.webp",
    imageAlt: "Web and interface design showcase",
  },
  {
    price: "$1,500",
    title: "Web Development",
    description:
      "Clean responsive builds for brands that already have the design, but need the live version to keep the same polish, spacing, and intent.",
    bullets: [
      "Webflow, Shopify, WordPress, or custom front-end development",
      "Responsive build, CMS setup, interaction details, and QA",
      "Launch support and a clean handoff your team can manage",
    ],
    exploreLabel: "Explore Development",
    exploreHref: "/services/web-development",
    getLabel: "Get One For Your Brand",
    getHref: "/contact",
    video: "/web-animations-video.mp4",
    videoLabel: "Web development showcase",
  },
];

export default function ServicesDetail({
  headingLines = [
    "A focused team of designers, developers",
    "and thinkers creating work that lasts.",
  ],
}) {
  return (
    <section className="relative z-10 w-full px-3 py-14 md:py-28 lg:px-1.5">
      <div className="mx-auto max-w-[1920px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-center text-3xl font-[700] tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {headingLines.map((line, index) => (
            <React.Fragment key={line}>
              {index > 0 && <br className="hidden sm:block" />}
              {index > 0 && " "}
              {line}
            </React.Fragment>
          ))}
        </motion.h2>

        <div className="mt-8 flex flex-col gap-4 md:mt-20 md:gap-5">
          {SERVICES.map((service, i) => (
            <ServicePanel key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
