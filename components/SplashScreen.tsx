'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { Rampart_One } from 'next/font/google'
import { ManWalk } from './ManWalk'

const rampartFont = Rampart_One({ subsets: ['latin'], weight: '400' })

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showSplash])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className="fixed w-full h-screen inset-0 bg-slate-900 z-50 flex flex-col gap-4 items-center justify-center"
        >
          <ManWalk />

          <span className={clsx([rampartFont.className, 'text-4xl mb-2 font-semibold'])}>Gnoni Gabriele</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
