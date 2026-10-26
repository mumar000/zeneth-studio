"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { scrollToBook } from "@/lib/scroll-to-book";

const NAV_ITEMS = [
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
];

const SERVICE_ITEMS = [
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "Interface Design", href: "/services/interface-design" },
  { label: "Web Development", href: "/services/web-development" },
];

const MOBILE_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const isActive = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Desktop Services dropdown. Driven by state (not CSS :hover/:focus-within) so it
  // closes as soon as a service is picked, even while the link still has focus.
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesButtonRef = useRef(null);
  const openedByHoverRef = useRef(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const hasScrolledRef = useRef(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;
      const nextHasScrolled = window.scrollY > 24;
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
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
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
  const closeMobileMenu = () => setIsMenuOpen(false);

  // "Book a call" scrolls to the page's booking section when there is one,
  // and goes to the contact page (which holds the calendar) everywhere else.
  const handleBookClick = (event) => {
    closeMobileMenu();
    if (scrollToBook()) event.preventDefault();
  };

  return (
    <AnimatePresence>
      {shouldShowNavbar && (
        <motion.header
          key={isWorkDetailPage ? "work-detail-navbar" : "site-navbar"}
          className="pointer-events-none fixed inset-x-0 top-0 z-[80] flex justify-center px-4 pt-4"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav
            aria-label="Main"
            className={`pointer-events-auto relative z-50 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/85 py-1.5 pl-4 pr-1.5 backdrop-blur-[14px] transition-shadow duration-200 sm:pl-5 ${
              hasScrolled
                ? "shadow-[0_14px_40px_rgba(28,16,48,0.14)]"
                : "shadow-[0_10px_30px_rgba(28,16,48,0.08)]"
            }`}
          >
            <Link
              href="/"
              aria-label="Nymbor home"
              className="mr-auto flex min-h-11 shrink-0 select-none items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:mr-3.5"
            >
              <Image
                src="/nymbor-final-files/primary-logo/nymbor-logo-primary-logo.svg"
                alt="Nymbor"
                width={1480}
                height={363}
                priority
                className="h-[22px] w-auto"
              />
            </Link>

            <div className="hidden items-center gap-0.5 md:flex">
              {NAV_ITEMS.slice(0, 1).map(({ label, href }) => {
                const active = isActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-10 items-center rounded-full px-4 text-[14px] font-[500] transition-colors duration-150 hover:bg-[#171717] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                      active ? "bg-[#171717] text-white" : "text-[#1a1a1a]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}

              <div
                className="relative"
                onMouseEnter={() => {
                  openedByHoverRef.current = true;
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  openedByHoverRef.current = false;
                  setIsServicesOpen(false);
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setIsServicesOpen(false);
                }}
                onKeyDown={(event) => {
                  if (event.key !== "Escape" || !isServicesOpen) return;
                  setIsServicesOpen(false);
                  servicesButtonRef.current?.focus();
                }}
              >
                {/* There's no services index page: this only opens the dropdown (hover, keyboard or tap). */}
                <button
                  ref={servicesButtonRef}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-menu"
                  onClick={() => {
                    // A hover already opened it; the click that follows shouldn't close it again.
                    if (openedByHoverRef.current) {
                      openedByHoverRef.current = false;
                      setIsServicesOpen(true);
                    } else {
                      setIsServicesOpen((open) => !open);
                    }
                  }}
                  className={`inline-flex min-h-10 items-center gap-1 rounded-full px-4 text-[14px] font-[500] transition-colors duration-150 hover:bg-[#171717] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                    isActive(pathname, "/services")
                      ? "bg-[#171717] text-white"
                      : "text-[#1a1a1a]"
                  }`}
                >
                  Services
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>

                <div
                  id="services-menu"
                  className={`absolute left-1/2 top-full w-[230px] -translate-x-1/2 pt-3 transition-[opacity,visibility] duration-150 ${
                    isServicesOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_50px_rgba(28,16,48,0.18)]">
                    {SERVICE_ITEMS.map(({ label, href }) => {
                      const active = isActive(pathname, href);
                      return (
                        <Link
                          key={href}
                          href={href}
                          aria-current={active ? "page" : undefined}
                          onClick={(event) => {
                            openedByHoverRef.current = false;
                            setIsServicesOpen(false);
                            event.currentTarget.blur();
                          }}
                          className={`group/item flex min-h-11 items-center justify-between rounded-xl px-3.5 text-[14px] font-[500] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                            active
                              ? "bg-[#171717] text-white"
                              : "text-[#1a1a1a] hover:bg-[#f4efff] hover:text-primary"
                          }`}
                        >
                          {label}
                          <ArrowRight
                            aria-hidden="true"
                            className={`size-3.5 transition-transform duration-150 ${
                              active
                                ? "opacity-100"
                                : "-translate-x-1 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {NAV_ITEMS.slice(1).map(({ label, href }) => {
                const active = isActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-10 items-center rounded-full px-4 text-[14px] font-[500] transition-colors duration-150 hover:bg-[#171717] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                      active ? "bg-[#171717] text-white" : "text-[#1a1a1a]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={handleBookClick}
              className="ml-3 inline-flex min-h-11 items-center whitespace-nowrap rounded-full border-2 border-black bg-primary px-4 font-mono text-[11px] font-[700] uppercase leading-none tracking-[0.14em] text-white transition-colors duration-150 hover:bg-[#5a14d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 max-[359px]:hidden sm:px-5 sm:text-xs md:ml-2"
            >
              Book a call
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full bg-[#171717] text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </nav>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
                className="pointer-events-auto fixed inset-0 z-40 md:hidden"
              >
                <button
                  type="button"
                  aria-label="Close navigation"
                  className="absolute inset-0 cursor-default bg-black/25"
                  onClick={closeMobileMenu}
                />
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-4 top-[80px] max-h-[calc(100svh-96px)] overflow-y-auto rounded-3xl border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.2)]"
                >
                  <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                    {MOBILE_ITEMS.slice(0, 2).map(({ label, href }) => {
                      const active = isActive(pathname, href);
                      return (
                        <Link
                          key={href}
                          href={href}
                          aria-current={active ? "page" : undefined}
                          onClick={closeMobileMenu}
                          className={`group flex min-h-12 items-center justify-between rounded-2xl px-4 text-[15px] font-[500] transition-colors ${
                            active ? "bg-[#171717] text-white" : "text-[#1a1a1a] hover:bg-black/5"
                          }`}
                        >
                          {label}
                          <ArrowRight
                            className={`size-4 transition-all ${
                              active ? "opacity-100" : "-translate-x-1 opacity-25 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </Link>
                      );
                    })}

                    <div className="rounded-2xl bg-[#f7f4fb] p-1.5">
                      <span className="flex min-h-11 items-center px-3 text-[12px] font-[700] uppercase tracking-[0.12em] text-black/55">
                        Services
                      </span>
                      {SERVICE_ITEMS.map(({ label, href }) => {
                        const active = isActive(pathname, href);
                        return (
                          <Link
                            key={href}
                            href={href}
                            aria-current={active ? "page" : undefined}
                            onClick={closeMobileMenu}
                            className={`flex min-h-11 items-center justify-between rounded-xl px-3 text-[14px] font-[500] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                              active
                                ? "bg-[#171717] text-white"
                                : "text-[#1a1a1a] hover:bg-white"
                            }`}
                          >
                            {label}
                            <ArrowRight className="size-3.5 opacity-45" aria-hidden="true" />
                          </Link>
                        );
                      })}
                    </div>

                    {MOBILE_ITEMS.slice(2).map(({ label, href }) => {
                      const active = isActive(pathname, href);
                      return (
                        <Link
                          key={href}
                          href={href}
                          aria-current={active ? "page" : undefined}
                          onClick={closeMobileMenu}
                          className={`group flex min-h-12 items-center justify-between rounded-2xl px-4 text-[15px] font-[500] transition-colors ${
                            active ? "bg-[#171717] text-white" : "text-[#1a1a1a] hover:bg-black/5"
                          }`}
                        >
                          {label}
                          <ArrowRight
                            className={`size-4 transition-all ${
                              active ? "opacity-100" : "-translate-x-1 opacity-25 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </Link>
                      );
                    })}
                    <Link
                      href="/contact"
                      onClick={handleBookClick}
                      className="mt-1 flex min-h-12 items-center justify-center rounded-2xl border-2 border-black bg-primary font-mono text-xs font-[700] uppercase tracking-[0.14em] text-white"
                    >
                      Book a call
                    </Link>
                  </nav>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
