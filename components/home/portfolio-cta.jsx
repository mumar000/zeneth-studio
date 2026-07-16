"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

const PROJECT_IMAGES = [
  { src: "/projects/feroce/2.webp", w: 380 },
  { src: "/projects/letsgrub/1.webp", w: 340 },
  { src: "/mogulbay/4.webp", w: 420 },
  { src: "/projects/feroce/5.webp", w: 360 },
  { src: "/projects/letsgrub/2.webp", w: 400 },
  { src: "/mogulbay/14.webp", w: 340 },
  { src: "/projects/feroce/6.webp", w: 380 },
  { src: "/projects/letsgrub/5.webp", w: 360 },
  { src: "/mogulbay/9.webp", w: 320 },
  { src: "/projects/feroce/3.webp", w: 400 },
];

const IMG_HEIGHT = 300;

export default function PortfolioCta() {
  const marqueeRef = useRef(null);
  const marqueeInView = useInView(marqueeRef, { margin: "200px 0px" });

  return (
    <section className="relative z-10 w-full bg-[#F0EBFB]">

      {/* ── IMAGE MARQUEE STRIP ── */}
      <div ref={marqueeRef} className="pt-0 pb-0 overflow-hidden">
        <Marquee
          play={marqueeInView}
          speed={55}
          gradient={false}
          pauseOnHover={true}
          className="py-6 md:py-8"
        >
          {PROJECT_IMAGES.map((img, i) => (
            <div
              key={i}
              className="mx-2 md:mx-3 rounded-[14px] overflow-hidden flex-shrink-0"
              style={{ width: img.w, height: IMG_HEIGHT }}
            >
              <Image
                src={img.src}
                width={img.w}
                height={IMG_HEIGHT}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* ── CTA ── */}
      <div className="w-full px-4 sm:px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-[860px] flex flex-col items-center text-center">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-[700] tracking-[0.22em] uppercase text-[#7C3AED]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Looking for something more custom?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
            className="mt-5 text-6xl sm:text-7xl md:text-[88px] font-[700] leading-[1.0] tracking-[-0.03em] text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We do that too.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-[17px] leading-[1.7] text-[#1a1a1a]/60 max-w-[480px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Book a discovery call. We&apos;ll look at what you have, scope it honestly,
            and tell you if we&apos;re not the right fit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-8 py-4 text-sm font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Book a Call →
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
