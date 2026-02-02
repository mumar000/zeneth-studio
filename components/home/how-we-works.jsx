"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Understand the signal",
    description:
      "We study how your brand is currently perceived and where it breaks.",
  },
  {
    id: "02",
    title: "Design the system",
    description:
      "Not one-off screens. A visual system that holds up as you grow.",
  },
  {
    id: "03",
    title: "Build with intent",
    description:
      "Execution that respects the design, the brand, and the end user.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-24 md:py-10 bg-[#FAFAFA]">
      <div className="  mx-auto px-20    ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-20"
        >
          <h2
            className="leading-none text-black tracking-tighter text-[8vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[3.6vw] font-[500]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            <br />
            How we <span className="italic font-romie font-[400]">works</span>.
          </h2>
        </motion.div>

        {/* Steps List */}
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <StepItem key={step.id} step={step} index={index} />
          ))}
          {/* Final closing line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-px border-b border-dashed border-black/20 origin-left"
          />
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }) {
  return (
    <div className="group relative">
      {/* Top Border Line (Animated) */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: index * 0.1, // Stagger effect
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-0 left-0 w-full h-px border-t border-dashed border-black/20 origin-left"
      />

      <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
        {/* Left: Number + Title */}
        <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            style={{ fontFamily: "var(--font-sora)" }}
            className="text-lg md:text-6xl italic font-mono text-[#1a1a1a]/70 font-medium"
          >
            {step.id}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-romie italic text-[#1a1a1a] leading-tight"
          >
            — {step.title}
          </motion.h3>
        </div>

        {/* Right: Description */}
        <div className="md:col-span-5 md:flex md:justify-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="text-base md:text-xl text-black/90 leading-relaxed max-w-lg md:text-start"
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
