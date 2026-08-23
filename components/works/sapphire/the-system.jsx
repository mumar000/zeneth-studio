"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const serif = '"PP Editorial Old", "Romie Trial", "Times New Roman", serif';
const sans = '"SF Pro", "Helvetica Neue", sans-serif';

const pages = [
  {
    src: "/works/sapphire/system/about.webp",
    alt: "Sapphire About Us page",
    width: 656,
    height: 2369,
    nodeId: "201:481",
  },
  {
    src: "/works/sapphire/system/service.webp",
    alt: "Sapphire residential service page",
    width: 656,
    height: 2024,
    nodeId: "201:609",
  },
  {
    src: "/works/sapphire/system/portfolio.webp",
    alt: "Sapphire portfolio page",
    width: 656,
    height: 2347,
    nodeId: "201:751",
  },
  {
    src: "/works/sapphire/system/financing.webp",
    alt: "Sapphire financing page",
    width: 656,
    height: 1813,
    nodeId: "201:868",
  },
  {
    src: "/works/sapphire/system/menu.webp",
    alt: "Sapphire navigation menu",
    width: 656,
    height: 369,
    nodeId: "201:444",
  },
];

export default function TheSystem() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="sapphire-system-title"
      className="bg-[#f3efe7] px-[clamp(16px,5.52vw,106px)] pb-[232px] text-[#0c0c0c]"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.85, ease }}
        className="flex flex-col items-center"
      >
        <p
          className="rounded-full bg-white px-4 py-2.5 text-[18px] uppercase leading-[1.2] tracking-[-0.05em] md:text-[22.7px]"
          style={{ fontFamily: sans }}
          data-node-id="201:439"
        >
          04 The system
        </p>
        <h2
          id="sapphire-system-title"
          className="mt-5 text-center text-[clamp(50px,5vw,96px)] font-[200] italic leading-[1.2] tracking-[-0.03em]"
          style={{ fontFamily: serif }}
          data-node-id="201:78"
        >
          Every page had a job.
        </h2>
      </motion.div>

      <div
        className="mx-auto mt-[77px] grid max-w-[1708px] grid-cols-1 items-start gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-[1.03%]"
        data-node-id="201:443"
      >
        {pages.map((page, index) => (
          <motion.div
            key={page.src}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: index * 0.07, ease }}
            className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[5px] shadow-[0_18px_45px_rgba(12,12,12,0.06)] md:max-w-none"
            data-node-id={page.nodeId}
          >
            <Image
              src={page.src}
              alt={page.alt}
              width={page.width}
              height={page.height}
              quality={90}
              sizes="(min-width: 768px) 18vw, (min-width: 640px) 46vw, 92vw"
              className="h-auto w-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
