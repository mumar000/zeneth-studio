"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const rows = [
  [
    {
      src: "/works/lets-grub/imagery/social-circle-4x.png",
      alt: "Friends smiling together in a circle",
      nodeId: "204:6261",
    },
    {
      src: "/works/lets-grub/imagery/table-toast-4x.png",
      alt: "Friends sharing a toast over food outdoors",
      nodeId: "204:6263",
    },
  ],
  [
    {
      src: "/works/lets-grub/imagery/group-table-4x.png",
      alt: "Friends enjoying food and conversation around a table",
      nodeId: "204:6264",
    },
    {
      src: "/works/lets-grub/imagery/dinner-conversation-4x.png",
      alt: "Friends laughing together over dinner",
      nodeId: "204:6262",
    },
  ],
];

export default function ImageryDirection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-6">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto text-center"
      >
        <p
          className="text-[20px] leading-[0.9] uppercase md:text-[25px] min-[1600px]:text-[30.647px]"
          style={{ fontFamily: "var(--font-display)" }}
          data-node-id="204:6266"
        >
          Images
        </p>
        <h2
          className="mx-auto mt-8 max-w-[1213px] text-[42px] leading-[1.08] sm:text-[52px] min-[1600px]:mt-[43px] min-[1600px]:text-[64px] min-[1600px]:leading-[1.2]"
          style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
          data-node-id="204:6267"
        >
          Let’s Grub’s imagery captures lively, social moments around food.
        </h2>
      </motion.div>

      <div className="mx-auto mt-16 max-w-[1872px] space-y-4 md:space-y-5 min-[1600px]:mt-[73px]">
        {rows.map((row, rowIndex) => (
          <div
            key={row[0].src}
            className={`grid grid-cols-1 gap-4 md:gap-5 ${
              rowIndex === 0
                ? "md:grid-cols-[731fr_1121fr]"
                : "md:grid-cols-[1121fr_731fr]"
            }`}
          >
            {row.map((image, imageIndex) => (
              <motion.div
                key={image.src}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 34, scale: 0.975 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: shouldReduceMotion ? 0 : imageIndex * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group aspect-[731/796] overflow-hidden rounded-[18px] md:aspect-auto md:h-[clamp(420px,41.46vw,796px)] min-[1600px]:rounded-[30px]"
                data-node-id={image.nodeId}
              >
                <motion.div
                  className="relative h-full w-full"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={100}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="h-24 md:h-32 min-[1600px]:h-[158px]" />
    </section>
  );
}
