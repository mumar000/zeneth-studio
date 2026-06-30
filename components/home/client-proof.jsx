"use client";

import React from "react";
import { motion } from "framer-motion";

const VIDEOS = [
  { id: 1, src: null, poster: null },
  { id: 2, src: null, poster: null },
  { id: 3, src: null, poster: null },
];

const STEPS = [
  {
    number: "01",
    title: "Scope the truth",
    description:
      "We look at what exists, what's unclear, and what is hurting trust before touching the design.",
  },
  {
    number: "02",
    title: "Design the system",
    description:
      "We shape the visual direction, key pages, and reusable patterns so the whole site feels connected.",
  },
  {
    number: "03",
    title: "Build with intent",
    description:
      "We turn the approved direction into a clean live site with responsive pages, CMS/product setup, and launch support.",
  },
];

function VideoCard({ video, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="relative rounded-[18px] overflow-hidden bg-[#1e1e1e] aspect-[3/4] cursor-pointer group"
    >
      {video.src ? (
        <video
          src={video.src}
          poster={video.poster}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#2e2e2e] to-[#111111]" />
      )}

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60px] h-[60px] rounded-full bg-[#7C3AED] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 4.5L18 11L7 17.5V4.5Z" fill="white" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function ClientProof() {
  return (
    <>
      {/* ── CLIENT PROOF: video cards ── */}
      <section className="relative z-10 w-full px-4 sm:px-6 md:px-10 py-16 md:py-24 bg-[#F0EBFB]">
        <div className="mx-auto max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-[11px] font-[600] tracking-[0.22em] uppercase text-[#7C3AED] mb-10 md:mb-14"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Client Proof
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {VIDEOS.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS: 3-column grid ── */}
      <section className="relative z-10 w-full border-y-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-black">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#FEFEF4] px-10 py-10 md:px-20 md:py-10 flex flex-col items-center justify-center text-center"
            >
              <h3
                className="text-[22px] md:text-[26px] font-[400] text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number} — {step.title}
              </h3>
              <p
                className="mt-6 text-[16px] leading-[1.3] text-[#3a3a3a] max-w-[400px]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
