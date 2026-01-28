"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultTitle = (
  <>
    <span className="italic font-[400]">Brand</span>&nbsp;&
    <span className="font-[600]"> Visual Identity</span>
  </>
);

const defaultDescription =
  "We help brands stand out and grow. By mixing smart strategy, thoughtful design, and clear messaging, we build identities that people actually remember and connect with.";

const defaultChips = [
  "Naming",
  "Strategy & Positioning",
  "Voice & Tone",
  "Packaging Design",
  "Visual Identity",
  "Customer Experience",
  "Brand Messaging",
];

const defaultImages = ["/services1.webp", "/services2.webp", "/services3.webp"];

export default function BrandIdentitySection({
  title = defaultTitle,
  description = defaultDescription,
  chips = defaultChips,
  chipRows,
  images = defaultImages,
  transitionVariant = "first",
}) {
  const sectionRef = useRef(null);

  const resolvedChips = chips?.length ? chips : defaultChips;
  const resolvedChipRows =
    chipRows?.length && chipRows.some((row) => row.length)
      ? chipRows
      : [
          resolvedChips.slice(0, 2),
          resolvedChips.slice(2, 5),
          resolvedChips.slice(5),
        ].filter((row) => row.length > 0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom top+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      if (transitionVariant === "second") {
        tl.from(q(".bi-title"), {
          y: 60,
          opacity: 0,
          scale: 0.98,
          duration: 0.8,
          ease: "power2.out",
        })
          .from(
            q(".bi-desc"),
            {
              y: 40,
              opacity: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.45",
          )
          .from(
            q(".bi-chip"),
            {
              y: 24,
              opacity: 0,
              duration: 0.6,
              stagger: 0.05,
              ease: "power2.out",
            },
            "-=0.4",
          )
          .from(
            q(".bi-image"),
            {
              y: 80,
              opacity: 0,
              scale: 0.94,
              duration: 0.9,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.25",
          );
      } else if (transitionVariant === "third") {
        tl.from(q(".bi-title"), {
          x: -80,
          skewX: -6,
          rotateZ: -2,
          filter: "blur(10px)",
          duration: 0.9,
          ease: "power3.out",
        })
          .from(
            q(".bi-desc"),
            {
              x: -60,
              skewX: -4,
              filter: "blur(8px)",
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.5",
          )
          .from(
            q(".bi-chip"),
            {
              x: -40,
              skewX: -3,
              filter: "blur(6px)",
              duration: 0.6,
              stagger: 0.05,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .from(
            q(".bi-image"),
            {
              x: 60,
              rotateZ: 1.5,
              filter: "blur(10px)",
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.3",
          );
      } else {
        tl.from(q(".bi-title"), {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
          .from(
            q(".bi-desc"),
            {
              y: 30,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .from(
            q(".bi-chip"),
            {
              y: 20,
              opacity: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .from(
            q(".bi-image"),
            {
              y: 60,
              opacity: 0,
              scale: 0.96,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.2",
          );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 md:px-8 py-20 md:py-18"
    >
      <div className="mx-auto rounded-[28px] border border-black/40 bg-white/75 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 lg:p-20">
        {/* Header row (Unchanged) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h3
              className="bi-title text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.2vw] leading-[1.05] tracking-tight text-black"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              {title}
            </h3>
            <p
              className="bi-desc mt-5 md:mt-6 text-black/70 text-base sm:text-lg md:text-2xl"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              {description}
            </p>
          </div>
          <div
            className="w-full lg:w-auto"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {/* Chips (Unchanged) */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="flex justify-center gap-4 translate-x-20">
                {(resolvedChipRows[0] || []).map((c) => (
                  <span
                    key={c}
                    className="bi-chip inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl "
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {(resolvedChipRows[1] || []).map((c) => (
                  <span
                    key={c}
                    className="bi-chip inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl "
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {(resolvedChipRows[2] || []).map((c, i) => (
                  <span
                    key={c}
                    className={
                      "bi-chip inline-flex items-center translate-x-14 rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl  " +
                      (i === 0 ? "-translate-x-1" : "")
                    }
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:hidden flex flex-wrap gap-3 items-start">
              {resolvedChips.map((c) => (
                <span
                  key={c}
                  className="bi-chip inline-flex items-center rounded-full border border-black/20 px-4 py-2 bg-white text-black/80 text-sm "
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, idx) => (
            <div
              key={src}
              className="bi-image relative aspect-[16/12] rounded-2xl overflow-hidden border border-black/10 bg-black/5"
            >
              <Image
                src={src}
                alt={`Service ${idx + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 200vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
