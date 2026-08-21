import React from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/8 bg-white">

      {/* Main content */}
      <div className="flex flex-col items-start justify-between gap-8 px-4 pb-8 pt-10 sm:px-6 md:gap-12 md:px-14 md:pb-12 md:pt-16 lg:flex-row">

        {/* Left: logo */}
        <Link
          href="/"
          aria-label="Nymbor home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/nymbor-final-files/primary-logo/nymbor-logo-primary-logo.svg"
            alt="Nymbor"
            width={1480}
            height={363}
            className="h-[42px] w-auto md:h-[58px]"
          />
        </Link>

        {/* Right end: nav + contact */}
        <div className="grid w-full grid-cols-2 gap-6 md:flex md:w-auto md:flex-row md:gap-14 lg:gap-20">

          {/* Nav links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col gap-3.5 md:gap-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[17px] font-[500] leading-none text-[#1a1a1a] transition-colors hover:text-primary md:text-[26px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + contact */}
          <div
            className="flex flex-col gap-4 md:gap-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <p className="text-[20px] font-[600] leading-[1.2] text-[#1a1a1a] md:text-[30px] md:leading-[1.25]">
              Let&apos;s make{" "}
              <span className="text-primary">→</span>
              <br />
              something wonderful
            </p>

            <div className="mt-1 flex flex-col gap-1.5 md:gap-2">
              <Link
                href="/contact"
                className="text-[13px] font-[400] text-[#1a1a1a] transition-colors hover:text-primary md:text-[19px]"
              >
                Submit a brief
              </Link>
              <a
                href="mailto:contact@nymbor.com"
                className="break-all text-[13px] font-[400] text-[#1a1a1a] transition-colors hover:text-primary md:text-[19px]"
              >
                contact@nymbor.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10 px-4 py-4 sm:px-6 md:px-14">
        <span
          className="text-[11px] text-black/40 md:text-[13px] md:text-black/35"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Nymbor © {new Date().getFullYear()}
        </span>
      </div>

    </footer>
  );
};

export default Footer;
