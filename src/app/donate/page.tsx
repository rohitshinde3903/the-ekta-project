'use client';
import DonationForm from '../components/DonationForm';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaChartPie, FaUniversity, FaRupeeSign, FaUsers, FaTree } from 'react-icons/fa';

export default function DonatePage() {
  const impactStats = [
    { icon: <FaRupeeSign className="text-cyan-600" />, value: "₹50K+", label: "Raised since 2023" },
    { icon: <FaUsers className="text-cyan-600" />, value: "200+", label: "Lives impacted" },
    { icon: <FaTree className="text-cyan-600" />, value: "5", label: "Communities served" },
  ];

  const fundAllocation = [
    { percentage: 80, title: "Programs", description: "Directly funds our education, healthcare, and community initiatives", color: "from-cyan-500 to-blue-500" },
    { percentage: 15, title: "Administration", description: "Supports our team and operational costs", color: "from-teal-400 to-cyan-500" },
    { percentage: 5, title: "Fundraising", description: "Helps us reach more supporters", color: "from-blue-400 to-teal-500" },
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
            Empower Communities
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your donation creates sustainable change in underserved communities
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#donate-form"
              className="px-6 py-3 bg-white text-cyan-700 font-medium rounded-lg shadow-lg shadow-cyan-300/30 hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.a>
            <motion.a
              href="#impact"
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Our Impact
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-cyan-700 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                    Make a Difference
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full" />
                  <div className="space-y-5 text-gray-700">
                    <p>
                      Your generous donation will directly support our programs in education, healthcare, and community development. Every contribution, no matter the size, helps create sustainable change.
                    </p>
                    <p>
                      The Ekta Project is a registered non-profit organization, and all donations are tax-exempt under Section 80G of the Income Tax Act.
                    </p>
                    <p>
                      For large donations or corporate partnerships, please contact us directly at partnerships@ektaproject.org
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-start mb-4">
                    <FaHandHoldingHeart className="text-3xl text-cyan-600 mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Other Ways to Give</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Bank Transfer (Details available on request)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Cheque payable to "The Ekta Project"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Monthly giving program</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Corporate matching gifts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <DonationForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Allocation */}
      <section id="impact" className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Where Your Money Goes
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600">
              We maintain the highest standards of transparency and accountability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {fundAllocation.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                      <FaChartPie className="text-3xl text-cyan-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-cyan-700 mb-2">{item.percentage}%</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/4 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-3">Financial Transparency</h3>
                <p>We publish annual reports detailing our finances and program impact. Download our latest financial statements to see how we utilize every rupee.</p>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <motion.a
                  href="/financials"
                  className="px-6 py-3 bg-white text-cyan-700 font-medium rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Reports
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                <FaUniversity className="text-3xl text-cyan-600" />
              </div>
            </div>
            <blockquote className="text-2xl italic text-gray-700 mb-6">
              "The Ekta Project has demonstrated exceptional accountability in their financial management. Our corporate foundation is proud to partner with them on education initiatives across rural India."
            </blockquote>
            <div>
              <p className="font-bold text-gray-800">Rahul Sharma</p>
              <p className="text-cyan-600">Director, CSR Foundation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}