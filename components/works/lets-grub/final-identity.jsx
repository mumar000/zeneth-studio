"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const identityCards = [
  {
    cardNode: "202:5254",
    pillNode: "202:5252",
    headingNode: "202:5243",
    copyNode: "202:5248",
    pill: "The breakthrough",
    heading: "Keep the magic. Change the main character.",
    copy: "The product finally became the logo: a shared meal, a real place, and two people meeting around one experience.",
  },
  {
    cardNode: "202:5255",
    pillNode: "202:5253",
    headingNode: "202:5251",
    copyNode: "202:5249",
    pill: "The final identity",
    heading: "One mark. Three truths.",
    copy: "The spoon and fork explain food. The pin explains place. Their shared shape explains connection. Nothing decorative. Nothing pretending to be romance.",
  },
];

const truths = [
  {
    title: "Food.",
    copy: "Spoon and fork make the category visible before the name is read.",
    titleNode: "202:5259",
    copyNode: "202:5256",
  },
  {
    title: "Place.",
    copy: "The pin moves the promise out of the screen and into the real world.",
    titleNode: "202:5261",
    copyNode: "202:5260",
  },
  {
    title: "Connection.",
    copy: "Two separate utensils meet inside one shared form: different people, same table.",
    titleNode: "202:5263",
    copyNode: "202:5262",
  },
];

export default function FinalIdentity() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-9">
      <div className="mx-auto grid max-w-[1848px] grid-cols-1 gap-4 md:grid-cols-2 min-[1600px]:gap-[18px]">
        {identityCards.map((card, index) => (
          <motion.article
            key={card.heading}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: index === 0 ? -44 : 44, y: 18 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[440px] flex-col items-center rounded-[20px] bg-white px-7 py-16 text-center sm:px-12 min-[1600px]:h-[575px] min-[1600px]:min-h-0 min-[1600px]:px-0 min-[1600px]:py-0"
            data-node-id={card.cardNode}
          >
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.82 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : 0.16,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="rounded-full bg-[#ff383c] px-6 py-4 text-[18px] leading-[1.3] uppercase sm:text-[20px] min-[1600px]:mt-[130px] min-[1600px]:text-[24px]"
              style={{ fontFamily: "var(--font-display)" }}
              data-node-id={card.pillNode}
            >
              {card.pill}
            </motion.p>

            <h2
              className="mt-10 max-w-[627px] text-[34px] leading-none sm:text-[38px] min-[1600px]:mt-[51px] min-[1600px]:text-[40px]"
              style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
              data-node-id={card.headingNode}
            >
              {card.heading}
            </h2>

            <p
              className="mt-6 max-w-[627px] text-[18px] leading-[1.3] text-black/60 sm:text-[20px] min-[1600px]:mt-[29px] min-[1600px]:text-[24px]"
              style={{ fontFamily: "var(--font-display)" }}
              data-node-id={card.copyNode}
            >
              {card.copy}
            </p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-4 flex aspect-[1848/840] max-w-[1848px] items-center justify-center overflow-hidden rounded-[18px] bg-[#0abaf4] min-[1600px]:mt-[19px] min-[1600px]:rounded-[30px]"
        data-node-id="202:5300"
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, scale: 0.78, rotate: -3 }
          }
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
            delay: shouldReduceMotion ? 0 : 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-[58%] sm:w-[46%] lg:w-[34.4%]"
          data-node-id="202:5284"
        >
          <Image
            src="/works/lets-grub/identity/primary-logo.svg"
            alt="Let's Grub primary logo in white"
            width={636}
            height={371}
            className="h-auto w-full"
          />
        </motion.div>

        <p
          className="absolute bottom-4 left-5 text-[11px] text-white sm:bottom-6 sm:left-7 sm:text-[13px] lg:bottom-[50px] lg:left-[42px] lg:-rotate-90 lg:origin-bottom-left lg:text-[16px]"
          style={{ fontFamily: "var(--font-display)" }}
          data-node-id="202:5283"
        >
          Primary Logo
        </p>
      </motion.div>

      <div className="mx-auto mt-20 grid max-w-[1848px] grid-cols-1 md:grid-cols-3 min-[1600px]:mt-[140px]">
        {truths.map((truth, index) => (
          <motion.article
            key={truth.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-black/20 px-4 py-8 last:border-b-0 sm:px-10 md:min-h-[116px] md:border-b-0 md:border-r md:px-12 md:py-0 md:last:border-r-0 min-[1600px]:px-[96px]"
          >
            <h3
              className="text-[34px] leading-none min-[1600px]:text-[40px]"
              style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
              data-node-id={truth.titleNode}
            >
              {truth.title}
            </h3>
            <p
              className="mt-3 text-[18px] leading-[1.3] text-black/60 min-[1600px]:mt-2 min-[1600px]:text-[24px]"
              style={{ fontFamily: "var(--font-display)" }}
              data-node-id={truth.copyNode}
            >
              {truth.copy}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="h-24 md:h-32 min-[1600px]:h-[160px]" />
    </section>
  );
}
