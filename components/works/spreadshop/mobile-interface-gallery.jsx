import Image from "next/image";

const screens = [
  { src: "/works/spreadshop/mobile-01.png", nodeId: "1:249" },
  { src: "/works/spreadshop/mobile-02.png", nodeId: "7:33" },
  { src: "/works/spreadshop/mobile-03.png", nodeId: "7:40" },
  { src: "/works/spreadshop/mobile-04.png", nodeId: "7:47" },
  { src: "/works/spreadshop/mobile-05.png", nodeId: "7:54" },
  { src: "/works/spreadshop/mobile-06.png", nodeId: "7:73" },
];

export default function MobileInterfaceGallery() {
  return (
    <section
      aria-label="Spreadshop mobile interface gallery"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 pb-32 pt-20 sm:px-8 sm:pb-36 md:px-12 md:pt-16 lg:px-[clamp(64px,6.25vw,120px)] min-[1340px]:pb-[192px] min-[1340px]:pt-[73px]"
    >
      <div className="grid max-w-[1670px] grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 min-[1340px]:gap-x-[35px] min-[1340px]:gap-y-10">
        {screens.map((screen, index) => (
          <figure
            key={screen.src}
            className="relative aspect-[533.164/1091.243] w-full max-w-[533.164px] overflow-hidden"
            data-node-id={screen.nodeId}
          >
            <Image
              src={screen.src}
              alt={`Spreadshop mobile interface screen ${index + 1}`}
              fill
              quality={100}
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 92vw"
              className="object-contain"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
