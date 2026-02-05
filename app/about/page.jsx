"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FounderSignal from "@/components/about/founder-signal";

export default function AboutPage() {
  const logos = [
    { src: "/about-logos/about-logo1.webp", alt: "Brand Logo 1" },
    { src: "/about-logos/about-logo2.webp", alt: "Brand Logo 2" },
    { src: "/about-logos/about-logo3.webp", alt: "Brand Logo 3" },
    { src: "/about-logos/about-logo4.webp", alt: "Brand Logo 4" },
    { src: "/about-logos/about-logo5.webp", alt: "Brand Logo 5" },
    { src: "/about-logos/about-logo6.webp", alt: "Brand Logo 6" },
    { src: "/about-logos/about-logo7.webp", alt: "Brand Logo 7" },
    { src: "/about-logos/about-logo8.webp", alt: "Brand Logo 8" },
    { src: "/about-logos/about-logo9.webp", alt: "Brand Logo 9" },
    { src: "/about-logos/about-logo10.webp", alt: "Brand Logo 10" },
    { src: "/about-logos/about-logo11.webp", alt: "Brand Logo 11" },
    { src: "/about-logos/about-logo12.webp", alt: "Brand Logo 12" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20  flex flex-col">
      {/* Section 1: The work speaks */}
      <section className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-[500] leading-[1.2] tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          The{" "}
          <span className="italic font-romie font-semibold text-primary">
            work speaks.
          </span>{" "}
          We just make sure it says the right thing. Every brand here started
          with a problem we{" "}
          <span className="italic font-romie font-semibold text-primary">
            designed
          </span>{" "}
          the solution. Clean, confident, and built to stand the test of
          relevance.
        </motion.h1>
      </section>

      {/* Section 2: Founder Signal */}
      <FounderSignal />

      {/* Section 3: The Zenith Way */}
      <section className="flex flex-col max-w-[1400px] mx-auto my-20 md:my-32">
        <div className="flex flex-col mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[1.75rem] md:text-[2.5rem] font-[500] lg:text-[3rem] leading-[1.2] tracking-tight text-center"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            The <span className="italic font-romie">Zeneth Way</span> Every
            project starts with clarity what your brand needs, not what looks
            &ldquo;cool.&rdquo; We strip the noise, plan the path, and build
            something that actually performs.
          </motion.h2>
        </div>

        <div className="grid pt-10 grid-cols-1 md:grid-cols-2 px-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-500 max-w-md"
          >
            <p>
              100+ projects. 6+ countries. 0 shortcuts.Every brand you see here
              was built from scratch and it shows.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className=" text-xl text-gray-500"
          >
            <p>
              Our approach turns strategy into substance defining not just what
              your brand says, but why it matters. We align vision with action,
              creating a foundation that drives consistent, meaningful
              experiences across every touchpoint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Logo Grid */}
      <section className="py-20 md:py-32 flex flex-col items-center max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 md:gap-x-16 md:gap-y-20 w-full">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
              <div className="relative w-full h-16 md:h-14">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 1550vw, (max-width: 1024px) 33vw, 1555vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
