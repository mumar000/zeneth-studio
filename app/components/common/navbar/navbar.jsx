"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  // This state forces the "pill" shape initially, regardless of scroll
  const [isIntroCollapsed, setIsIntroCollapsed] = useState(true);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Animation Sequence ---
  useEffect(() => {
    // The loader finishes at 2.2s.
    // We keep it collapsed for a moment so the user sees the "pill" shape first.
    // Then at 2.6s, we release the lock, allowing it to "Open" (expand).
    const timer = setTimeout(() => {
      setIsIntroCollapsed(false);
    }, 2800); // 2.2s (Loader) + 0.6s (buffer to see the pill)

    return () => clearTimeout(timer);
  }, []);

  // The Navbar is collapsed if:
  // 1. The user scrolled down OR
  // 2. We are still in the intro animation phase
  const collapsed = hasScrolled || isIntroCollapsed;

  // Variants for the initial Fade In (appearing out of thin air)
  const fadeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.2, // Match Hero Loader
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const navItems = ["Home", "About", "Work", "Contact"];

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-80"
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
    >
      <div
        className={
          `mx-auto transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) ` +
          (collapsed
            ? "max-w-[920px] mt-2 px-2" // Collapsed State (Pill)
            : "container px-4 md:px-6 py-2 md:py-3") // Open State (Full Width)
        }
      >
        <div
          className={
            `w-full flex items-center justify-between gap-3 transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) ` +
            (collapsed
              ? "rounded-full bg-white/80 backdrop-blur border-black/10 shadow-sm px-3 py-1.5"
              : "bg-transparent px-0 py-0")
          }
        >
          {/* Logo */}
          <div className="flex items-center shrink-0 select-none">
            <img
              src="/logo-2.png"
              alt="Zeneth Studio"
              className="h-7 md:h-14 w-auto"
            />
          </div>

          {/* Center Nav */}
          <nav
            className={
              `transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) rounded-full bg-black/10 backdrop-blur flex items-center gap-1 shadow-sm ` +
              (collapsed ? "px-2 py-1" : "px-3 py-2")
            }
          >
            {navItems.map((label) => (
              <button
                key={label}
                className={`transition-all duration-300 rounded-full px-4 py-1.5 text-sm md:text-base text-black/80 hover:text-black`}
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className={
              `rounded-full bg-black text-white transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) shrink-0 ` +
              (collapsed
                ? "px-4 py-1.5 text-sm"
                : "px-5 py-2 text-sm md:text-base")
            }
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Lets Work →
          </a>
        </div>
      </div>
    </motion.header>
  );
}
