"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const PROJECT_ACCENTS = {
  spreadshop: "#FF3D00",
  sapphire: "#CBAC56",
  arpm: "#870B2D",
  mogulbay: "#00001C",
  "lets-grub": "#18B8E8",
  feroce: "#FF5A2E",
};

function getContrastColor(hexColor) {
  const value = Number.parseInt(hexColor.replace("#", ""), 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const luminance = (red * 299 + green * 587 + blue * 114) / 1000;

  return luminance > 150 ? "#171717" : "#ffffff";
}

export default function FloatingCTA() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const lastScrollYRef = useRef(0);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;
    lastScrollYRef.current = window.scrollY;

    const updateDirection = () => {
      frameId = 0;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;

      if (currentY < 96) {
        setScrollVisible(false);
      } else if (delta > 5) {
        setScrollVisible(true);
      } else if (delta < -5) {
        setScrollVisible(false);
      }

      if (currentY < 96 || Math.abs(delta) > 5) {
        lastScrollYRef.current = currentY;
      }
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateDirection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px 72px 0px", threshold: 0.01 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  const isContactPage = pathname.startsWith("/contact");
  const isVisible = scrollVisible && !footerVisible && !isContactPage;
  const isWorkDetailPage = /^\/works\/[^/]+\/?$/.test(pathname);
  const projectSlug = isWorkDetailPage
    ? pathname.split("/").filter(Boolean)[1]
    : null;
  const accent = PROJECT_ACCENTS[projectSlug] || "#7221FC";
  const contrastColor = getContrastColor(accent);

  return (
    <div className="pointer-events-none fixed bottom-[calc(0.85rem+env(safe-area-inset-bottom))] left-1/2 z-[72] w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 sm:bottom-6">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 20, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 14, scale: 0.98 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.01 }
                : { duration: 0.38, ease }
            }
            className="pointer-events-auto"
          >
            <Link
              href="/contact"
              aria-label="Start something with Nymbor"
              className="group flex min-h-12 items-center gap-2 rounded-full border border-white/20 py-1.5 pl-4 pr-1.5 shadow-[0_18px_48px_-14px_rgba(0,0,0,0.5)] outline-none transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:min-h-[52px] sm:gap-3 sm:pl-5"
              style={{
                backgroundColor: accent,
                color: contrastColor,
                fontFamily: "var(--font-sora)",
              }}
            >
              <span className="whitespace-nowrap text-[12px] font-[500] tracking-[-0.015em] sm:text-[13px]">
                <span className="sm:hidden">Start something</span>
                <span className="hidden sm:inline">Have something to build?</span>
              </span>

              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-6 sm:h-10 sm:w-10"
                style={{ backgroundColor: contrastColor, color: accent }}
              >
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.9}
                />
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
