import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f0a1a] to-primary/30 py-6 px-4 md:px-6  flex flex-col justify-end">
      <div
        className="relative w-full overflow-hidden rounded-[3rem] bg-[#0b0b0b] text-white pt-16 pb-6 px-6 md:px-12 lg:px-16"
        style={{ fontFamily: "var(--font-sora)" }}
      >
        {/* TOP SECTION: content grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-10 mb-14">
          {/* LEFT: Newsletter & Socials */}
          <div className="w-full lg:w-[35%] flex flex-col gap-8">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
              Stay updated with Zenith news
            </h3>

            {/* Input Field - Pill Shape with Button Inside */}
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-14 rounded-full bg-[#1a1a1a] border border-white/5 px-6 text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#8a38f5] transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#8a38f5] flex items-center justify-center text-white hover:scale-105 transition-transform">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Social Pills - Small, White, Black Icons */}
            <div className="flex flex-wrap gap-2">
              <SocialPill icon={<Facebook size={12} fill="currentColor" />} />
              <SocialPill icon={<Twitter size={12} fill="currentColor" />} />
              <SocialPill icon={<Linkedin size={12} fill="currentColor" />} />
              <SocialPill icon={<Youtube size={12} fill="currentColor" />} />
              <SocialPill icon={<Instagram size={12} />} />
            </div>
          </div>

          {/* RIGHT: Navigation Columns with Vertical Dividers */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 - No Border */}
            <div className="flex flex-col gap-3">
              <FooterLink>Services</FooterLink>
              <FooterLink>Work</FooterLink>
              <FooterLink>About</FooterLink>
              <FooterLink>Culture</FooterLink>
              <FooterLink>Meet The Team</FooterLink>
            </div>

            {/* Column 2 - Left Border */}
            <div className="flex flex-col gap-3 md:border-l md:border-white/10 md:pl-8">
              <FooterLink>Testimonials</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Webinars</FooterLink>
              <FooterLink>Careers</FooterLink>
            </div>

            {/* Column 3 - Left Border */}
            <div className="flex flex-col gap-3 md:border-l md:border-white/10 md:pl-8">
              <FooterLink>Sheffield</FooterLink>
              <FooterLink>Manchester</FooterLink>
              <FooterLink>London</FooterLink>
              <FooterLink>New York</FooterLink>
              <FooterLink>Contact</FooterLink>
            </div>
          </div>
        </div>

        {/* using flex to ensure full width alignment */}
        <div className="w-full  pt-4 md:pt-0">
          <h1 className="text-[11.5vw] leading-[0.85] font-bold tracking-tighter  text-center  text-white select-none mt-4 md:mt-0">
            ZENITH <span className="text-primary">STUDIO</span>
            <sup className="text-[3vw] align-top top-4 md:top-8 relative">
              ®
            </sup>
          </h1>
        </div>

        {/* BOTTOM SECTION: Meta Data - Single Line on Desktop */}
        <div className="mt-6 md:mt-2 flex flex-col md:flex-row justify-between items-end md:items-center text-[10px] md:text-xs text-neutral-500 font-medium">
          {/* Left Side Meta */}
          <div className="flex flex-wrap gap-y-2 gap-x-1 md:gap-x-2 items-center">
            <span>© 2025 Zenith Studio Ltd. All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span>Company Number 11955187</span>
            <span className="hidden md:inline">•</span>
            <span>VAT Registered GB 322402945</span>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms & conditions
            </a>
          </div>

          {/* Right Side Credit */}
          <div className="mt-4 md:mt-0">
            <span>Website MadeByZenith</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Link Component - Cleaner, standard font size
const FooterLink = ({ children }) => (
  <a
    href="#"
    className="text-base md:text-lg text-white hover:text-[#8a38f5] transition-colors font-medium block"
  >
    {children}
  </a>
);

// Social Pill Component - Matches reference (White pill, black icon)
const SocialPill = ({ icon }) => (
  <a
    href="#"
    className="group flex items-center gap-1.5 rounded-full bg-white pl-3 pr-2 py-1 text-black hover:bg-[#8a38f5] hover:text-white transition-colors"
  >
    {icon}
    <ArrowUpRight
      size={10}
      className="group-hover:rotate-45 transition-transform"
    />
  </a>
);

export default Footer;
