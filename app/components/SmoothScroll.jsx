"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const deviceMemory = navigator.deviceMemory;
    const hardwareConcurrency = navigator.hardwareConcurrency;
    const isLowEnd =
      (deviceMemory && deviceMemory <= 4) ||
      (hardwareConcurrency && hardwareConcurrency <= 4);

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

    const requestFrame = () => {
      if (!rafId && !document.hidden) {
        rafId = requestAnimationFrame(raf);
      }
    };

    function raf(time) {
      rafId = undefined;
      lenisScroll?.raf(time);
      requestFrame();
    }

    const handleVisibilityChange = () => {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
      } else {
        requestFrame();
      }
    };

    async function startSmoothScroll() {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenisScroll = new Lenis({
        lerp: 0.12,
        wheelMultiplier: 1,
        infinite: false,
      });

      window.lenis = lenisScroll;

      document.addEventListener("visibilitychange", handleVisibilityChange);
      requestFrame();
    }

    startSmoothScroll();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (window.lenis === lenisScroll) {
        window.lenis = undefined;
      }
      lenisScroll?.destroy();
    };
  }, []);

  useEffect(() => {
    window.lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <>{children}</>;
}
