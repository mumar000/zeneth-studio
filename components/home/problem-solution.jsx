"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolution() {
  const [active, setActive] = useState("problem");
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const problemTitleRef = useRef(null);
  const problemDescRef = useRef(null);
  const solutionTitleRef = useRef(null);
  const solutionDescRef = useRef(null);
  const problemWordsRef = useRef([]);
  const solutionWordsRef = useRef([]);
  const problemDescWordsRef = useRef([]);
  const solutionDescWordsRef = useRef([]);
  const hasAnimated = useRef(false);

  // Animate on scroll
  useEffect(() => {
    if (!sectionRef.current || hasAnimated.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 0 });
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial container state
      gsap.set(containerRef.current, {
        scale: 0.94,
        opacity: 0,
        y: 40,
      });

      // Set initial word states for problem
      problemWordsRef.current.forEach((word, i) => {
        if (!word) return;
        gsap.set(word, {
          opacity: 0,
          y: 50,
          rotateX: 15,
          scale: 0.85,
        });
      });

      problemDescWordsRef.current.forEach((word, i) => {
        if (!word) return;
        gsap.set(word, {
          opacity: 0,
          y: 30,
          x: -10,
        });
      });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Container animation
      tl.to(
        containerRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        0,
      );

      // Animate problem words
      problemWordsRef.current.forEach((word, i) => {
        if (!word) return;
        tl.to(
          word,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.3 + i * 0.04,
        );
      });

      // Animate problem description words
      problemDescWordsRef.current.forEach((word, i) => {
        if (!word) return;
        tl.to(
          word,
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0.6 + i * 0.02,
        );
      });

      hasAnimated.current = true;
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Animate on tab switch
  useEffect(() => {
    if (!hasAnimated.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (active === "solution") {
        // Set initial states for solution words
        solutionWordsRef.current.forEach((word, i) => {
          if (!word) return;
          gsap.set(word, {
            opacity: 0,
            y: 40,
            rotateX: 12,
            scale: 0.9,
          });
        });

        solutionDescWordsRef.current.forEach((word, i) => {
          if (!word) return;
          gsap.set(word, {
            opacity: 0,
            y: 25,
            x: 10,
          });
        });

        // Animate solution words
        const tl = gsap.timeline();
        solutionWordsRef.current.forEach((word, i) => {
          if (!word) return;
          tl.to(
            word,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
            },
            i * 0.04,
          );
        });

        solutionDescWordsRef.current.forEach((word, i) => {
          if (!word) return;
          tl.to(
            word,
            {
              opacity: 1,
              y: 0,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            0.3 + i * 0.02,
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  const renderAnimatedText = (text, wordsRef, isItalic = false) => {
    const words = text.split(" ");
    return words.map((word, i) => (
      <span
        key={i}
        ref={(el) => (wordsRef.current[i] = el)}
        className={`inline-block ${isItalic ? "italic font-[300]" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {word}
        {i < words.length - 1 && "\u00A0"}
      </span>
    ));
  };

  const renderAnimatedDescription = (text, wordsRef) => {
    const words = text.split(" ");
    return words.map((word, i) => (
      <span
        key={i}
        ref={(el) => (wordsRef.current[i] = el)}
        className="inline-block"
      >
        {word}
        {i < words.length - 1 && "\u00A0"}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="w-full px-4 md:px-14 py-16 md:py-8">
      <div
        ref={containerRef}
        className="mx-auto rounded-[28px] border border-black/40 bg-white/70 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] overflow-hidden"
      >
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
                ref={problemTitleRef}
                className="leading-none text-black tracking-tighter text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[3.6vw] font-[500]"
                style={{
                  fontFamily: "var(--font-sora)",
                  transformStyle: "preserve-3d",
                }}
              >
                {renderAnimatedText(
                  "A fragmented digital presence is costing you money.",
                  problemWordsRef,
                )}
              </h2>
              <p
                ref={problemDescRef}
                className="mt-10 md:mt-12 text-base sm:text-lg tracking-tight md:text-2xl text-black/50 max-w-[1200px] mx-auto"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {renderAnimatedDescription(
                  "A logo from one freelancer, a website from another, and UI that doesn't match. When your brand looks like a disjointed Frankenstein, enterprise clients assume your product is too.",
                  problemDescWordsRef,
                )}
              </p>
            </div>
          ) : (
            <div className="text-center">
              <h2
                ref={solutionTitleRef}
                className="leading-[1.05] text-black tracking-[-0.02em] text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[3.6vw] font-[700]"
                style={{
                  fontFamily: "var(--font-sora)",
                  transformStyle: "preserve-3d",
                }}
              >
                {renderAnimatedText(
                  "End-to-end visual authority built at velocity.",
                  solutionWordsRef,
                )}
              </h2>
              <p
                ref={solutionDescRef}
                className="mt-10 md:mt-12 text-base sm:text-lg md:text-2xl text-black/60 max-w-[1000px] mx-auto"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {renderAnimatedDescription(
                  "We strip away the bloat. You get a single, cohesive team executing your Brand Identity, Interface Design, and Platform Architecture. No handoffs. No friction",
                  solutionDescWordsRef,
                )}
              </p>
              <Link
                href="/works"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-[8px] bg-black px-6 py-3 text-sm font-[500] tracking-tight text-white transition-colors hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-base"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                View our pipeline in action
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
