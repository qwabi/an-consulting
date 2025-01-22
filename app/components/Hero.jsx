"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const taglines = [
  "Your Partner in Financial Excellence",
  "Expert Solutions for Small Businesses",
  "35+ Years of Trusted Experience",
]

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#233142] text-white relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header.jpg-GFF9ESJMS9ntrywxShHz67uNpW1YYD.jpeg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#233142] via-[#233142]/70 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:w-3/5 text-left">
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              className="mt-10 mb-4 md:mb-2 md:mt-1 text-4xl md:text-6xl font-bold text-[#fac420]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
          <motion.p
            className="text-lg mb-8 text-[#7591a0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Struggling to streamline operations? We've got you covered! Our
            expert team provides tailored solutions to help your business
            thrive.
          </motion.p>
          <motion.div
            className="md:space-x-4 flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#contact-us"
              className="bg-[#fac420] text-[#233142] px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 inline-block"
            >
              Get Started Today
            </Link>
            <Link
              href="#services"
              className="bg-transparent border-2 border-[#fac420] text-[#fac420] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#fac420] hover:text-[#233142] transition-all duration-300 inline-block"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 lg:w-2/5 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-C3a2VNUHNpEbdqtDeWgyq4esXac3Ra.png"
            alt="AN Consulting Team"
            width={500}
            height={333}
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

