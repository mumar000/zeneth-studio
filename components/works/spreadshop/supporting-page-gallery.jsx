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
            <Image
              src={page.src}
              alt={page.alt}
              width={page.width}
              height={page.height}
              quality={100}
              sizes="(min-width: 1340px) 450px, (min-width: 640px) 48vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
