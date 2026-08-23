"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function SearchVisual({ src, alt, caption, reducedMotion, className = "" }) {
  return (
    <motion.figure
      initial={reducedMotion ? false : { opacity: 0, y: 32, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.9, ease }}
      className={`overflow-hidden rounded-[15px] ${className}`}
    >
      <div className="relative aspect-[709/668] overflow-hidden rounded-[15px]">
        <Image src={src} alt={alt} fill quality={100} sizes="(min-width: 1536px) 36.927vw, 709px" className="object-cover" />
      </div>
      <figcaption className="flex min-h-[91px] items-center bg-white px-7 py-4 text-[16px] font-[400] leading-[1.4] text-black sm:text-[20px] 2xl:px-[2.24vw] 2xl:text-[1.042vw]">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

export default function SearchProduct() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="search-product-heading"
      className="relative isolate overflow-hidden bg-[#870b2d] px-5 py-24 text-white sm:px-8 sm:py-28 2xl:aspect-[1920/1662] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:39"
    >
      <Image src="/works/arpm/search-product/house-outline-2x.png" alt="" fill sizes="100vw" aria-hidden="true" className="pointer-events-none z-0 select-none object-cover opacity-5" data-node-id="75:224" />

      <div className="relative z-10 mx-auto max-w-[1602px] 2xl:contents">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease }}
          className="2xl:contents"
        >
          <p className="text-[18px] font-[400] uppercase leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[10.052vw] 2xl:text-[1.25vw]">
            04 / Search as Product
          </p>
          <h2 id="search-product-heading" className="mt-7 max-w-[612px] text-[clamp(42px,5.4vw,64px)] font-[400] leading-[1.1] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[13.698vw] 2xl:mt-0 2xl:w-[31.875vw] 2xl:text-[3.333vw]">
            Find the right home.
            <br />
            Not the right database field.
          </h2>
          <p className="mt-8 max-w-[612px] text-[20px] font-[400] leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[26.927vw] 2xl:mt-0 2xl:w-[31.875vw] 2xl:text-[1.25vw]">
            The final search understood the renter’s question even when the answer
            lived across different generations of property data.
          </p>
        </motion.div>

        <SearchVisual
          src="/works/arpm/search-product/search-results-4x.png"
          alt="The redesigned ARPM property search showing honest filters and available inventory"
          caption="Intent and filters work together Property type, location, bedrooms, pricing, features, and availability."
          reducedMotion={shouldReduceMotion}
          className="mt-14 2xl:absolute 2xl:left-[54.688vw] 2xl:top-[6.771vw] 2xl:mt-0 2xl:w-[36.927vw]"
        />

        <SearchVisual
          src="/works/arpm/search-product/property-detail-4x.png"
          alt="An ARPM property page showing bedroom ranges and recovered floorplan information"
          caption="Ranges instead of misleading first values. A building with one, two, and three bedroom plans displays and filters as one through three."
          reducedMotion={shouldReduceMotion}
          className="mt-8 2xl:absolute 2xl:left-[8.281vw] 2xl:top-[38.854vw] 2xl:mt-0 2xl:w-[36.927vw]"
        />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 pb-4 2xl:absolute 2xl:left-[54.688vw] 2xl:top-[55.469vw] 2xl:mt-0 2xl:w-[38.385vw] 2xl:pb-0"
        >
          <p className="text-[18px] font-[400] uppercase leading-[1.4] tracking-[0.03em] sm:text-[24px] 2xl:text-[1.25vw]">
            The Business Results
          </p>
          <blockquote className="mt-7 text-[clamp(38px,5.4vw,64px)] font-[400] leading-[1.1] 2xl:mt-[2.344vw] 2xl:text-[3.333vw]">
            “We truly believe that we have the best web search in state College
            compared to our competitors.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
