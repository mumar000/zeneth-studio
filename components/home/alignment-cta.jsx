"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function AlignmentCTA() {
  const buttonRef = useRef(null);

  // Magnetic button effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = 200;

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      x.set(distanceX * force * 0.3);
      y.set(distanceY * force * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="w-full py-20 md:py-24 bg-[#ffffff]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" mx-auto px-6 md:px-12">
        {/* White Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className=" mx-auto bg-white rounded-3xl border border-black/40 px-8 md:px-16 py-16 md:py-20 "
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Title with animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-3xl leading-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              <span className="italic font-romie font-[400]">Only</span>{" "}
              <span className="font-[400]">
                for those who demand the undeniable.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10">
                We don&apos;t take on every project. We look for founders who have
                built something great and need the visual authority to match it.
                If that&apos;s you, let&apos;s talk.
              </p>
            </motion.div>

            {/* Magnetic CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.button
                ref={buttonRef}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-[500] text-white shadow-lg transition-shadow duration-300 hover:shadow-xl md:text-lg"
                style={{
                  x: xSpring,
                  y: ySpring,
                  fontFamily: "var(--font-sora)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={false}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    background: [
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    ],
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />

                {/* Button text */}
                <span className="relative z-10">Apply for a Pipeline</span>
                <motion.span
                  className="relative z-10 inline-flex"
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                </motion.span>

                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 -z-10 rounded-full bg-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50"
                  initial={false}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
