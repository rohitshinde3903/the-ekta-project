'use client';

import { useState } from 'react';
import { Button } from './ui/button';

export default function DonationForm() {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ amount, frequency, name, email, phone });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Donation Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Donation Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Frequency</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="frequency"
                value="one-time"
                checked={frequency === 'one-time'}
                onChange={() => setFrequency('one-time')}
                className="mr-2"
              />
              One-time
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="frequency"
                value="monthly"
                checked={frequency === 'monthly'}
                onChange={() => setFrequency('monthly')}
                className="mr-2"
              />
              Monthly
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
            Donate Now
          </Button>
        </div>

        <p className="text-sm text-gray-500">
          Your donation is secure and tax-deductible. We respect your privacy.
        </p>
      </form>
    </div>
  );
}