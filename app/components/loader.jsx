"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Smooth progress animation
    const duration = 2000; // 2 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 600);
        }, 200);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <>
          {/* Left Door */}
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-1/2 z-[9998] bg-[#0a0a0a]"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Right Door */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-1/2 z-[9998] bg-[#0a0a0a]"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Centered Content (on top of doors) */}
          <motion.div
            className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-8">
              {/* Big Centered Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="Zenith Logo"
                  width={300}
                  height={150}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="w-64 md:w-80 h-px bg-white/10 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>

              {/* Counter */}
              <motion.p
                className="text-sm text-white/40 font-light"
                style={{ fontFamily: "var(--font-sora)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {progress}%
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
