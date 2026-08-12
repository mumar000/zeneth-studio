"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WordmarkBlock({ image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle vertical parallax with minimal scale so the image stays sharp
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-6">
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-black">
        <motion.div
          style={{ scale: imgScale, y: imgY }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
