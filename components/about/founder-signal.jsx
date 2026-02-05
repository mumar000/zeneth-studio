"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FounderSignal() {
  const [active, setActive] = useState("founder");
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const founderWordsRef = useRef([]);
  const youWordsRef = useRef([]);
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

      // Set initial word states for founder
      founderWordsRef.current.forEach((word, i) => {
        if (!word) return;
        gsap.set(word, {
          opacity: 0,
          y: 50,
          rotateX: 15,
          scale: 0.85,
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

      // Animate founder words
      founderWordsRef.current.forEach((word, i) => {
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
      if (active === "you") {
        // Set initial states for you words
        youWordsRef.current.forEach((word, i) => {
          if (!word) return;
          gsap.set(word, {
            opacity: 0,
            y: 40,
            rotateX: 12,
            scale: 0.9,
          });
        });

        // Animate you words
        const tl = gsap.timeline();
        youWordsRef.current.forEach((word, i) => {
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
        className={`inline-block ${isItalic ? "italic font-romie font-[300]" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {word}
        {i < words.length - 1 && "\u00A0"}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="w-full  md:py-8">
      <div
        ref={containerRef}
        className="mx-auto border border-black/40 bg-white/70 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] overflow-hidden"
      >
        {/* Top split tabs */}
        <div className="flex text-center font-romie text-xl md:text-3xl tracking-tight">
          <button
            className={`w-1/2 py-6 md:py-7 transition-colors ${
              active === "founder"
                ? "text-black"
                : "text-black/50 hover:text-black"
            }`}
            onClick={() => setActive("founder")}
          >
            Founder Signal
          </button>
          <div className="w-px bg-black/20" aria-hidden />
          <button
            className={`w-1/2 py-6 md:py-7 transition-colors ${
              active === "you" ? "text-black" : "text-black/50 hover:text-black"
            }`}
            onClick={() => setActive("you")}
          >
            This is for you if...
          </button>
        </div>
        <div className="h-px bg-black/15" aria-hidden />

        {/* Content */}
        <div className="px-5 max-w-[1400px] mx-auto sm:px-8 md:px-16 lg:px-24 xl:px-28 py-16 md:py-44">
          {active === "founder" ? (
            <div className="text-center">
              <h2
                className="leading-[1.15] text-black tracking-tight text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[2.4vw] font-[500]"
                style={{
                  fontFamily: "var(--font-sora)",
                  transformStyle: "preserve-3d",
                }}
              >
                {renderAnimatedText(
                  "Zenith Studio",
                  { current: founderWordsRef.current.slice(0, 2) },
                  true,
                )}{" "}
                {renderAnimatedText("is led by a", founderWordsRef)}{" "}
                {renderAnimatedText(
                  "design-first founder",
                  { current: founderWordsRef.current.slice(6, 8) },
                  true,
                )}{" "}
                {renderAnimatedText(
                  "who believes most brands don't need more noise they need clarity, restraint, and better decisions.",
                  founderWordsRef,
                )}
              </h2>
            </div>
          ) : (
            <div className="text-center">
              <h2
                className="leading-[1.15] text-black tracking-tight text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[3.6vw] font-[500]"
                style={{
                  fontFamily: "var(--font-sora)",
                  transformStyle: "preserve-3d",
                }}
              >
                {renderAnimatedText(
                  "You're building something real and you need a brand that reflects the quality of your work, not just what's trendy.",
                  youWordsRef,
                )}
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
