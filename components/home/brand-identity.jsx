"use client";

import Image from "next/image";
import { useRef } from "react";

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
