'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } },
}

const floatVariants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
}

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg text-white px-6 py-4 flex justify-between items-center shadow-md"
    >
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold tracking-tight">EKTA</h1>
        <motion.span
          variants={floatVariants}
          animate="animate"
          className="text-yellow-300 text-lg"
        >
          ✨
        </motion.span>
      </div>

      <ul className="flex gap-6 text-sm font-medium">
        {['Home', 'About', 'Contact'].map((text, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, rotate: [-1, 1, 0] }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hover:underline underline-offset-4 cursor-pointer transition"
          >
            <Link href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
              {text}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
