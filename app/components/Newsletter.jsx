"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-[#233142] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg mb-8">
            Get free tips to grow your business and stay up-to-date with the latest financial trends.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-full text-[#233142]"
              required
            />
            <motion.button
              type="submit"
              className="bg-[#fac420] text-[#233142] px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

