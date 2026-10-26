import { homepageFaqs } from "@/lib/homepage-faqs";

export default function FaqSection({
  faqs = homepageFaqs,
  heading = "Frequently Asked Questions",
}) {
  return (
    <section className="relative z-10 w-full px-4 py-14 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <h2
            className="home-faq-title text-balance text-[34px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#1a1a1a] md:text-[clamp(34px,4.6vw,56px)] md:leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {heading}
          </h2>
          <div className="flex flex-col gap-[10px]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group overflow-hidden rounded-[12px] bg-[#E2D8F7] open:bg-[#D4C8F5] md:rounded-[14px]">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-5 py-4 hover:bg-[#DAD0F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black md:px-7 md:py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[17px] font-[700] leading-[1.3] tracking-[-0.01em] text-[#1a1a1a] md:text-[19px]" style={{ fontFamily: "var(--font-display)" }}>
                    {faq.q}
                  </h3>
                  <span aria-hidden="true" className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1a1a1a]/40 transition-transform group-open:rotate-45 motion-reduce:transition-none md:h-8 md:w-8">
                    <svg width="15" height="15" viewBox="0 0 13 13" fill="none">
                      <path d="M6.5 1v11M1 6.5h11" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 md:px-7 md:pb-7">
                  <div className="mb-4 h-px bg-[#1a1a1a]/10 md:mb-5" />
                  <p className="max-w-[620px] text-[15px] leading-[1.6] text-[#4a4752] md:text-[16px]">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
