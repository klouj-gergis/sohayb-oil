import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../common/Navbar.jsx'
import Hero from '../common/Hero.jsx';
import About from './About.jsx';
import Products from '../common/Products.jsx';
import Contact from '../common/Contact.jsx';
import Footer from '../common/Footer.jsx';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
} 
