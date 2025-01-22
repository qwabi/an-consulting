
import { motion } from "framer-motion"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Packages from "./components/Packages"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import TrustSignals from "./components/TrustSignals"
import CaseStudies from "./components/CaseStudies"
import Newsletter from "./components/Newsletter"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4f7f9] to-white">
      <Navigation />
      <Hero />
      <TrustSignals />
      <Services />
      <CaseStudies />
      <Packages />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}

