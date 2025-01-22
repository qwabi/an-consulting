"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#233142] text-[#7591a0] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">AN Consulting</h3>
            <p>Your trusted partner in financial excellence.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about-us" className="hover:text-[#fac420] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#fac420] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-[#fac420] transition-colors duration-300">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#contact-us" className="hover:text-[#fac420] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <p>5 Glastonbury Road, Grahamstown, 6140</p>
            <p>Phone: +27790859123</p>
            <p>Email: axolile@anconsulting.co.za</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#fac420] transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-[#fac420] transition-colors duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-[#fac420] transition-colors duration-300">
                <LinkedIn />
              </a>
              <a href="#" className="text-white hover:text-[#fac420] transition-colors duration-300">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#7591a0] text-center">
          <p>&copy; {new Date().getFullYear()} AN Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

