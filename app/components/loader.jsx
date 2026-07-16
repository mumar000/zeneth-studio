"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  const [isComplete, setIsComplete] = useState(false);
  const columns = 5;

  const handleExitComplete = () => {
    window.__zenithLoaderComplete = true;
    window.dispatchEvent(new Event("zenith:loader-complete"));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsComplete(true);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  const columnVariants = {
    initial: {
      y: 0,
    },
    exit: (i) => ({
      y: "-100%",
      transition: {
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.035,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {!isComplete && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex">
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

          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: "circOut" }}
              >
                <Image
                  src="/logo-2.png"
                  alt="Zenith Logo"
                  width={300}
                  height={150}
                  className="object-contain invert brightness-0 filter"
                  priority
                  unoptimized
                />
              </motion.div>

              <div className="w-64 md:w-80 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              <div className="text-zinc-400 font-mono text-sm">LOADING</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
