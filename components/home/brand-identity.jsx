"use client";

import Image from "next/image";
// 1. Import motion
import { motion } from "framer-motion";

const chips = {
  row1: ["Naming", "Strategy & Positioning"],
  row2: ["Voice & Tone", "Packaging Design", "Visual Identity"],
  row3: ["Customer Experience", "Brand Messaging"],
};

export default function BrandIdentitySection() {
  // 2. Define the scroll animation physics
  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Starts 100px lower
      scale: 0.95, // Starts slightly smaller
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15, // Staggers each image by 0.15s
        duration: 1.0, // Slow duration for that "smooth" feel
        ease: [0.25, 1, 0.5, 1], // Cinematic easing curve
      },
    }),
  };

  return (
    <section className="w-full px-4 md:px-8 py-20 md:py-18">
      <div className="mx-auto rounded-[28px] border border-black/40 bg-white/75 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 lg:p-20">
        {/* Header row (Unchanged) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h3
              className="text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.2vw] leading-[1.05] tracking-tight text-black"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              <span className="italic font-[400]">Brand</span>&nbsp;&
              <span className="font-[600]"> Visual Identity</span>
            </h3>
            <p
              className="mt-5 md:mt-6 text-black/70 text-base sm:text-lg md:text-2xl"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              We help brands stand out and grow. By mixing smart strategy,
              thoughtful design, and clear messaging, we build identities that
              people actually remember and connect with.
            </p>
          </div>
          <div
            className="w-full lg:w-auto"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {/* Chips (Unchanged) */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="flex justify-center gap-4 translate-x-20">
                {chips.row1.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl "
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <span className="inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl  ">
                  {chips.row2[0]}
                </span>
                <span className="inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl ">
                  {chips.row2[1]}
                </span>
                <span className="inline-flex items-center rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl ">
                  {chips.row2[2]}
                </span>
              </div>
              <div className="flex justify-center gap-4">
                {chips.row3.map((c, i) => (
                  <span
                    key={c}
                    className={
                      "inline-flex items-center translate-x-14 rounded-full border border-black/50 px-6 py-3 bg-white text-black text-2xl  " +
                      (i === 0 ? "-translate-x-1" : "")
                    }
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:hidden flex flex-wrap gap-3 items-start">
              {[...chips.row1, ...chips.row2, ...chips.row3].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-black/20 px-4 py-2 bg-white text-black/80 text-sm "
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image row - ANIMATION ADDED HERE */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {["/services1.webp", "/services2.webp", "/services3.webp"].map(
            (src, idx) => (
              <motion.div
                key={idx}
                custom={idx} // Pass index for stagger delay
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative aspect-[16/12] rounded-2xl overflow-hidden border border-black/10 bg-black/5"
              >
                <Image
                  src={src}
                  alt={`Service ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 200vw"
                  className="object-cover"
                />
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
