'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },

    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md shadow-md"
      style={{
        background: 'linear-gradient(135deg, #f0fdfa 0%, #ecfeff 30%, #f0f9ff 70%, #f0fdfa 100%)',
        backgroundSize: '400% 400%',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Title */}
        <Link href="/" className="text-2xl font-bold text-cyan-800 tracking-tight">
          The Ekta Project
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-cyan-900">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link href={item.href} className="transition-colors">
                {item.label}
              </Link>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-600 transition-all group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-900 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/70 backdrop-blur-lg px-4 pb-4"
          >
            <ul className="flex flex-col gap-3 text-cyan-800 text-base font-medium pt-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  className="hover:underline underline-offset-4"
                >
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
