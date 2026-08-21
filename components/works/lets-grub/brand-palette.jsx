"use client";

import { motion, useReducedMotion } from "framer-motion";

const colors = [
  {
    name: "Ocean Pop",
    hex: "#0ABAF4",
    rgb: "10, 186, 244",
    cmyk: "96, 24, 0, 4",
    nodeId: "204:5418",
  },
  {
    name: "Sky Splash",
    hex: "#87E3FF",
    rgb: "135, 227, 255",
    cmyk: "47, 11, 0, 0",
    nodeId: "204:5406",
  },
  {
    name: "Frost Glow",
    hex: "#A5EDFF",
    rgb: "165, 237, 255",
    cmyk: "35, 7, 0, 0",
    nodeId: "204:5382",
  },
  {
    name: "Cloud Drift",
    hex: "#F2FDFF",
    rgb: "242, 253, 255",
    cmyk: "5, 1, 0, 0",
    nodeId: "204:5394",
  },
  {
    name: "Lavender",
    hex: "#BB94FF",
    rgb: "187, 148, 255",
    cmyk: "27, 42, 0, 0",
    nodeId: "204:5424",
  },
  {
    name: "Coral Red",
    hex: "#FF4F52",
    rgb: "255, 79, 82",
    cmyk: "0, 69, 68, 0",
    nodeId: "204:5412",
  },
  {
    name: "Light Lime Green",
    hex: "#D6FF7C",
    rgb: "214, 255, 124",
    cmyk: "16, 0, 51, 0",
    nodeId: "204:5388",
  },
  {
    name: "Vivid Yellow",
    hex: "#FFE500",
    rgb: "255, 229, 0",
    cmyk: "0, 10, 100, 0",
    nodeId: "204:5400",
  },
];

export default function BrandPalette() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-[42px]">
      <div
        className="mx-auto grid max-w-[1819px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 min-[1600px]:gap-x-5 min-[1600px]:gap-y-[20.36px]"
        data-node-id="204:5381"
      >
        {colors.map((color, index) => (
          <motion.article
            key={color.hex}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scaleY: 0.82, y: 28 }
            }
            whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : (index % 4) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            style={{ backgroundColor: color.hex, transformOrigin: "bottom" }}
            className="flex aspect-[439.5/699.827] flex-col rounded-[20px] px-7 pb-7 pt-7 text-black min-[1600px]:rounded-[30px] min-[1600px]:px-[49px] min-[1600px]:pb-[31px] min-[1600px]:pt-[45px]"
            data-node-id={color.nodeId}
          >
            <p
              className="text-[18px] leading-[1.4] tracking-[0.03em] min-[1600px]:text-[22.636px]"
              style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
            >
              {color.name}
              <br />
              Hex {color.hex}
            </p>
            <p
              className="mt-auto text-[18px] leading-[1.4] tracking-[0.03em] min-[1600px]:text-[22.636px]"
              style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
            >
              RGB : {color.rgb}
              <br />
              CMYK : {color.cmyk}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="h-28 md:h-40 min-[1600px]:h-[202px]" />
    </section>
  );
}
