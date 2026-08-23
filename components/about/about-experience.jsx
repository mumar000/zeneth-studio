"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We get close to the business, the audience, and the decision you need people to make.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We find the clearest position and turn it into a focused creative direction.",
  },
  {
    number: "03",
    title: "Make",
    description:
      "We carry the direction through identity, interface, and the final live experience.",
  },
];

const standards = [
  ["Direct access", "You work with the people making the decisions and the work."],
  ["Clear rationale", "Every major choice connects to the business and the audience."],
  ["Useful systems", "The work remains coherent when your team starts using it."],
  ["A real finish line", "We care about what launches, not only what looks good in a file."],
];

const logos = Array.from({ length: 12 }, (_, index) =>
  `/about-logos/about-logo${index + 1}.webp`,
);

export default function AboutExperience() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0, distance = 24) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.75, delay, ease },
  });

  return (
    <main id="main-content" className="overflow-x-clip bg-[#fffcf7] text-[#171717]">
      <section className="px-4 pb-16 pt-[clamp(140px,10vw,190px)] sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-[1680px]">
          <motion.div
            {...reveal()}
            className="flex items-center justify-between border-b border-black/20 pb-4"
          >
            <p
              className="text-[11px] font-[600] uppercase tracking-[0.14em] md:text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              About Nymbor
            </p>
            <p
              className="text-[11px] font-[500] uppercase tracking-[0.12em] text-black/45 md:text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Independent studio
            </p>
          </motion.div>

          <motion.h1
            {...reveal(0.08, 36)}
            className="mt-[clamp(44px,5vw,80px)] max-w-[1100px] text-[clamp(36px,4.65vw,88px)] font-[500] leading-[0.98] tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The business should be the hard part. Explaining it should not.
          </motion.h1>

          <div className="mt-[clamp(56px,7vw,110px)] grid gap-8 border-t border-black/20 pt-6 md:grid-cols-12">
            <motion.p
              {...reveal(0.12)}
              className="text-[12px] font-[600] uppercase tracking-[0.12em] text-black/45 md:col-span-3 md:text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              What we do
            </motion.p>
            <motion.p
              {...reveal(0.18)}
              className="max-w-[700px] text-[clamp(19px,1.65vw,32px)] font-[400] leading-[1.22] tracking-[-0.03em] md:col-span-7 md:col-start-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nymbor helps ambitious businesses find a clearer position and a
              sharper way to show up. We connect strategy, identity, interface,
              and build so the final experience feels like one idea.
            </motion.p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#17141c] px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8"
        style={{
          backgroundImage:
            "radial-gradient(circle at 82% 8%, rgba(114, 33, 252, 0.24), transparent 34%), radial-gradient(circle at 7% 92%, rgba(114, 33, 252, 0.1), transparent 28%), linear-gradient(135deg, #17141c 0%, #21172d 48%, #141316 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 85%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1680px]">
          <motion.div {...reveal()} className="max-w-[1050px]">
            <p
              className="text-[11px] font-[600] uppercase tracking-[0.14em] text-white/45 md:text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Our approach
            </p>
            <h2
              className="mt-6 text-[clamp(38px,4.4vw,84px)] font-[500] leading-[0.98] tracking-[-0.05em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We work from the inside out.
            </h2>
          </motion.div>

          <div className="mt-[clamp(52px,7vw,105px)] grid border-t border-white/20 md:grid-cols-3">
            {approach.map((item, index) => (
              <motion.article
                key={item.title}
                {...reveal(index * 0.07)}
                className="border-b border-white/20 py-7 md:min-h-[250px] md:border-b-0 md:border-r md:px-8 md:py-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p
                  className="text-[11px] font-[600] tracking-[0.14em] text-white/40"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.number}
                </p>
                <h3
                  className="mt-8 text-[clamp(30px,2.5vw,48px)] font-[500] leading-none tracking-[-0.04em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-5 max-w-[390px] text-[15px] leading-[1.5] tracking-[-0.015em] text-white/55 md:text-[17px]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-[1680px] gap-16 lg:grid-cols-12 lg:gap-10">
          <motion.div {...reveal()} className="lg:col-span-5">
            <p
              className="text-[11px] font-[600] uppercase tracking-[0.14em] text-black/45 md:text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              How we work
            </p>
            <h2
              className="mt-6 max-w-[580px] text-[clamp(36px,3.75vw,72px)] font-[500] leading-[0.99] tracking-[-0.05em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A small team. A short distance between thinking and making.
            </h2>
          </motion.div>

          <div className="border-t border-black lg:col-span-6 lg:col-start-7">
            {standards.map(([title, description], index) => (
              <motion.article
                key={title}
                {...reveal(index * 0.05, 18)}
                className="grid gap-4 border-b border-black/20 py-6 sm:grid-cols-[42px_1fr] md:py-8"
              >
                <p
                  className="text-[11px] font-[600] tracking-[0.12em] text-black/40"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  0{index + 1}
                </p>
                <div>
                  <h3
                    className="text-[clamp(21px,1.55vw,30px)] font-[500] leading-[1.08] tracking-[-0.03em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-2.5 max-w-[600px] text-[14px] leading-[1.5] text-black/55 md:text-[16px]">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-[1680px]">
          <motion.div
            {...reveal()}
            className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p
                className="text-[11px] font-[600] uppercase tracking-[0.14em] text-black/45 md:text-[13px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Selected clients
              </p>
              <h2
                className="mt-4 text-[clamp(34px,3.35vw,64px)] font-[500] leading-none tracking-[-0.045em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Trusted with important work.
              </h2>
            </div>
            <p className="max-w-[390px] text-[14px] leading-[1.5] text-black/50 md:text-[16px]">
              Across brand, product, and digital experiences.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 border-l border-t border-black/15 sm:grid-cols-3 lg:grid-cols-4">
            {logos.map((src, index) => (
              <motion.div
                key={src}
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.035 }}
                className="flex min-h-[105px] items-center justify-center border-b border-r border-black/15 p-5 sm:min-h-[135px] md:p-8"
              >
                <div className="relative h-10 w-full md:h-12">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-contain opacity-60 grayscale"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8 sm:px-6 md:pb-28 lg:px-8">
        <motion.div
          {...reveal()}
          className="mx-auto grid max-w-[1680px] gap-10 border-t-2 border-black pt-8 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-8">
            <p
              className="text-[11px] font-[600] uppercase tracking-[0.14em] text-black/45 md:text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Start a conversation
            </p>
            <h2
              className="mt-5 max-w-[900px] text-[clamp(38px,4.2vw,80px)] font-[500] leading-[0.98] tracking-[-0.05em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Have something difficult to explain?
            </h2>
          </div>

          <div className="md:col-span-3 md:col-start-10 md:flex md:justify-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center gap-3 rounded-[10px] border-2 border-black bg-black px-7 py-3.5 text-[13px] font-[700] uppercase tracking-[0.1em] text-white shadow-[5px_5px_0_0_#7221fc] transition-transform duration-200 hover:translate-x-[2px] hover:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 md:text-[14px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Tell us about it
              <ArrowUpRight
                className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
