"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function ServicePanel({
  price,
  title,
  description,
  bullets,
  exploreLabel,
  exploreHref = "#",
  getLabel,
  getHref = "#",
  image,
  imageAlt = "Service showcase",
  index = 0,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="grid min-h-[720px] grid-cols-1 overflow-hidden rounded-[10px] border border-[#d9d0ed] bg-white lg:min-h-[760px] lg:grid-cols-[45.5%_54.5%] xl:min-h-[790px]"
    >
      <div className="flex min-h-[720px] flex-col bg-white px-7 py-10 sm:px-10 sm:py-12 md:px-14 lg:min-h-0 lg:px-[clamp(3.5rem,4.2vw,5rem)] lg:py-[clamp(3.5rem,7vh,4.5rem)]">
        <div>
          <p
            className="text-[16px] font-[500] leading-none text-[#7C3AED] md:text-[18px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            [Starting at {price}]
          </p>

          <h3
            className="mt-5 text-[48px] font-[700] leading-[0.95] tracking-[-0.03em] text-black sm:text-[56px] md:text-[64px] lg:text-[clamp(3.5rem,3.55vw,4.25rem)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>

          <p
            className="mt-6 max-w-[430px] text-[16px] leading-[1.45] text-black/55 md:text-[18px] lg:text-[19px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {description}
          </p>
        </div>

        <ul
          className="mt-16 space-y-7 md:mt-20 md:space-y-8 lg:mt-24"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex max-w-[470px] items-center gap-7 text-[16px] leading-[1.35] text-black md:text-[18px]"
            >
              <motion.span
                aria-hidden="true"
                className="flex w-9 shrink-0 items-center justify-center"
                animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 6, repeat: Infinity, ease: "linear" }
                }
              >
                <Image src="/star.svg" width={22} height={22} alt="" />
              </motion.span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-14 md:pt-16">
          <Link
            href={exploreHref}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#ededed] px-6 py-3 text-[15px] font-[500] text-[#262626] transition-colors duration-200 hover:bg-[#dfdfdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:text-[16px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            <span>{exploreLabel}</span>
            <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>

          <Link
            href={getHref}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3 text-[15px] font-[500] text-white transition-colors duration-200 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:text-[16px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            <span>{getLabel}</span>
            <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>

      <div className="relative min-h-[440px] overflow-hidden bg-[#1c0f09] sm:min-h-[520px] lg:min-h-0">
        {image && (
          <Image
            src={image}
            fill
            alt={imageAlt}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain p-[6%]"
          />
        )}
      </div>
    </motion.article>
  );
}
