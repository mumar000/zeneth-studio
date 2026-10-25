"use client";

import HeroLogoMarquee from "./hero-logo-marquee";
import { primaryButtonClass } from "./button-styles";
import { scrollToBook } from "@/lib/scroll-to-book";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 md:min-h-screen md:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <h1
          className="home-hero-title mx-auto max-w-[1000px] font-[700] leading-[0.98] tracking-[-0.04em] text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your <span className="text-primary">brand</span> and website finally working as <span className="text-primary">one.</span>
        </h1>

        <p
          className="home-hero-description mx-auto mt-7 max-w-[520px] font-[400] leading-[1.5] text-[#4a4752]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          We design your brand and build your website. One team, from first sketch to launch.
        </p>

        <div className="mt-9 flex justify-center">
          <a
            href="#book"
            onClick={(event) => {
              if (scrollToBook()) event.preventDefault();
            }}
            className={primaryButtonClass}
          >
            Book a 30-min call <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <HeroLogoMarquee />
    </section>
  );
}
