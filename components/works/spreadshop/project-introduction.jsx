export default function ProjectIntroduction() {
  return (
    <section
      aria-labelledby="spreadshop-project-introduction"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 md:px-12 md:pt-28 lg:px-[clamp(64px,6.1979vw,119px)] lg:pt-[clamp(112px,8.4896vw,163px)] min-[1340px]:pb-[78px]"
    >
      <div className="grid items-start gap-12 md:grid-cols-[32%_minmax(0,1fr)] md:gap-0 min-[1340px]:grid-cols-[39.18%_minmax(0,1fr)]">
        <div
          className="font-mono flex flex-col gap-4 text-[12px] leading-[1.2] tracking-[0.05em] text-[#9b9890] uppercase sm:text-[13px] md:translate-y-3 md:gap-[18px] lg:text-[14px] min-[1340px]:translate-y-[26px] min-[1340px]:gap-[20px] min-[1340px]:text-[20px] min-[1340px]:leading-[15px]"
          aria-label="Project details"
        >
          <p data-node-id="1:26">Case Study</p>
          <p data-node-id="1:31">Spreadshop Redesign</p>
          <p data-node-id="1:32">2024</p>
        </div>

        <div
          className="flex min-w-0 flex-col items-start gap-[30px]"
          data-node-id="1:33"
        >
          <div
            className="rounded-full bg-black/5 p-4 sm:p-5 min-[1340px]:p-6"
            data-node-id="1:34"
          >
            <p
              id="spreadshop-project-introduction"
              className="font-display text-[14px] leading-none font-[400] text-black sm:text-[15px] min-[1340px]:text-[16px]"
              data-node-id="1:35"
            >
              About The Project
            </p>
          </div>

          <p
            className="font-display max-w-[965px] text-pretty text-[30px] leading-[1.35] font-[400] tracking-[-0.025em] text-[#1e1e1e] sm:text-[34px] md:text-[36px] lg:text-[42px] lg:leading-[1.42] min-[1340px]:text-[48px] min-[1340px]:leading-[1.5] min-[1340px]:tracking-normal"
            data-node-id="1:36"
          >
            A ground-up redesign of{" "}
            <span className="text-[#ff3d00]">Spreadshop&apos;s</span> creator
            storefront platform solving discoverability, trust, and conversion
            failures across the entire purchase funnel.
          </p>
        </div>
      </div>
    </section>
  );
}
