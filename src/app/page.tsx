'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiBookOpen, FiPhone, FiUsers, FiBook, FiPhoneCall, FiMapPin } from 'react-icons/fi';
import { FaHandHoldingHeart, FaGraduationCap, FaStethoscope, FaTree, FaPlayCircle } from 'react-icons/fa';

const Home = () => {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: 'https://www.instagram.com/theektaproject/',
      color: 'from-pink-500 to-purple-600',
      description: 'Follow our journey and see our impact in action.'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: 'https://www.linkedin.com/company/the-ekta-project/',
      color: 'from-blue-600 to-blue-800',
      description: 'Connect with us professionally and explore collaborations.'
    },
    {
      name: 'Email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      url: 'mailto:theektaprojecct2023@gmail.com',
      color: 'from-orange-500 to-red-600',
      description: 'Reach out directly for inquiries and partnerships.'
    },
    {
      name: 'Volunteer Form',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      url: 'https://docs.google.com/forms/d/1muNs0tN6pyf4xbKj3J6cCPT9io2-CwcdxY18Bk8qe5I/edit',
      color: 'from-blue-500 to-teal-600',
      description: 'Join our team and contribute to a meaningful cause.'
    }
  ];
  // Programs data
  // const programs = [
  //   {
  //     id: 1,
  //     title: "Education Initiative",
  //     description: "Providing quality education to underprivileged children through our network of community schools.",
  //     icon: <FaGraduationCap className="text-3xl text-cyan-600" />,
  //     stats: "Educated children"
  //   },
  //   {
  //     id: 2,
  //     title: "Healthcare Access",
  //     description: "Mobile clinics and health camps bringing essential medical services to remote communities.",
  //     icon: <FaStethoscope className="text-3xl text-cyan-600" />,
  //     stats: "Assisting Medical Needs"
  //   },
  //   {
  //     id: 3,
  //     title: "Environmental Sustainability",
  //     description: "Promoting eco-friendly practices and tree plantation drives to combat climate change.",
  //     icon: <FaTree className="text-3xl text-cyan-600" />,
  //     stats: "5000+ trees planted"
  //   }
  // ];

  // Testimonials data
  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Rajesh Kumar",
  //     role: "Community Leader",
  //     content: "The Ekta Project transformed our village with their education program. Our children now have access to quality learning for the first time.",
  //     avatar: "/avatar1.svg"
  //   },
  //   {
  //     id: 2,
  //     name: "Priya Sharma",
  //     role: "Healthcare Volunteer",
  //     content: "Working with Ekta has been life-changing. Their mobile clinics reach communities that have never had medical access before.",
  //     avatar: "/avatar2.svg"
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Anil Gupta",
  //     role: "Education Specialist",
  //     content: "The innovative teaching methods introduced by Ekta have dramatically improved learning outcomes in rural schools.",
  //     avatar: "/avatar3.svg"
  //   }
  // ];

  // Stats data
  const stats = [
    { value: '200+', label: 'Lives Impacted' },
    { value: '5', label: 'Communities Served' },
    { value: '3', label: 'Years of Service' },
    { value: '100%', label: 'Donation Efficiency' },
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
              Making a Difference Since 2023
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
                <a href="/donate" className="relative z-10">Donate Now</a>
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
                <a href='/about' className="relative z-10">Learn About Our Work</a>
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


{/* Our Impact Section */}
{/* Our Impact Section */}
<section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Impact
      </motion.h2>
      <motion.div 
        className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"
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
        Capturing real stories, emotions, and change. Follow us to witness it all.
      </motion.p>
    </div>

    {/* Instagram Embed Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        "https://www.instagram.com/p/DCZsEATzIRV/",
        "https://www.instagram.com/p/DCZrgA8oGje/",
        "https://www.instagram.com/p/DHv8WFWN8Os/",
        "https://www.instagram.com/p/C6l8eF9oiQb/",
        "https://www.instagram.com/p/CxkbLZNh51a/",
        "https://www.instagram.com/p/DJe_gLPNFJ0/"
      ].map((url, idx) => (
        <motion.div
          key={idx}
          className="overflow-hidden rounded-2xl shadow-lg border border-blue-100 bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          // Added subtle hover effect
          whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
        >
          <div className="w-full h-[480px]">
            <iframe
              src={`${url}embed`}
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              title={`Instagram Post ${idx}`}
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Added "View More" button */}
    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <a 
        href="https://www.instagram.com/your-instagram-profile/" // Replace with your actual Instagram profile link
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        View More on Instagram
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
</svg>

      </a>
    </motion.div>
  </div>
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
                description: "We're gearing up for a large-scale education and skill-building drive. From learning resources to real-world skills, this upcoming initiative aims to empower youth with tools they truly need to grow."
              },
              {
                icon: <FiHeart className="text-4xl text-cyan-600" />,
                title: "Women Empowerment",
                description: "We uplift women through skill training, mentorship, and health education. Our initiatives include hygiene awareness and the distribution of sanitary products to ensure dignity, well-being for all and resources to help them become confident, independent changemakers."
              },
              {
                icon: <FiUsers className="text-4xl text-cyan-600" />,
                title: "Community",
                description: "We believe change begins at the grassroots. Through food, clothing, and daily essentials donation drives, along with tree plantations and local impact projects, we’re building stronger, kinder, and more sustainable communities."
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
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
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
      </section> */}

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
            Our Socials
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
            Find us across various platforms and join our community.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br ${link.color} text-white`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
            >
              <div className="mb-4 text-4xl">
                {link.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{link.name}</h3>
              <p className="text-center text-sm opacity-90">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  


      {/* CTA Section */}
     <section className="py-20 md:py-28 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
  <div className="container mx-auto px-6 md:px-12">
    <motion.div
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        Ready to Make a Difference?
      </h2>
      <p className="text-lg md:text-xl mb-10 text-white/90">
        Your support can help us reach more communities and create lasting change.
      </p>
    </motion.div>

    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-6 mb-14"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.a
        href="/donate"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-cyan-700 font-bold px-8 py-4 rounded-xl shadow-md hover:bg-gray-100 transition"
      >
        Donate Now
      </motion.a>
      <motion.a
        href="https://docs.google.com/forms/d/1muNs0tN6pyf4xbKj3J6cCPT9io2-CwcdxY18Bk8qe5I/viewform?edit_requested=true"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition"
      >
        Become a Volunteer
      </motion.a>
    </motion.div>

    <motion.div
      className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm md:text-base text-white/90 border-t border-white/20 pt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <a href="https://maps.google.com/?q=123+Community+St,+Impact+City" target="_blank" className="flex items-center gap-2 hover:text-white transition">
        <FiMapPin className="text-lg" />
        Pune, Maharashtra, India
      </a>
      <a href="mailto:theektaprojecct2023@gmail.com" className="flex items-center gap-2 hover:text-white transition">
        <FiBook className="text-lg" />
        theektaprojecct2023@gmail.com
      </a>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default Home;