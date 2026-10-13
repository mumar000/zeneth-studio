"use client";

import ContactForm from "@/components/contact/contact-form";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isCtaReady, setIsCtaReady] = useState(false);
  const [hasReachedForm, setHasReachedForm] = useState(false);
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);
  const ctaActivatedRef = useRef(false);

  useEffect(() => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    let highlightTimeout;
    let readinessFrame = window.requestAnimationFrame(() => {
      readinessFrame = window.requestAnimationFrame(() => {
        const formTop = form.getBoundingClientRect().top;
        if (formTop <= window.innerHeight * 0.45) {
          setHasReachedForm(true);
        } else {
          setIsCtaReady(true);
        }
      });
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasReachedForm(true);
        if (ctaActivatedRef.current) {
          ctaActivatedRef.current = false;
          setIsFormHighlighted(true);
          highlightTimeout = window.setTimeout(
            () => setIsFormHighlighted(false),
            1100,
          );
        }
      },
      { threshold: 0, rootMargin: "0px 0px -55% 0px" },
    );

    observer.observe(form);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(readinessFrame);
      if (highlightTimeout) window.clearTimeout(highlightTimeout);
    };
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    ctaActivatedRef.current = true;
    const formTop = form.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({
      top: formTop,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-white pt-[76px] text-[#171717] md:pt-[88px]">
      <div className="mx-auto grid min-h-[calc(100svh-88px)] w-full lg:grid-cols-2 lg:gap-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex min-h-[620px] flex-col px-6 pb-7 pt-12 sm:px-10 sm:pb-10 sm:pt-14 lg:min-h-0 lg:px-[clamp(56px,6vw,104px)] lg:pb-[clamp(40px,5vw,72px)] lg:pt-[clamp(48px,5vw,72px)]"
        >
          <h1
            className="max-w-[620px] text-[clamp(48px,5.2vw,80px)] font-[700] leading-[1.02] tracking-[-0.03em] text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Have a project in mind?
            <span className="mt-2 block text-primary">Let&apos;s talk.</span>
          </h1>

          <div className="mt-12 aspect-video w-full overflow-hidden rounded-[24px]   bg-black lg:mt-14">
            <video
              className="h-full w-full object-cover"
              autoPlay={!shouldReduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
              poster="/showreel-poster.webp"
              aria-label="Nymbor selected work showreel"
            >
              <source src="/showreel.mp4" type="video/mp4" />
            </video>
          </div>

          <AnimatePresence initial={false}>
            {isCtaReady && !hasReachedForm && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                className="mt-4 flex justify-center sm:hidden"
              >
                <button
                  type="button"
                  onClick={scrollToForm}
                  aria-controls="contact-form"
                  className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-black bg-primary py-1.5 pl-4 pr-1.5 text-[10px] font-[800] uppercase tracking-[0.1em] text-white shadow-[2px_2px_0_0_#171717] transition-[transform,box-shadow,background-color,color] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Start project <span className="text-white/65">· 2 min</span>
                  <motion.span
                    animate={
                      shouldReduceMotion ? undefined : { y: [0, 3, 0] }
                    }
                    transition={{
                      duration: 0.9,
                      repeat: 2,
                      repeatDelay: 0.6,
                      ease: "easeInOut",
                    }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-black"
                    aria-hidden="true"
                  >
                    <ArrowDown size={14} strokeWidth={2.25} />
                  </motion.span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <ContactForm isHighlighted={isFormHighlighted} />
      </div>
    </section>
  );
}
