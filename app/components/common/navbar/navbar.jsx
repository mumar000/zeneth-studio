"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/", order: "order-1" },
  { label: "Work", href: "/works", order: "order-2" },
  { label: "About", href: "/about", order: "order-4" },
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
  const shouldReduceMotion = useReducedMotion();
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
  }, [pathname]);

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

  const isWorkDetailPage = /^\/works\/[^/]+\/?$/.test(pathname);
  const shouldShowNavbar = !isWorkDetailPage || hasScrolled;
  const collapsed = hasScrolled || isIntroCollapsed;
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <AnimatePresence>
      {shouldShowNavbar && (
        <motion.header
          key={isWorkDetailPage ? "work-detail-navbar" : "site-navbar"}
          className="fixed inset-x-0 top-0 z-[80]"
          initial={
            isWorkDetailPage
              ? shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: -28,
                    scale: 0.98,
                    filter: "blur(10px)",
                  }
              : { opacity: 0, y: -16 }
          }
          animate={
            isWorkDetailPage
              ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              : { opacity: 1, y: 0 }
          }
          exit={
            isWorkDetailPage
              ? shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: -20,
                    scale: 0.985,
                    filter: "blur(8px)",
                  }
              : undefined
          }
          transition={
            isWorkDetailPage
              ? shouldReduceMotion
                ? { duration: 0.15 }
                : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
              : {
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 1, 0.5, 1],
                }
          }
        >
      <div
        className={
          `relative mx-auto mt-2 w-full px-3 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ` +
          (collapsed
            ? "md:mt-2 md:max-w-[960px] md:px-2"
            : "md:container md:px-6 md:py-2 lg:py-4 2xl:py-6")
        }
      >
        <div
          className={
            `relative z-50 flex w-full items-center justify-between gap-3 rounded-[14px] border border-black/10 bg-white/90 px-3 py-2 shadow-[0_8px_30px_rgba(20,12,35,0.1)] backdrop-blur-xl transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ` +
            (collapsed
              ? "md:rounded-2xl md:px-4 md:py-2 lg:py-4"
              : "md:rounded-none md:border-transparent md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none")
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
              className="h-[20px] w-auto md:h-[24px] lg:h-[35px]"
            />
          </Link>

          {/* Center: nav pill (desktop) */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/85 p-1.5 shadow-[0_10px_30px_rgba(28,16,48,0.08)] backdrop-blur-xl md:flex"
          >
            {NAV_ITEMS.map(({ label, href, order }) => {
              const active =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`${order} rounded-full px-3.5 py-2 text-[12px] font-[500] tracking-[-0.01em] transition-[color,background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 lg:px-4 lg:text-[13px] 2xl:px-5 2xl:py-2.5 2xl:text-sm ${
                    active
                      ? "bg-[#171717] text-white shadow-[0_4px_12px_rgba(0,0,0,0.16)]"
                      : "text-black/65 hover:bg-black/[0.055] hover:text-black"
                  }`}
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {label}
                </Link>
              );
            })}

            <div
              className="relative order-3"
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
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12px] font-[500] tracking-[-0.01em] transition-[color,background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 lg:px-4 lg:text-[13px] 2xl:px-5 2xl:py-2.5 2xl:text-sm ${
                  pathname.startsWith("/services")
                    ? "bg-[#171717] text-white shadow-[0_4px_12px_rgba(0,0,0,0.16)]"
                    : "text-black/65 hover:bg-black/[0.055] hover:text-black"
                }`}
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Service
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
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
            Start a Project <ArrowRight size={15} />
          </Link>

          {/* Mobile toggle */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => {
              if (isMenuOpen) setIsServicesOpen(false);
              setIsMenuOpen((open) => !open);
            }}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-[10px] border border-black bg-[#171717] p-2 text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:hidden"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              <button
                type="button"
                aria-label="Close navigation"
                className="absolute inset-0 cursor-default bg-black/25 backdrop-blur-[2px]"
                onClick={closeMobileMenu}
              />
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-3 top-[68px] max-h-[calc(100svh-82px)] overflow-y-auto rounded-[18px] border border-black/10 bg-[#fffcf7] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
              >
                <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                  {NAV_ITEMS.map(({ label, href, order }) => {
                    const active =
                      pathname === href ||
                      (href !== "/" && pathname.startsWith(href));

                    return (
                      <Link
                        key={label}
                        href={href}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMobileMenu}
                        className={`${order} group flex min-h-12 items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-[500] transition-colors ${
                          active
                            ? "bg-[#171717] text-white"
                            : "text-black/70 hover:bg-black/5 hover:text-black"
                        }`}
                        style={{ fontFamily: "var(--font-sora)" }}
                      >
                        {label}
                        <ArrowRight
                          className={`h-4 w-4 transition-all ${
                            active
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-25 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </Link>
                    );
                  })}
                  <div className="order-3">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((open) => !open)}
                      aria-expanded={isServicesOpen}
                      aria-controls="mobile-services-menu"
                      className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-[15px] font-[500] transition-colors ${
                        pathname.startsWith("/services")
                          ? "bg-[#171717] text-white"
                          : "text-black/70 hover:bg-black/5 hover:text-black"
                      }`}
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
                          <div className="mx-2 mt-1 flex flex-col gap-1 rounded-xl bg-black/[0.035] p-2">
                            <Link
                              href="/#services"
                              onClick={closeMobileMenu}
                              className="rounded-lg px-3 py-2.5 text-[13px] font-[600] text-primary transition-colors hover:bg-white/70"
                            >
                              All Services
                            </Link>
                            {SERVICE_ITEMS.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                aria-current={pathname === service.href ? "page" : undefined}
                                onClick={closeMobileMenu}
                                className={`rounded-lg px-3 py-2.5 text-[13px] font-[500] transition-colors ${
                                  pathname === service.href
                                    ? "bg-white text-black shadow-sm"
                                    : "text-black/60 hover:bg-white/70 hover:text-black"
                                }`}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="order-5 mt-2 border-t border-black/10 pt-2.5">
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="flex w-full items-center justify-center gap-2 rounded-[11px] border-2 border-black bg-primary px-4 py-3 text-[11px] font-[800] uppercase tracking-[0.12em] text-white shadow-[3px_3px_0_0_#000]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Start a Project →
                    </Link>
                  </div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
