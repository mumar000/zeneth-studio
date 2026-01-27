"use client";

export default function FocusSection() {
  return (
    <section className="w-full px-4 md:px-6 py-24 md:py-32 text-center">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className="tracking-tighter  leading-[1] text-black text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[3.5vw] font-[500]"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          We’re a <span className="italic font-[300]">team</span> built on
          focus,
          <br /> not <span className="italic font-[300]">noise</span>.
        </h2>

        <p
          className="mt-8 md:mt-10 text-black/60 text-base sm:text-lg md:text-2xl max-w-[1000px] mx-auto"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Designers, developers, and thinkers who care about one thing doing
          work that lasts. Every project gets our full attention no copy-paste
          formulas, no half-done rush jobs. We push, refine, and perfect until
          it feels like Zeneth clean, intentional, and at its peak.
        </p>

        <div className="mt-10 md:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-6 md:px-7 py-3 bg-primary text-white text-base md:text-lg shadow-[0_8px_30px_rgba(138,56,245,0.25)]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Start a Conversation ↳
          </a>
        </div>
      </div>
    </section>
  );
}
