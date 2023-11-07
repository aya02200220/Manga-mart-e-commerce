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
      // when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "tween",
      stiffness: 400,
      damping: 40,
    },
  },
};

type CartMenuProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const CartMenu: React.FC<CartMenuProps> = ({ isOpen, toggleOpen }) => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="absolute top-[36px] right-[-30px] "
      >
        <motion.div
          className="overflow-auto border border-[#333] h-[100vh] sm:h-[500px] w-[300px] 
        "
          variants={sidebar}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        />

        <Navigation isOpen={isOpen} />
        <MenuToggle toggle={toggleOpen} />
      </motion.div>
    </div>
  );
};
