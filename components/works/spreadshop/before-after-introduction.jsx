import Image from "next/image";

export default function BeforeAfterIntroduction() {
  return (
    <section
      aria-labelledby="before-after-title"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-20 sm:px-8 sm:pb-24 md:px-12 lg:px-[clamp(64px,6.7708vw,130px)] min-[1340px]:pb-[100px]"
    >
      <div className="grid items-start gap-12 md:grid-cols-[32%_minmax(0,1fr)] md:gap-0 min-[1340px]:grid-cols-[648px_minmax(0,1fr)]">
        <p
          className="font-mono translate-y-4 text-[12px] leading-[1.2] tracking-[0.05em] text-[#9b9890] uppercase sm:text-[13px] lg:text-[14px] min-[1340px]:text-[20px] min-[1340px]:leading-[15px]"
          data-node-id="10:225"
        >
          Before vs after
        </p>

        <div
          className="flex min-w-0 flex-col items-start gap-[30px]"
          data-node-id="10:226"
        >
          <button
            type="button"
            disabled
            aria-label="Visit site link unavailable until destination is confirmed"
            className="font-display flex cursor-not-allowed items-center justify-center gap-[10px] rounded-full bg-[#ff3d00] p-5 text-[16px] leading-[21px] font-[400] text-white uppercase min-[1340px]:p-6 min-[1340px]:text-[20px]"
            data-node-id="10:166"
          >
            <span data-node-id="10:167">Visit site</span>
            <Image
              src="/works/spreadshop/visit-arrow.svg"
              alt=""
              width={11}
              height={12}
              aria-hidden="true"
              className="h-[11px] w-[10.5px]"
              data-node-id="10:170"
            />
          </button>

          <h2
            id="before-after-title"
            className="font-display max-w-[924px] text-pretty text-[30px] leading-[1.35] font-[400] tracking-[-0.025em] text-[#1e1e1e] sm:text-[34px] md:text-[36px] lg:text-[42px] lg:leading-[1.42] min-[1340px]:text-[48px] min-[1340px]:leading-[1.5] min-[1340px]:tracking-normal"
            data-node-id="10:229"
          >
            The redesign changes how the page works, not just how it looks.
          </h2>
        </div>
      </div>
    </section>
  );
}
