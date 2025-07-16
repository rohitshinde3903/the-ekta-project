// components/ProgramsCard.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaHandsHelping, FaTree, FaPlayCircle, FaUsers } from 'react-icons/fa';

const ProgramsCard = () => {
  const programs = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children through innovative learning programs and scholarship opportunities.',
      stats: '2,500+ students enrolled',
      icon: <FaBook className="text-4xl" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Women Empowerment',
      description: 'Empowering women through skill development, entrepreneurship training, and support networks for economic independence.',
      stats: '1,200+ women trained',
      icon: <FaHandsHelping className="text-4xl" />,
      color: 'from-teal-400 to-cyan-500'
    },
    {
      id: 3,
      title: 'Sustainable Villages',
      description: 'Creating eco-friendly communities with access to clean water, renewable energy, and sustainable agricultural practices.',
      stats: '15 villages transformed',
      icon: <FaTree className="text-4xl" />,
      color: 'from-blue-400 to-teal-500'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Impactful Programs
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creating sustainable change through targeted initiatives in education, empowerment, and environment
          </motion.p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-cyan-100 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: program.id * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Program Header */}
              <div className={`h-48 relative bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white opacity-30">
                    {program.icon}
                  </div>
                </div>
                
                {/* Video Placeholder */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 flex items-center">
                    <FaPlayCircle className="text-cyan-600 text-xl" />
                    <span className="text-xs font-medium text-cyan-800 ml-1">Video</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-cyan-800">Featured</span>
                  </div>
                </div>
              </div>
              
              {/* Program Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center text-white mr-4`}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{program.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-6">{program.description}</p>
                
                {/* Stats */}
                <div className="flex items-center mb-6">
                  <FaUsers className="text-cyan-500 mr-2" />
                  <span className="text-sm font-medium text-slate-700">{program.stats}</span>
                </div>
                
                {/* People Placeholders */}
                <div className="flex mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 border-2 border-white -ml-2 first:ml-0"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 border-2 border-white -ml-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">+42</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-between">
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                  
                  <motion.button
                    className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Donate
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-xl shadow-xl shadow-cyan-300/50 hover:shadow-blue-400/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Programs
          </motion.button>
          
          <p className="mt-6 text-slate-600">
            Join our community of <span className="text-cyan-600 font-medium">5,000+ supporters</span> creating change
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsCard;