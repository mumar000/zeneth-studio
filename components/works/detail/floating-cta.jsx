"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const PROJECT_ACCENTS = {
  spreadshop: "#FF3D00",
  arpm: "#870B2D",
  mogulbay: "#00001C",
  "lets-grub": "#18B8E8",
  goldbug: "#E0A645",
  feroce: "#FF5A2E",
  "voyager-supplements": "#47C5DF",
  "lido-honey": "#F2B233",
  "vido-design": "#2D5BFF",
  techstart: "#7C3AED",
  "digital-wave": "#06B6D4",
  "aura-studio": "#D946EF",
  "velvet-co": "#9333EA",
  "nova-labs": "#10B981",
  nymbor: "#F59E0B",
  nexus: "#EF4444",
  oasis: "#0EA5E9",
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
  const [storyState, setStoryState] = useState({
    pathname: null,
    hasEntered: false,
  });
  const [closingState, setClosingState] = useState({
    pathname: null,
    hasReached: false,
  });

  const isWorkDetailPage = /^\/works\/[^/]+\/?$/.test(pathname);

  useEffect(() => {
    if (!isWorkDetailPage) return;

    let frameId = 0;

    const updateVisibility = () => {
      frameId = 0;
      const revealPoint = Math.min(180, window.innerHeight * 0.2);
      const hasEntered = window.scrollY > revealPoint;
      setStoryState((current) =>
        current.pathname === pathname && current.hasEntered === hasEntered
          ? current
          : { pathname, hasEntered },
      );
    };

    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateVisibility);
    };

    frameId = requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isWorkDetailPage, pathname]);

  useEffect(() => {
    if (!isWorkDetailPage) return;

    const closingBoundary =
      document.querySelector("[data-project-cta-boundary]") ||
      document.querySelector("footer");

    if (!closingBoundary) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const hasReached = entry.isIntersecting;
        setClosingState((current) =>
          current.pathname === pathname && current.hasReached === hasReached
            ? current
            : { pathname, hasReached },
        );
      },
      { rootMargin: "0px 0px 96px 0px", threshold: 0.01 },
    );

    observer.observe(closingBoundary);
    return () => observer.disconnect();
  }, [isWorkDetailPage, pathname]);

  const hasEnteredStory =
    storyState.pathname === pathname && storyState.hasEntered;
  const hasReachedClosing =
    closingState.pathname === pathname && closingState.hasReached;
  const isVisible = isWorkDetailPage && hasEnteredStory && !hasReachedClosing;
  const projectSlug = pathname.split("/").filter(Boolean)[1];
  const accent = PROJECT_ACCENTS[projectSlug] || "#7221FC";
  const contrastColor = getContrastColor(accent);
  const borderColor =
    contrastColor === "#171717"
      ? "rgba(0,0,0,0.14)"
      : "rgba(255,255,255,0.2)";

  return (
    <div className="pointer-events-none fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-[70] w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 sm:bottom-6">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 28, scale: 0.94, filter: "blur(10px)" }
            }
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 18, scale: 0.97, filter: "blur(7px)" }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.15 }
                : { duration: 0.55, ease }
            }
            whileHover={
              shouldReduceMotion ? undefined : { y: -4, scale: 1.012 }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            className="pointer-events-auto"
          >
            <Link
              href="/contact"
              aria-label="Start your project with Nymbor and make it the benchmark"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border py-2 pl-4 pr-2 shadow-[0_24px_70px_-22px_rgba(0,0,0,0.6)] outline-none backdrop-blur-xl focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:pl-5"
              style={{
                backgroundColor: accent,
                borderColor,
                color: contrastColor,
                fontFamily: "var(--font-sora)",
              }}
            >
              <span className="whitespace-nowrap text-[12px] font-[500] tracking-[-0.015em] sm:text-[13px]">
                <span className="sm:hidden">Make yours the benchmark.</span>
                <span className="hidden sm:inline">
                  You&apos;ve seen the work. Let&apos;s make yours the benchmark.
                </span>
              </span>

              <span
                className="ml-0.5 inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full px-3 text-[10px] font-[600] uppercase tracking-[0.12em] transition-opacity duration-300 group-hover:opacity-85 sm:px-4"
                style={{ backgroundColor: contrastColor, color: accent }}
              >
                <span className="hidden sm:inline">Start yours</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.8}
                />
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
