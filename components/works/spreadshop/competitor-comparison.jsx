const features = [
  "Onboarding flow",
  "Product discoverability",
  "Mobile experience",
  "Trust signals",
  "Checkout speed",
];

const competitors = [
  {
    name: "Spreadshop (before)",
    highlight: true,
    results: ["Weak", "Weak", "Weak", "Weak", "Weak"],
  },
  {
    name: "Fourthwall",
    results: ["Strong", "Strong", "Strong", "Partial", "Strong"],
  },
  {
    name: "Spring",
    results: ["Strong", "Partial", "Strong", "Weak", "Strong"],
  },
  {
    name: "Bonfire",
    results: ["Partial", "Strong", "Partial", "Strong", "Weak"],
  },
];

const statusColor = {
  Weak: "bg-[#d43b1a]",
  Partial: "bg-[#d4820a]",
  Strong: "bg-[#1a9e5c]",
};

const columnPadding = ["", "pl-[20.39%]", "pl-[27.5%]", "pl-[29.8%]", "pl-[22.9%]"];

function Status({ value }) {
  return (
    <span className="font-display flex items-center gap-[10px] text-[16px] leading-[1.3] font-[300] text-[#0a0a09] min-[1340px]:text-[17.927px] min-[1340px]:leading-[23.305px]">
      <span
        aria-hidden="true"
        className={`size-[9.561px] shrink-0 rounded-full ${statusColor[value]}`}
      />
      {value}
    </span>
  );
}

function DesktopTable() {
  return (
    <div
      className="hidden h-[560px] rounded-[10px] bg-[#f6f6f6] px-[clamp(48px,4.2708vw,82px)] pt-[71px] xl:block"
      data-node-id="1:114"
    >
      <div
        className="grid h-[408px] grid-cols-[17.82%_32.42%_19.43%_14.37%_15.96%]"
        role="table"
        aria-label="Competitor UX comparison"
      >
        <div className="contents" role="row">
          {[
            "Feature",
            ...competitors.map((competitor) => competitor.name),
          ].map((heading, index) => (
            <div
              key={heading}
              role="columnheader"
              className={`font-mono flex h-[57px] items-start pt-1 text-[clamp(17px,1.2449vw,23.902px)] leading-[17.927px] font-[500] tracking-[0.11em] uppercase ${index === 1 ? "text-[#ff3d00]" : "text-[#9b9890]"} ${index > 0 ? `border-l border-dashed border-black/15 ${columnPadding[index]}` : ""}`}
            >
              {heading}
            </div>
          ))}
        </div>

        {features.map((feature, rowIndex) => (
          <div key={feature} className="contents" role="row">
            <div
              role="rowheader"
              className={`font-display flex h-[74px] items-center text-[17.927px] leading-[25.098px] font-[300] text-[#7a7875] ${rowIndex < features.length - 1 ? "border-b border-dashed border-black/20" : ""}`}
            >
              {feature}
            </div>
            {competitors.map((competitor, competitorIndex) => (
              <div
                key={competitor.name}
                role="cell"
                className={`flex h-[74px] items-center border-l border-dashed border-black/15 ${columnPadding[competitorIndex + 1]} ${rowIndex < features.length - 1 ? "border-b border-dashed border-black/20" : ""}`}
              >
                <Status value={competitor.results[rowIndex]} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:hidden">
      {competitors.map((competitor) => (
        <article
          key={competitor.name}
          className={`rounded-[10px] bg-[#f6f6f6] p-6 sm:p-7 ${competitor.highlight ? "ring-1 ring-[#ff3d00]/25" : ""}`}
        >
          <h3
            className={`font-mono text-[14px] leading-[1.25] font-[500] tracking-[0.09em] uppercase sm:text-[15px] ${competitor.highlight ? "text-[#ff3d00]" : "text-[#7a7875]"}`}
          >
            {competitor.name}
          </h3>
          <dl className="mt-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center justify-between gap-5 border-t border-dashed border-black/15 py-4 first:border-t-0 first:pt-0 last:pb-0"
              >
                <dt className="font-display text-[14px] leading-[1.35] font-[300] text-[#7a7875] sm:text-[15px]">
                  {feature}
                </dt>
                <dd className="shrink-0">
                  <Status value={competitor.results[index]} />
                </dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </div>
  );
}

export default function CompetitorComparison() {
  return (
    <section
      aria-label="Competitor comparison"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-36 sm:px-8 sm:pb-40 md:px-12 lg:px-[clamp(64px,6.1979vw,119px)] min-[1340px]:pb-[295px]"
    >
      <div className="max-w-[1670px]" data-node-id="1:115">
        <DesktopTable />
        <MobileCards />
      </div>
    </section>
  );
}
