import Image from "next/image";

const beforeFindings = [
  "Competing messages",
  "Inconsistent visual styles",
  "Benefits explained late",
  "Longer path to clarity",
  "CTA lost between sections",
];

const afterFindings = [
  "One clear promise",
  "Consistent hierarchy and actions",
  "Risk and value explained early",
  "Proof placed near decisions",
  "CTA visible throughout the journey",
];

function Findings({ items, after = false }) {
  return (
    <div
      className={`font-display flex flex-col gap-6 text-[17px] leading-[1.2] font-[400] sm:text-[19px] min-[1340px]:gap-[35px] min-[1340px]:text-[21px] min-[1340px]:leading-[1.1] ${after ? "text-[#131c33]" : "text-[#616e85]"}`}
      data-node-id={after ? "10:232" : "10:233"}
    >
      {items.map((item, index) => (
        <p key={item} data-node-id={after ? `10:${193 + index}` : `10:${199 + index}`}>
          {after ? "+" : "-"}&nbsp;&nbsp;{item}
        </p>
      ))}
    </div>
  );
}

export default function FocusedBeforeAfter() {
  return (
    <section
      aria-label="Focused before and after comparison"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-32 sm:px-8 sm:pb-36 md:px-12 lg:px-16 min-[1340px]:pb-[207px]"
    >
      <div className="mx-auto grid max-w-[776px] grid-cols-1 gap-20 md:grid-cols-[317px_357px] md:gap-[101px]">
        <article>
          <figure
            className="relative mx-auto aspect-[317/1028] w-full max-w-[317px] overflow-hidden rounded-[10px]"
            data-node-id="10:230"
          >
            <Image
              src="/works/spreadshop/focused-before.png"
              alt="Spreadshop storefront before the redesign"
              fill
              quality={100}
              sizes="317px"
              className="object-cover"
            />
          </figure>
          <div className="mx-auto mt-10 max-w-[317px] min-[1340px]:mt-14">
            <Findings items={beforeFindings} />
          </div>
        </article>

        <article>
          <figure
            className="relative aspect-[317/1028] w-full max-w-[317px] overflow-hidden rounded-[10px]"
            data-node-id="10:231"
          >
            <Image
              src="/works/spreadshop/focused-after.png"
              alt="Spreadshop storefront after the redesign"
              fill
              quality={100}
              sizes="317px"
              className="object-cover"
            />
          </figure>
          <div className="mt-10 min-[1340px]:mt-[63px]">
            <Findings items={afterFindings} after />
          </div>
        </article>
      </div>
    </section>
  );
}
