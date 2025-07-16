'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLock, FaShieldAlt, FaRupeeSign } from 'react-icons/fa';
import React from 'react';

export default function DonationForm() {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ amount, frequency, name, email, phone, paymentMethod });
  };

  const presetAmounts = [500, 1000, 2000, 5000];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden">
        {/* Form header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6 text-white text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <FaHeart className="text-3xl text-white" />
            </div>
          </div>
          <motion.h2 
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Support Our Cause
          </motion.h2>
          <motion.p
            className="text-cyan-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your donation creates sustainable change in communities
          </motion.p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center pt-6 px-6">
          <div className="flex items-center">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {step}
                </div>
                {step < 3 && (
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-blue-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-lg font-medium text-gray-800 mb-3">
                Donation Amount (₹)
              </label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {presetAmounts.map((amt) => (
                  <motion.button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt.toString())}
                    className={`py-3 rounded-lg font-medium transition-all ${
                      amount === amt.toString()
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ₹{amt.toLocaleString()}
                  </motion.button>
                ))}
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaRupeeSign className="text-gray-500" />
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
            </motion.div>

            {/* Frequency selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label className="block text-lg font-medium text-gray-800 mb-3">
                Frequency
              </label>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    frequency === 'one-time'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  One-time
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    frequency === 'monthly'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Monthly
                </motion.button>
              </div>
            </motion.div>

            {/* Payment method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-lg font-medium text-gray-800 mb-3">
                Payment Method
              </label>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Card
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  UPI
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Net Banking
                </motion.button>
              </div>
            </motion.div>

            {/* Donor information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium text-gray-800 border-b pb-2">Your Information</h3>
              
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </motion.div>

            {/* Security and submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <div className="flex items-center justify-center mb-6 text-cyan-600">
                <FaLock className="mr-2" />
                <span>Secure SSL Encryption</span>
                <FaShieldAlt className="ml-4 mr-2" />
                <span>PCI Compliant</span>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-lg rounded-xl shadow-xl shadow-cyan-300/50 hover:shadow-blue-400/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Donate Now
              </motion.button>
              
              <p className="mt-4 text-center text-sm text-gray-500">
                Your donation is secure and tax-deductible. We respect your privacy.
              </p>
            </motion.div>
          </form>
        </div>

        {/* Trust badges */}
        <div className="bg-gray-50 px-6 py-4 flex flex-wrap justify-center items-center gap-6">
          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaLock className="text-cyan-600 text-xl" />
            </div>
            <span className="text-xs text-gray-600">100% Secure</span>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaShieldAlt className="text-cyan-600 text-xl" />
            </div>
            <span className="text-xs text-gray-600">PCI DSS Compliant</span>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaHeart className="text-cyan-600 text-xl" />
            </div>
            <span className="text-xs text-gray-600">Tax Deductible</span>
          </div>
        </div>
      </div>
    </div>
  );
}