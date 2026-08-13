export default function CompetitorIntroduction() {
  return (
    <section
      aria-labelledby="competitor-analysis-title"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-20 sm:px-8 sm:pb-24 md:px-12 lg:px-[clamp(64px,6.1979vw,119px)] min-[1340px]:pb-[110px]"
    >
      <div className="grid items-start gap-12 md:grid-cols-[32%_minmax(0,1fr)] md:gap-0 min-[1340px]:grid-cols-[39.18%_minmax(0,1fr)]">
        <p
          className="font-mono text-[12px] leading-[1.2] tracking-[0.05em] text-[#9b9890] uppercase sm:text-[13px] lg:text-[14px] min-[1340px]:text-[20px] min-[1340px]:leading-[15px]"
          data-node-id="1:27"
        >
          Competitor analysis
        </p>

        <div
          className="flex min-w-0 flex-col items-start gap-[30px]"
          data-node-id="1:37"
        >
          <div
            className="rounded-full bg-black/5 p-4 sm:p-5 min-[1340px]:p-6"
            data-node-id="1:38"
          >
            <h2
              id="competitor-analysis-title"
              className="font-display text-[14px] leading-none font-[400] text-black sm:text-[15px] min-[1340px]:text-[16px]"
              data-node-id="1:39"
            >
              Where Spreadshop fell behind
            </h2>
          </div>

          <p
            className="font-display max-w-[924px] text-pretty text-[30px] leading-[1.35] font-[400] tracking-[-0.025em] text-[#1e1e1e] sm:text-[34px] md:text-[36px] lg:text-[42px] lg:leading-[1.42] min-[1340px]:text-[48px] min-[1340px]:leading-[1.5] min-[1340px]:tracking-normal"
            data-node-id="1:40"
          >
            A structured audit of four competing platforms across five key UX
            dimensions revealed consistent gaps in{" "}
            <span className="text-[#ff3d00]">
              Spreadshop&apos;s pre-redesign
            </span>{" "}
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}
