import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    backgroundColor: "#FFFFFF", // 背景色を白にするなど、好みの色を設定します
    scaleY: 1, // Y軸方向のスケールを1に設定
    originY: 0, // 変形の原点を上端に設定
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      when: "beforeChildren", // 子要素より先にアニメーション
      staggerChildren: 0.1, // 子要素のアニメーションにスタガーを設定
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    backgroundColor: "rgba(255,255,255,0)", // 透明な背景色に設定
    scaleY: 0, // Y軸方向のスケールを0に設定
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      when: "afterChildren", // 子要素より後にアニメーション
    },
  },
};

export const CartMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="background"
        variants={sidebar}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      />

      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};
