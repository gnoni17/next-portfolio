"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";

const animationHeader = {
  hidden: {
    y: "-80%",
  },
  visible: {
    y: "0",
  },
};

export function Header() {
  const [currentSection, setCurrentSection] = useState("hero");

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

  function changeSection(section: string) {
    setCurrentSection(section)
  }

  return (
    <motion.div
      variants={animationHeader}
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      transition={{ duration: 0.2 }}
      className="fixed top-0 flex justify-center w-full z-10 pt-4"
    >
      <div className="bg-slate-800/60 rounded-md backdrop-blur-lg">
        <div className="px-8 py-4 flex gap-4 items-center">
          <Link
            href="#hero"
            className={clsx([
              "font-semibold",
              {
                "text-blue-500": currentSection == "hero",
              },
            ])}
          >
            Home
          </Link>

          <Link
            href="#about"
            className={clsx([
              "font-semibold",
              {
                "text-blue-500": currentSection == "about",
              },
            ])}
          >
            About me
          </Link>

          <Link
            href="#contact"
            className={clsx([
              "font-semibold",
              {
                "text-blue-500": currentSection == "contact",
              },
            ])}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
