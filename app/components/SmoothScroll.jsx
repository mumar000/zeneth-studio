"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const [shouldUseSmoothScroll, setShouldUseSmoothScroll] = useState(true);

  useEffect(() => {
    // Check if smooth scroll should be disabled
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Check for low-end device indicators
    const deviceMemory = navigator.deviceMemory;
    const hardwareConcurrency = navigator.hardwareConcurrency;
    const isLowEnd =
      (deviceMemory && deviceMemory < 4) ||
      (hardwareConcurrency && hardwareConcurrency < 4);

    // Check connection
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const slowConnection =
      connection &&
      (connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g" ||
        connection.saveData);

    // Disable smooth scroll on low-end devices or with reduced motion
    if (prefersReducedMotion || isLowEnd || slowConnection) {
      setShouldUseSmoothScroll(false);
      return;
    }

    // Initialize Lenis with optimized settings
    const lenisScroll = new Lenis({
      lerp: isLowEnd ? 0.15 : 0.1, // Faster interpolation on lower-end
      wheelMultiplier: 1.3,
      touchMultiplier: 2,
      infinite: false,
    });

    // Expose globally so UI components (e.g., Modal) can stop/start scrolling
    if (typeof window !== "undefined") {
      window.lenis = lenisScroll;
    }

    function raf(time) {
      lenisScroll.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (typeof window !== "undefined" && window.lenis === lenisScroll) {
        window.lenis = undefined;
      }
      lenisScroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
