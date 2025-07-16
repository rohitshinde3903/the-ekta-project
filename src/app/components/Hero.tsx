// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      >
        The Ekta Project
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-xl max-w-xl text-center mt-6 text-gray-300"
      >
        Empowering lives through unity, education, and grassroots transformation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <Button className="px-6 py-3 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-xl shadow-xl">
          Join the Movement
        </Button>
      </motion.div>
    </motion.section>
  )
}
