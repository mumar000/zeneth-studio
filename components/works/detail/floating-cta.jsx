"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  rest: { paddingLeft: 24, paddingRight: 12 },
  hover: { paddingLeft: 30, paddingRight: 16 },
};

const prefixVariants = {
  rest: { maxWidth: 0, opacity: 0, marginRight: 0 },
  hover: { maxWidth: 160, opacity: 1, marginRight: 10 },
};

function isLight(hex) {
  const c = (hex || "").replace("#", "");
  if (c.length < 6) return false;
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55;
}

export default function FloatingCTA({ accent = "#7221FC" }) {
  const textColor = isLight(accent) ? "#0E0E10" : "#FFFFFF";
  const ringColor = isLight(accent)
    ? "rgba(0,0,0,0.12)"
    : "rgba(255,255,255,0.18)";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <motion.div
        initial={{ x: 480 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: easing }}
      >
        <Link
          href="/contact"
          aria-label="Start a project with Zenith Studio"
          className="block"
        >
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            variants={containerVariants}
            transition={{ duration: 0.7, ease: easing }}
            style={{ backgroundColor: accent, color: textColor }}
            className="inline-flex items-center rounded-full py-2.5 shadow-[0_18px_36px_-18px_rgba(0,0,0,0.45)]"
          >
            <motion.span
              variants={prefixVariants}
              transition={{ duration: 0.7, ease: easing }}
              className="overflow-hidden whitespace-nowrap text-[10px] tracking-[0.26em] font-[600] uppercase opacity-80"
            >
              Let&apos;s talk
            </motion.span>

            <span className="text-[11px] tracking-[0.24em] font-[600] uppercase whitespace-nowrap">
              Start a Project
            </span>

            <span
              className="ml-3 inline-flex items-center justify-center w-9 h-9 rounded-full"
              style={{ backgroundColor: ringColor }}
            >
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
