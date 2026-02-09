"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect device performance capabilities
 * Returns flags for optimizing animations and media loading
 */
export function usePerformance() {
  const [performance, setPerformance] = useState({
    isLowEnd: false,
    isMidRange: false,
    isHighEnd: true,
    prefersReducedMotion: false,
    slowConnection: false,
    saveData: false,
    deviceMemory: null,
    hardwareConcurrency: null,
  });

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Get device memory (in GB)
    const deviceMemory = navigator.deviceMemory || null;

    // Get CPU cores
    const hardwareConcurrency = navigator.hardwareConcurrency || null;

    // Check connection
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    let slowConnection = false;
    let saveData = false;

    if (connection) {
      slowConnection =
        connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g";
      saveData = connection.saveData || false;
    }

    // Determine device tier
    let isLowEnd = false;
    let isMidRange = false;
    let isHighEnd = true;

    // Low-end criteria
    if (
      prefersReducedMotion ||
      slowConnection ||
      saveData ||
      (deviceMemory && deviceMemory < 2) ||
      (hardwareConcurrency && hardwareConcurrency < 4)
    ) {
      isLowEnd = true;
      isMidRange = false;
      isHighEnd = false;
    }
    // Mid-range criteria
    else if (
      (deviceMemory && deviceMemory >= 2 && deviceMemory < 4) ||
      (hardwareConcurrency && hardwareConcurrency >= 4 && hardwareConcurrency < 8)
    ) {
      isLowEnd = false;
      isMidRange = true;
      isHighEnd = false;
    }

    setPerformance({
      isLowEnd,
      isMidRange,
      isHighEnd,
      prefersReducedMotion,
      slowConnection,
      saveData,
      deviceMemory,
      hardwareConcurrency,
    });
  }, []);

  return performance;
}

/**
 * Hook that returns animation config based on device performance
 */
export function useAnimationConfig() {
  const perf = usePerformance();

  return {
    // Should animations be enabled?
    enabled: !perf.isLowEnd && !perf.prefersReducedMotion,

    // Reduced animations for mid-range
    reduced: perf.isMidRange,

    // Spring config
    spring: perf.isLowEnd
      ? { stiffness: 300, damping: 30 } // Fast, minimal animation
      : perf.isMidRange
        ? { stiffness: 250, damping: 28 } // Moderate
        : { stiffness: 180, damping: 26 }, // Smooth, full animation

    // Duration multiplier
    durationMultiplier: perf.isLowEnd ? 0.5 : perf.isMidRange ? 0.75 : 1,

    // Should use will-change CSS property?
    useWillChange: perf.isHighEnd,

    // Should use blur effects?
    useBlur: perf.isHighEnd,

    // Should use complex transforms?
    useComplexTransforms: !perf.isLowEnd,
  };
}
