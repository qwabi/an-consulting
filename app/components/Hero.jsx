"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const taglines = [
  "Your Partner in Financial Excellence",
  "Expert Solutions for Small Businesses",
  "35+ Years of Trusted Experience",
];
export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="about-us"
      className="min-h-screen flex items-center justify-center bg-[#233142] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/header.jpg?height=1080&width=1920"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-0">
        <img
          src="/logo/4.png"
          alt="AN Consulting"
          className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow-lg border-solid mb-6"
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AN Consulting
        </motion.h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTagline}
            className="text-xl md:text-2xl mb-8 text-[#7591a0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {taglines[currentTagline]}
          </motion.p>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#contact-us"
            className="bg-[#fac420] text-[#233142] px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
