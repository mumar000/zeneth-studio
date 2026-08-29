"use client";

import ContactForm from "@/components/contact/contact-form";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen bg-white pt-[76px] text-[#171717] md:pt-[88px]">
      <div className="mx-auto grid min-h-[calc(100svh-88px)] w-full lg:grid-cols-2 lg:gap-4">
        <ContactForm />

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
        </motion.div>

      </div>
    </section>
  );
}
