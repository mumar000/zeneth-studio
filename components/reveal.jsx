"use client";

import { useEffect, useRef } from "react";

const hidden = {
  rise: "js:motion-safe:not-data-[shown]:translate-y-8",
  tilt: "js:motion-safe:not-data-[shown]:[transform:perspective(1400px)_translate3d(0,56px,0)_rotateX(16deg)]",
};

// Fades content up once it scrolls into view. Sets a data attribute directly
// instead of state, so revealing never re-renders the subtree.
export default function Reveal({ as: Tag = "div", variant = "rise", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!("IntersectionObserver" in window)) {
      el.dataset.shown = "";
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.shown = "";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`motion-safe:transition-[opacity,translate,transform] motion-safe:duration-1000 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] js:motion-safe:not-data-[shown]:opacity-0 ${hidden[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
