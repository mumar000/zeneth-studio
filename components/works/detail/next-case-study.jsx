"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NextCaseStudy({ nextSlug, nextTitle }) {
  return (
    <section className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-24">
      <div className="grid grid-cols-3 items-center">
        <Link
          href="/works"
          className="flex items-center gap-2 text-[11px] md:text-xs tracking-[0.2em] font-[700] uppercase text-black border-b border-black/40 pb-1 w-fit hover:border-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          Back to all work
        </Link>

        <h3 className="text-center text-2xl md:text-4xl lg:text-5xl font-[400] italic tracking-tight text-black">
          Interested to see more?
        </h3>

        <Link
          href={`/works/${nextSlug}`}
          className="justify-self-end flex items-center gap-2 text-[11px] md:text-xs tracking-[0.2em] font-[700] uppercase text-black border-b border-black/40 pb-1 w-fit hover:border-black transition-colors"
        >
          <span className="hidden md:inline">See next: {nextTitle}</span>
          <span className="md:hidden">Next case</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
