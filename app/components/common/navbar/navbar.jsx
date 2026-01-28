"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react"; // Make sure you have lucide-react installed

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIntroCollapsed, setIsIntroCollapsed] = useState(true);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroCollapsed(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const collapsed = hasScrolled || isIntroCollapsed;

  const fadeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const navItems = ["Home", "About", "Work", "Contact"];

  // Mobile Menu Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.5,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-80"
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
    >
      {/* We add 'relative' here so the mobile menu can position itself 
         absolute to this container if needed, or remain in flow.
      */}
      <div
        className={
          `relative mx-auto transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) ` +
          (collapsed
            ? "max-w-[920px] mt-2 px-2"
            : "container px-4 md:px-6 py-2 md:py-3")
        }
      >
        <div
          className={
            `relative z-50 w-full flex items-center justify-between gap-3 transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) ` +
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
              className="h-9 md:h-14 w-auto" // Adjusted mobile height slightly for better fit
            />
          </div>

          {/* Center Nav (Desktop Only - UNTOUCHED) */}
          <nav
            className={
              `hidden md:flex transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) rounded-full bg-black/10 backdrop-blur items-center gap-1 shadow-sm ` +
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

          {/* CTA Button (Desktop Only - UNTOUCHED) */}
          <a
            href="#contact"
            className={
              `hidden md:inline-flex rounded-full bg-black text-white transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) shrink-0 ` +
              (collapsed
                ? "px-4 py-1.5 text-sm"
                : "px-5 py-2 text-sm md:text-base")
            }
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Lets Work →
          </a>

          {/* --- MOBILE TOGGLE BUTTON --- */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full bg-black/5 border border-black/10 p-2 text-black transition-colors hover:bg-black/10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-full left-0 right-0 mt-2 px-2 md:hidden overflow-hidden z-40"
            >
              <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-black/10 shadow-2xl p-4 overflow-hidden">
                <nav className="flex flex-col gap-2">
                  {navItems.map((label) => (
                    <motion.button
                      key={label}
                      variants={itemVariants}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-black/70 hover:text-black hover:bg-black/5 transition-all"
                      style={{ fontFamily: "var(--font-sora)" }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                      {/* Hover Arrow Effect */}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </motion.button>
                  ))}

                  <motion.div
                    variants={itemVariants}
                    className="pt-2 border-t border-black/5 mt-1"
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3.5 text-base font-medium text-white shadow-lg active:scale-95 transition-transform"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      Lets Work
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
