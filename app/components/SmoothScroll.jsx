"use client";

import { useEffect } from "react";
import Lenis from "lenis";
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenisScroll = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.3,
    });

    // Expose globally so UI components (e.g., Modal) can stop/start scrolling
    // when overlays are open.
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
        // Clear global reference on unmount
        window.lenis = undefined;
      }
      lenisScroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
