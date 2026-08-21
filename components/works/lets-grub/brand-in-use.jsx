"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const applications = [
  {
    src: "/works/lets-grub/brand-in-use/app-icon-2x.png",
    width: 1855,
    height: 1855,
    alt: "Let's Grub app icon on an iPhone home screen",
    nodeId: "204:6273",
  },
  {
    src: "/works/lets-grub/brand-in-use/tote-bag-2x.png",
    width: 1853,
    height: 1853,
    alt: "Let's Grub branded tote bag",
    nodeId: "204:6272",
  },
  {
    src: "/works/lets-grub/brand-in-use/social-campaign-2x.png",
    width: 1854,
    height: 2266,
    alt: "Let's Grub social campaign artwork",
    nodeId: "204:6269",
    campaign: true,
  },
  {
    src: "/works/lets-grub/brand-in-use/tshirt-2x.png",
    width: 1852,
    height: 2266,
    alt: "Let's Grub branded T-shirt",
    nodeId: "204:6270",
  },
  {
    src: "/works/lets-grub/brand-in-use/x-profile-2x.png",
    width: 1853,
    height: 2342,
    alt: "Let's Grub profile on X",
    nodeId: "204:6283",
  },
  {
    src: "/works/lets-grub/brand-in-use/x-post-2x.png",
    width: 1853,
    height: 2342,
    alt: "Let's Grub campaign post on X",
    nodeId: "204:6392",
  },
  {
    src: "/works/lets-grub/brand-in-use/instagram-profile-2x.png",
    width: 1852,
    height: 2340,
    alt: "Let's Grub Instagram profile",
    nodeId: "204:6527",
  },
  {
    src: "/works/lets-grub/brand-in-use/instagram-story-2x.png",
    width: 1852,
    height: 2340,
    alt: "Let's Grub Instagram story",
    nodeId: "204:6590",
  },
];

export default function BrandInUse() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 pb-5 sm:px-6 lg:px-[22px] min-[1600px]:pb-[22px]">
      <motion.h2
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-[48px] leading-[1.2] sm:text-[56px] min-[1600px]:text-[64px]"
        style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
        data-node-id="204:6623"
      >
        Brand in use
      </motion.h2>

      <div className="mx-auto mt-20 grid max-w-[1875px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-[19px] md:gap-y-5 min-[1600px]:mt-[117px]">
        {applications.map((application, index) => (
          <motion.div
            key={application.src}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: index % 2 === 0 ? -34 : 34,
                    y: 28,
                    scale: 0.98,
                  }
            }
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: shouldReduceMotion ? 0 : (index % 2) * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group overflow-hidden rounded-[18px] min-[1600px]:rounded-[30px]"
            data-node-id={application.nodeId}
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.012 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Image
                src={application.src}
                alt={application.alt}
                width={application.width}
                height={application.height}
                quality={100}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />

              {application.campaign ? (
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute inset-0 text-white"
                >
                  <p
                    className="absolute left-[11.97%] top-[65.75%] w-[71.42%] whitespace-pre-wrap text-center text-[clamp(35px,4.2124vw,80.878px)] leading-[0.9]"
                    style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
                    data-node-id="204:6274"
                  >
                    {"Where      Minds\nMeet Over Meals"}
                  </p>

                  <Image
                    src="/works/lets-grub/brand-in-use/social-campaign-accent.svg"
                    alt=""
                    width={133}
                    height={123}
                    className="absolute left-[44.55%] top-[66.73%] h-auto w-[14.35%]"
                    data-node-id="204:6275"
                  />

                  <p
                    className="absolute left-[8.52%] top-[80.85%] w-[83.06%] text-center text-[clamp(12px,1.25vw,24px)] font-[300] leading-[1.2]"
                    style={{ fontFamily: "var(--font-display)" }}
                    data-node-id="204:6280"
                  >
                    we bring people together to share great food and better conversations,
                    turning every meal into a moment worth remembering.
                  </p>

                  <p
                    className="absolute left-1/2 top-[90.29%] -translate-x-1/2 whitespace-nowrap text-center text-[clamp(16px,1.667vw,32px)] leading-[1.2]"
                    style={{ fontFamily: "var(--font-display)" }}
                    data-node-id="204:6281"
                  >
                    August - 2025
                  </p>
                </motion.div>
              ) : null}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
