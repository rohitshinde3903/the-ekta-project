'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Stats data
  const stats = [
    { value: '200+', label: 'Lives Impacted' },
    { value: '5', label: 'Communities Served' },
    { value: '3', label: 'Years of Service' },
    { value: '100%', label: 'Donation Efficiency' },
  ];

  // Floating icons with variety
  const floatingIcons = [
    { icon: '❤️', color: 'text-pink-500', position: 'top-10 left-10', size: 'text-2xl', animation: { y: [0, -20, 0] } },
    { icon: '⭐', color: 'text-yellow-400', position: 'top-20 right-10', size: 'text-3xl', animation: { y: [0, -30, 0] } },
    { icon: '🌱', color: 'text-cyan-500', position: 'bottom-1/4 left-1/4', size: 'text-3xl', animation: { rotate: [0, 15, 0] } },
    { icon: '✨', color: 'text-blue-300', position: 'top-1/3 right-1/4', size: 'text-2xl', animation: { opacity: [0.8, 1, 0.8] } },
    { icon: '🌍', color: 'text-blue-500', position: 'bottom-1/3 left-1/3', size: 'text-4xl', animation: { scale: [1, 1.1, 1] } },
  ];

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex flex-col items-center justify-between pt-16 pb-8 md:pb-0 px-4">
      {/* Gradient background with subtle pattern */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 30%, #e3f2fd 70%, #e8f5e9 100%)',
        backgroundSize: '400% 400%',
      }}>
        {/* Animated gradient */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            background: 'linear-gradient(135deg, rgba(232,245,233,0.7) 0%, rgba(241,248,233,0.7) 30%, rgba(227,242,253,0.7) 70%, rgba(232,245,233,0.7) 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23009688' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 20h80M0 40h80M0 60h80M20 0v80M40 0v80M60 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Icons */}
      {!isMobile && floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.position} ${item.color} ${item.size} opacity-70`}
          animate={item.animation}
          transition={{ 
            repeat: Infinity, 
            duration: 3 + Math.random() * 2, 
            ease: 'easeInOut' 
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Animated particles */}
      {!isMobile && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}
          animate={{
            y: [0, -20 - Math.random() * 30, 0],
            x: [0, 10 - Math.random() * 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl w-full space-y-8 text-gray-800 px-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-6 flex flex-col items-center">
          <motion.span 
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-cyan-700 bg-cyan-100 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            Making a Difference Since XXXX
          </motion.span>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
              Empowering Communities
            </span>
            <span className="block mt-2">Together for Sustainable Change</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Join our mission to create lasting impact and uplift underprivileged communities through innovative solutions and collaborative action.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 pt-2 w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="relative overflow-hidden group w-full">
              <Link href="/donate">
                <span className="relative z-10">Donate Now</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 z-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              
              variant="outline"
              size="lg"
              className="border-cyan-600 text-cyan-700 hover:bg-cyan-50 group relative w-full"
            >
              <Link href="/about">
                <span className="relative z-10">Learn About Our Work</span>
                <div className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Bar - Positioned with flex grow to avoid overlap */}
      <motion.div
        className="relative mt-5 z-10 w-full py-6 md:py-8 bg-white/80 backdrop-blur-sm border-t border-cyan-100"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
      >
        <div className="container mx-auto px-4 mt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-3 md:p-4 bg-white rounded-xl shadow-sm border border-cyan-50 hover:shadow-md transition-shadow flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                <p className="text-2xl md:text-3xl font-bold text-cyan-700 mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-600 font-medium text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Animated decorative elements */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-cyan-200/30 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity 
            }}
          />
          
          <motion.div 
            className="absolute top-20 left-20 w-16 h-16 rounded-full bg-blue-200/40 blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity 
            }}
          />
        </>
      )}
    </section>
  );
};