"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function Icon({ glyph, index, progress, accent }) {
  // Each icon enters with a small delay based on its grid index
  const start = 0.1 + index * 0.025;
  const end = start + 0.18;
  const scale = useTransform(progress, [start, end], [0, 1]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const rotate = useTransform(progress, [start, end], [-45, 0]);

  return (
    <motion.div
      style={{ scale, opacity, rotate, backgroundColor: accent || "#F2B233" }}
      className="aspect-square rounded-full flex items-center justify-center text-xl md:text-2xl font-[700] text-black will-change-transform"
    >
      {glyph}
    </motion.div>
  );
}

export default function SystemBoard({ icons = [], image, accent }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Icon grid — staggered scale-in */}
        <div className="relative aspect-[4/5] rounded-3xl bg-[#15171c] p-8 md:p-10 flex items-center overflow-hidden">
          <div className="grid grid-cols-4 gap-4 md:gap-6 w-full">
            {icons.slice(0, 12).map((g, i) => (
              <Icon
                key={i}
                glyph={g}
                index={i}
                progress={scrollYProgress}
                accent={accent}
              />
            ))}
          </div>
        </div>

        {/* Companion photo — parallax + zoom */}
        <div
          className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          style={{ backgroundColor: accent || "#F2B233" }}
        >
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover mix-blend-multiply"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
