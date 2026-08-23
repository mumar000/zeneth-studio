"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const serif = '"PP Editorial Old", "Romie Trial", "Times New Roman", serif';
const sans = '"SF Pro", "Helvetica Neue", sans-serif';

export default function ClientProof() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="sapphire-client-proof-quote"
      className="bg-[#f3efe7] px-[clamp(16px,6.51vw,125px)] pb-[clamp(104px,8.07vw,155px)]"
    >
      <motion.figure
        initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease }}
        className="mx-auto flex min-h-[470px] max-w-[1670px] items-center justify-center overflow-hidden rounded-[clamp(14px,1.04vw,20px)] bg-[#0c0c0c] px-5 py-16 text-[#fffaef] md:h-[504px] md:min-h-0 md:px-12 md:py-0"
        data-node-id="201:1017"
      >
        <div
          className="flex w-full max-w-[842px] flex-col items-center gap-8 text-center md:gap-10"
          data-node-id="201:1018"
        >
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="text-[clamp(17px,1.25vw,24px)] font-[300] leading-[1.3] tracking-[-0.03em]"
            style={{ fontFamily: sans }}
            data-node-id="201:1019"
          >
            The Client Said it better than a fake metric ever could
          </motion.p>

          <motion.blockquote
            id="sapphire-client-proof-quote"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
            className="text-[clamp(38px,3.334vw,64px)] font-[200] italic leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: serif }}
            data-node-id="201:1020"
          >
            &ldquo;I love the layouts. Especially how you set up the
            portfolio&rdquo;
          </motion.blockquote>

          <motion.figcaption
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, delay: 0.32, ease }}
            className="rounded-full bg-[#cbac56] px-4 py-2.5 text-[14px] leading-[1.2] tracking-[-0.03em] text-[#0c0c0c] sm:text-[16px]"
            style={{ fontFamily: sans }}
            data-node-id="201:1021"
          >
            Evan Jones / Sapphire Pools
          </motion.figcaption>
        </div>
      </motion.figure>
    </section>
  );
}
