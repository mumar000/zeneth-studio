import Image from "next/image";

export default function LaptopPresentation() {
  return (
    <section
      aria-label="Spreadshop desktop experience shown on a laptop"
      className="relative z-10 mx-auto max-w-[1920px] bg-white px-6 sm:px-8 md:px-12 lg:px-[clamp(64px,6.1979vw,119px)]"
    >
      <div
        className="relative aspect-[1670/1239] max-w-[1670px] overflow-hidden rounded-[10px] bg-[#f6f6f6]"
        data-node-id="1:285"
      >
        <Image
          src="/works/spreadshop/laptop-presentation.png"
          alt="Spreadshop dashboard presented on a laptop"
          fill
          quality={100}
          sizes="(min-width: 1920px) 1670px, calc(100vw - 48px)"
          className="object-cover"
        />
      </div>
    </section>
  );
}
