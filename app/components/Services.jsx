'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, PieChart, TrendingUp, Search } from 'lucide-react';
const services = [
    {
        title: 'Accounting',
        description: 'Comprehensive accounting services tailored for small businesses.',
        icon: Calculator,
        image: '/images/accounting.jpg',
    },
    {
        title: 'Audit',
        description: 'Thorough auditing to ensure compliance and financial accuracy.',
        icon: FileText,
        image: '/images/audit.jpg',
    },
    {
        title: 'Tax',
        description: 'Expert tax planning and preparation services.',
        icon: PieChart,
        image: '/images/tax.jpg',
    },
    {
        title: 'Advisory',
        description: 'Strategic financial advice to help your business grow.',
        icon: TrendingUp,
        image: '/images/advisory.jpg',
    },
    {
        title: 'Internal Audit Services',
        description: 'Comprehensive internal audit solutions to improve your business processes and risk management.',
        icon: Search,
        image: '/images/internal-audit.jpg',
    },
];
export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (<section id="services" className="py-20 bg-white">
      <motion.div className="container mx-auto px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#233142]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (<motion.div key={service.title} className="relative bg-[#233142] p-6 rounded-lg shadow-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-[#fac420] mb-4"/>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className={`text-[#7591a0] transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  {service.description}
                </p>
              </div>
              <motion.div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${service.image})` }} initial={{ opacity: 0 }} animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }} transition={{ duration: 0.3 }}/>
            </motion.div>))}
        </div>
      </motion.div>
    </section>);
}
