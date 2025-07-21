'use client';

import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHandsHelping, FaLightbulb, FaHeart } from 'react-icons/fa';

export default function MissionPage() {
  const missionStatement = "To empower underserved communities through sustainable initiatives in education, health, and environmental stewardship, fostering self-reliance and holistic development.";

  const visionContent = {
    title: "Our Vision",
    icon: <FaEye className="text-3xl" />,
    description: "We envision a world where every individual has equitable access to opportunities, resources, and knowledge, enabling them to lead dignified and fulfilling lives, contributing positively to society and the planet."
  };

  const valuesContent = [
    {
      id: 1,
      title: "Integrity",
      icon: <FaHandsHelping className="text-2xl" />,
      description: "Operating with honesty, transparency, and accountability in all our actions."
    },
    {
      id: 2,
      title: "Compassion",
      icon: <FaHeart className="text-2xl" />,
      description: "Approaching every challenge and individual with empathy and genuine care."
    },
    {
      id: 3,
      title: "Innovation",
      icon: <FaLightbulb className="text-2xl" />,
      description: "Continuously seeking creative and effective solutions to complex societal problems."
    },
    {
      id: 4,
      title: "Sustainability",
      icon: <FaBullseye className="text-2xl" />, // Reusing FaBullseye for a different context, or could use FaLeaf
      description: "Implementing programs that have lasting positive impact on communities and the environment."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-600 to-blue-700" />
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
            Our Mission
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Driving change, empowering communities, and building a better future together.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center text-cyan-600 mx-auto mb-6">
              <FaBullseye className="text-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Our Core Mission
            </h2>
            <motion.p
              className="text-2xl md:text-3xl font-semibold italic text-gray-800 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              "{missionStatement}"
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center text-cyan-600 mx-auto mb-6">
              {visionContent.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              {visionContent.title}
            </h2>
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {visionContent.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-600">
              The principles that guide our work and define who we are.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {valuesContent.map((value, index) => (
              <motion.div
                key={value.id}
                className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-6 shadow-lg border border-cyan-100 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center text-cyan-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-center">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Be a part of our mission to create lasting positive change.
          </p>
          <motion.a
            href="/contact" // Link to your contact page or volunteer form
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}