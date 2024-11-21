'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ScrollLink } from './ScrollLink'

const animationHeader = {
  hidden: {
    y: '-80%'
  },
  visible: {
    y: '0'
  }
}

export function Header() {
  const [currentSection, setcurrentSection] = useState('hero')
  const router = useRouter()

  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastVref = useRef(0)

  useMotionValueEvent(scrollY, 'change', (y: number) => {
    const difference = y - lastVref.current

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0)
      lastVref.current = y
    }
  })

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      root: null,
      threshold: 0.5
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setcurrentSection(sectionId)
          router.replace(`#${sectionId}`, { scroll: false })
        }
      })
    }, options)

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [router])

  return (
    <motion.div
      variants={animationHeader}
      animate={isHidden ? 'hidden' : 'visible'}
      whileHover="visible"
      transition={{ duration: 0.2 }}
      className="fixed top-0 flex justify-center w-full z-10 pt-4"
    >
      <div className="bg-slate-800/60 rounded-md backdrop-blur-lg">
        <div className="px-8 py-4 flex gap-4 items-center">
          <ScrollLink id="hero" currentSection={currentSection}>
            Home
          </ScrollLink>

          <ScrollLink id="about" currentSection={currentSection}>
            Chi sono
          </ScrollLink>

          <ScrollLink id="contact" currentSection={currentSection}>
            Contattami
          </ScrollLink>
        </div>
      </div>
    </motion.div>
  )
}
