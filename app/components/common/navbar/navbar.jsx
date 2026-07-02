"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isIntroCollapsed, setIsIntroCollapsed] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsIntroCollapsed(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  const collapsed = hasScrolled || isIntroCollapsed;

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-[80]"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
    >
      <div
        className={
          `relative mx-auto transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ` +
          (collapsed ? "max-w-[960px] mt-2 px-2" : "container px-4 md:px-6 py-2 md:py-3")
        }
      >
        <div
          className={
            `relative z-50 w-full flex items-center justify-between gap-3 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ` +
            (collapsed
              ? "rounded-2xl bg-white/85 backdrop-blur-md shadow-md px-4 py-2 overflow-hidden"
              : "bg-transparent px-0 py-0")
          }
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 select-none">
            <img
              src="/logo-2.png"
              alt="Zeneth Studio"
              className="h-9 md:h-11 w-auto"
            />
          </Link>

          {/* Center: nav pill (desktop) */}
          <nav className="hidden md:flex items-center gap-0.5 rounded-2xl border border-black px-4 py-2 bg-white/70 backdrop-blur-md">
            {NAV_ITEMS.map(({ label, href }) => {
              const active =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-5 py-2.5 rounded-xl text-sm font-[500] transition-all duration-200 ${
                    active
                      ? "bg-[#1a1a1a] text-white"
                      : "text-black hover:text-black hover:bg-black/5"
                  }`}
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA — same style as hero */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-5 py-2.5 text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Book a Call →
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-xl bg-black/5 border border-black/10 p-2 text-black transition-colors hover:bg-black/10"
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

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
              className="absolute top-full left-0 right-0 mt-2 px-2 md:hidden z-40"
            >
              <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl p-4">
                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-[500] text-black/70 hover:text-black hover:bg-black/5 transition-all"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      {label}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  ))}
                  <div className="pt-2 mt-1 border-t border-black/5">
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-[700] uppercase tracking-[0.12em] text-white"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Book a Call →
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
