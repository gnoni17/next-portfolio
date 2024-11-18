"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FlyingButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const reduceButton = {
    initial: {
      width: "100%",
    },
    finish: {
      width: "0%",
      overflow: "hidden",
    },
  };

  function submit(e: Event) {
    e.preventDefault();
    setIsClicked(true);
  }

  return (
    <div className="flex items-end relative">
      {!showLetter && (
        <motion.button
          onClick={submit}
          variants={reduceButton}
          initial="initial"
          animate={isClicked ? "finish" : "initial"}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setShowLetter(true)}
          className="btn btn-primary origin-center block mx-auto whitespace-nowrap"
        >
          Click Me
        </motion.button>
      )}

      {showLetter && (
        <motion.div
          initial={{ width: "0rem" }}
          animate={{ width: "3rem" }}
          transition={{ duration: 0.5 }}
          className="relative h-8 bg-blue-500 rounded shadow-md origin-center block mx-auto"
        >
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 rotate-180 origin-top"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-blue-600"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default FlyingButton;
