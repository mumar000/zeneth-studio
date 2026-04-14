"use client";

import { ArrowUpRight } from "lucide-react";

export default function FocusSection() {
  return (
    <section className="w-full px-4 md:px-6 py-24 md:py-32 text-center">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className="tracking-tighter  leading-[1] text-black text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[3.5vw] font-[400]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Elite execution for focused founders.
        </h2>

        <p
          className="mt-8 md:mt-10 text-black/60 text-base sm:text-lg md:text-2xl max-w-[1000px] mx-auto"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          We don't scale for the sake of scaling. We take on a limited number
          of projects to ensure every pixel is intentional and every build is
          flawless. No account managers, no junior designers just senior-level
          authority from start to finish.
        </p>

        <div className="mt-10 md:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 md:px-7 py-3 bg-primary text-white text-base md:text-lg shadow-[0_8px_30px_rgba(138,56,245,0.25)]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Apply for a Slot
            <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
