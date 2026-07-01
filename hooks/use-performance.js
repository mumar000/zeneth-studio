"use client";

const DEFAULT_PERFORMANCE = {
  isLowEnd: false,
  isMidRange: false,
  isHighEnd: true,
  prefersReducedMotion: false,
  slowConnection: false,
  saveData: false,
  deviceMemory: null,
  hardwareConcurrency: null,
};

function getPerformanceSnapshot() {
  if (typeof window === "undefined") {
    return DEFAULT_PERFORMANCE;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const deviceMemory = navigator.deviceMemory || null;
  const hardwareConcurrency = navigator.hardwareConcurrency || null;
  const connection =
    navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  const slowConnection = Boolean(
    connection &&
      (connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g"),
  );
  const saveData = Boolean(connection?.saveData);

  let isLowEnd = false;
  let isMidRange = false;
  let isHighEnd = true;

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
  } else if (
    (deviceMemory && deviceMemory >= 2 && deviceMemory < 4) ||
    (hardwareConcurrency && hardwareConcurrency >= 4 && hardwareConcurrency < 8)
  ) {
    isLowEnd = false;
    isMidRange = true;
    isHighEnd = false;
  }

  return {
    isLowEnd,
    isMidRange,
    isHighEnd,
    prefersReducedMotion,
    slowConnection,
    saveData,
    deviceMemory,
    hardwareConcurrency,
  };
}

/**
 * Hook-compatible helper to detect device performance capabilities.
 */
export function usePerformance() {
  return getPerformanceSnapshot();
}

/**
 * Hook that returns animation config based on device performance.
 */
export function useAnimationConfig() {
  const perf = usePerformance();

  return {
    enabled: !perf.isLowEnd && !perf.prefersReducedMotion,
    reduced: perf.isMidRange,
    spring: perf.isLowEnd
      ? { stiffness: 300, damping: 30 }
      : perf.isMidRange
        ? { stiffness: 250, damping: 28 }
        : { stiffness: 180, damping: 26 },
    durationMultiplier: perf.isLowEnd ? 0.5 : perf.isMidRange ? 0.75 : 1,
    useWillChange: perf.isHighEnd,
    useBlur: perf.isHighEnd,
    useComplexTransforms: !perf.isLowEnd,
  };
}
