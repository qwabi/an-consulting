import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function Home() {
    return (<main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>);
}
