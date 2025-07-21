'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane, FaLinkedin, FaInstagram } from 'react-icons/fa';
// Removed FaPhone and FaTwitter as per requirements

export default function ContactPage() {
  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-xl" />, title: "Our Headquarters", content: "Pune, Maharashtra, India" },
    { icon: <FaEnvelope className="text-xl" />, title: "Email Us", content: "theektaprojecct2023@gmail.com" },
    { icon: <FaClock className="text-xl" />, title: "Office Hours", content: "Monday-Friday: 9AM - 6PM" },
  ];

  const teamMembers = [
    { id: 1, name: 'Disha Shelke', role: 'Founder & CEO', bio: '3+ years in community development' },
    { id: 2, name: 'Rushabh Chopda', role: 'Program Director', bio: 'Education specialist with NGO experience' },
    { id: 3, name: 'Muskan Garg', role: 'Health Initiatives Lead', bio: 'Former public health administrator' },
    { id: 4, name: 'Rudraveer', role: 'Sustainability Advisor', bio: 'Environmental scientist and activist' },
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
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We'd love to hear from you. Connect with our team and let's make an impact together.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#contact-form"
              className="px-6 py-3 bg-white text-cyan-700 font-medium rounded-lg shadow-lg shadow-cyan-300/30 hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.a>
            {/* Removed "Visit Us" button as office locations are simplified */}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <motion.div
      className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {contactInfo.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-cyan-100 hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center text-cyan-600 mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 break-words text-sm sm:text-base">{item.content}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="flex flex-col lg:flex-row gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-8">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Send Us a Message
                  </motion.h2>
                  <motion.div 
                    className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.p
                    className="text-gray-700 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Have questions about our programs, want to volunteer, or explore partnership opportunities? Reach out to us using the form or contact details.
                  </motion.p>
                  
                  <div className="flex space-x-4">
                    {[
                      { icon: <FaLinkedin className="text-xl" />, url: "https://www.linkedin.com/company/the-ekta-project/" }, // Updated LinkedIn URL
                      { icon: <FaInstagram className="text-xl" />, url: "https://www.instagram.com/theektaproject/" } // Updated Instagram URL
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.url} // Use the specific URL
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security best practice
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.8)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
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
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2 font-medium">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>

                        {/* Removed Phone input field */}
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="How can we help?"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Message</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your message here..."
                          required
                        ></textarea>
                      </div>

                      <motion.div 
                        className="pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <motion.button
                          type="submit"
                          className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-lg rounded-xl shadow-xl shadow-cyan-300/50 hover:shadow-blue-400/50 transition-all flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </motion.button>
                      </motion.div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Contact */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Meet Our Leadership
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-600">
              Get to know the dedicated individuals leading The Ekta Project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"> {/* Adjusted grid to 4 columns */}
            {teamMembers.map((person, index) => (
              <motion.div
                key={person.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cyan-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-40 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  {/* Placeholder for team member image/avatar - currently a colored box */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-cyan-800 font-bold">
                    {person.name.charAt(0)}
                  </div> 
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{person.name}</h3>
                  <p className="text-cyan-600 font-medium mb-3">{person.role}</p>
                  <p className="text-gray-700 text-sm italic">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Removed "Our Offices" section entirely */}
    </div>
  );
}