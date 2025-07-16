// components/Programs.tsx
'use client';
import { motion } from 'framer-motion';
import { FaBook, FaHandsHelping, FaTree, FaPlayCircle, FaUsers } from 'react-icons/fa';

interface ProgramCardProps {
  id: number;
  title: string;
  description: string;
  link: string;
}

const ProgramCard = ({ id, title, description, link }: ProgramCardProps) => {
  // Define color gradients for each program card
  const gradients = [
    'from-cyan-500 to-blue-500',
    'from-teal-400 to-cyan-500',
    'from-blue-400 to-teal-500'
  ];
  
  // Define stats for each program
  const stats = [
    "2,500+ students enrolled",
    "1,200+ women trained",
    "15 villages transformed"
  ];
  
  // Define icons for each program
  const icons = [
    <FaBook className="text-4xl" />,
    <FaHandsHelping className="text-4xl" />,
    <FaTree className="text-4xl" />
  ];

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden border border-cyan-100 hover:shadow-2xl transition-all h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Program Header */}
      <div className={`relative h-48 bg-gradient-to-r ${gradients[id - 1]} flex items-center justify-center`}>
        {/* Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white opacity-30">
            {icons[id - 1]}
          </div>
        </div>
        
        {/* Video Placeholder */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 flex items-center">
            <FaPlayCircle className="text-cyan-600 text-xl" />
            <span className="text-xs font-medium text-cyan-800 ml-1">Video</span>
          </div>
        </div>
        
        {/* Featured Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-sm font-medium text-cyan-800">Featured</span>
          </div>
        </div>
      </div>
      
      {/* Program Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradients[id - 1]} flex items-center justify-center text-white mr-4`}>
            {icons[id - 1]}
          </div>
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        
        <p className="text-slate-600 mb-6">{description}</p>
        
        {/* Stats */}
        <div className="flex items-center mb-6">
          <FaUsers className="text-cyan-500 mr-2" />
          <span className="text-sm font-medium text-slate-700">{stats[id - 1]}</span>
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
          <motion.a
            href={link}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
          
          <motion.a
            href="/donate"
            className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Programs() {
  const data = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children through innovative learning programs and scholarship opportunities.',
      link: '/programs/education',
    },
    {
      id: 2,
      title: 'Women Empowerment',
      description: 'Empowering women through skill development, entrepreneurship training, and support networks for economic independence.',
      link: '/programs/women',
    },
    {
      id: 3,
      title: 'Sustainable Villages',
      description: 'Creating eco-friendly communities with access to clean water, renewable energy, and sustainable agricultural practices.',
      link: '/programs/villages',
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
          {data.map((item) => (
            <ProgramCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="/programs"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-xl shadow-xl shadow-cyan-300/50 hover:shadow-blue-400/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Programs
          </motion.a>
          
          <p className="mt-6 text-slate-600">
            Join our community of <span className="text-cyan-600 font-medium">5,000+ supporters</span> creating change
          </p>
        </motion.div>
      </div>
    </section>
  );
}