"use client"
import { motion } from "framer-motion"
import { Award, Users, Briefcase, Trophy, Building, ShoppingBag, Landmark } from "lucide-react"

const industryIcons = [
  { name: "Corporate", icon: Building },
  { name: "Finance", icon: Briefcase },
  { name: "Retail", icon: ShoppingBag },
  { name: "Government", icon: Landmark },
]

const achievements = [
  { title: "Years of Experience", value: "35+", icon: Briefcase },
  { title: "Satisfied Clients", value: "500+", icon: Users },
  { title: "Projects Completed", value: "1000+", icon: Award },
]

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#233142]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {industryIcons.map((industry, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <industry.icon className="w-16 h-16 text-[#fac420] mb-2" />
              <p className="text-[#7591a0] text-sm">{industry.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <achievement.icon className="w-12 h-12 text-[#fac420] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-[#fac420] mb-2">{achievement.value}</h3>
              <p className="text-[#7591a0]">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

