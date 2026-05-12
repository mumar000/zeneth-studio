"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LeftRail({ title, liveUrl }) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-20 z-30 flex-col items-center justify-between py-32 pointer-events-none">
      <span
        className="text-[10px] tracking-[0.32em] font-[600] text-black/80 uppercase pointer-events-auto select-none"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {title}
      </span>

      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto group flex flex-col items-center gap-1.5"
        >
          <ArrowUpRight
            className="w-4 h-4 text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            strokeWidth={1.75}
          />
          <span className="text-[9px] tracking-[0.28em] font-[600] uppercase text-black">
            View Site
          </span>
        </Link>
      )}
    </aside>
  );
}
