"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const serif = '"PP Editorial Old", "Romie Trial", "Times New Roman", serif';
const sans = '"SF Pro", "Helvetica Neue", sans-serif';

export default function BeyondMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="sapphire-beyond-title"
      className="bg-[#f3efe7] px-[clamp(16px,6.51vw,125px)] pb-[163px] text-[#0c0c0c]"
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
          data-node-id="201:441"
        >
          05 Beyond the mockup
        </p>
        <h2
          id="sapphire-beyond-title"
          className="mt-5 text-center text-[clamp(48px,5vw,96px)] font-[200] italic leading-[1.2] tracking-[-0.03em]"
          style={{ fontFamily: serif }}
          data-node-id="201:79"
        >
          Built for the messy real world.
        </h2>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 1, delay: 0.08, ease }}
        className="relative mx-auto mt-[90px] max-w-[1670px] overflow-hidden rounded-[20px] bg-white"
        data-node-id="201:987"
      >
        <div className="relative aspect-[1670/1239] w-full" data-node-id="201:988">
          <Image
            src="/works/sapphire/beyond/desktop.webp"
            alt="Sapphire desktop website displayed on a large monitor"
            fill
            quality={90}
            sizes="(min-width: 1024px) 87vw, 100vw"
            className="object-cover"
          />

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 34, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.24, ease }}
            className="absolute left-[74.31%] top-[31.64%] w-[21.68%]"
            data-node-id="201:997"
          >
            <Image
              src="/works/sapphire/beyond/phone.webp"
              alt="Sapphire project gallery displayed on a phone"
              width={724}
              height={1408}
              quality={92}
              sizes="(min-width: 768px) 22vw, 30vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
