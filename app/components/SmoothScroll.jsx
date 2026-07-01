"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const deviceMemory = navigator.deviceMemory;
    const hardwareConcurrency = navigator.hardwareConcurrency;
    const isLowEnd =
      (deviceMemory && deviceMemory < 4) ||
      (hardwareConcurrency && hardwareConcurrency < 4);

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const slowConnection =
      connection &&
      (connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g" ||
        connection.saveData);

    if (prefersReducedMotion || isLowEnd || slowConnection || isTouchDevice) {
      return;
    }

    let lenisScroll;
    let rafId;
    let cancelled = false;

    async function startSmoothScroll() {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenisScroll = new Lenis({
        lerp: 0.12,
        wheelMultiplier: 1,
        infinite: false,
      });

      window.lenis = lenisScroll;

      function raf(time) {
        lenisScroll?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    startSmoothScroll();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (window.lenis === lenisScroll) {
        window.lenis = undefined;
      }
      lenisScroll?.destroy();
    };
  }, []);

  return <>{children}</>;
}
