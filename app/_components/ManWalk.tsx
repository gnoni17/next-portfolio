"use client";

import { useEffect } from "react";
import { useAnimate } from "framer-motion";

export function ManWalk() {
  const [scope, animate] = useAnimate();

  function moveArmsAndLegs() {
    animate(
      "#left-leg",
      { rotate: [-30, 30, -30] },
      {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      }
    );

    animate(
      "#right-arm",
      { rotate: [-30, 30, -30] },
      {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      }
    );

    animate(
      "#right-leg",
      { rotate: [-30, 30, -30] },
      {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      }
    );

    animate(
      "#left-arm",
      { rotate: [-30, 30, -30] },
      {
        repeat: Infinity,
        duration: 1,
        ease: "easeInOut",
      }
    );
  }

  function stopMoveArmsAndLegs() {
    return Promise.all([
      animate("#left-arm", { rotate: 0 }, { duration: 1 }),
      animate("#right-arm", { rotate: 0 }, { duration: 1 }),
      animate("#left-leg", { rotate: 0 }, { duration: 1 }),
      animate("#right-leg", { rotate: 0 }, { duration: 1 }),
    ]);
  }

  async function animateMan() {
    moveArmsAndLegs();

    // walk
    await animate(
      scope.current,
      { x: [-170, 0] },
      {
        duration: 3,
        ease: "easeInOut",
      }
    );

    await stopMoveArmsAndLegs();

    // rotate
    await Promise.all([
      animate(
        scope.current,
        { rotateY: 180 },
        {
          duration: 1,
        }
      ),
      animate("#left-arm", { rotate: 30 }, { duration: 1 }),
      animate("#right-arm", { rotate: -30 }, { duration: 1 }),
      animate("#left-leg", { rotate: 10 }, { duration: 1 }),
      animate("#right-leg", { rotate: -10 }, { duration: 1 }),
    ]);

    // saluta
    await animate(
      "#left-arm",
      { rotate: [30, 120, 100, 120, 100, 120, 100, 30] },
      {
        duration: 2.5,
      }
    );
  }

  useEffect(() => {
    animateMan();
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div
        ref={scope}
        className="flex flex-col items-center"
      >
        {/* head */}
        <div className="bg-white size-8 rounded-full" />

        {/* body */}
        <div className="bg-white w-2 h-12 relative">
          {/* arms */}
          <div
            id="left-arm"
            className="absolute top-0 bg-white w-2 h-10 origin-top"
          />

          <div
            id="right-arm"
            className="absolute top-0 bg-white w-2 h-10 origin-top"
          />

          {/* legs */}
          <div
            id="left-leg"
            className="absolute top-12 bg-white w-2 h-12 origin-top"
          />
          <div
            id="right-leg"
            className="absolute top-12 bg-white w-2 h-12 origin-top"
          />
        </div>
      </div>

      <div className="bg-white w-64 h-2 mt-11"></div>
    </div>
  );
}
