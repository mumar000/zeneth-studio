import Image from "next/image";

const beforeSteps = [
  { label: "Land on site", nodeId: "1:245", textNode: "1:246" },
  { label: "Four CTAs compete", nodeId: "1:225", textNode: "1:226" },
  { label: "Navigate product grid", nodeId: "1:229", textNode: "1:230" },
  { label: "Search for reviews", nodeId: "1:233", textNode: "1:234" },
  { label: "Reach checkout", nodeId: "1:237", textNode: "1:238" },
  { label: "Abandon", nodeId: "1:241", textNode: "1:242" },
];

const afterSteps = [
  { label: "Land on site", nodeId: "1:247", textNode: "1:248" },
  { label: "Single CTA in view", nodeId: "1:227", textNode: "1:228" },
  { label: "Browse editorial grid", nodeId: "1:231", textNode: "1:232" },
  { label: "Trust signals in hero", nodeId: "1:235", textNode: "1:236" },
  { label: "Express checkout", nodeId: "1:239", textNode: "1:240" },
  { label: "Convert", nodeId: "1:243", textNode: "1:244" },
];

function JourneyPanel({ title, steps, after = false }) {
  return (
    <article
      className={`relative min-h-[700px] overflow-hidden rounded-[10px] px-5 py-8 sm:min-h-[760px] sm:px-8 md:min-h-[720px] min-[1340px]:h-[900px] min-[1340px]:min-h-0 min-[1340px]:px-[71px] min-[1340px]:py-[37px] ${after ? "bg-[#ff6935]" : "bg-black/5"}`}
      data-node-id={after ? "1:220" : "1:219"}
    >
      <h3
        className={`font-display relative z-10 text-[36px] leading-[1.25] font-[400] sm:text-[42px] min-[1340px]:text-[48px] min-[1340px]:leading-[1.5] ${after ? "text-white" : "text-[#1e1e1e]"}`}
        data-node-id={after ? "1:222" : "1:221"}
      >
        {title}
      </h3>

      <div
        aria-hidden="true"
        className="absolute bottom-[35px] left-1/2 top-[112px] w-px -translate-x-1/2 min-[1340px]:bottom-auto min-[1340px]:top-[37px] min-[1340px]:h-[828px]"
        data-node-id={after ? "1:224" : "1:223"}
      >
        <Image
          src={
            after
              ? "/works/spreadshop/journey-line-after.svg"
              : "/works/spreadshop/journey-line-before.svg"
          }
          alt=""
          width={828}
          height={after ? 2 : 1}
          className="absolute left-1/2 top-1/2 h-px w-[828px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90"
        />
      </div>

      <ol className="relative z-10 mt-14 flex flex-col items-center gap-5 sm:mt-16 sm:gap-6 min-[1340px]:mt-[36px] min-[1340px]:gap-[39px]">
        {steps.map((step) => (
          <li
            key={step.label}
            className="font-display flex min-h-[58px] w-fit max-w-full items-center justify-center rounded-full bg-white px-5 py-4 text-center text-[15px] leading-[1.2] font-[400] text-[#0a0a09] uppercase sm:min-h-[62px] sm:px-6 sm:text-[17px] min-[1340px]:min-h-[69px] min-[1340px]:py-6 min-[1340px]:text-[20px] min-[1340px]:leading-[21px]"
            data-node-id={step.nodeId}
          >
            <span data-node-id={step.textNode}>{step.label}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function JourneyComparison() {
  return (
    <section
      aria-label="User journey before and after the redesign"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-24 sm:px-8 sm:pb-28 md:px-12 lg:px-[clamp(64px,6.1979vw,119px)] min-[1340px]:pb-[17px]"
    >
      <div className="grid max-w-[1670px] grid-cols-1 gap-5 md:grid-cols-2 md:gap-[22px]">
        <JourneyPanel title="Before" steps={beforeSteps} />
        <JourneyPanel title="After" steps={afterSteps} after />
      </div>
    </section>
  );
}
