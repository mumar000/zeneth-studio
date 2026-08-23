"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const facts = [
  { value: "360+", label: "Legacy properties" },
  { value: "2", label: "Failed teams before us" },
  { value: "80%", label: "Percent mobile traffic" },
];

export default function OperationalReality() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <section
      aria-label="The operational reality"
      className="relative overflow-hidden bg-[#f6f4ef] px-5 py-24 text-[#222] sm:px-8 sm:py-28 2xl:aspect-[1920/1395] 2xl:px-0 2xl:py-0"
      style={{ fontFamily: '"Helvetica Now Display", "Helvetica Neue", sans-serif' }}
      data-node-id="166:65"
    >
      <div className="mx-auto grid max-w-[1506px] items-start gap-10 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-16 2xl:block 2xl:max-w-none">
        <motion.p
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease }}
          className="max-w-[495px] text-[20px] font-[400] leading-[1.2] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[10.781vw] 2xl:top-[10.156vw] 2xl:w-[25.781vw] 2xl:text-[1.25vw]"
        >
          ARPM had served State College renters since 1978. Behind its dated
          interface sat a living operational system that changed every day during
          leasing season.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, delay: 0.08, ease }}
          className="relative aspect-[709/431] w-full overflow-hidden rounded-[15px] lg:row-start-1 lg:col-start-2 2xl:absolute 2xl:left-[53.021vw] 2xl:top-[3.385vw] 2xl:w-[36.927vw]"
          data-node-id="69:49"
        >
          <Image
            src="/works/arpm/operational-reality/legacy-top-4x.png"
            alt="The upper portion of ARPM's legacy rentals website"
            fill
            quality={100}
            sizes="(min-width: 1536px) 36.927vw, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease }}
          className="relative aspect-[709/431] w-full overflow-hidden rounded-[15px] 2xl:absolute 2xl:left-[10.781vw] 2xl:top-[29.792vw] 2xl:w-[36.927vw]"
          data-node-id="69:48"
        >
          <Image
            src="/works/arpm/operational-reality/legacy-bottom-4x.png"
            alt="The lower listings and operational footer of ARPM's legacy website"
            fill
            quality={100}
            sizes="(min-width: 1536px) 36.927vw, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.p
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, delay: 0.08, ease }}
          className="max-w-[624px] text-[20px] font-[400] leading-[1.2] tracking-[0.03em] sm:text-[24px] 2xl:absolute 2xl:left-[55.052vw] 2xl:top-[36.51vw] 2xl:w-[32.5vw] 2xl:text-[1.25vw]"
        >
          A clean rebuild could not erase the business underneath it. Existing
          applications still needed to collect fees through PayPal. Property
          teams still needed CSV exports. Galleries, amenities, floorplans, and
          availability had to survive without forcing the client to rebuild
          hundreds of listings by hand.
        </motion.p>

        <motion.dl
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-8 grid overflow-hidden rounded-[24px] border-[3px] border-black/10 bg-white sm:grid-cols-3 lg:col-span-2 lg:mt-0 2xl:absolute 2xl:left-[10.781vw] 2xl:top-[58.906vw] 2xl:h-[11.094vw] 2xl:w-[79.167vw] 2xl:rounded-[1.563vw]"
          data-node-id="69:52"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              variants={
                shouldReduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                    }
              }
              className="flex min-h-[160px] flex-col justify-center px-8 py-9 sm:min-h-0 sm:border-l sm:border-dashed sm:border-black/10 sm:first:border-l-0 2xl:px-[6.615vw] 2xl:py-0"
            >
              <dt className="order-2 mt-3 text-[13px] font-[400] uppercase leading-[1.2] tracking-[0.03em] sm:text-[14px] 2xl:text-[0.833vw]">
                {fact.label}
              </dt>
              <dd className="order-1 text-[40px] font-[400] leading-[1.2] tracking-[0.03em] sm:text-[48px] 2xl:text-[2.5vw]">
                {fact.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
