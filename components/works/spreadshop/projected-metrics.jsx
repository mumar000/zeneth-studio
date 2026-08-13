import Image from "next/image";

const metrics = [
  {
    value: "+23%",
    label: "Conversion Rate",
    width: "min-[1340px]:w-[154px]",
    valueNode: "1:51",
    labelNode: "1:52",
    projectedNode: "1:53",
  },
  {
    value: "-12%",
    label: "Bounce Rate",
    width: "min-[1340px]:w-[128px]",
    valueNode: "1:56",
    labelNode: "1:57",
    projectedNode: "1:58",
  },
  {
    value: "3.1s",
    label: "LCP (was 4.2s)",
    width: "min-[1340px]:w-[135px]",
    valueNode: "1:61",
    labelNode: "1:62",
    projectedNode: "1:63",
  },
];

function MetricSeparator({ nodeId }) {
  return (
    <div
      aria-hidden="true"
      className="relative hidden h-[135px] w-px shrink-0 min-[1340px]:block"
      data-node-id={nodeId}
    >
      <Image
        src="/works/spreadshop/metric-separator.svg"
        alt=""
        width={135}
        height={1}
        className="absolute left-1/2 top-1/2 h-px w-[135px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90"
      />
    </div>
  );
}

export default function ProjectedMetrics() {
  return (
    <section
      aria-label="Projected redesign metrics"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-24 sm:px-8 sm:pb-28 md:px-12 lg:px-[clamp(64px,6.1979vw,119px)] lg:pb-36 min-[1340px]:pb-[231px]"
    >
      <div className="min-[1340px]:grid min-[1340px]:grid-cols-[39.18%_minmax(0,1fr)]">
        <div aria-hidden="true" />

        <div
          className="grid grid-cols-1 items-stretch md:grid-cols-3 min-[1340px]:flex min-[1340px]:items-start min-[1340px]:gap-[74px]"
          data-node-id="1:49"
        >
          {metrics.map((metric, index) => (
            <div key={metric.label} className="contents">
              {index > 0 && (
                <MetricSeparator nodeId={index === 1 ? "1:54" : "1:59"} />
              )}

              <div
                className={[
                  "flex flex-col items-start gap-3 border-black/10 py-8",
                  "md:min-h-[135px] md:gap-4 md:px-6 md:py-0",
                  "lg:gap-[19px] lg:px-8",
                  "min-[1340px]:min-h-0 min-[1340px]:border-0 min-[1340px]:px-0",
                  index === 0
                    ? "pt-0 md:px-0 md:pr-6 lg:pr-8"
                    : "border-t md:border-t-0 md:border-l",
                  metric.width,
                ].join(" ")}
              >
                <p
                  className="font-display w-full text-[52px] leading-[52px] font-[300] text-[#ff3d00] sm:text-[56px] sm:leading-[56px] lg:text-[64px] lg:leading-[64px]"
                  data-node-id={metric.valueNode}
                >
                  {metric.value}
                </p>
                <p
                  className="font-mono w-full text-[13px] leading-[15px] text-[#1e1e1e] uppercase sm:text-[14px] lg:text-[16px]"
                  data-node-id={metric.labelNode}
                >
                  {metric.label}
                </p>
                <p
                  className="font-mono w-full text-[9px] leading-[13.5px] tracking-[1.98px] text-[rgba(58,58,56,0.6)] uppercase"
                  data-node-id={metric.projectedNode}
                >
                  projected
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
