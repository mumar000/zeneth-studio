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
    <footer className="w-full bg-white text-[#202020]">
      <div className="relative border-b border-[#ececec] px-5 pb-10 pt-10 sm:px-8 md:px-12 lg:h-[350px] lg:px-[2.14vw] lg:pb-0 lg:pt-0">
        <Link
          href="/"
          aria-label="Nymbor home"
          className="flex w-fit shrink-0 items-center lg:absolute lg:left-[2.14%] lg:top-[11%]"
        >
          <Image
            src="/nymbor-final-files/primary-logo/nymbor-logo-primary-logo.svg"
            alt="Nymbor"
            width={1480}
            height={363}
            className="h-auto w-[210px] md:w-[250px] lg:w-[clamp(220px,14vw,280px)]"
          />
        </Link>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:absolute lg:left-[2.14%] lg:right-[4.2%] lg:top-0 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_minmax(210px,15vw)_minmax(250px,17.45vw)] lg:gap-0">
          <div aria-hidden="true" className="hidden lg:block" />

          <nav
            aria-label="Footer navigation"
            className="flex flex-col gap-4 lg:pt-[88px] lg:gap-[19px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-[23px] font-[500] leading-none tracking-[-0.03em] transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:text-[clamp(22px,1.45vw,28px)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col lg:pt-[58px]" style={{ fontFamily: "var(--font-display)" }}>
            <p className="max-w-[335px] text-[25px] font-[500] leading-[1.35] tracking-[-0.03em] lg:text-[clamp(24px,1.45vw,28px)]">
              Let&apos;s make
              <span className="ml-3 text-primary" aria-hidden="true">→</span>
              <br />
              something wonderful
            </p>

            <div className="mt-8 flex flex-col gap-2 lg:mt-[42px]">
              <Link
                href="/contact"
                className="w-fit text-[20px] font-[500] leading-none tracking-[-0.03em] transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:text-[clamp(20px,1.45vw,28px)]"
              >
                Submit a brief
              </Link>
              <a
                href="mailto:contact@nymbor.com"
                className="w-fit max-w-full break-words text-[20px] font-[500] leading-none tracking-[-0.03em] transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:text-[clamp(20px,1.45vw,28px)]"
              >
                contact@nymbor.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[62px] flex-col justify-center gap-3 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between md:py-0 md:pl-[2.14vw] md:pr-[4.2vw]">
        <span
          className="text-[11px] tracking-[-0.04em] text-[#b1b1b1] md:text-[14px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Nymbor © {new Date().getFullYear()} privacy
        </span>

        <div
          aria-label="Social profiles"
          className="flex items-center gap-4 text-[11px] tracking-[-0.04em] text-[#202020] md:gap-[30px] md:text-[16px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>Twitter</span>
          <span aria-hidden="true" className="text-primary">✦</span>
          <span>Instagram</span>
          <span aria-hidden="true" className="text-primary">✦</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
