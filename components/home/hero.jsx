"use client";

import React from "react";
import Marquee from "react-fast-marquee";

export default function Hero() {
  const marqueeTexts = [
    "We design and build digital experiences",
    "for founders who care about how they’re perceived.",
  ];
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 text-center">
      <div className="max-w-7xl w-full mx-auto">
        <h1
          className="leading-[0.95] tracking-[-0.05em] text-[4vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[5vw] font-[500] text-black"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          <span className="italic font-[400] text-primary">Design</span> that
          makes
          <br className="hidden md:block" />
          brands look{" "}
          <span className="italic font-[400] text-primary">serious.</span>
        </h1>

        <p
          className="mt-8 md:mt-10 text-base font-[400]  sm:text-lg md:text-2xl text-neutral-800"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Brand, product, web, and systems done properly.
        </p>
      </div>

      {/* Bottom marquee/ticker using react-fast-marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-black/80 bg-white/70 backdrop-blur-sm">
        <Marquee
          gradient={false}
          speed={55}
          pauseOnHover={false}
          className="py-3 md:py-4"
        >
          <div className="flex items-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <React.Fragment key={i}>
                <span
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-black text-white text-lg font-[400] tracking-wide mr-12"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  ZENETH STUDIO
                </span>
                <span
                  className="inline-flex items-center justify-center text-lg text-black/80 mr-12"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {marqueeTexts[i % marqueeTexts.length]}
                </span>
              </React.Fragment>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
