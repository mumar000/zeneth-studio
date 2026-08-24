import Link from "next/link";
import HeroLogoMarquee from "./hero-logo-marquee";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6 md:min-h-screen md:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <h1
          className="text-[2.75rem] font-[700] leading-[1.02] tracking-[-0.03em] text-[#1a1a1a] md:text-5xl lg:text-[5.5rem] 2xl:text-[5.8rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your <span className="text-primary">brand</span> and website{" "}
          <br className="hidden md:block" />
          finally working as <span className="text-primary">one.</span>
        </h1>

        <p
          className="mx-auto mt-6 text-base font-[400] text-neutral-700 md:mt-8 md:max-w-lg md:text-md lg:text-lg lg:leading-8 2xl:max-w-3xl 2xl:text-2xl"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Nymbor connects brand identity, interface design, and web development
          for founders and small teams that want one clear, launch-ready system.
        </p>

        <div className="mt-9 sm:mt-11">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[10px] border-2 border-black bg-primary px-7 py-3.5 text-xs font-[700] uppercase tracking-[0.14em] text-white shadow-[5px_5px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Start a Project
          </Link>
        </div>
      </div>

      <HeroLogoMarquee />
    </section>
  );
}
