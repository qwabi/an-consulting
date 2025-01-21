"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isSticky ? "bg-[#233142] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center space-x-4">
          <img
            src="/logo/4.png"
            alt="AN Consulting"
            className="w-10 h-10 mx-auto rounded-full border-4 border-white shadow-lg border-solid "
          />
          <div className="text-[#fac420] font-bold text-2xl">AN Consulting</div>
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
