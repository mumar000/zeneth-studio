"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const metrics = [
  { number: "00", label: "Usable project photos", nodeId: "201:68" },
  { number: "5-7", label: "Launch pages", nodeId: "201:69" },
  { number: "02", label: "Primary lead paths", nodeId: "201:70" },
];

export default function TheReality() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.45 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      aria-labelledby="sapphire-reality-title"
      className="bg-[#f3efe7] px-6 py-24 text-[#0c0c0c] md:min-h-[909px] md:px-10 md:pb-[169px] md:pt-[145px]"
    >
      <div className="mx-auto flex max-w-[967px] flex-col items-center">
        <motion.p
          {...reveal()}
          className="rounded-full bg-white px-6 py-4 text-center text-[14px] font-[400] uppercase leading-[1.2] tracking-[-0.03em] md:text-[16px]"
          style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
          data-node-id="201:62"
        >
          01 The reality
        </motion.p>

        <motion.p
          {...reveal(0.06)}
          className="mt-[49px] text-center text-[clamp(17px,1.25vw,24px)] font-[400] leading-[1.2] tracking-[-0.03em]"
          style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
          data-node-id="201:58"
        >
          The brief arrived with a problem, most portfolios quietly hide.
        </motion.p>

        <motion.h2
          {...reveal(0.12)}
          id="sapphire-reality-title"
          className="mt-7 max-w-[851px] text-center text-[clamp(34px,2.5vw,48px)] font-[200] italic leading-[1.2] tracking-[-0.03em]"
          style={{
            fontFamily:
              '"PP Editorial Old", "Romie Trial", "Times New Roman", serif',
          }}
          data-node-id="201:61"
        >
          &quot;We are starting up a pool company so I dont have any pictures
          of projects I can use yet.&quot;
        </motion.h2>

        <motion.p
          {...reveal(0.18)}
          className="mt-[64px] rounded-full bg-[#cbac56] px-4 py-2.5 text-center text-[14px] font-[400] leading-[1.2] tracking-[-0.03em] md:text-[16px]"
          style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
          data-node-id="201:59"
        >
          Evan Jones (Sapphire Pools)
        </motion.p>

        <motion.dl
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-[94px] grid w-full grid-cols-1 divide-y divide-black/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          data-node-id="201:64"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease },
                },
              }}
              className="flex min-h-[124px] flex-col justify-center py-6 first:pl-0 sm:px-[clamp(20px,3.1vw,60px)] sm:py-0 sm:first:pr-[clamp(20px,3.1vw,60px)] sm:last:pr-0"
              data-node-id={metric.nodeId}
            >
              <dt
                className="text-[clamp(48px,3.333vw,64px)] font-[400] leading-[1.2] tracking-[-0.03em]"
                style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
              >
                {metric.number}
              </dt>
              <dd
                className="mt-1 whitespace-nowrap text-[clamp(16px,1.25vw,24px)] font-[400] leading-[1.2] tracking-[-0.03em]"
                style={{ fontFamily: '"SF Pro", "Helvetica Neue", sans-serif' }}
              >
                {metric.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
