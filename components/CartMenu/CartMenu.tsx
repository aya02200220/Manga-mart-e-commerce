import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 800}px at 40px 40px)`,
    backgroundColor: "#FFf",
    scaleY: 1,
    originY: 0,
    transition: {
      type: "tween",
      stiffness: 20,
      restDelta: 2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "tween",
      stiffness: 400,
      damping: 40,
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
        className="overflow-auto absolute top-[36px] right-[-80px] border border-[#333] h-[400px] w-[300px] 
        "
        variants={sidebar}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      />

      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};
