"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const dos = [
  "Use the Genie as a supporting brand element alongside the primary logo.",
  "Place it in marketing materials, social posts, and app screens to create engagement.",
  "Keep colors, proportions, and style consistent with the brand palette.",
  "Pair the Genie with friendly, playful copy that matches the brand’s tone.",
];

const donts = [
  "Don’t use the Genie as a replacement for the main logo.",
  "Don’t stretch, crop, or distort the illustration.",
  "Don’t place it on clashing backgrounds that reduce visibility.",
  "Don’t overuse the mascot in every asset maintain balance with the logo and other brand elements.",
];

function Rules({ items, nodeId }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09 },
        },
      }}
      className="mt-8 list-disc space-y-5 pl-7 text-[18px] font-[300] leading-[1.2] tracking-[0.03em] text-[#717171] min-[1600px]:mt-[45px] min-[1600px]:text-[24px] min-[1600px]:leading-[1.1]"
      style={{ fontFamily: "var(--font-display)" }}
      data-node-id={nodeId}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, x: 18 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function MascotGuidelines() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-9">
      <div
        className="mx-auto flex max-w-[1848px] flex-col overflow-hidden rounded-[20px] bg-white px-7 py-14 sm:px-12 lg:grid lg:grid-cols-[66.7%_33.3%] lg:px-0 lg:py-0 min-[1600px]:h-[887px] min-[1600px]:rounded-[30px]"
        data-node-id="204:6260"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -56 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 mt-12 flex items-center lg:order-1 lg:mt-0 lg:overflow-hidden"
        >
          <Image
            src="/works/lets-grub/mascot-guidelines/dos-examples-4x.png"
            alt="Correct Genie usage in the Let's Grub app and a social campaign"
            width={4687}
            height={3000}
            quality={100}
            sizes="(min-width: 1024px) 67vw, 100vw"
            className="h-auto w-full lg:w-[95.1%]"
            data-node-id="204:5565"
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.85,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-1 lg:order-2 lg:pt-[106px] min-[1600px]:pr-[108px]"
        >
          <h2
            className="text-[64px] font-[500] leading-[1.1] tracking-[0.03em] text-[#0abaf4] sm:text-[78px] min-[1600px]:text-[96px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="204:5834"
          >
            Do’s:
          </h2>
          <Rules items={dos} nodeId="204:5835" />
        </motion.div>
      </div>

      <div
        className="mx-auto mt-4 flex max-w-[1848px] flex-col overflow-hidden rounded-[20px] bg-white px-7 py-14 sm:px-12 lg:grid lg:grid-cols-[66.7%_33.3%] lg:px-0 lg:py-0 min-[1600px]:mt-5 min-[1600px]:h-[887px] min-[1600px]:rounded-[30px]"
        data-node-id="204:5854"
      >
        <div className="order-2 mt-14 grid grid-cols-2 gap-4 lg:order-1 lg:mt-0 lg:grid-cols-[40.5%_59.5%] lg:grid-rows-[291fr_406fr] lg:gap-0 lg:px-[7.45%] lg:pb-[73px] lg:pt-[117px]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -24, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex aspect-[404/268] items-center justify-center overflow-hidden rounded-[14px] bg-[#f7f7f7] lg:mr-[22px]"
          >
            <Image
              src="/works/lets-grub/mascot-guidelines/donts-top-4x.png"
              alt="Incorrect replacement of the primary logo with the Genie"
              width={1243}
              height={795}
              quality={100}
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="h-auto w-[77%]"
              data-node-id="204:5861"
            />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="row-span-2 flex items-center justify-center overflow-hidden rounded-[14px] bg-[#0abaf4]"
          >
            <Image
              src="/works/lets-grub/mascot-guidelines/donts-center-4x.png"
              alt="Genie illustration shown with an unsuitable crop"
              width={1919}
              height={2007}
              quality={100}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="h-auto w-[80%]"
              data-node-id="204:6130"
            />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex aspect-[404/406] items-center justify-center overflow-hidden rounded-[14px] bg-[#ff383c] lg:mr-[22px]"
          >
            <Image
              src="/works/lets-grub/mascot-guidelines/donts-bottom-4x.png"
              alt="Distorted Genie illustration demonstrating incorrect usage"
              width={1121}
              height={1514}
              quality={100}
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="h-auto max-h-[94%] w-auto max-w-[78%]"
              data-node-id="204:6000"
            />
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.85,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-1 lg:order-2 lg:pt-[106px] min-[1600px]:pl-[18px] min-[1600px]:pr-[108px]"
        >
          <h2
            className="text-[64px] font-[500] leading-[1.1] tracking-[0.03em] text-[#0abaf4] sm:text-[78px] min-[1600px]:text-[96px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="204:5860"
          >
            Don’ts
          </h2>
          <Rules items={donts} nodeId="204:5859" />
        </motion.div>
      </div>

      <div className="h-24 md:h-32 min-[1600px]:h-[182px]" />
    </section>
  );
}
