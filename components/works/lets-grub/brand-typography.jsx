"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BrandTypography() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-9">
      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.82, y: 14 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
        className="mx-auto w-fit rounded-full bg-[#ff383c] px-6 py-4 text-center text-[18px] leading-[1.3] uppercase sm:text-[20px] min-[1600px]:text-[24px]"
        style={{ fontFamily: "var(--font-display)" }}
        data-node-id="202:5303"
      >
        The actual brand typography
      </motion.p>

      <div className="mx-auto mt-16 grid max-w-[1848px] grid-cols-1 gap-4 md:grid-cols-[901fr_923fr] min-[1600px]:mt-[76px] min-[1600px]:gap-6">
        <motion.article
          initial={shouldReduceMotion ? false : { opacity: 0, x: -44, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-[500px] flex-col rounded-[20px] bg-white p-8 sm:p-12 min-[1600px]:h-[641px] min-[1600px]:min-h-0 min-[1600px]:rounded-[30px] min-[1600px]:px-[96px] min-[1600px]:pb-[73px] min-[1600px]:pt-[75px]"
          data-node-id="204:5315"
        >
          <p
            className="w-fit rounded-full bg-[#d6ff7c] px-6 py-4 text-[14px] leading-[1.3] uppercase sm:text-[16px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="202:5308"
          >
            Luckiest Guy / Brand display
          </p>
          <h2
            className="mt-12 max-w-[626px] text-[60px] leading-none sm:text-[76px] min-[1600px]:mt-[61px] min-[1600px]:text-[96px]"
            style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
            data-node-id="202:5310"
          >
            Hungry? Let’s grub together.
          </h2>
          <p
            className="mt-auto pt-12 text-[20px] leading-[1.3] sm:text-[24px]"
            style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
            data-node-id="202:5307"
          >
            ABCDEFGHIJKLM NOPQRSTUVWXYZ
            <br />
            abcdefghijklm nopqrstuvwxyz
          </p>
        </motion.article>

        <motion.article
          initial={shouldReduceMotion ? false : { opacity: 0, x: 44, y: 18 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.85,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex min-h-[500px] flex-col rounded-[20px] bg-white p-8 sm:p-12 min-[1600px]:h-[641px] min-[1600px]:min-h-0 min-[1600px]:rounded-[30px] min-[1600px]:px-[96px] min-[1600px]:pb-[73px] min-[1600px]:pt-[68px]"
          data-node-id="204:5316"
        >
          <p
            className="w-fit rounded-full bg-[#d6ff7c] px-6 py-4 text-[14px] leading-[1.3] uppercase sm:text-[16px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="203:5312"
          >
            Neue Haas Grotesk / Product voice
          </p>
          <h2
            className="mt-12 max-w-[626px] text-[44px] font-[300] leading-none sm:text-[54px] min-[1600px]:mt-[61px] min-[1600px]:text-[64px]"
            style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
            data-node-id="203:5314"
          >
            Pick a place. Meet your people. Let food take it from there.
          </h2>
          <p
            className="mt-auto pt-12 text-[20px] leading-[1.3] tracking-[-0.03em] sm:text-[24px]"
            style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
            data-node-id="203:5311"
          >
            Regular · Medium · Bold
            <br />
            Clean enough for every screen.
          </p>
        </motion.article>
      </div>

      <div className="h-24 md:h-32 min-[1600px]:h-[144px]" />
    </section>
  );
}
