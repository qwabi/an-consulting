"use client"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const caseStudies = [
  {
    title: "Streamlining Operations for Sangolwethu Ltd",
    description:
      "We helped Sangolwethu Pty (Ltd) optimize their financial processes, resulting in a 30% increase in efficiency and a 20% reduction in costs.",
    image: "/_com1.jpg",
    results: [
      "30% increase in efficiency",
      "20% reduction in costs",
      "Improved financial reporting accuracy",
    ],
  },
  {
    title: "Tax Optimization for Lovedale LLC",
    description:
      "Our tax planning strategies helped Lovedale LLC  save over R500,000 in taxes while ensuring full compliance with regulations.",
    image: "/_com3.jpg",
    results: [
      "R500,000+ tax savings",
      "100% compliance with regulations",
      "Streamlined tax reporting process",
    ],
  },
  {
    title: "Financial Turnaround for Lategan Poultry",
    description:
      "We guided Lategan poultry through a comprehensive financial restructuring, leading to a successful Series B funding round.",
    image: "/_com2.jpg",
    results: [
      "Successful R10M Series B funding",
      "60% reduction in burn rate",
      "Implemented robust financial controls",
    ],
  },
];

export default function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0)

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length)
  }

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#233142]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        <div className="relative">
          <motion.div
            key={currentStudy}
            className="bg-[#f4f7f9] rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src={caseStudies[currentStudy].image || "/placeholder.svg"}
                  alt={caseStudies[currentStudy].title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-[#233142]">{caseStudies[currentStudy].title}</h3>
                <p className="text-[#7591a0] mb-4">{caseStudies[currentStudy].description}</p>
                <ul className="list-disc list-inside text-[#7591a0]">
                  {caseStudies[currentStudy].results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#233142] text-white p-2 rounded-full"
            onClick={prevStudy}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#233142] text-white p-2 rounded-full"
            onClick={nextStudy}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

