import React from "react";
import { ArrowUpRight } from "lucide-react";

const navLinks = ["Work", "Process", "Pipeline", "Contact"];
const socialLinks = ["LinkedIn", "Instagram", "Layers/Dribbble"];

const Footer = () => {
  return (
    <footer className="px-4 py-4 md:px-6 md:py-5">
      <div
        className="relative w-full overflow-hidden rounded-[16px] bg-[#111111] px-5 py-7 text-white md:px-8 md:py-8"
        style={{ fontFamily: "var(--font-sora)" }}
      >
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <FooterLabel>Navigation</FooterLabel>
            <div className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <FooterLabel>Socials</FooterLabel>
            <div className="mt-4 flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <FooterLabel>Availability</FooterLabel>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/80 md:text-base">
              <p>Currently: Accepting projects for Q3</p>
              <p className="inline-flex items-center gap-1.5">
                Location: PK
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                Global
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Zeneth Studio. All rights reserved.</span>
          <span className="font-romie italic text-white/70">
            Built for the undeniable.
          </span>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ children }) => (
  <a
    href="#"
    className="block text-sm font-[400] text-white/70 transition-colors hover:text-white md:text-base"
  >
    {children}
  </a>
);

const FooterLabel = ({ children }) => (
  <p className="text-xs font-[500] uppercase tracking-[0.12em] text-white/35">
    {children}
  </p>
);

export default Footer;
