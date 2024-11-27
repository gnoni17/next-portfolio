'use client'

import { motion } from 'framer-motion'
import type { PropsWithChildren, HTMLProps } from 'react'

interface OpacitySection extends PropsWithChildren, HTMLProps<HTMLDivElement> {}

export function OpacitySection({ children, ...props }: OpacitySection) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}
