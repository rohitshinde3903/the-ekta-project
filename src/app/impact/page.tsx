'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaHandsHelping, FaBullseye, FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

export default function ImpactPage() {
  const stats = [
    { id: 1, value: "200+", label: "Lives Touched", icon: <FaUsers className="text-3xl text-cyan-600" /> },
    { id: 2, value: "5", label: "Communities Served", icon: <FaCheckCircle className="text-3xl text-blue-600" /> },
    { id: 3, value: "3", label: "Years of Wisdom", icon: <FaHandsHelping className="text-3xl text-green-600" /> },
    { id: 4, value: "∞", label: "Goals", icon: <FaBullseye className="text-3xl text-yellow-600" /> },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The Ekta Project's educational programs transformed my child's future. We are incredibly grateful for their dedication.",
      author: "Priya Sharma",
      role: "Parent, Community Beneficiary"
    },
    {
      id: 2,
      quote: "Their health initiatives have significantly improved access to medical care in our remote village. A true blessing.",
      author: "Rajesh Kumar",
      role: "Village Elder"
    },
    {
      id: 3,
      quote: "Volunteering with The Ekta Project has been an eye-opening and rewarding experience. Their impact is truly visible.",
      author: "Sneha Patel",
      role: "Volunteer"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-cyan-600" />
          <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Impact
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Witness the real change we're making on the ground. Every story, every smile, counts.
          </motion.p>
        </motion.div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Quantifiable Change
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-700">
              Our efforts translate into tangible results that improve lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-extrabold text-gray-800 mb-2 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-lg font-medium text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Success Stories Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">
              Voices of Change
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-700">
              Hear directly from those whose lives have been positively impacted.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <FaQuoteLeft className="absolute top-6 left-6 text-blue-100 text-5xl opacity-70" />
                <p className="text-lg italic text-gray-700 mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="text-right border-t border-gray-100 pt-4 mt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Instagram Embed Section */}
      <section className="py-16 md:py-24 bg-white"> {/* Changed background for distinction */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Stories from the Field
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-lg md:text-xl text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Capturing real stories, emotions, and change. Follow us on Instagram to witness it all.
            </motion.p>
          </div>

          {/* Instagram Embed Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"> {/* Increased max-width */}
            {[
              "https://www.instagram.com/p/DCZsEATzIRV/",
              "https://www.instagram.com/p/DCZrgA8oGje/",
              "https://www.instagram.com/p/DHv8WFWN8Os/",
              "https://www.instagram.com/p/C6l8eF9oiQb/",
              "https://www.instagram.com/p/CxkbLZBh51a/",
              "https://www.instagram.com/p/DJe_gLPNFJ0/"
            ].map((url, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg border border-blue-100 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
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

          {/* "View More" button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="https://www.instagram.com/theektaproject/"
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
    </div>
  );
}