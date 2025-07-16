// components/Navbar.tsx
'use client'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 60 }}
      className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg text-white px-6 py-4 flex justify-between items-center"
    >
      <h1 className="text-xl font-bold tracking-tight">EKTA</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li className="hover:underline underline-offset-4 transition">Home</li>
        <li className="hover:underline underline-offset-4 transition">About</li>
        <li className="hover:underline underline-offset-4 transition">Contact</li>
      </ul>
    </motion.nav>
  )
}
