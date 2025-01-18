'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
const testimonials = [
  {
    name: 'Coby Johnson',
    company: 'Samuel Stevens',
    quote:
      'AN Consulting has been instrumental in streamlining our financial processes. Their expertise is unmatched!',
    image: '/3.png',
  },
  {
    name: 'Charmaine Bellington',
    company: 'Green Solutions',
    quote:
      'The strategic financial advice we received from AN Consulting has been a game-changer for our business growth.',
    image: '/2.png',
  },
  {
    name: 'Ashlyn Dewani',
    company: 'Retail Masters',
    quote:
      "We've seen significant tax savings thanks to AN Consulting's expert planning. Highly recommended!",
    image: '/1.png',
  },
];
export default function Testimonials() {
  return (
    <section id='testimonials' className='py-20 bg-white'>
      <motion.div
        className='container mx-auto px-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#233142]'>
          What Our Clients Say
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className='bg-[#f4f7f9] p-6 rounded-lg shadow-lg'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='flex items-center mb-4'>
                <Image
                  src={testimonial.image || '/placeholder.svg'}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className='rounded-full mr-4'
                />
                <div>
                  <h3 className='font-semibold text-[#233142]'>
                    {testimonial.name}
                  </h3>
                  <p className='text-sm text-[#7591a0]'>
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className='text-[#7591a0] italic'>"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
