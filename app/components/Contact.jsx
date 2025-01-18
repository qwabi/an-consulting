'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { usePackage } from '../context/site';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const { selectedPackage } = usePackage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/messages', { ...formData, selectedPackage })
      .then((data) => {
        toast.success('Your details have been saved successfully!');
        setFormData({
          name: '',
          email: '',
          cellphoneNumber: '',
          message: '',
        });
        console.log(data);
      })
      .catch((err) => {
        toast.error('Error saving your details! Please try again.');
        console.error(err);
      });
  };
  return (
    <section
      id='contact-us'
      className='py-20 bg-[#233142] relative overflow-hidden'
    >
      <motion.div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: "url('/images/contact-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
        }}
      />
      <motion.div
        className='container mx-auto px-4 relative z-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-white'>
          Contact Us
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className='bg-white p-6 rounded-lg shadow-lg'
            >
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-[#233142] font-semibold mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-[#7591a0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fac420]'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-[#233142] font-semibold mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-[#7591a0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fac420]'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-[#233142] font-semibold mb-2'
                >
                  Cellphone Number
                </label>
                <input
                  type='telephone'
                  id='cellphoneNumber'
                  name='cellphoneNumber'
                  value={formData.cellphoneNumber}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-[#7591a0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fac420]'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-[#233142] font-semibold mb-2'
                >
                  Selected Package
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={selectedPackage?.name}
                  disabled
                  className='bg-gray-200 w-full px-3 py-2 border border-[#7591a0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fac420]'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-[#233142] font-semibold mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-[#7591a0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fac420]'
                  rows={4}
                  required
                ></textarea>
              </div>
              <motion.button
                type='submit'
                className='w-full bg-[#fac420] text-[#233142] py-2 rounded-full hover:bg-opacity-90 transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='bg-white p-6 rounded-lg shadow-lg mb-8'>
              <h3 className='text-xl font-semibold mb-4 text-[#233142]'>
                Our Location
              </h3>
              <div className='aspect-w-16 aspect-h-9 mb-4'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.738417543276!2d26.514747175684484!3d-33.299505773449674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e645de0fd7bfac3%3A0x850ca0a3f39a1ad2!2s5%20Glastonbury%20Rd%2C%20Makhanda%2C%206139!5e0!3m2!1sen!2sza!4v1737212009619!5m2!1sen!2sza'
                  width='100%'
                  height='100%'
                  style={{ border: '0' }}
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
              <div className='space-y-2'>
                <p className='flex items-center text-[#7591a0]'>
                  <MapPin className='w-5 h-5 mr-2 text-[#fac420]' />5 5
                  Glastonbury Road, Grahamstown, 6140
                </p>
                <p className='flex items-center text-[#7591a0]'>
                  <Phone className='w-5 h-5 mr-2 text-[#fac420]' />
                  +27790859123
                </p>
                <p className='flex items-center text-[#7591a0]'>
                  <Mail className='w-5 h-5 mr-2 text-[#fac420]' />
                  axolile@anconsulting.co.za
                </p>
              </div>
            </div>
            <motion.a
              href='/AN_Consulting_Profile.pdf'
              download
              className='block w-full bg-[#fac420] text-[#233142] py-2 rounded-full text-center hover:bg-opacity-90 transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Company Profile
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
