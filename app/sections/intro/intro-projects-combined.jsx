"use client";

import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { ProjectsSection } from "../projects";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealLine = ({ content, className = "" }) => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    const trigger = triggerRef.current;

    if (!el || !trigger) return;

    let ctx = gsap.context(() => {
      const words = el.querySelectorAll(".word");

      // Initial states
      gsap.set(trigger, { transformOrigin: "0% 50%", rotate: 3 });
      gsap.set(words, { opacity: 0.1, filter: "blur(8px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
          end: "top 35%",
          scrub: 1,
        },
      });

      tl.to(
        trigger,
        {
          rotate: 0,
          ease: "none",
          duration: 1,
        },
        0
      );

      tl.to(
        words,
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.09,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className={`relative my-2 ${className}`}>
      <h2 ref={containerRef} className="leading-tight">
        {content.map((item, i) => (
          <span
            key={i}
            className={item.isPrimary ? "text-primary" : "text-white"}
          >
            {item.text.split(" ").map((word, wIndex) => (
              <span
                key={wIndex}
                className="inline-block word mr-[0.25em] will-change-[opacity,filter]"
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </div>
  );
};

// --- Main Component ---
export default function IntroProjectsSection() {
  const introSectionRef = useRef(null);
  const logoSliderRef = useRef(null);

  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
  ];

  const line1Data = [
    { text: "We cook ", isPrimary: false },
    { text: "logos, branding, & websites", isPrimary: true },
  ];

  const line2Data = [
    { text: "that hit diff. Pretty and functional. Like", isPrimary: false },
  ];

  const line3Data = [{ text: "your fav influencer's feed.", isPrimary: false }];

  return (
    <>
      {/* Intro Section - UNCHANGED */}
      <section
        ref={introSectionRef}
        className="relative w-full min-h-[80vh] bg-[#0f0a1a] py-8 sm:py-12 md:py-14 lg:py- 2xl:py-14 overflow-hidden z-60"
      >
        <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col px-6 sm:px-10 md:px-16 lg:px-20">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-7xl font-bold"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              <ScrollRevealLine content={line1Data} />
              <ScrollRevealLine content={line2Data} />
              <ScrollRevealLine content={line3Data} />
            </div>
          </div>

          <div
            ref={logoSliderRef}
            className="relative w-full px-8 overflow-hidden mt-8"
          >
            <Marquee
              speed={90}
              gradient={false}
              className="pt-10"
              pauseOnHover={true}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="mx-8 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500  hover:opacity-100"
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={360}
                    height={100}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
    </>
  );
}
