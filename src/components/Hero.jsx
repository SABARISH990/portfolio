import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Code,
  Server,
  Database,
  Sparkles,
  Eye,
} from "lucide-react";
import '../styles/hero.css';

import Resume from "../assets/resume/Sabarish_Resume.pdf";
export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Handle Mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate off-center percentages (-0.5 to 0.5)
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    setCoords({ x, y });
  };

  const handleCtaClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-section" 
      onMouseMove={handleMouseMove}
    >
      {/* Decorative Blur Background Glows */}
      <div className="bg-glow glow-purple" />
      <div className="bg-glow glow-cyan" />

      <div className="container hero-grid">
        {/* Hero Content Left */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            transform: `translate(${coords.x * 20}px, ${coords.y * 20}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          
          <div className="hero-welcome">
            <span className="welcome-tag"><Sparkles size={14} style={{ display: 'inline', marginRight: '6px', color: 'var(--accent-color)' }} /> Welcome to my Space</span>
          </div>
          <h1 className="hero-title">
  
  <span className="gradient-text">
    <TypeAnimation
      sequence={[
        " Hi, I am Sabarish",
        5000,
        "",
        500,
      ]}
      speed={120}
      repeat={Infinity}
      wrapper="span"
      cursor={true}
    />
  </span>
</h1>
         

          <div className="hero-typing-container">
            <TypeAnimation
              sequence={[
                ' MERN Full Stack Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
                'Creative Engineer',
                2000
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="hero-desc">
            A passionate builder designing and crafting premium, performance-optimized, 
            and modern web platforms. Specializing in responsive React systems 
            and fully secured node architectures.
          </p>
<div className="hero-cta">
  <button
    className="btn-primary"
    onClick={() => handleCtaClick("contact")}
  >
    Let's Connect <ArrowRight size={18} />
  </button>

  <a
  href={Resume}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary"
>
  <Eye size={18} />
  <span>View Resume</span>
</a>

  <a
    href="#projects"
    className="btn-secondary"
    onClick={(e) => {
      e.preventDefault();
      handleCtaClick("projects");
    }}
  >
    View Work
  </a>
</div>
          <div className="hero-socials">
  <a
    href="https://github.com"
    target="_blank"
    rel="noreferrer"
    className="hero-social-link"
    title="GitHub"
    id="social-github"
  >
    <Github size={20} />
  </a>

  <a
    href="https://www.linkedin.com/in/sabarish-g-089110248/"
    target="_blank"
    rel="noreferrer"
    className="hero-social-link"
    title="LinkedIn"
    id="social-linkedin"
  >
    <Linkedin size={20} />
  </a>

  <a
    href="https://www.instagram.com/mr.sabarish__official/"
    target="_blank"
    rel="noreferrer"
    className="hero-social-link"
    title="Instagram"
    id="social-instagram"
  >
    <Instagram size={20} />
  </a>

  <a
    href="mailto:sabarish5763@gmail.com"
    className="hero-social-link"
    title="Email"
    id="social-email"
  >
    <Mail size={20} />
  </a>

  <a
  href="https://wa.me/9361209066"
  target="_blank"
  rel="noreferrer"
  className="hero-social-link"
  title="WhatsApp"
  id="social-whatsapp"
>
  <MessageCircle size={20} />
</a>
  <a
  href="tel:+919361209066"
  className="hero-social-link"
  title="Call"
  id="social-call"
>
  <Phone size={20} />
</a>
</div>
        </motion.div>

        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          style={{
            transform: `translate(${coords.x * -30}px, ${coords.y * -30}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80" 
              alt="Sabarish - Developer Workspace" 
              className="hero-image"
              loading="eager"
            />
          </div>
          

          {/* Floating tech icons inside parent boundary */}
          <div className="tech-orbit">
            <motion.div 
              className="floating-icon icon-1"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Code size={22} />
            </motion.div>
            <motion.div 
              className="floating-icon icon-2"
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            >
              <Server size={22} />
            </motion.div>
            <motion.div 
              className="floating-icon icon-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            >
              <Database size={22} />
            </motion.div>
            <motion.div 
              className="floating-icon icon-4"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.2 }}
            >
              <Sparkles size={22} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mouse scroll indicator */}
      <a 
        href="#about" 
        className="scroll-indicator"
        onClick={(e) => {
          e.preventDefault();
          handleCtaClick('about');
        }}
        id="hero-scroll-indicator"
      >
        <span>Explore</span>
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
      </a>
    </section>
  );
}
