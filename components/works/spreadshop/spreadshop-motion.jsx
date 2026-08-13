"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metricAnimations = [
  {
    selector: '[data-node-id="1:51"]',
    value: 23,
    format: (value) => `+${Math.round(value)}%`,
  },
  {
    selector: '[data-node-id="1:56"]',
    value: 12,
    format: (value) => `-${Math.round(value)}%`,
  },
  {
    selector: '[data-node-id="1:61"]',
    value: 3.1,
    format: (value) => `${value.toFixed(1)}s`,
  },
];

export default function SpreadshopMotion({ children }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const sections = Array.from(root.querySelectorAll(":scope > section"));

        sections.slice(1).forEach((section) => {
          const primaryContent = Array.from(section.children).filter(
            (element) => !element.classList.contains("sr-only"),
          );
          const cards = Array.from(
            section.querySelectorAll("article, figure"),
          ).filter(
            (card) =>
              !cardsWithinAnotherTarget(card, section, "article, figure"),
          );
          const images = Array.from(section.querySelectorAll("img"));

          const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          });

          timeline.fromTo(
            primaryContent,
            { autoAlpha: 0, y: 46 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.08,
              clearProps: "opacity,visibility,transform",
            },
          );

          if (cards.length > 1) {
            timeline.fromTo(
              cards,
              { autoAlpha: 0, y: 30, scale: 0.985 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                stagger: 0.08,
                clearProps: "opacity,visibility,transform",
              },
              0.12,
            );
          }

          if (images.length > 0 && section.dataset.nodeId !== "1:25") {
            timeline.fromTo(
              images,
              { scale: 1.025 },
              {
                scale: 1,
                duration: 1.25,
                stagger: 0.04,
                clearProps: "transform",
              },
              0,
            );
          }
        });

        metricAnimations.forEach(({ selector, value, format }) => {
          const element = root.querySelector(selector);
          if (!element) return;

          const counter = { value: 0 };
          gsap.to(counter, {
            value,
            duration: 1.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              element.textContent = format(counter.value);
            },
            onComplete: () => {
              element.textContent = format(value);
            },
          });
        });
      }, root);

      const refresh = () => ScrollTrigger.refresh();
      const frame = requestAnimationFrame(refresh);
      window.addEventListener("load", refresh, { once: true });

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("load", refresh);
        context.revert();
      };
    });

    return () => media.revert();
  }, []);

  return (
    <div ref={rootRef} className="contents">
      {children}
    </div>
  );
}

function cardsWithinAnotherTarget(card, section, selector) {
  const parentTarget = card.parentElement?.closest(selector);
  return Boolean(parentTarget && section.contains(parentTarget));
}
