import Image from "next/image";

export default function HomepageShowcase() {
  return (
    <section className="relative z-10 bg-white px-3 pb-32 sm:px-4 sm:pb-36 min-[1340px]:px-[29px] min-[1340px]:pb-[181px]">
      <div
        className="relative mx-auto max-w-[1863px] overflow-hidden rounded-[10px] bg-[#f6f6f6] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 min-[1340px]:h-[5694px] min-[1340px]:p-0"
        data-node-id="7:111"
      >
        <h2
          className="font-display relative z-20 text-center text-[34px] leading-[1.25] font-[400] text-[#1e1e1e] uppercase sm:text-[42px] min-[1340px]:absolute min-[1340px]:left-1/2 min-[1340px]:top-[88px] min-[1340px]:-translate-x-1/2 min-[1340px]:text-[48px] min-[1340px]:leading-[1.5]"
          data-node-id="7:118"
        >
          Home Page Design
        </h2>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[1476px] w-full overflow-hidden min-[1340px]:block"
          data-node-id="10:137"
        >
          <div className="absolute left-[6px] top-[737px] h-[1727px] w-[1857.413px]">
            <Image
              src="/works/spreadshop/decorative-transition.svg"
              alt=""
              width={2510}
              height={2641}
              className="absolute left-1/2 top-1/2 h-[2509.8px] w-[2640.21px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90"
            />
          </div>
        </div>

        <div
          className="relative z-10 mt-12 grid items-start justify-center gap-8 sm:mt-16 md:grid-cols-[minmax(220px,390px)_minmax(0,870px)] md:gap-10 min-[1340px]:absolute min-[1340px]:left-1/2 min-[1340px]:top-[225px] min-[1340px]:mt-0 min-[1340px]:h-[5345px] min-[1340px]:w-[1343px] min-[1340px]:-translate-x-1/2 min-[1340px]:grid-cols-[390px_870px] min-[1340px]:gap-[83px]"
          data-node-id="10:148"
        >
          <figure
            className="relative aspect-[390/5345] w-full overflow-hidden rounded-[10px] bg-white"
            data-node-id="10:145"
          >
            <Image
              src="/works/spreadshop/homepage-mobile-enhanced.png"
              alt="Complete Spreadshop mobile homepage design"
              fill
              unoptimized
              sizes="(min-width: 1340px) 390px, (min-width: 768px) 30vw, 90vw"
              className="object-cover object-top"
            />
          </figure>

          <figure
            className="relative aspect-[870/5345] w-full overflow-hidden rounded-[10px]"
            data-node-id="7:29"
          >
            <Image
              src="/works/spreadshop/homepage-desktop-enhanced.png"
              alt="Complete Spreadshop desktop homepage design"
              fill
              unoptimized
              sizes="(min-width: 1340px) 870px, (min-width: 768px) 65vw, 90vw"
              className="object-cover object-top"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
