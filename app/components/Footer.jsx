'use client';
import { motion } from 'framer-motion';
export default function Footer() {
    return (<footer className="bg-[#233142] text-[#7591a0] py-8">
      <motion.div className="container mx-auto px-4 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
        <p>&copy; {new Date().getFullYear()} AN Consulting. All rights reserved.</p>
      </motion.div>
    </footer>);
}
