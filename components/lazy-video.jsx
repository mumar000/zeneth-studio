"use client";

import { useEffect, useRef } from "react";

// Muted loop that only downloads once it's near the screen and only plays
// while visible. With reduced motion it stays on its poster.
export default function LazyVideo({ src, poster, label, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) video.src = src;
          video.play().catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.15 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
      className={className}
    />
  );
}
