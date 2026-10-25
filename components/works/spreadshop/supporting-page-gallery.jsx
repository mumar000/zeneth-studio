import Image from "next/image";

const pages = [
  {
    src: "/works/spreadshop/support-create-merch.png",
    alt: "Spreadshop Create Merch page",
    nodeId: "7:116",
    width: 900,
    height: 3764,
  },
  {
    src: "/works/spreadshop/support-help-center.png",
    alt: "Spreadshop Help Center page",
    nodeId: "7:117",
    width: 901,
    height: 2718,
  },
  {
    src: "/works/spreadshop/support-free-shop.png",
    alt: "Spreadshop Free Merch Shop page",
    nodeId: "7:115",
    width: 900,
    height: 4228,
  },
  {
    src: "/works/spreadshop/support-products.png",
    alt: "Spreadshop Products page",
    nodeId: "7:114",
    width: 900,
    height: 1398,
  },
];

export default function SupportingPageGallery() {
  return (
    <section
      aria-label="Supporting Spreadshop page designs"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-3 pb-24 sm:px-4 md:px-7 min-[1340px]:px-[29px] min-[1340px]:pb-[98px]"
    >
      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4 min-[1340px]:grid-cols-[450px_450px_450px_450px] min-[1340px]:gap-x-[21px]">
        {pages.map((page) => (
          <figure
            key={page.src}
            className="overflow-hidden rounded-[10px]"
            data-node-id={page.nodeId}
          >
            <div className="relative aspect-[3/4] sm:hidden">
              <Image src={page.src} alt={page.alt} fill sizes="100vw" className="object-cover object-top" />
            </div>
            <Image src={page.src} alt={page.alt} width={page.width} height={page.height} quality={100} sizes="(min-width: 1340px) 450px, (min-width: 640px) 48vw, 100vw" className="hidden h-auto w-full sm:block" />
            <a href={page.src} target="_blank" rel="noopener noreferrer" className="block bg-[#f6f6f6] px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.08em] text-[#1e1e1e] underline underline-offset-4 sm:hidden">
              View full page ↗
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}
