"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Number of columns for the shutter effect
  const columns = 5;

  useEffect(() => {
    // 2 seconds loading simulation
    const duration = 1500;
    const steps = 100;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Slight buffer before starting the exit animation
        setTimeout(() => {
          setIsComplete(true);
          // Trigger the parent callback after the exit animation finishes (approx 1s)
        }, 200);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Variants for the column animations
  const columnVariants = {
    initial: {
      y: 0,
    },
    exit: (i) => ({
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Custom bezier for that "premium" snappy feel
        delay: i * 0.05, // Stagger effect based on column index
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex">
          {/* Background Shutters */}
          {Array.from({ length: columns }).map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={columnVariants}
              initial="initial"
              exit="exit"
              className="relative h-full bg-zinc-900 border-r border-zinc-800/50 last:border-r-0"
              style={{ width: `${100 / columns}%` }}
            />
          ))}

          {/* Centered Content Container */}
          {/* This sits absolutely on top of the shutters but fades out BEFORE the shutters move */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Fade out content quickly before shutters lift
          >
            <div className="flex flex-col items-center gap-8">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                {/* Note: Invert logo color since background is dark, or keep standard if bg is light */}
                <Image
                  src="/logo-2.png"
                  alt="Zenith Logo"
                  width={300}
                  height={150}
                  className="object-contain invert brightness-0 filter" // Makes black logo white
                  priority
                />
              </motion.div>

              {/* Progress Bar Container */}
              <div className="w-64 md:w-80 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>

              {/* Counter */}
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm">
                <span>LOADING</span>
                <motion.span
                  key={progress} // Key change triggers slight animation on number change
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {progress.toString().padStart(3, "0")}%
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
