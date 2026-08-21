"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const concepts = [
  {
    src: "/works/lets-grub/logo-exploration/concept-01.png",
    width: 3611,
    height: 3041,
    nodeId: "202:5191",
  },
  {
    src: "/works/lets-grub/logo-exploration/concept-02.png",
    width: 3611,
    height: 3041,
    nodeId: "202:5194",
  },
  {
    src: "/works/lets-grub/logo-exploration/concept-03.png",
    width: 3611,
    height: 3468,
    nodeId: "202:5192",
  },
  {
    src: "/works/lets-grub/logo-exploration/concept-04.png",
    width: 3611,
    height: 3468,
    nodeId: "202:5195",
  },
  {
    src: "/works/lets-grub/logo-exploration/concept-05.png",
    width: 3611,
    height: 3035,
    nodeId: "202:5193",
  },
  {
    src: "/works/lets-grub/logo-exploration/concept-06.png",
    width: 3611,
    height: 3035,
    nodeId: "202:5196",
  },
];

export default function LogoExploration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-9">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[795px] text-center"
      >
        <p
          className="text-[20px] leading-[0.9] uppercase md:text-[25px] min-[1600px]:text-[30.647px]"
          style={{ fontFamily: "var(--font-display)" }}
          data-node-id="202:5177"
        >
          Logo exploration
        </p>

        <h2
          className="mt-8 text-[42px] leading-[1] sm:text-[50px] md:text-[56px] min-[1600px]:mt-[43px] min-[1600px]:text-[64px] min-[1600px]:leading-[1.2]"
          style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
          data-node-id="202:5179"
        >
          Six answers before the right question.
        </h2>

        <p
          className="mx-auto mt-6 max-w-[787px] text-[17px] leading-[1.35] text-black/60 min-[1600px]:mt-[22px] min-[1600px]:text-[20px] min-[1600px]:leading-[1.3]"
          style={{ fontFamily: "var(--font-display)" }}
          data-node-id="202:5178"
        >
          Each route tested a different center of gravity: the genie, the
          people, the place, or the app. The final identity needed all of them
          to work without depending on any one of them.
        </p>
      </motion.div>

      <div
        className="mx-auto mt-16 grid max-w-[1848px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-[24px] min-[1600px]:mt-[102px] min-[1600px]:gap-x-[42.778px] min-[1600px]:gap-y-[42.778px]"
        data-node-id="202:5190"
      >
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.src}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : (index % 2) * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-[14px] min-[1600px]:rounded-[28.519px]"
            data-node-id={concept.nodeId}
          >
            <Image
              src={concept.src}
              alt={`Let's Grub logo exploration concept ${index + 1}`}
              width={concept.width}
              height={concept.height}
              quality={100}
              sizes="(min-width: 768px) 48vw, 100vw"
              className="h-auto w-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
