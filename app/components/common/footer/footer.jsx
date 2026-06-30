import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-black/8">

      {/* Main content */}
      <div className="px-8 md:px-14 pt-14 pb-10 md:pt-16 md:pb-12 flex flex-col lg:flex-row items-start justify-between gap-12">

        {/* Left: logo */}
        <div className="shrink-0">
          <Image
            src="/logo-2.png"
            alt="Zeneth Studio"
            width={400}
            height={200}
            className="w-[220px] md:w-[300px] h-auto object-contain"
          />
        </div>

        {/* Right end: nav + contact */}
        <div className="flex flex-col sm:flex-row gap-14 lg:gap-20">

          {/* Nav links */}
          <nav
            className="flex flex-col gap-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[22px] md:text-[26px] font-[500] text-[#1a1a1a] hover:text-primary transition-colors leading-none"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + contact */}
          <div
            className="flex flex-col gap-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <p className="text-[26px] md:text-[30px] font-[600] text-[#1a1a1a] leading-[1.25]">
              Let&apos;s make{" "}
              <span className="text-primary">→</span>
              <br />
              something wonderful
            </p>

            <div className="flex flex-col gap-2 mt-1">
              <Link
                href="/contact"
                className="text-[17px] md:text-[19px] font-[400] text-[#1a1a1a] hover:text-primary transition-colors"
              >
                Submit a brief
              </Link>
              <a
                href="mailto:Contact@Zeneth.com"
                className="text-[17px] md:text-[19px] font-[400] text-[#1a1a1a] hover:text-primary transition-colors"
              >
                Contact@Zeneth.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10 px-8 md:px-14 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span
          className="text-[13px] text-black/35"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Zeneth studio © 2025 privacy
        </span>

        <div
          className="flex items-center gap-3 text-[13px] text-black/35"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          <a href="#" className="hover:text-black/70 transition-colors">Twitter</a>
          <span className="text-primary text-[10px]">✳</span>
          <a href="#" className="hover:text-black/70 transition-colors">Instagram</a>
          <span className="text-primary text-[10px]">✳</span>
          <a href="#" className="hover:text-black/70 transition-colors">Linkedin</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
