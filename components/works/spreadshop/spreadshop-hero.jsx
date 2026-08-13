"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE = "/works/spreadshop/hero-hd.png";

export default function SpreadshopHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="spreadshop-case-study-title"
      className="relative isolate h-[70svh] min-h-[520px] w-full overflow-hidden bg-[#a34225] md:h-auto md:min-h-0"
      data-node-id="1:25"
    >
      <h1 id="spreadshop-case-study-title" className="sr-only">
        Spreadshop redesign case study
      </h1>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.018 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 md:relative md:aspect-[1920/1258] md:w-full"
      >
        <Image
          src={HERO_IMAGE}
          alt="Spreadshop storefront redesign displayed on a laptop in an orange studio setting"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[52%_bottom] md:object-bottom"
        />
      </motion.div>
    </section>
  );
}
