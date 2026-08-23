"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const serif = '"PP Editorial Old", "Romie Trial", "Times New Roman", serif';
const sans = '"SF Pro", "Helvetica Neue", sans-serif';

const homepageSlices = [
  {
    src: "/works/sapphire/first-impression/home-01-hero.webp",
    alt: "Sapphire website homepage hero",
    ratio: "aspect-[1816/1061]",
  },
  {
    src: "/works/sapphire/first-impression/home-02-about.webp",
    alt: "Sapphire homepage about section",
    ratio: "aspect-[1816/1043]",
  },
  {
    src: "/works/sapphire/first-impression/home-03-services.webp",
    alt: "Sapphire pool and spa services section",
    ratio: "aspect-[1816/1082]",
  },
  {
    src: "/works/sapphire/first-impression/home-04-process.webp",
    alt: "Sapphire project process section",
    ratio: "aspect-[1816/1043]",
  },
  {
    src: "/works/sapphire/first-impression/home-05-difference.webp",
    alt: "Sapphire differentiation section",
    ratio: "aspect-[1816/1044]",
  },
  {
    src: "/works/sapphire/first-impression/home-06-contact.webp",
    alt: "Sapphire contact form and footer",
    ratio: "aspect-[1816/1522]",
  },
];

const principles = [
  ["01", "Aspiration first"],
  ["02", "Clear project action"],
  ["03", "Calls + quotes"],
];

export default function FirstImpression() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.85, delay, ease },
  });

  return (
    <section
      aria-labelledby="sapphire-first-impression-title"
      className="bg-[#f3efe7] text-[#0c0c0c]"
    >
      <div className="mx-auto flex max-w-[937px] flex-col items-center px-6 pb-20 pt-24 md:h-[760px] md:px-0 md:pb-[163px] md:pt-[163px]">
        <motion.div
          {...reveal()}
          className="flex flex-col items-center gap-[30px]"
          data-node-id="201:73"
        >
          <p
            className="rounded-full bg-white px-6 py-4 text-center text-[14px] uppercase leading-[1.2] tracking-[-0.03em] md:text-[16px]"
            style={{ fontFamily: sans }}
            data-node-id="201:74"
          >
            03 The first impression
          </p>

          <h2
            id="sapphire-first-impression-title"
            className="text-center text-[clamp(48px,5vw,96px)] font-[200] italic leading-[1.2] tracking-[-0.03em]"
            style={{ fontFamily: serif }}
            data-node-id="201:76"
          >
            <span className="block">We did not design a website.</span>
            <span className="block">We designed belief.</span>
          </h2>

          <p
            className="max-w-[815px] text-center text-[clamp(17px,1.25vw,24px)] font-[300] leading-[1.3] tracking-[-0.03em]"
            style={{ fontFamily: sans }}
            data-node-id="201:77"
          >
            Make luxury immediate. Make action obvious. The homepage opens on
            movement, scale, and one clean promise. Calls, quote requests, and
            the portfolio stay visible without making the brand feel desperate.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.03 }}
        transition={{ duration: 1, ease }}
        className="mx-auto max-w-[1920px] px-[clamp(12px,2.708vw,52px)]"
        data-node-id="201:80"
      >
        <div className="overflow-hidden rounded-[clamp(10px,1.042vw,20px)] bg-[#fffaef]">
          {homepageSlices.map((slice) => (
            <div key={slice.src} className={`relative w-full ${slice.ratio}`}>
              <Image
                src={slice.src}
                alt={slice.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 95vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.dl
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto mt-24 grid max-w-[897px] grid-cols-1 divide-y divide-black/20 border-y border-black/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        data-node-id="201:424"
      >
        {principles.map(([number, label]) => (
          <motion.div
            key={number}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease },
              },
            }}
            className="flex min-h-[207px] flex-col items-center justify-center gap-3 px-5 text-center"
          >
            <dt
              className="text-[clamp(64px,4.73vw,91px)] font-[200] italic leading-[1.2]"
              style={{ fontFamily: serif }}
            >
              {number}
            </dt>
            <dd
              className="text-[clamp(17px,1.182vw,22.7px)] leading-[1.2] tracking-[-0.05em]"
              style={{ fontFamily: sans }}
            >
              {label}
            </dd>
          </motion.div>
        ))}
      </motion.dl>

      <div className="h-[165px]" aria-hidden="true" />
    </section>
  );
}
