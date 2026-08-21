"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
];

const SERVICE_ITEMS = [
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "Web & Interface Design", href: "/services/interface-design" },
  { label: "Web Development", href: "/services/web-development" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isIntroCollapsed, setIsIntroCollapsed] = useState(true);
  const pathname = usePathname();
  const hasScrolledRef = useRef(false);
  const menuButtonRef = useRef(null);
  const desktopServicesButtonRef = useRef(null);

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;
      const nextHasScrolled = window.scrollY > 40;
      if (nextHasScrolled !== hasScrolledRef.current) {
        hasScrolledRef.current = nextHasScrolled;
        setHasScrolled(nextHasScrolled);
      }
    };

    const onScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateScrollState);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsIntroCollapsed(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      setIsServicesOpen(false);
      menuButtonRef.current?.focus();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const collapsed = hasScrolled || isIntroCollapsed;
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-[80]"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
    >
      <div
        className={
          `relative mx-auto transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ` +
          (collapsed ? "max-w-[960px] mt-2 px-2" : "container px-4 md:px-6 py-2 2xl:py-4 lg:py-4 md:py-2")
        }
      >
        <div
          className={
            `relative z-50 w-full flex items-center justify-between gap-3 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ` +
            (collapsed
              ? "rounded-2xl bg-white/85 backdrop-blur-md shadow-md px-4 lg:py-4 py-2"
              : "bg-transparent px-0 py-0")
          }
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Nymbor home"
            className="flex shrink-0 select-none items-center"
          >
            <Image
              src="/nymbor-final-files/primary-logo/nymbor-logo-primary-logo.svg"
              alt="Nymbor"
              width={1480}
              height={363}
              priority
              className="h-[23px] w-auto md:h-[24px] lg:h-[35px]"
            />
          </Link>

          {/* Center: nav pill (desktop) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-0.5 rounded-lg border border-black px-3 py-1 lg:py-2.5 md:py-2 bg-white/70 backdrop-blur-md"
          >
            {NAV_ITEMS.map(({ label, href }) => {
              const active =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`${
                    label === "Home"
                      ? "order-1"
                      : label === "About"
                        ? "order-3"
                        : "order-4"
                  } px-4 py-1.5  rounded-lg text-xs lg:text-md md:text-xs font-[500] transition-all duration-200 ${
                    active
                      ? "bg-[#1a1a1a] text-white"
                      : "text-black hover:text-black hover:bg-black/5"
                  }`}
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {label}
                </Link>
              );
            })}

            <div
              className="relative order-2"
              onMouseEnter={() => setIsDesktopServicesOpen(true)}
              onMouseLeave={() => setIsDesktopServicesOpen(false)}
              onFocusCapture={() => setIsDesktopServicesOpen(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsDesktopServicesOpen(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key !== "Escape") return;
                setIsDesktopServicesOpen(false);
                desktopServicesButtonRef.current?.focus();
              }}
            >
              <button
                ref={desktopServicesButtonRef}
                type="button"
                aria-expanded={isDesktopServicesOpen}
                aria-controls="desktop-services-menu"
                className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs md:text-xs lg:text-md font-[500] transition-all duration-200 ${
                  pathname.startsWith("/services")
                    ? "bg-[#1a1a1a] text-white"
                    : "text-black hover:bg-black/5"
                }`}
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Services
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    isDesktopServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id="desktop-services-menu"
                className={`absolute left-1/2 top-full z-50 w-[290px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  isDesktopServicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                  <div className="my-1 border-t border-black/10" />
                  {SERVICE_ITEMS.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      aria-current={pathname === service.href ? "page" : undefined}
                      onClick={() => setIsDesktopServicesOpen(false)}
                      className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-[500] text-black/70 transition-colors hover:bg-black/5 hover:text-black"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      {service.label}
                      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right: CTA, same style as hero */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-4 py-2 md:py-2 text-xs font-[800] uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Book a Call <ArrowRight size={15} />
          </Link>

          {/* Mobile toggle */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => {
              if (isMenuOpen) setIsServicesOpen(false);
              setIsMenuOpen((open) => !open);
            }}
            className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-black/5 border border-black/10 p-2 text-black transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
              className="absolute top-full left-0 right-0 mt-2 px-2 md:hidden z-40"
            >
              <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl p-4">
                <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                  {NAV_ITEMS.map(({ label, href }) => {
                    const active =
                      pathname === href ||
                      (href !== "/" && pathname.startsWith(href));

                    return (
                      <Link
                        key={label}
                        href={href}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMobileMenu}
                        className={`${
                          label === "Home"
                            ? "order-1"
                            : label === "About"
                              ? "order-3"
                              : "order-4"
                        } group flex items-center justify-between rounded-xl px-4 py-3 text-base font-[500] text-black/70 hover:text-black hover:bg-black/5 transition-all`}
                        style={{ fontFamily: "var(--font-sora)" }}
                      >
                        {label}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    );
                  })}
                  <div className="order-2">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((open) => !open)}
                      aria-expanded={isServicesOpen}
                      aria-controls="mobile-services-menu"
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-[500] text-black/70 transition-all hover:bg-black/5 hover:text-black"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      Services
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isServicesOpen && (
                        <motion.div
                          id="mobile-services-menu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 flex flex-col gap-1 border-l border-black/10 pb-2 pl-3">
                            {SERVICE_ITEMS.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                aria-current={pathname === service.href ? "page" : undefined}
                                onClick={closeMobileMenu}
                                className="rounded-lg px-3 py-2.5 text-sm font-[500] text-black/65 transition-colors hover:bg-black/5 hover:text-black"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="order-5 mt-1 border-t border-black/5 pt-2">
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-[700] uppercase tracking-[0.12em] text-white"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Book a Call →
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
