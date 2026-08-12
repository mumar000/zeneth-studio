"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DetailHero({ project }) {
  const { title, tagline, tags, description, hero, accent, bg, liveUrl } =
    project;

  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text column fades and slides left
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [0, -160]);

  // Image expands inside the container (stops at container padding)
  // lg:pl-24 = 6rem on the left, pr-12 = 3rem on the right
  const imgLeft = useTransform(scrollYProgress, [0, 0.7], ["38%", "6rem"]);

  return (
    <section ref={ref} className="relative lg:h-[120vh]">
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        {/* Animated image expands leftward to fill the container */}
        <motion.div
          style={{ left: imgLeft }}
          className="hidden lg:block absolute right-12 top-28 bottom-10 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0" style={{ backgroundColor: bg }} />
          {hero.video ? (
            <video
              src={hero.video}
              poster={hero.image}
              aria-label={`${title} project video`}
              autoPlay={!shouldReduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={hero.image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          )}
        </motion.div>

        {/* Text column fades and slides out */}
        <motion.div
          style={{ opacity: textOpacity, x: textX }}
          className="hidden lg:flex absolute left-24 top-28 bottom-10 w-[32%] max-w-[420px] flex-col justify-between z-10"
        >
          <div>
            <p className="text-[11px] tracking-[0.22em] font-[600] uppercase text-black/70 mb-4">
              {title}
            </p>
            <h1 className="text-3xl lg:text-[2.4rem] xl:text-5xl font-[400] leading-[1.05] tracking-tight text-black">
              {tagline}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full border border-black/30 text-[10px] tracking-[0.18em] font-[600] uppercase text-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-[400] leading-relaxed text-black/80 max-w-md mb-8">
              {description}
            </p>
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white rounded-full px-6 py-3 text-[11px] tracking-[0.22em] font-[600] uppercase hover:bg-black/85 transition-colors"
              >
                See {title}
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            )}
          </div>
        </motion.div>

        {/* Mobile / tablet stacked layout */}
        <div className="lg:hidden px-6 md:px-12 pt-28 pb-12">
          <p className="text-[11px] tracking-[0.22em] font-[600] uppercase text-black/70 mb-3">
            {title}
          </p>
          <h1 className="text-3xl md:text-4xl font-[400] leading-[1.1] tracking-tight text-black">
            {tagline}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-black/30 text-[10px] tracking-[0.18em] font-[600] uppercase text-black"
              >
                {t}
              </span>
            ))}
          </div>

          <div
            className="relative w-full aspect-[4/3] mt-6 rounded-3xl overflow-hidden"
            style={{ backgroundColor: bg }}
          >
            {hero.video ? (
              <video
                src={hero.video}
                poster={hero.image}
                aria-label={`${title} project video`}
                autoPlay={!shouldReduceMotion}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={hero.image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-black/80">
            {description}
          </p>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-black text-white rounded-full px-5 py-2.5 text-[10px] tracking-[0.22em] font-[600] uppercase"
            >
              See {title}
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
