'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import IconCloud from './ui/icon-cloud';
import { motion } from 'framer-motion';

const slugs = [
  "typescript", "javascript", "python", "java", "react", "nextdotjs", "nodejs", "express",
  "tailwindcss", "firebase", "vercel", "docker", "github", "figma", "postgresql",
  "mysql", "bash", "linux", "vscode", "html5", "css3"
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bgCoords, setBgCoords] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePosition({ x, y });

      if (typeof window !== 'undefined') {
        const bgX = (x / window.innerWidth) * 100;
        const bgY = (y / window.innerHeight) * 100;
        setBgCoords({ x: bgX, y: bgY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden mt-4 bg-[url('/textures/paper-light.png')] bg-cover bg-center"
      style={{
        background: `radial-gradient(circle at ${bgCoords.x}% ${bgCoords.y}%, rgba(100, 255, 180, 0.15), rgba(255, 255, 255, 0.95))`
      }}
    >
      {/* Background blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-green-300/10 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-green-200/10 blur-[80px] animate-float-medium" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-green-400/15 blur-[60px] animate-float-fast" />
      </div>

      {/* Icon Cloud */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[200vw] h-[200vw] opacity-10 animate-spin-slow">
          <IconCloud iconSlugs={[...slugs, ...slugs]} />
        </div>
      </div>

      {/* Main Text */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-mono text-green-700 rounded-full bg-green-200/30 border border-green-600/20 mb-4">
            UNITY • EMPOWERMENT • GROWTH
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
            The Ekta Project
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering communities through education, sustainability, and collective action.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="#programs"
            className="relative group px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-medium hover:shadow-xl transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Programs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 blur opacity-0 group-hover:opacity-30 transition-opacity" />
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3.5 rounded-xl border border-green-800/10 text-green-900 font-medium hover:bg-green-50 transition-all"
          >
            Get Involved
          </Link>
        </motion.div>

        {/* Tech tags or Values */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {["Sustainability", "Education", "Inclusion", "Unity", "Awareness"].map((value) => (
            <span
              key={value}
              className="px-3 py-1 text-xs font-mono rounded-full bg-green-100 text-green-800 border border-green-200"
            >
              {value}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-px h-16 bg-gradient-to-t from-green-400/30 to-transparent" />
        <span className="mt-2 text-xs text-green-600/50">Scroll down</span>
      </motion.div>
    </section>
  );
}
