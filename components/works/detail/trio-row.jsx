"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function TrioImage({ src, index, progress }) {
  // Staggered parallax: outer images move faster, middle moves slower
  const speeds = [60, 20, 60];
  const y = useTransform(progress, [0, 1], [speeds[index], -speeds[index]]);
  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    index === 1 ? [1.03, 1, 1.03] : [1, 1.04, 1],
  );
  const rotate = useTransform(
    progress,
    [0, 1],
    [
      index === 0 ? -0.8 : index === 2 ? 0.8 : 0,
      index === 0 ? 0.8 : index === 2 ? -0.8 : 0,
    ],
  );

  return (
    <motion.div
      style={{ y, rotate }}
      className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-black/5 will-change-transform"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1500px) 33vw, 100vw"
        />
      </motion.div>
    </motion.div>
  );
}

export default function TrioRow({ images }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <TrioImage
            key={`${src}-${i}`}
            src={src}
            index={i}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
