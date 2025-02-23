'use client';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrustSignals from './components/TrustSignals';
import Newsletter from './components/Newsletter';
import Affiliations from './components/Affiliations';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-[#f4f7f9] to-white'>
      <Navigation />
      <Hero />
      <TrustSignals />
      <Services />
      <Packages />
      <Affiliations />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
