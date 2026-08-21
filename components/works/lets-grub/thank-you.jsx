"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const bubbles = [
  {
    src: "/works/lets-grub/hero/delicious-bubble.svg",
    text: "The food is\ndelicious.",
    left: "15.88%",
    top: "12.31%",
    width: "15.24%",
    assetWidth: 285,
    assetHeight: 125,
    rotate: -15,
    nodeId: "204:6640",
  },
  {
    src: "/works/lets-grub/hero/hey-bubble.svg",
    text: "Hey There!",
    left: "41.82%",
    top: "13.33%",
    width: "11.12%",
    assetWidth: 208,
    assetHeight: 65,
    nodeId: "204:6668",
  },
  {
    src: "/works/lets-grub/hero/dishes-bubble.svg",
    text: "What dishes are available?",
    left: "73.42%",
    top: "7.59%",
    width: "21.55%",
    assetWidth: 403,
    assetHeight: 65,
    nodeId: "204:6663",
    hideOnMobile: true,
  },
  {
    src: "/works/lets-grub/hero/welcome-horizontal-bubble.svg",
    text: "Everyone\nWelcome!",
    left: "4.76%",
    top: "28.51%",
    width: "17.43%",
    assetWidth: 326,
    assetHeight: 113,
    rotate: 30,
    nodeId: "204:6658",
  },
  {
    src: "/works/lets-grub/hero/wow-bubble.svg",
    text: "WOW!",
    left: "85.4%",
    top: "31.11%",
    width: "7.7%",
    assetWidth: 144,
    assetHeight: 65,
    rotate: -15,
    nodeId: "204:6645",
  },
  {
    src: "/works/lets-grub/hero/food-bubble.svg",
    text: "Food\nFood\nFood",
    left: "22.67%",
    top: "53.98%",
    width: "10.05%",
    assetWidth: 188,
    assetHeight: 126.313,
    textClassName: "font-[600]",
    nodeId: "204:6629",
  },
  {
    src: "/works/lets-grub/hero/welcome-bubble.svg",
    text: "How’s It Going?",
    left: "7.81%",
    top: "66.2%",
    width: "17.43%",
    assetWidth: 326,
    assetHeight: 113,
    rotate: 30,
    nodeId: "204:6650",
  },
  {
    src: "/works/lets-grub/hero/squad-bubble.svg",
    text: "One\nSquad",
    left: "80.43%",
    top: "68.51%",
    width: "11.26%",
    assetWidth: 210.644,
    assetHeight: 141.527,
    rotate: -30,
    textClassName: "text-[clamp(12px,1.765vw,33.885px)]",
    nodeId: "204:6655",
  },
];

const pills = [
  {
    text: "Waiting!!!",
    left: "69.36%",
    top: "23.7%",
    width: "9.2%",
    color: "#d6ff7c",
    rotate: 30,
    nodeId: "204:6637",
  },
  {
    text: "What’s Up?",
    left: "76.2%",
    top: "45.92%",
    width: "10.53%",
    color: "#a5edff",
    rotate: 3.21,
    nodeId: "204:6679",
  },
  {
    text: "Join Us Now",
    left: "46.95%",
    top: "73.8%",
    width: "11.66%",
    color: "#bb94ff",
    rotate: -28.61,
    nodeId: "204:6634",
  },
  {
    text: "Waiting!!!",
    left: "32.35%",
    top: "75.1%",
    width: "9.2%",
    color: "#d6ff7c",
    rotate: 45,
    nodeId: "204:6673",
  },
  {
    text: "What’s Up?",
    left: "62.03%",
    top: "80.4%",
    width: "10.53%",
    color: "#ff4f52",
    rotate: 19.43,
    nodeId: "204:6676",
  },
];

function FloatingItem({ children, index, reduceMotion, className = "", style, nodeId }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.78 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay: reduceMotion ? 0 : 0.12 + index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute ${className}`}
      style={style}
      data-node-id={nodeId}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{
          duration: 4.2 + (index % 4) * 0.55,
          delay: index * 0.14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function ThankYou() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] px-[10px] pb-5 sm:px-4 lg:px-[25px] min-[1600px]:pb-7">
      <div
        className="relative mx-auto min-h-[620px] w-full max-w-[1870px] overflow-hidden rounded-[20px] bg-[#0abaf4] md:min-h-0 md:aspect-[1870/1080] min-[1600px]:rounded-[30px]"
        data-node-id="204:6625"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[29%] bg-gradient-to-t from-[#0abaf4] via-[rgba(10,186,244,0.55)] to-transparent" />

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-[37%] z-10 w-[84%] -translate-x-1/2 text-center text-[clamp(68px,8vw,153.6px)] leading-[0.9] text-[#ffe500] md:w-[32.09%]"
          style={{ fontFamily: '"Luckiest Guy", sans-serif' }}
          data-node-id="204:6628"
        >
          Thank you
        </motion.h2>

        {bubbles.map((bubble, index) => (
          <FloatingItem
            key={`${bubble.text}-${bubble.left}`}
            index={index}
            reduceMotion={shouldReduceMotion}
            className={bubble.hideOnMobile ? "hidden sm:block" : ""}
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.width,
              transform: `rotate(${bubble.rotate || 0}deg)`,
            }}
            nodeId={bubble.nodeId}
          >
            <div className="relative w-full">
              <Image
                src={bubble.src}
                alt=""
                width={bubble.assetWidth}
                height={bubble.assetHeight}
                className="h-auto w-full"
              />
              <p
                className={`absolute inset-0 flex items-center justify-center whitespace-pre-line px-[8%] pb-[5%] text-center text-[clamp(11px,1.596vw,30.647px)] font-[300] leading-[0.9] ${bubble.textClassName || ""}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {bubble.text}
              </p>
            </div>
          </FloatingItem>
        ))}

        {pills.map((pill, index) => (
          <FloatingItem
            key={`${pill.text}-${pill.left}`}
            index={bubbles.length + index}
            reduceMotion={shouldReduceMotion}
            style={{
              left: pill.left,
              top: pill.top,
              width: pill.width,
              transform: `rotate(${pill.rotate}deg)`,
            }}
            nodeId={pill.nodeId}
          >
            <div
              className="flex aspect-[3.65/1] w-full items-center justify-center rounded-full"
              style={{ backgroundColor: pill.color }}
            >
              <p
                className="whitespace-nowrap text-center text-[clamp(10px,1.596vw,30.647px)] font-[300] leading-[0.9]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pill.text}
              </p>
            </div>
          </FloatingItem>
        ))}

        <FloatingItem
          index={13}
          reduceMotion={shouldReduceMotion}
          className="left-[5.4%] top-[15.6%]"
        >
          <div className="-rotate-[145deg] rounded-full bg-white px-[9px] py-[4px] sm:px-3 sm:py-1">
            <span
              className="block rotate-180 text-[clamp(9px,1vw,19px)] font-[600] leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Chilling
            </span>
          </div>
        </FloatingItem>

        <FloatingItem
          index={14}
          reduceMotion={shouldReduceMotion}
          className="left-[72.7%] top-[60.4%]"
        >
          <div className="-rotate-[35deg] rounded-full bg-white px-[9px] py-[4px] sm:px-3 sm:py-1">
            <span
              className="text-[clamp(9px,1vw,19px)] font-[600] leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Coming
            </span>
          </div>
        </FloatingItem>
      </div>
    </section>
  );
}
