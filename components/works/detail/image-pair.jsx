"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImagePair({ left, right }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Left image drifts up, right image drifts down — opposite parallax
  const leftY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  // Tight scale envelope just to keep edges hidden during parallax
  const leftScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);
  const rightScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 1]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:pl-24 lg:pr-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          style={{ y: leftY }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-black/5 will-change-transform"
        >
          <motion.div style={{ scale: leftScale }} className="absolute inset-0">
            <Image
              src={left.image}
              alt=""
              fill
              className="object-cover "
              sizes="(min-width: 1500px) 50vw, 10vw"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: rightY }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden will-change-transform"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: right.bg || "#111" }}
          />
          <motion.div
            style={{ scale: rightScale }}
            className="absolute inset-0"
          >
            <Image
              src={right.image}
              alt=""
              fill
              className="object-cover mix-blend-multiply opacity-95"
              sizes="(min-width: 1500px) 50vw, 100vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
