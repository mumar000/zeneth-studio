"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const PHONE_IMAGE = "/works/lets-grub/tension/phone-crop-4x-hd.png";

export default function TensionPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 pb-24 sm:px-6 md:pb-32 lg:px-9 min-[1600px]:pb-[168px]">
      <div
        className="relative mx-auto max-w-[1848px] overflow-hidden rounded-[10px] bg-black lg:min-h-[650px] min-[1600px]:h-[791px] min-[1600px]:min-h-0"
        data-node-id="202:5167"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 px-7 pb-10 pt-14 sm:px-10 lg:absolute lg:left-[7.52%] lg:top-[16.56%] lg:w-[43.02%] lg:p-0"
          data-node-id="202:5166"
        >
          <p
            className="text-[20px] leading-[0.9] text-white uppercase md:text-[25px] min-[1600px]:text-[30.647px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="202:5162"
          >
            The tension
          </p>

          <h2
            className="mt-8 max-w-[795px] text-[42px] leading-[1] text-white sm:text-[50px] md:text-[56px] lg:mt-[39px] min-[1600px]:text-[64px]"
            style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
            data-node-id="202:5163"
          >
            A social app without dating-app energy.
          </h2>

          <p
            className="mt-8 max-w-[511px] text-[17px] leading-[1.35] text-white/60 lg:mt-[39px] min-[1600px]:text-[20px] min-[1600px]:leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="202:5164"
          >
            That one distinction changed the entire project. Hearts, genies,
            connection language every familiar cue had to be handled carefully.
          </p>
        </motion.div>

        <motion.blockquote
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.65,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 mx-7 mb-10 flex min-h-[128px] max-w-[439px] items-center rounded-[10px] bg-[#ff383c] px-7 py-6 sm:mx-10 lg:absolute lg:bottom-[16.43%] lg:left-[7.52%] lg:m-0 lg:h-[149px] lg:w-[439px] lg:px-[45px] lg:py-[26px]"
          data-node-id="202:5174"
        >
          <p
            className="text-[17px] leading-[1.3] text-white uppercase sm:text-[20px] min-[1600px]:text-[24px]"
            style={{ fontFamily: "var(--font-display)" }}
            data-node-id="202:5165"
          >
            “We want to purely push connection, meetings and food. Rest is on the
            users.”
          </p>
        </motion.blockquote>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.85,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 ml-auto aspect-[924/790] w-full max-w-[924px] lg:absolute lg:inset-y-0 lg:left-1/2 lg:w-1/2 lg:max-w-none"
          data-node-id="207:40"
        >
          <Image
            src={PHONE_IMAGE}
            alt="Let's Grub mobile map interface shown inside a phone mockup"
            fill
            unoptimized
            quality={100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-fill"
          />
        </motion.div>
      </div>
    </section>
  );
}
