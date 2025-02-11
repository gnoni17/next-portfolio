'use client'

import { useCallback, useEffect } from 'react'
import { DOMKeyframesDefinition, DynamicAnimationOptions, useAnimate } from 'framer-motion'

export function ManWalk() {
  const [scope, animate] = useAnimate()

  const moveArmsAndLegs = useCallback(() => {
    const animation: DOMKeyframesDefinition = { rotate: [-30, 30, -30] }
    const transition: DynamicAnimationOptions = { repeat: Infinity, duration: 1, ease: 'easeInOut' }

    animate('#left-leg', animation, transition)
    animate('#right-leg', animation, { ...transition, delay: 0.5 })
    animate('#left-arm', animation, transition)
    animate('#right-arm', animation, { ...transition, delay: 0.5 })
  }, [animate])

  const stopMoveArmsAndLegs = useCallback(() => {
    return Promise.all([
      animate('#left-arm', { rotate: 0 }, { duration: 1 }),
      animate('#right-arm', { rotate: 0 }, { duration: 1 }),
      animate('#left-leg', { rotate: 0 }, { duration: 1 }),
      animate('#right-leg', { rotate: 0 }, { duration: 1 })
    ])
  }, [animate])

  const animateMan = useCallback(async () => {
    moveArmsAndLegs()

    let midpointReached = false

    // walk
    await animate(
      scope.current,
      { x: [-170, 0] },
      {
        duration: 3,
        ease: 'easeInOut',
        onUpdate: latest => {
          const middle = -170 / 4

          if (!midpointReached && latest >= middle) {
            midpointReached = true
            stopMoveArmsAndLegs()
          }
        }
      }
    )

    // rotate
    await Promise.all([
      animate(
        scope.current,
        { rotateY: 180 },
        {
          duration: 1
        }
      ),
      animate('#left-arm', { rotate: 30 }, { duration: 1 }),
      animate('#right-arm', { rotate: -30 }, { duration: 1 }),
      animate('#left-leg', { rotate: 10 }, { duration: 1 }),
      animate('#right-leg', { rotate: -10 }, { duration: 1 })
    ])

    // saluta
    await animate(
      '#left-arm',
      { rotate: [30, 120, 100, 120, 100, 120, 100, 30] },
      {
        duration: 2.5
      }
    )
  }, [animate, moveArmsAndLegs, scope, stopMoveArmsAndLegs])

  useEffect(() => {
    try {
      animateMan()
    } catch (_) {}
  }, [animateMan])

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div ref={scope} className="flex flex-col items-center translate-x-[-170px]">
        {/* head */}
        <div className="bg-white size-8 rounded-full" />

        {/* body */}
        <div className="bg-white w-2 h-12 relative">
          {/* arms */}
          <div id="left-arm" className="absolute top-0 bg-white w-2 h-10 origin-top rounded-sm" />

          <div id="right-arm" className="absolute top-0 bg-white w-2 h-10 origin-top rounded-sm" />

          {/* legs */}
          <div id="left-leg" className="absolute top-12 bg-white w-2 h-12 origin-top rounded-sm" />
          <div id="right-leg" className="absolute top-12 bg-white w-2 h-12 origin-top rounded-sm" />
        </div>
      </div>

      <div className="bg-white w-64 h-2 mt-11"></div>
    </div>
  )
}
