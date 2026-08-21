"use client";

import { motion, useReducedMotion } from "framer-motion";

const briefGroups = [
  {
    label: "Needed",
    items: [
      ["Logo", "bg-[#d6ff7c] text-black"],
      ["Mascot", "bg-[#fd1600] text-white"],
      ["Color", "bg-[#bb94ff] text-black"],
      ["Typography", "bg-[#ffe500] text-black"],
      ["Guidelines", "bg-[#a5edff] text-black"],
    ],
  },
  {
    label: "Feeling",
    items: [
      ["Playful", "bg-[#d6ff7c] text-black"],
      ["Welcoming,", "bg-[#fd1600] text-white"],
      ["Easy", "bg-[#ffe500] text-black"],
      ["Clear", "bg-[#a5edff] text-black"],
    ],
  },
  {
    label: "Avoid",
    items: [
      ["Dating-app", "bg-[#d6ff7c] text-black"],
      ["Signals", "bg-[#fd1600] text-white"],
      ["Forced romance", "bg-[#ffe500] text-black"],
    ],
  },
  {
    label: "Center",
    items: [
      ["Connection", "bg-[#d6ff7c] text-black"],
      ["Meetings", "bg-[#fd1600] text-white"],
      ["Food", "bg-[#ffe500] text-black"],
    ],
  },
];

export default function RealBrief() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      aria-labelledby="lets-grub-real-brief-title"
      className="bg-[#f7f7f7] px-5 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-28 min-[1600px]:pb-[154px] min-[1600px]:pt-[148px]"
    >
      <motion.div {...reveal} className="mx-auto max-w-[795px] text-center">
        <p
          className="text-[20px] leading-[0.9] uppercase md:text-[25px] min-[1600px]:text-[30.647px]"
          style={{ fontFamily: "var(--font-display)" }}
          data-node-id="202:5071"
        >
          The real brief
        </p>

        <h2
          id="lets-grub-real-brief-title"
          className="mt-8 text-[42px] leading-[1.08] text-black sm:text-[50px] md:mt-[43px] md:text-[58px] min-[1600px]:text-[64px] min-[1600px]:leading-[1.2]"
          style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
          data-node-id="202:5070"
        >
          Make meeting people feel less weird.
        </h2>

        <p
          className="mx-auto mt-5 max-w-[795px] text-[17px] leading-[1.35] text-black/60 md:mt-[23px] md:text-[20px] md:leading-[1.3]"
          style={{ fontFamily: "var(--font-display)" }}
          data-node-id="202:5077"
        >
          LetsGrub brings people together in real life through food. Not endless
          chatting. Not another swipe. A reason to pick a place, show up, and let
          the meal do the rest.
        </p>
      </motion.div>

      <div
        className="mx-auto mt-16 grid max-w-[1485.36px] grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 lg:gap-x-10 min-[1600px]:mt-[121px] min-[1600px]:grid-cols-[325.552px_263.438px_256.96px_279.411px] min-[1600px]:gap-x-[120px]"
        data-node-id="202:5161"
      >
        {briefGroups.map((group, groupIndex) => (
          <motion.div
            key={group.label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : groupIndex * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3
              className="text-[20px] leading-[0.9] text-black/60 uppercase min-[1600px]:text-[24px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {group.label}
            </h3>

            <div className="mt-7 flex max-w-[326px] flex-wrap gap-x-1 gap-y-[7px] min-[1600px]:mt-9">
              {group.items.map(([label, tone], itemIndex) => (
                <motion.span
                  key={label}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion
                      ? 0
                      : groupIndex * 0.08 + itemIndex * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-flex min-h-[34px] items-center justify-center rounded-full px-[13px] pt-[2px] text-[17px] leading-[0.9] uppercase min-[1600px]:min-h-[37.597px] min-[1600px]:text-[20.507px] ${tone}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
