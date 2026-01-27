"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Work", "Contact"];

  return (
    <header className="fixed top-0 inset-x-0 z-80">
      <div
        className={
          `mx-auto transition-all duration-700 ease-out ` +
          (collapsed
            ? "max-w-[920px] mt-2 px-2"
            : "container px-4 md:px-6 py-2 md:py-3")
        }
      >
        <div
          className={
            `w-full flex items-center justify-between gap-3 transition-all duration-700 ` +
            (collapsed
              ? "rounded-full bg-white/80 backdrop-blur  border-black/10 shadow-sm px-3 py-1.5"
              : "bg-transparent px-0 py-0")
          }
        >
          {/* Logo */}
          <div className="flex items-center shrink-0 select-none">
            <img
              src="/logo-2.png"
              alt="Zeneth Studio"
              className="h-7 md:h-14 w-auto"
            />
          </div>

          {/* Center segmented nav */}
          <nav
            className={
              `transition-all duration-700 ease-out rounded-full bg-black/10 backdrop-blur flex items-center gap-1 shadow-sm ` +
              (collapsed ? "px-2 py-1" : "px-3 py-2")
            }
            aria-label="Primary"
          >
            {navItems.map((label) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={
                  `transition-all duration-300 rounded-full px-4 py-1.5 text-sm md:text-base ` +
                  (active === label
                    ? "bg-black text-white"
                    : "text-black/80 hover:text-black")
                }
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {label}
              </button>
            ))}
          </nav>

          <a
            href="#contact"
            className={
              `rounded-full bg-black text-white transition-all duration-700 shrink-0 ` +
              (collapsed
                ? "px-4 py-1.5 text-sm"
                : "px-5 py-2 text-sm md:text-base")
            }
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Lets Work →
          </a>
        </div>
      </div>
    </header>
  );
}
