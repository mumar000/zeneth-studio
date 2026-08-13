import Image from "next/image";

const interfaces = [
  {
    src: "/works/spreadshop/interface-hero.png",
    alt: "Spreadshop redesigned storefront hero with creator merchandise",
    frameNode: "1:65",
    borderNode: "1:66",
    imageNode: "1:305",
  },
  {
    src: "/works/spreadshop/interface-process.png",
    alt: "Spreadshop redesigned storefront explaining how the platform works",
    frameNode: "1:67",
    borderNode: "1:68",
    imageNode: "1:306",
  },
];

export default function InterfacePair() {
  return (
    <section
      aria-label="Spreadshop redesigned storefront interfaces"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 sm:px-8 md:px-12 lg:px-[clamp(64px,6.1979vw,119px)]"
    >
      <div
        className="grid max-w-[1652px] grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 min-[1340px]:gap-7"
        data-node-id="1:64"
      >
        {interfaces.map((item) => (
          <figure
            key={item.src}
            className="relative aspect-[812/547] overflow-hidden rounded-[14px] border border-black/20 min-[1340px]:rounded-[20px]"
            data-node-id={item.frameNode}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              data-node-id={item.borderNode}
            />
            <div
              className="absolute inset-[clamp(8px,1vw,17px)] overflow-hidden rounded-[9px] min-[1340px]:inset-x-[19px] min-[1340px]:inset-y-[17px] min-[1340px]:rounded-[12px]"
              data-node-id={item.imageNode}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
