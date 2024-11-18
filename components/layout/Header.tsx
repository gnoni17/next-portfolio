"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const animationHeader = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: "0",
  },
};

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastVref = useRef(0);

  useMotionValueEvent(scrollY, "change", (y: number) => {
    const difference = y - lastVref.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastVref.current = y;
    }
  });

  return (
    <motion.div
      variants={animationHeader}
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      className="fixed top-0 flex justify-center w-full z-10 mt-4"
    >
      <div className="bg-slate-800/60 rounded-md backdrop-blur-lg">
        <div className="px-8 py-4 flex gap-4 items-center">
          <Link
            href="#hero"
            className="antialiased font-semibold text-blue-500"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="antialiased font-semibold"
          >
            About me
          </Link>

          <Link
            href="#contact"
            className="antialiased font-semibold"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
