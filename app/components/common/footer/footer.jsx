import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: siteConfig.socialLinks.instagram },
  { label: "LinkedIn", href: siteConfig.socialLinks.linkedin },
];

const linkStyle = "w-fit transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4";

export default function Footer() {
  return (
    <footer className="border-t border-[#21182d]/10 bg-white px-4 text-[#21182d] sm:px-6 md:px-10" style={{ fontFamily: "var(--font-display)" }}>
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-10 py-10 sm:grid-cols-2 sm:gap-x-12 sm:py-14 lg:grid-cols-[1.3fr_0.65fr_1fr] lg:gap-16 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Nymbor home" className={`block ${linkStyle}`}>
              <Image
                src="/nymbor-final-files/primary-logo/nymbor-logo-primary-logo.svg"
                alt="Nymbor"
                width={1480}
                height={363}
                className="h-auto w-[180px] sm:w-[220px] lg:w-[240px]"
              />
            </Link>
            <p className="mt-5 max-w-[290px] text-[15px] leading-[1.7] text-[#6b6472]">
              An independent creative studio for brand identity, interface design, and web development.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[10px] font-[600] uppercase tracking-[0.16em] text-[#7b7382]" style={{ fontFamily: "var(--font-mono)" }}>Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`inline-block text-[17px] font-[500] leading-6 tracking-[-0.02em] ${linkStyle}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="text-[10px] font-[600] uppercase tracking-[0.16em] text-[#7b7382]" style={{ fontFamily: "var(--font-mono)" }}>Have something in mind?</p>
            <p className="mt-5 max-w-[330px] text-[28px] font-[500] leading-[1.15] tracking-[-0.035em] sm:text-[32px]">
              Let’s make something wonderful.
            </p>
            <Link href="/contact" className={`group mt-6 inline-flex min-h-11 items-center gap-3 border-b border-primary/35 pb-1 text-[16px] font-[600] text-primary ${linkStyle}`}>
              Submit a brief
              <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
            <a href={`mailto:${siteConfig.email}`} className={`mt-4 block max-w-full break-words text-[15px] leading-6 text-[#6b6472] ${linkStyle}`}>
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-[#21182d]/10 py-6 text-[12px] leading-5 text-[#6b6472] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>Nymbor © {new Date().getFullYear()}</p>
          <nav aria-label="Legal" className="flex items-center gap-5">
            <Link href="/privacy" className={linkStyle}>Privacy</Link>
            <Link href="/terms" className={linkStyle}>Terms</Link>
          </nav>
          <nav aria-label="Social profiles" className="flex flex-wrap items-center gap-5">
            {SOCIAL_LINKS.map((profile) => (
              <a key={profile.href} href={profile.href} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-6 items-center gap-1.5 ${linkStyle}`}>
                {profile.label}
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
