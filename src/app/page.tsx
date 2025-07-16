'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiBookOpen, FiPhone, FiUsers, FiBook, FiPhoneCall, FiMapPin } from 'react-icons/fi';
import { FaHandHoldingHeart, FaGraduationCap, FaStethoscope, FaTree, FaPlayCircle } from 'react-icons/fa';

const Home = () => {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Programs data
  const programs = [
    {
      id: 1,
      title: "Education Initiative",
      description: "Providing quality education to underprivileged children through our network of community schools.",
      icon: <FaGraduationCap className="text-3xl text-cyan-600" />,
      stats: "2,500+ students enrolled"
    },
    {
      id: 2,
      title: "Healthcare Access",
      description: "Mobile clinics and health camps bringing essential medical services to remote communities.",
      icon: <FaStethoscope className="text-3xl text-cyan-600" />,
      stats: "15,000+ patients treated"
    },
    {
      id: 3,
      title: "Environmental Sustainability",
      description: "Promoting eco-friendly practices and tree plantation drives to combat climate change.",
      icon: <FaTree className="text-3xl text-cyan-600" />,
      stats: "50,000+ trees planted"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Community Leader",
      content: "The Ekta Project transformed our village with their education program. Our children now have access to quality learning for the first time.",
      avatar: "/avatar1.svg"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Healthcare Volunteer",
      content: "Working with Ekta has been life-changing. Their mobile clinics reach communities that have never had medical access before.",
      avatar: "/avatar2.svg"
    },
    {
      id: 3,
      name: "Dr. Anil Gupta",
      role: "Education Specialist",
      content: "The innovative teaching methods introduced by Ekta have dramatically improved learning outcomes in rural schools.",
      avatar: "/avatar3.svg"
    }
  ];

  // Stats data
  const stats = [
    { value: '10K+', label: 'Lives Impacted' },
    { value: '50+', label: 'Communities Served' },
    { value: '15', label: 'Years of Service' },
    { value: '98%', label: 'Donation Efficiency' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex flex-col items-center justify-between pt-16 pb-8 md:pb-0 px-4">
        {/* Textured background */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(224, 247, 250, 0.6) 0%, rgba(224, 247, 250, 0.2) 100%),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98))
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
              background: 'linear-gradient(135deg, rgba(224, 247, 250, 0.7) 0%, rgba(207, 242, 255, 0.7) 30%, rgba(227, 242, 253, 0.7) 70%, rgba(224, 247, 250, 0.7) 100%)',
              backgroundSize: '400% 400%',
            }}
          />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2306b6d4' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 20h80M0 40h80M0 60h80M20 0v80M40 0v80M60 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

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
              Making a Difference Since 2008
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
              <button className="relative overflow-hidden group w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg shadow-lg shadow-cyan-300/50">
                <span className="relative z-10">Donate Now</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-800 z-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <button className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 group relative w-full px-6 py-3 font-medium rounded-lg">
                <span className="relative z-10">Learn About Our Work</span>
                <div className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="relative z-10 w-full mt-5 py-6 md:py-8 bg-white/80 backdrop-blur-sm border-t border-cyan-100"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        >
          <div className="container mx-auto px-4">
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
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The Ekta Project is dedicated to creating sustainable change through education, healthcare, and community development initiatives. We believe in the power of unity and collective action to transform lives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <FiBookOpen className="text-4xl text-cyan-600" />,
                title: "Education",
                description: "Building schools, training teachers, and providing scholarships to ensure every child has access to quality education."
              },
              {
                icon: <FiHeart className="text-4xl text-cyan-600" />,
                title: "Healthcare",
                description: "Establishing clinics, organizing medical camps, and promoting health awareness in underserved communities."
              },
              {
                icon: <FiUsers className="text-4xl text-cyan-600" />,
                title: "Community",
                description: "Empowering communities through skill development, sustainable farming, and women's empowerment programs."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-6 shadow-md border border-cyan-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Programs
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We implement targeted initiatives to address critical needs and create sustainable change in communities.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-cyan-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProgram(program.id)}
                onHoverEnd={() => setHoveredProgram(null)}
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{program.description}</p>
                  <p className="text-sm text-cyan-600 font-medium text-center">{program.stats}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-700/5 opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Success Stories
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hear from those whose lives have been transformed through our initiatives.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`text-center ${activeTestimonial === index ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTestimonial === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-cyan-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <p className="text-lg md:text-xl italic text-gray-700 mb-8">
                    "{testimonial.content}"
                  </p>
                  <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-cyan-600">{testimonial.role}</p>
                </motion.div>
              ))}
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-cyan-600' : 'bg-cyan-300'}`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your support can help us reach more communities and create lasting change.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Donate Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
              >
                Become a Volunteer
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-center items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-xl" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-xl" />
                <span>123 Community St, Impact City</span>
              </div>
              <div className="flex items-center gap-3">
                <FiBook className="text-xl" />
                <span>contact@ektaproject.org</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;