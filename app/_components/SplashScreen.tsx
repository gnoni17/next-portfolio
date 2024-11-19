"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Rampart_One } from "next/font/google";

const rampartFont = Rampart_One({ subsets: ["latin"], weight: "400" });

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  const armAndLegVariants = {
    initial: { rotate: [0, -0, 0] },
    walking: {
      rotate: [30, -30, 30],
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="fixed w-full h-screen inset-0 bg-slate-900 z-50 flex flex-col gap-4 items-center justify-center"
        >
          <div className="flex flex-col items-center overflow-hidden">
            <motion.div
              initial={{ x: -160 }}
              animate={{ x: 160 }}
              transition={{
                duration: 5,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              {/* head */}
              <div className="bg-white size-8 rounded-full" />

              {/* body */}
              <div className="bg-white w-2 h-12 relative">
                {/* arms */}
                <motion.div
                  variants={armAndLegVariants}
                  initial="initial"
                  animate="walking"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 bg-white w-2 h-10 origin-top"
                />

                <motion.div
                  variants={armAndLegVariants}
                  initial="initial"
                  animate="walking"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-0 bg-white w-2 h-10 origin-top"
                />

                <motion.div
                  variants={armAndLegVariants}
                  initial="initial"
                  animate="walking"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute top-12 bg-white w-2 h-12 origin-top"
                />
                <motion.div
                  variants={armAndLegVariants}
                  initial="initial"
                  animate="walking"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-12 bg-white w-2 h-12 origin-top"
                />
              </div>
            </motion.div>

            <div className="bg-white w-64 h-2 mt-11"></div>
          </div>

          <span className={clsx([rampartFont.className, "text-4xl mb-2 font-semibold"])}>Gnoni Gabriele</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
