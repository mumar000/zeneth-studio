import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/works" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "X", href: siteConfig.founder.x },
  { label: "Instagram", href: siteConfig.socialLinks.instagram },
  { label: "LinkedIn", href: siteConfig.socialLinks.linkedin },
];

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Footer() {
  return (
    <footer className="border-t border-[#f0edf1] bg-white text-[#141414]" style={{ fontFamily: "var(--font-display)" }}>
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 pb-16 pt-16 sm:grid-cols-2 sm:gap-x-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(140px,170px)_minmax(270px,310px)] lg:gap-x-[clamp(36px,4.5vw,72px)] lg:px-9 lg:pb-[60px] lg:pt-[74px]">
        <Link href="/" aria-label="Nymbor home" className={`block w-full max-w-[280px] self-start ${focusStyle} sm:col-span-2 sm:max-w-[560px] lg:col-span-1`}>
          <Image
            src="/nymbor-final-files/primary-logo/nymbor-logo-primary-logo.svg"
            alt="Nymbor"
            width={1480}
            height={363}
            className="h-auto w-full"
          />
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-col lg:gap-1.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`inline-flex min-h-11 items-center text-[22px] font-[500] leading-[1.25] tracking-[-0.035em] transition-colors hover:text-primary lg:text-[26px] ${focusStyle}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 text-[21px] font-[500] leading-[1.35] tracking-[-0.04em] lg:text-[26px]">
          <Link href="/contact" className={`group inline-block transition-colors hover:text-primary ${focusStyle}`}>
            <span className="flex items-center gap-3">
              Let&apos;s make
              <ArrowRight aria-hidden="true" className="size-7 flex-none text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none lg:size-8" strokeWidth={2.5} />
            </span>
            <span className="block">something wonderful</span>
          </Link>
          <div className="mt-8 flex flex-col lg:mt-9">
            <Link href="/contact" className={`flex min-h-11 w-fit items-center transition-colors hover:text-primary ${focusStyle}`}>
              Book a call
            </Link>
            <a href={`mailto:${siteConfig.email}`} className={`flex min-h-11 w-fit max-w-full items-center break-all transition-colors hover:text-primary ${focusStyle}`}>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#eceaec]">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-5 px-5 py-5 font-mono text-[11px] leading-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-9">
          <div className="flex flex-wrap items-center gap-x-4 text-[#6b6470]">
            <span>Nymbor studio © {new Date().getFullYear()}</span>
            <Link href="/privacy" className={`inline-flex min-h-11 items-center transition-colors hover:text-primary ${focusStyle}`}>Privacy</Link>
            <Link href="/terms" className={`inline-flex min-h-11 items-center transition-colors hover:text-primary ${focusStyle}`}>Terms</Link>
          </div>
          <nav aria-label="Social profiles" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#272327]">
            {socialLinks.map((item, index) => (
              <span key={item.label} className="inline-flex items-center gap-5">
                {index > 0 && <span aria-hidden="true" className="text-[17px] leading-none text-primary">✳</span>}
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center transition-colors hover:text-primary ${focusStyle}`}>
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
