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
   { label: 'Our Impact', href: '/impact' },
   { label: 'Our Mission', href: '/mission' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md shadow-md"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(224, 247, 250, 0.6) 0%, rgba(224, 247, 250, 0.2) 100%),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98))
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid rgba(0, 131, 143, 0.1)',
      }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Title */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
            The Ekta Project
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link 
                href={item.href} 
                className="text-cyan-800 transition-colors hover:text-cyan-600"
              >
                {item.label}
              </Link>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>

        {/* Donate Button */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/donate" 
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg shadow-lg shadow-cyan-300/40 hover:shadow-blue-400/40 transition-all"
            >
              Donate
            </Link>
          </motion.div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-800 focus:outline-none"
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
            className="md:hidden bg-gradient-to-b from-cyan-50 to-blue-50 backdrop-blur-lg px-4 pb-4"
          >
            <ul className="flex flex-col gap-3 text-base font-medium pt-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  className="hover:bg-cyan-100/50 rounded-lg transition-colors"
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-4 text-cyan-800 hover:text-cyan-600"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                whileTap={{ scale: 0.95 }}
                className="mt-2"
              >
                <Link 
                  href="/donate" 
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 text-center bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg shadow-lg"
                >
                  Donate Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}