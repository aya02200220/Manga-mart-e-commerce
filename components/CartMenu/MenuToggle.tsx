import * as React from "react";
import { motion } from "framer-motion";

type PathProps = {
  fill?: string;
  strokeWidth?: string;
  stroke?: string;
  [x: string]: any;
};

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    // strokeLinecap="round"
    {...props}
  />
);

type MenuToggleProps = {
  toggle: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
};

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) =>
  !isOpen ? null : (
    <button onClick={toggle} className="button-cartMenu">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
