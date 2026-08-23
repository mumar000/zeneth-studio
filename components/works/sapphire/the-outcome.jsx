"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const serif = '"PP Editorial Old", "Romie Trial", "Times New Roman", serif';
const sans = '"SF Pro", "Helvetica Neue", sans-serif';

export default function TheOutcome() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0, distance = 22) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.55 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      aria-labelledby="sapphire-outcome-title"
      className="bg-[#f3efe7] px-5 pb-[clamp(112px,7.71vw,148px)] text-[#0c0c0c]"
    >
      <div className="mx-auto flex max-w-[842px] flex-col items-center text-center">
        <motion.p
          {...reveal()}
          className="rounded-full bg-[#cbac56] px-4 py-2.5 text-[16px] uppercase leading-[1.2] tracking-[-0.03em]"
          style={{ fontFamily: sans }}
          data-node-id="201:1024"
        >
          08 The outcome
        </motion.p>

        <motion.h2
          {...reveal(0.08, 28)}
          id="sapphire-outcome-title"
          className="mt-[34px] text-[clamp(43px,3.334vw,64px)] font-[200] italic leading-[1.1] tracking-[-0.02em]"
          style={{ fontFamily: serif }}
          data-node-id="201:1023"
        >
          <span className="md:block">A brand that felt ready before</span>{" "}
          <span className="md:block">everything else was.</span>
        </motion.h2>

        <motion.p
          {...reveal(0.16)}
          className="mt-[26px] max-w-[818px] text-[clamp(18px,1.25vw,24px)] font-[300] leading-[1.3] tracking-[-0.03em]"
          style={{ fontFamily: sans }}
          data-node-id="201:1029"
        >
          Sapphire launched with a premium identity, a lead-focused website,
          an editable WordPress system, and a client confident enough to keep
          coming back.
        </motion.p>

        <motion.a
          {...reveal(0.24, 16)}
          href="https://sapphirepools.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-[30px] inline-flex min-h-[51px] items-center justify-center gap-2.5 rounded-full bg-white px-6 py-4 text-[16px] uppercase leading-[1.2] tracking-[-0.03em] outline-none transition-colors duration-300 hover:bg-[#cbac56] focus-visible:ring-2 focus-visible:ring-[#0c0c0c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3efe7]"
          style={{ fontFamily: sans }}
          data-node-id="201:1026"
          aria-label="Visit the Sapphire Pools live website in a new tab"
        >
          Visit the live site
          <span
            className="relative block size-3 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            data-node-id="201:1028"
            aria-hidden="true"
          >
            <Image
              src="/works/sapphire/outcome/arrow.svg"
              alt=""
              fill
              sizes="12px"
              className="object-contain"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
