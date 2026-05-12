"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plane } from "lucide-react";

export default function BoardingPassQuote({
  text,
  author,
  role,
  code,
  date,
  accent,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // The card lifts and tilts slightly as it crosses the viewport
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2.5, 0, 2.5]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.97]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-16">
      <motion.div
        className="rounded-3xl p-8 md:p-12 lg:p-16"
        style={{ backgroundColor: accent || "#3B82F6" }}
      >
        <motion.div
          style={{ y: cardY, rotate: cardRotate, scale: cardScale }}
          className="grid grid-cols-1 lg:grid-cols-[2.2fr_auto_1fr] gap-0 bg-white rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] will-change-transform"
        >
          {/* Left: barcode + quote */}
          <div className="flex">
            <div
              className="w-10 md:w-14 shrink-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #111 0 2px, transparent 2px 5px)",
              }}
            />
            <div className="p-8 md:p-10 flex flex-col">
              <p className="text-2xl md:text-3xl lg:text-4xl font-[400] leading-tight text-black tracking-tight">
                &ldquo;{text}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3 text-black">
                <span className="text-[11px] tracking-[0.2em] font-[600] uppercase">
                  EXL
                </span>
                <Plane className="w-4 h-4" strokeWidth={1.75} />
                <span className="text-[11px] tracking-[0.2em] font-[600] uppercase">
                  RNW
                </span>
              </div>

              <div className="mt-2">
                <p className="text-sm font-[600] text-black">{author}</p>
                <p className="text-xs text-black/60">{role}</p>
              </div>
            </div>
          </div>

          {/* Perforation */}
          <div className="hidden lg:block w-px relative">
            <div
              className="absolute inset-y-4 w-px"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, #111 0 4px, transparent 4px 10px)",
              }}
            />
          </div>

          {/* Right: stub */}
          <div className="p-8 md:p-10 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-dashed border-black/15">
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] font-[600] uppercase text-black">
              <span>
                # <span className="font-[700]">{code}</span>
              </span>
              <span>
                DATE <span className="font-[700]">{date}</span>
              </span>
            </div>

            <div className="space-y-3 text-[11px] tracking-[0.18em] uppercase text-black/50">
              <div className="border-b border-black/20 pb-1">Status</div>
              <div className="border-b border-black/20 pb-1">Seat</div>
              <div className="border-b border-black/20 pb-1">Group</div>
            </div>

            <div className="flex items-end justify-between text-black">
              <div>
                <p className="text-[10px] tracking-[0.2em] font-[600] uppercase text-black/50">
                  Status
                </p>
                <p className="text-sm font-[600]">Verified</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] font-[600] uppercase text-black/50">
                  Class
                </p>
                <p className="text-sm font-[600]">First</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
