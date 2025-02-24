'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, PieChart, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Audit & Assurance',
    description: `Ensure compliance and financial accuracy with our thorough auditing services. We provide comprehensive auditing solutions that help maintain your business's financial integrity. 
      <ul class='list-disc pl-5  p-4 rounded-md'>
                  <li>External audits</li>
                  <li>Quality assurance reviews</li>
                  <li>Agreed upon procedures</li>
                  <li>Internal audits</li>
                </ul>`,
    icon: FileText,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audit.jpg-PFML6JuyjqcuoLJ8mNj6xT3BNoBvBz.jpeg',
  },
  {
    title: 'Tax',
    description: `<ul class='list-disc pl-5  p-4 rounded-md'>
                  <li>
                    Preparation and review of tax computations and returns
                  </li>
                  <li>VAT and other indirect taxes</li>
                  <li>Tax planning</li>
                </ul>`,
    icon: PieChart,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/planning.jpg-HazfVNpqUoupZNlroKwzyKwkOcXtZM.jpeg',
  },
  {
    title: 'Business Consulting',
    description: `             
                <ul class='list-disc pl-5  p-4 rounded-md'>
                  <li>
                    Preparation and compilation of IFRS and GRAP compliant
                    financial statements
                  </li>
                  <li>
                    Review of financial statements for compliance with IFRS and
                    GRAP standards
                  </li>
                  <li>
                    Preparation and maintenance of IFRS and GRAP compliant asset
                    register
                  </li>
                  <li>IFRS and GRAP technical training</li>
                </ul>
              </li>`,
    icon: FileText,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audit.jpg-PFML6JuyjqcuoLJ8mNj6xT3BNoBvBz.jpeg',
  },
  {
    title: 'Financial Advisory',
    description: `Expert financial guidance to help your business grow and thrive. Our advisory services provide insights and strategies for sustainable business growth.
      <ul class='list-disc pl-5  p-4 rounded-md'>
                  <li>
                    <span className='text-lg font-bold'>
                      Outsourced accounting services
                    </span>
                    <ul class='list-disc pl-5  p-4 rounded-md''>
                      <li>
                        Monthly outsourced accounting packages
                        <ul class='list-disc pl-5  p-4 rounded-md'>
                          <li>
                            We provide accounting support for small businesses.
                            Are packages are tailored to the needs of start-ups,
                            fairly new and established businesses. We take care
                            of the accounting, giving you time to focus on
                            growing the business.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>`,
    icon: TrendingUp,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advice.jpg-CYUqexmu46jOyh3HrEcbr3ZNva7Aaz.jpeg',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className='py-20 bg-[#f4f7f9]' id='services'>
      <motion.div
        className='container mx-auto px-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#233142]'>
          About us
        </h2>
        <div className='w-full p-6 md:p-4 my-6 mx-auto text-xl'>
          <p>
            Our team is made up of qualified and experience professionals
            comprising chartered accountants, registered auditors and other
            finance professionals. The team is well balanced and experienced
            with over 35 years combined experience in both the private and
            public sector. We are passionate about small business and want to
            play a role to assist them reach their potential and grow. Get in
            touch with us, we might just be what you are looking for.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className='bg-white rounded-lg shadow-lg overflow-hidden h-full'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='relative h-48'>
                <img
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#233142] via-transparent to-transparent flex items-end justify-start p-4'>
                  <service.icon className='w-8 h-8 text-[#fac420]' />
                </div>
              </div>
              <div className='p-6 inline-flex flex-col justify-between min-h-96 items-between'>
                <h3 className='text-xl font-semibold mb-2 text-[#233142]'>
                  {service.title}
                </h3>
                <p
                  className='text-[#7591a0] mb-4'
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className='bg-[#fac420] text-[#233142] px-4 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all duration-300'
                    href='/#packages'
                  >
                    {' '}
                    Learn More
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
