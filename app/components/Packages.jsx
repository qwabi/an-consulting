'use client';
import { motion } from 'framer-motion';
import { Check, Package, Briefcase, Building } from 'lucide-react';
const packages = [
    {
        name: 'Starter',
        price: 'R1,500',
        features: ['Basic Bookkeeping', 'Monthly Financial Statements', 'Annual Tax Returns'],
        icon: Package,
    },
    {
        name: 'Growth',
        price: 'R3,000',
        features: ['Full Bookkeeping', 'Quarterly Management Accounts', 'Tax Planning', 'Payroll Services'],
        icon: Briefcase,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Comprehensive Accounting', 'Monthly Management Accounts', 'Strategic Financial Advisory', 'Audit Support'],
        icon: Building,
    },
];
export default function Packages() {
    return (<section id="packages" className="py-20 bg-[#f4f7f9]">
      <motion.div className="container mx-auto px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#233142]">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (<motion.div key={pkg.name} className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
              <pkg.icon className="w-16 h-16 text-[#fac420] mb-6 mx-auto"/>
              <h3 className="text-2xl font-semibold mb-4 text-[#233142] text-center">{pkg.name}</h3>
              <p className="text-3xl font-bold mb-6 text-[#fac420] text-center">{pkg.price}<span className="text-sm font-normal text-[#7591a0]">/month</span></p>
              <ul className="mb-8">
                {pkg.features.map((feature) => (<li key={feature} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-[#fac420] mr-2 flex-shrink-0"/>
                    <span className="text-[#7591a0]">{feature}</span>
                  </li>))}
              </ul>
              <motion.button className="w-full bg-[#233142] text-white py-2 rounded-full hover:bg-opacity-90 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Choose This Package
              </motion.button>
            </motion.div>))}
        </div>
      </motion.div>
    </section>);
}
