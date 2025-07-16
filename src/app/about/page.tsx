'use client';

import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaLightbulb, FaChartLine, FaHeart, FaLeaf, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  const teamMembers = [
    { id: 1, name: 'Priya Sharma', role: 'Founder & CEO', bio: '15+ years in community development' },
    { id: 2, name: 'Raj Patel', role: 'Program Director', bio: 'Education specialist with NGO experience' },
    { id: 3, name: 'Ananya Singh', role: 'Health Initiatives Lead', bio: 'Former public health administrator' },
    { id: 4, name: 'Vikram Mehta', role: 'Sustainability Advisor', bio: 'Environmental scientist and activist' },
  ];

  const partners = [
    { id: 1, name: 'Global Education Fund', description: 'Education partnership since 2015' },
    { id: 2, name: 'Health for All Foundation', description: 'Medical outreach programs' },
    { id: 3, name: 'cyan Earth Initiative', description: 'Environmental sustainability projects' },
    { id: 4, name: 'Women Empowerment Network', description: 'Skill development programs' },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/80 to-cyan-800/80" />
          <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About <span className="text-cyan-300">The Ekta Project</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Learn about our journey, mission, and the dedicated team creating sustainable change
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg shadow-lg shadow-cyan-300/30 hover:bg-cyan-600 transition"
            >
              Our Impact Report
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg border border-white/30 hover:bg-white/30 transition"
            >
              Meet Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 to-blue-900 flex items-center justify-center">
                  <FaHeart className="text-6xl text-cyan-300 opacity-30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <FaLeaf className="text-4xl text-white opacity-80" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="How it all began"
              />
              <div className="space-y-5 text-gray-700">
                <p>
                  Founded in 2008, The Ekta Project began as a small initiative by a group of college students in Mumbai who wanted to make a tangible difference in their community. What started as weekend volunteering activities at local orphanages has now grown into a nationwide movement.
                </p>
                <p>
                  The name "Ekta" means unity in Hindi, reflecting our core belief that real, sustainable change happens when people come together. Over the past 15 years, we've expanded our programs to include education, healthcare, environmental sustainability, and community development initiatives across 50+ communities.
                </p>
                <p>
                  Today, we're proud to have impacted over 10,000 lives through our various programs, always staying true to our founding principle: "Empowerment through Unity."
                </p>
              </div>
              
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start">
                  <FaHandshake className="text-3xl text-cyan-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Our Commitment</h3>
                    <p className="text-gray-600">
                      We maintain a 98% donation efficiency rate, ensuring that nearly every rupee donated goes directly to community programs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              title="Our Guiding Principles"
              subtitle="The foundation of everything we do"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center">
                  <FaLightbulb className="text-3xl text-cyan-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To empower underprivileged communities through sustainable development initiatives that promote education, health, environmental stewardship, and economic self-sufficiency.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center">
                  <FaChartLine className="text-3xl text-cyan-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To create a world where every community has the resources, knowledge, and unity to build sustainable futures and break the cycle of poverty.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FaHeart className="text-2xl" />, title: "Compassion", desc: "We approach every challenge with empathy" },
                { icon: <FaLeaf className="text-2xl" />, title: "Sustainability", desc: "We build solutions that last" },
                { icon: <FaGraduationCap className="text-2xl" />, title: "Education", desc: "We believe knowledge transforms lives" }
              ].map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-cyan-100">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              title="Our Leadership Team"
              subtitle="Passionate professionals driving change"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-gradient-to-b from-white to-cyan-50 rounded-2xl overflow-hidden shadow-lg border border-cyan-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <FaUsers className="text-6xl text-white opacity-80" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team includes 42 dedicated professionals and over 500 volunteers working across India to implement our community programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg shadow-lg shadow-cyan-300/30 hover:shadow-blue-400/30 transition"
            >
              Join Our Team
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              title="Our Approach"
              subtitle="How we create sustainable impact"
            />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-200 transform -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12">
                {[
                  { 
                    step: 1, 
                    title: "Community Engagement", 
                    description: "We start by listening to community leaders and residents to understand their unique challenges and aspirations.",
                    icon: <FaUsers />
                  },
                  { 
                    step: 2, 
                    title: "Needs Assessment", 
                    description: "Our team conducts thorough assessments to identify the most pressing needs and potential solutions.",
                    icon: <FaLightbulb />
                  },
                  { 
                    step: 3, 
                    title: "Program Design", 
                    description: "We co-create tailored programs with community input to ensure relevance and sustainability.",
                    icon: <FaChartLine />
                  },
                  { 
                    step: 4, 
                    title: "Implementation", 
                    description: "Local community members are trained to lead program implementation with our support.",
                    icon: <FaLeaf />
                  },
                  { 
                    step: 5, 
                    title: "Impact Measurement", 
                    description: "We rigorously measure outcomes and adjust programs based on data and feedback.",
                    icon: <FaGraduationCap />
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={step.step}
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Step circle */}
                    <div className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-xl z-10 border-4 border-white shadow-lg hidden md:flex">
                      {step.step}
                    </div>
                    
                    <div className="md:w-5/12 mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-cyan-100">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-2xl">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{step.title}</h3>
                        <p className="text-gray-600 text-center">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-2/12"></div>
                    
                    <div className="md:w-5/12">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                        <div className="text-white text-4xl opacity-30">
                          Step {step.step}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              title="Our Partners"
              subtitle="Collaborating for greater impact"
            />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We believe in the power of partnerships to amplify our impact and create sustainable change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="p-6 bg-gradient-to-b from-white to-cyan-50 rounded-2xl border border-cyan-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                    <FaHandshake className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{partner.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg shadow-lg shadow-cyan-300/30 hover:shadow-blue-400/30 transition"
            >
              Become a Partner
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionTitle
              title="Our Journey in Action"
              subtitle="See the impact we're creating together"
            />
          </div>
          
          <motion.div 
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-white text-center">
              <div className="text-6xl mb-4">▶</div>
              <p className="text-xl font-medium">Play our impact story</p>
            </div>
          </motion.div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl mb-2">▶</div>
                  <p className="text-sm">Video {item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to be part of our story?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our movement to create sustainable change in communities across India.
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
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
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
        </div>
      </section>
    </div>
  );
}