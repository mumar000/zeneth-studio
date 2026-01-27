"use client";

import { useState } from "react";

export default function ProblemSolution() {
  const [active, setActive] = useState("problem");

  return (
    <section className="w-full px-4 md:px-14 py-16 md:py-8">
      <div className="mx-auto  rounded-[28px] border border-black/20 bg-white/70 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Top split tabs */}
        <div
          className="flex text-center text-xl md:text-2xl tracking-tight"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          <button
            className={`w-1/2 py-6 md:py-7 transition-colors ${
              active === "problem"
                ? "text-black"
                : "text-black/50 hover:text-black"
            }`}
            onClick={() => setActive("problem")}
          >
            The Problem
          </button>
          <div className="w-px bg-black/20" aria-hidden />
          <button
            className={`w-1/2 py-6 md:py-7 transition-colors ${
              active === "solution"
                ? "text-black"
                : "text-black/50 hover:text-black"
            }`}
            onClick={() => setActive("solution")}
          >
            The Solution
          </button>
        </div>
        <div className="h-px bg-black/15" aria-hidden />

        {/* Content */}
        <div className="px-5 sm:px-8 md:px-16 lg:px-24 xl:px-28 py-16 md:py-44">
          {active === "problem" ? (
            <div className="text-center">
              <h2
                className="leading-none text-black tracking-tighter text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[3.6vw] font-[500]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Most brands don’t have a{" "}
                <span className="italic font-[300]">design problem</span>.
                <br />
                They have a{" "}
                <span className="italic font-[300]">perception</span> problem.
              </h2>
              <p
                className="mt-10 md:mt-12 text-base sm:text-lg tracking-tight md:text-2xl text-black/50 max-w-[1200px] mx-auto"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Your product might be solid. Your service might be great. But if
                your brand, website, or visuals feel unclear, inconsistent, or
                outdated people hesitate. And hesitation kills trust.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <h2
                className="leading-[1.05] text-black tracking-[-0.02em] text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[3.6vw] font-[700]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Clarify, systemize, and express your brand with intent.
              </h2>
              <p
                className="mt-10 md:mt-12 text-base sm:text-lg md:text-2xl text-black/60 max-w-[1000px] mx-auto"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                We help you craft perception through sharp messaging, modern
                visuals, and a design system that scales.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
