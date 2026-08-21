"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE = "/works/lets-grub/hero/hero-4x.png";

export default function LetsGrubHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="lets-grub-case-study-title"
      className="relative isolate h-[78svh] min-h-[560px] max-h-[760px] w-full overflow-hidden bg-[#0abaf4] md:h-auto md:min-h-0 md:max-h-none md:aspect-[16/9]"
      data-node-id="202:5009"
    >
      <h1 id="lets-grub-case-study-title" className="sr-only">
        Let&apos;s Grub: Where We Come Together
      </h1>

      <motion.div
        className="absolute inset-0"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.018 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={HERO_IMAGE}
          alt="A diverse group of friends leaning into a circle around the words Where We Come Together"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
