const briefItems = [
  {
    title: "Role",
    text: "Lead Product Designer, with solo end-to-end ownership across research, UX, visual design, and prototype validation.",
    nodeId: "1:69",
    titleNode: "1:71",
    textNode: "1:73",
    desktopClass: "min-[1340px]:pl-[63px] min-[1340px]:pt-8",
    textClass: "min-[1340px]:max-w-[347px] min-[1340px]:text-[16px]",
  },
  {
    title: "Challenge",
    text: "Spreadshop's interface had accumulated four years of feature additions without a cohesive design strategy. Trust signals were buried, CTAs competed, and mobile conversion was 61% below desktop.",
    nodeId: "1:74",
    titleNode: "1:76",
    textNode: "1:78",
    desktopClass: "min-[1340px]:pl-11 min-[1340px]:pt-[14px]",
    textClass: "min-[1340px]:max-w-[409px] min-[1340px]:text-[16px]",
  },
  {
    title: "Goal",
    text: "Increase storefront conversion rate by 15%+ within two months of launch, reduce bounce on the homepage, and cut Largest Contentful Paint below 3.5s.",
    nodeId: "1:79",
    titleNode: "1:81",
    textNode: "1:83",
    desktopClass: "min-[1340px]:pl-11 min-[1340px]:pt-[14px]",
    textClass: "min-[1340px]:max-w-[424px] min-[1340px]:text-[18px]",
  },
];

export default function ProjectBrief() {
  return (
    <section
      aria-label="Project role, challenge, and goal"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 md:px-12 lg:px-[clamp(64px,6.1979vw,119px)] lg:pb-36 lg:pt-36 min-[1340px]:pb-[171px] min-[1340px]:pt-[174px]"
    >
      <div className="grid max-w-[1670px] grid-cols-1 min-[760px]:grid-cols-3 min-[1340px]:grid-cols-[553px_1px_573px_1px_542px]">
        {briefItems.map((item, index) => (
          <div key={item.title} className="contents">
            {index > 0 && (
              <div
                aria-hidden="true"
                className="hidden bg-black/10 min-[1340px]:block min-[1340px]:h-[162px] min-[1340px]:w-px"
                data-node-id={index === 1 ? "1:217" : "1:218"}
              />
            )}

            <article
              className={`py-8 first:pt-0 min-[760px]:px-6 min-[760px]:py-0 lg:px-8 min-[1340px]:min-h-[162px] min-[1340px]:border-0 min-[1340px]:px-0 ${index > 0 ? "border-t border-black/10 min-[760px]:border-t-0 min-[760px]:border-l" : ""} ${item.desktopClass}`}
              data-node-id={item.nodeId}
            >
              <h2
                className="font-mono text-[14px] leading-[15px] font-[400] text-[#ff3d00] uppercase min-[1340px]:text-[16px]"
                data-node-id={item.titleNode}
              >
                {item.title}
              </h2>
              <p
                className={`font-display mt-5 max-w-[46ch] text-[16px] leading-[1.5] font-[400] tracking-[0.5px] text-[#0a0a09] ${item.textClass}`}
                data-node-id={item.textNode}
              >
                {item.text}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
