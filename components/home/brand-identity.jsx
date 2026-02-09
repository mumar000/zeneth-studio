"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePerformance } from "@/hooks/use-performance";

gsap.registerPlugin(ScrollTrigger);

const defaultTitle = (
  <>
    <span className="italic font-romie font-[400]">Brand</span>&nbsp;&
    <span className="font-[600]"> Visual Identity</span>
  </>
);

const defaultDescription =
  "We help brands stand out and grow. By mixing smart strategy, thoughtful design, and clear messaging, we build identities that people actually remember and connect with.";

const defaultChips = [
  "Naming",
  "Strategy & Positioning",
  "Voice & Tone",
  "Packaging Design",
  "Visual Identity",
  "Customer Experience",
  "Brand Messaging",
];

const defaultImages = ["/services1.webp", "/services2.webp", "/services3.webp"];

export default function BrandIdentitySection({
  title = defaultTitle,
  description = defaultDescription,
  chips = defaultChips,
  chipRows,
  images = defaultImages,
  transitionVariant = "first", // "first", "second", or "third"
}) {
  const perf = usePerformance();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const chipsRef = useRef([]);
  const imagesRef = useRef([]);

  const resolvedChips = chips?.length ? chips : defaultChips;
  const resolvedChipRows =
    chipRows?.length && chipRows.some((row) => row.length)
      ? chipRows
      : [
          resolvedChips.slice(0, 2),
          resolvedChips.slice(2, 5),
          resolvedChips.slice(5),
        ].filter((row) => row.length > 0);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Simple fade-in for low-end devices or reduced motion
    if (perf.isLowEnd || perf.prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 0 });
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
      return;
    }

    // Sticky card stacking scroll effect - desktop only, disabled on low-end
    let stickyScrollTrigger;
    const isDesktop = window.innerWidth >= 1024;
    const enableStickyScroll = isDesktop && perf.isHighEnd;

    if (enableStickyScroll && transitionVariant === "first") {
      stickyScrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        id: `brand-sticky-${transitionVariant}`,
      });
    } else if (enableStickyScroll && transitionVariant === "second") {
      stickyScrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        id: `brand-sticky-${transitionVariant}`,
      });
    }

    // Use gsap.context to scope animations to this component instance
    const ctx = gsap.context(() => {
      // Simplified animations for mid-range devices
      const useLightAnimations = perf.isMidRange;

      // Set initial states
      gsap.set(containerRef.current, {
        scale: useLightAnimations ? 0.97 : 0.92,
        opacity: 0,
        rotateX: useLightAnimations ? 0 : 8,
        transformPerspective: useLightAnimations ? 0 : 1000,
      });

      if (titleRef.current) {
        gsap.set(titleRef.current, {
          y: useLightAnimations ? 30 : 60,
          opacity: 0,
          rotateX: useLightAnimations ? 0 : 15,
        });
      }

      if (descRef.current) {
        gsap.set(descRef.current, {
          y: useLightAnimations ? 20 : 40,
          x: useLightAnimations ? 0 : -20,
          opacity: 0,
        });
      }

      // Set chips initial states
      const allChips = chipsRef.current.filter((el) => el);
      allChips.forEach((chip, i) => {
        const row = Math.floor(i / 3);
        const direction = row % 2 === 0 ? 1 : -1;

        gsap.set(chip, {
          x: useLightAnimations ? 20 * direction : 50 * direction,
          y: useLightAnimations ? 15 : 30,
          opacity: 0,
          scale: useLightAnimations ? 0.95 : 0.8,
          rotation: useLightAnimations ? 0 : 5 * direction,
        });
      });

      // Set images initial states
      imagesRef.current.forEach((img, i) => {
        if (!img) return;

        const reveals = useLightAnimations
          ? [
              { clipPath: "inset(0% 0% 0% 0%)", y: 20 },
              { clipPath: "inset(0% 0% 0% 0%)", y: 20 },
              { clipPath: "inset(0% 0% 0% 0%)", y: 20 },
            ]
          : [
              { clipPath: "inset(100% 0% 0% 0%)", y: 80 },
              { clipPath: "inset(0% 0% 100% 0%)", y: -60 },
              { clipPath: "inset(100% 0% 0% 0%)", y: 80 },
            ];

        gsap.set(img, {
          ...reveals[i],
          scale: useLightAnimations ? 0.98 : 0.85,
          rotation: useLightAnimations ? 0 : i % 2 === 0 ? 3 : -3,
          opacity: 0,
        });
      });

      // Create timeline with ScrollTrigger
      const durationMultiplier = useLightAnimations ? 0.7 : 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
          id: `brand-identity-${Math.random()}`,
        },
      });

      // Container animation
      tl.to(
        containerRef.current,
        {
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 1.2 * durationMultiplier,
          ease: "power2.out",
        },
        0,
      );

      // Title animation
      if (titleRef.current) {
        tl.to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.0 * durationMultiplier,
            ease: "power3.out",
          },
          0.1,
        );
      }

      // Description animation
      if (descRef.current) {
        tl.to(
          descRef.current,
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 1.0 * durationMultiplier,
            ease: "power2.out",
          },
          0.2,
        );
      }

      // Chips animations (simplified on mid-range)
      allChips.forEach((chip, i) => {
        tl.to(
          chip,
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8 * durationMultiplier,
            ease: useLightAnimations ? "power2.out" : "back.out(1.2)",
          },
          0.3 + i * (useLightAnimations ? 0.03 : 0.05),
        );
      });

      // Images animations
      imagesRef.current.forEach((img, i) => {
        if (!img) return;

        tl.to(
          img,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.2 * durationMultiplier,
            ease: "power3.out",
          },
          0.4 + i * (useLightAnimations ? 0.05 : 0.1),
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      if (stickyScrollTrigger) {
        stickyScrollTrigger.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [transitionVariant]);

  // Calculate z-index based on variant (first card on bottom, third on top)
  const zIndexMap = {
    first: 10,
    second: 20,
    third: 30,
  };

  // Different background colors for each card
  const colorMap = {
    first: "bg-gradient-to-br from-blue-100/90 to-indigo-100/90", // Soft blue gradient
    second: "bg-gradient-to-br from-purple-100/90 to-pink-100/90", // Soft purple-pink gradient
    third: "bg-gradient-to-br from-amber-100/90 to-orange-100/90", // Soft warm gradient
  };

  // Border colors to match the background
  const borderColorMap = {
    first: "border-blue-200/60",
    second: "border-purple-200/60",
    third: "border-amber-200/60",
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 md:px-8 py-20 md:py-18"
      style={{
        zIndex: zIndexMap[transitionVariant] || 10,
        position: "relative",
      }}
    >
      <div
        ref={containerRef}
        className={`mx-auto rounded-[28px] border ${borderColorMap[transitionVariant] || "border-black/40"} ${colorMap[transitionVariant] || "bg-white"} backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] mt-5 p-6 sm:p-8 md:p-10 lg:p-20`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h3
              ref={titleRef}
              className="bi-title text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.2vw] leading-[1.05] tracking-tight text-black"
              style={{
                fontFamily: "var(--font-sora)",
                transformStyle: "preserve-3d",
              }}
            >
              {title}
            </h3>
            <p
              ref={descRef}
              className="bi-desc mt-5 md:mt-6 text-black/70 text-base sm:text-lg md:text-2xl"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              {description}
            </p>
          </div>
          <div
            className="w-full lg:w-auto"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {/* Chips */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="flex justify-center gap-4 translate-x-20">
                {(resolvedChipRows[0] || []).map((c, i) => (
                  <span
                    key={c}
                    ref={(el) => (chipsRef.current[i] = el)}
                    className="bi-chip inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl "
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {(resolvedChipRows[1] || []).map((c, i) => (
                  <span
                    key={c}
                    ref={(el) => (chipsRef.current[i + 2] = el)}
                    className="bi-chip inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl "
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {(resolvedChipRows[2] || []).map((c, i) => (
                  <span
                    key={c}
                    ref={(el) => (chipsRef.current[i + 5] = el)}
                    className={
                      "bi-chip inline-flex items-center translate-x-14 rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl  " +
                      (i === 0 ? "-translate-x-1" : "")
                    }
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:hidden flex flex-wrap gap-3 items-start">
              {resolvedChips.map((c) => (
                <span
                  key={c}
                  className="bi-chip inline-flex items-center rounded-full border border-black/20 px-4 py-2 bg-white text-black/80 text-sm "
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, idx) => (
            <div
              key={src}
              ref={(el) => (imagesRef.current[idx] = el)}
              className="bi-image relative aspect-[16/12] rounded-2xl overflow-hidden border border-black/10 bg-black/5"
              style={{ willChange: "transform" }}
            >
              <Image
                src={src}
                alt={`Service ${idx + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 200vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
