"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ChosenIdentity() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 pb-4 pt-24 sm:px-6 md:pt-32 lg:px-9 min-[1600px]:pt-[208px]">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[485px] text-center"
        data-node-id="202:5242"
      >
        <h2
          className="text-[28px] leading-none min-[1600px]:text-[32px]"
          style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
          data-node-id="202:5238"
        >
          V1-1 is my favorite.
        </h2>

        <p
          className="mt-[11px] text-[18px] leading-[1.3] text-black/60 sm:text-[20px] min-[1600px]:text-[24px]"
          style={{ fontFamily: "var(--font-display)" }}
          data-node-id="202:5240"
        >
          The client was right about the energy and right that the genie still
          needed work.
        </p>
      </motion.div>

      <div
        className="mx-auto mt-16 flex aspect-[1848/840] max-w-[1848px] items-center justify-center rounded-[16px] bg-white sm:mt-20 min-[1600px]:mt-[105px] min-[1600px]:rounded-[30px]"
        data-node-id="202:5217"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-[58%] sm:w-[46%] lg:w-[35.34%]"
          data-node-id="202:5220"
        >
          <Image
            src="/works/lets-grub/identity/selected-logo.svg"
            alt="Selected Let's Grub identity mark"
            width={653}
            height={370}
            priority={false}
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
