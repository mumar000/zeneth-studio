"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function ServicePanel({
  price,
  title,
  description,
  bullets,
  exploreLabel,
  exploreHref = "#",
  getLabel,
  getHref = "/contact",
  video,
  videoLabel = "Service showcase video",
  image,
  imageAlt = "Service showcase",
  mediaBackdrop,
  mediaBackground = "#000000",
  index = 0,
}) {
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef(null);
  const panelInView = useInView(panelRef, { margin: "200px 0px" });

  return (
    <motion.article
      ref={panelRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-[#d9d0ed] bg-white md:min-h-[720px] lg:min-h-[760px] lg:grid-cols-[45.5%_54.5%] xl:min-h-[790px]"
    >
      <div className="flex flex-col bg-white px-5 py-7 sm:px-7 sm:py-9 md:min-h-[720px] md:px-14 md:py-12 lg:min-h-0 lg:px-[clamp(3.5rem,4.2vw,5rem)] lg:py-[clamp(3.5rem,7vh,4.5rem)]">
        <div>
          <p
            className="text-[13px] font-[500] leading-none text-primary md:text-[18px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Starting at {price}
          </p>

          <h3
            className="mt-3 text-[36px] font-[700] leading-[0.98] tracking-[-0.03em] text-black sm:text-[42px] md:mt-5 md:text-[64px] lg:text-[clamp(3.5rem,3.55vw,4.25rem)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>

          <p
            className="mt-4 max-w-[430px] text-[14px] leading-[1.5] text-black/55 md:mt-6 md:text-[18px] lg:text-[19px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {description}
          </p>
        </div>

        <ul
          className="mt-7 space-y-4 md:mt-20 md:space-y-8 lg:mt-24"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex max-w-[470px] items-center gap-3 text-[14px] leading-[1.4] text-black md:gap-7 md:text-[18px] md:leading-[1.35]"
            >
              <motion.span
                aria-hidden="true"
                className="flex w-7 shrink-0 items-center justify-center md:w-9"
                animate={{
                  rotate: panelInView && !shouldReduceMotion ? 360 : 0,
                }}
                transition={
                  shouldReduceMotion || !panelInView
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

        <div className="mt-auto flex flex-col gap-2.5 pt-8 sm:flex-row md:gap-3 md:pt-16">
          <Link
            href={exploreHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ededed] px-5 py-2.5 text-[13px] font-[500] text-[#262626] transition-colors duration-200 hover:bg-[#dfdfdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:min-h-14 md:px-6 md:py-3 md:text-[16px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            <span>{exploreLabel}</span>
            <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>

          <Link
            href={getHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-2.5 text-[13px] font-[500] text-white transition-colors duration-200 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:min-h-14 md:px-6 md:py-3 md:text-[16px]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            <span>{getLabel}</span>
            <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>

      <div
        className="relative aspect-video w-full overflow-hidden lg:aspect-auto"
        style={{ backgroundColor: mediaBackground }}
      >
        {mediaBackdrop && panelInView ? (
          <Image
            src={mediaBackdrop}
            fill
            alt=""
            aria-hidden="true"
            sizes="(min-width: 1024px) 55vw, 1px"
            className="hidden scale-110 object-cover opacity-70 blur-3xl lg:block"
          />
        ) : null}

        {video ? (
          <video
            src={panelInView ? video : undefined}
            poster={panelInView ? mediaBackdrop : undefined}
            aria-label={videoLabel}
            autoPlay={panelInView && !shouldReduceMotion}
            muted
            loop
            playsInline
            preload={panelInView ? "metadata" : "none"}
            className="relative z-10 h-full w-full object-contain"
          />
        ) : image ? (
          <Image
            src={image}
            fill
            alt={imageAlt}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="z-10 object-contain"
          />
        ) : null}
      </div>
    </motion.article>
  );
}
