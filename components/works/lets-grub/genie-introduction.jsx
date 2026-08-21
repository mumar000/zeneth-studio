"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function GenieIntroduction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 pb-4 sm:px-6 lg:px-9 min-[1600px]:pb-5">
      <div
        className="mx-auto grid max-w-[1848px] overflow-hidden rounded-[20px] bg-white px-7 py-14 sm:px-12 md:grid-cols-[42%_58%] md:px-0 md:py-0 min-[1600px]:h-[789px] min-[1600px]:rounded-[30px]"
        data-node-id="204:5430"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -50, y: 24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-center self-end md:h-full md:pl-[7%]"
        >
          <motion.div
            animate={
              shouldReduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 0.6, 0] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }
            className="w-full max-w-[583px]"
            data-node-id="204:5434"
          >
            <Image
              src="/works/lets-grub/mascot/genie.svg"
              alt="The friendly Let's Grub Genie mascot"
              width={583}
              height={612}
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 46 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.85,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col justify-center md:mt-0 md:pr-[7%] min-[1600px]:pl-[7.2%] min-[1600px]:pr-[6.2%]"
        >
          <p
            className="text-[24px] font-[300] leading-[1.4] tracking-[0.03em] text-black sm:text-[28px] min-[1600px]:text-[32px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="204:5433"
          >
            The <strong className="font-[500] text-[#0abaf4]">Genie</strong> is
            more than just a{" "}
            <strong className="font-[500] text-[#bb94ff]">character</strong> it’s
            the friendly face of the brand. Designed to represent magic,
            convenience, and reliability, the{" "}
            <strong className="font-[500] text-[#0abaf4]">Genie</strong> connects
            with customers on an emotional level.
          </p>

          <motion.ul
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
              },
            }}
            className="mt-7 list-disc space-y-[10px] pl-7 text-[18px] font-[300] leading-[1.4] tracking-[0.03em] text-[#717171] min-[1600px]:mt-[29px] min-[1600px]:text-[24px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="204:5432"
          >
            {[
              "Role in Branding: Acts as the brand’s mascot, adding personality and approachability.",
              "Usage: Can be featured in marketing materials, app screens, social media, and campaigns as a fun, engaging element.",
              "Tone: Friendly, helpful, and magical always ready to serve.",
            ].map((item) => (
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
        </motion.div>
      </div>
    </section>
  );
}
