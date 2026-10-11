"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ServicePanel from "./service-panel";

const SERVICES = [
  {
    price: "$1,000",
    title: "Brand Identity",
    description:
      "Your logo, packaging, pitch deck, and homepage should look like they came from the same business. We create the identity that holds them together.",
    bullets: [
      "A logo family, type palette, and colors with a clear point of view",
      "Brand applications for the places your customers meet you",
      "Organized files and guidelines your next designer can follow",
    ],
    exploreLabel: "Explore Brand Identity",
    exploreHref: "/services/brand-identity",
    getLabel: "Build Your Identity",
    getHref: "/contact",
    video: "/feroce/feroce-video.mp4",
    videoLabel: "Brand Identity showcase",
    mediaBackdrop: "/feroce/feroce-video-backdrop.jpg",
    mediaBackground: "#050000",
  },
  {
    price: "$1,500",
    title: "Web & Interface Design",
    description:
      "A visitor should understand your offer before they have to work for it. We design websites and product interfaces around what people need to find, compare, and do.",
    bullets: [
      "Page structure and user journeys before visual design",
      "Responsive screens, reusable components, and interaction states",
      "Figma designs and prototypes ready for development",
    ],
    exploreLabel: "Explore Web Design",
    exploreHref: "/services/interface-design",
    getLabel: "Plan Your Website",
    getHref: "/contact",
    image: "/projects/letsgrub/1.webp",
    imageAlt: "Let’s Grub website and interface design",
    mediaBackdrop: "/projects/letsgrub/1.webp",
    mediaBackground: "#18b8e7",
  },
  {
    price: "$1,500",
    title: "Web Development",
    description:
      "The site should feel right on launch day and still be easy to update six months later. We turn approved designs into responsive websites your team can run.",
    bullets: [
      "Webflow, Shopify, WordPress, or custom front-end development",
      "Responsive build, CMS setup, interaction details, and QA",
      "Launch support and a clean handoff your team can manage",
    ],
    exploreLabel: "Explore Development",
    exploreHref: "/services/web-development",
    getLabel: "Discuss Your Build",
    getHref: "/contact",
    video: "/web-animations-video.mp4",
    videoLabel: "Web development showcase",
    mediaBackdrop: "/web-animations-video-backdrop.jpg",
    mediaBackground: "#ffffff",
  },
];

export default function ServicesDetail({
  headingLines = [
    "From the first impression",
    "to the final click.",
  ],
  showHeading = true,
  showAllLink = true,
  cardHeadingTag = "h3",
}) {
  return (
    <section id="services" className="relative z-10 w-full scroll-mt-28 px-3 py-14 md:py-28 lg:px-1.5">
      <div className="mx-auto max-w-[1920px]">
        {showHeading && <motion.h2
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
        </motion.h2>}

        {showAllLink && <div className="mt-6 flex justify-center md:mt-8">
          <Link
            href="/services"
            className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-[12px] font-[700] uppercase tracking-[0.1em] text-black transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            View all services
          </Link>
        </div>}

        <div className={`flex flex-col gap-4 md:gap-5 ${showHeading || showAllLink ? "mt-8 md:mt-20" : ""}`}>
          {SERVICES.map((service, i) => (
            <ServicePanel key={i} {...service} index={i} headingTag={cardHeadingTag} />
          ))}
        </div>
      </div>
    </section>
  );
}
