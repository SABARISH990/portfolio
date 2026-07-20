import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from "../components/CustomCursor";

// Load style stylesheets to make them modular
import '../styles/global.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/about.css';
import '../styles/skills.css';
import '../styles/projects.css';
import '../styles/education.css';
import '../styles/certificates.css';
import '../styles/contact.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import "../styles/customCursor.css";
import "../styles/scrollTop.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate premium initial page loading duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && <Loader isLoading={isLoading} />}
      </AnimatePresence>

      {/* Global Background Video */}
      <div className="video-background-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: '#0B1120' // Fallback color
      }}>
       
        {/* Radial dark overlay to fade to the edges and protect content focus */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 20%, rgba(11, 17, 32, 0.8) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Main Portfolio Content */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}>
       
        <main>
          <CustomCursor />
           <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
