import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { primaryButtonClass } from "@/components/home/button-styles";
import { siteConfig } from "@/lib/site-config";

// Closing call to action on the Works page and every case study. Same card
// language as the booking sections: dark panel, mono eyebrow, display heading.
export default function AlignmentCTA({ compact = false }) {
  return (
    <section
      data-project-cta-boundary
      aria-labelledby="alignment-cta-title"
      className={`w-full px-3 sm:px-6 ${compact ? "pb-14 pt-4 md:pb-20" : "py-14 md:py-20"}`}
    >
      <Reveal className="mx-auto max-w-[1200px] overflow-hidden rounded-[24px] bg-[#1e142c] px-6 py-12 text-center text-white sm:px-10 md:rounded-[28px] md:py-16">
        <p className="font-mono text-xs font-[700] uppercase tracking-[0.18em] text-white/70">Work with us</p>
        <h2
          id="alignment-cta-title"
          className="mx-auto mt-4 max-w-[760px] text-balance text-[clamp(32px,5vw,56px)] font-[700] leading-[1.06] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Only for those who demand{" "}
          <span className="font-romie font-[400] italic tracking-[-0.03em]">the undeniable.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[540px] text-[16px] leading-[1.6] text-white/80 md:text-[18px]">
          We don&apos;t take on every project. We look for founders who have built something great and need the
          visual authority to match it. If that&apos;s you, let&apos;s talk.
        </p>
        <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-7">
          <Link href="/contact" className={`group ${primaryButtonClass}`}>
            Book a call
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex min-h-11 items-center text-[15px] text-white/80 underline decoration-white/30 decoration-2 underline-offset-[5px] transition-colors hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e142c]"
          >
            {siteConfig.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
