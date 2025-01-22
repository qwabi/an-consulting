"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isSticky ? "bg-[#233142] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-C3a2VNUHNpEbdqtDeWgyq4esXac3Ra.png"
            alt="AN Consulting"
            className={`${
              isSticky
                ? "w-12 h-12 md:w-16 md:h-16"
                : "w-20 h-20 md:w-32 md:h-32"
            }  mx-auto rounded-full shadow-lg border-solid transition-all ease-in-out duration-400`}
          />
        </div>
        <ul className="hidden md:flex space-x-6">
          {[
            "About Us",
            "Services",
            "Packages",
            "Testimonials",
            "Contact Us",
          ].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-[#7591a0] hover:text-[#fac420] transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-[#7591a0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

