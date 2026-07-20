import React from 'react';
import { Terminal, Github, Linkedin, Mail, Phone, ChevronUp } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand logo */}
        <a 
          href="#hero" 
          className="footer-logo" 
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          id="footer-logo-link"
        >
          <Terminal size={22} style={{ color: 'var(--accent-color)' }} />
          <span>Sabarish</span>
          <span className="footer-logo-dot"></span>
        </a>

        {/* Quick Nav links */}
        <div className="footer-nav">
          <a href="#hero" className="footer-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a>
          <a href="#about" className="footer-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
          <a href="#skills" className="footer-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a>
          <a href="#projects" className="footer-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
          <a href="#education" className="footer-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a>
          
          <a href="#contact" className="footer-nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
        </div>

        {/* Social Badges */}
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-btn" title="GitHub" id="footer-social-github">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sabarish-g-089110248/" target="_blank" rel="noreferrer" className="footer-social-btn" title="LinkedIn" id="footer-social-linkedin">
            <Linkedin size={18} />
          </a>
          <a href="mailto:sabarish5763@gmail.com" className="footer-social-btn" title="Email" id="footer-social-email">
            <Mail size={18} />
          </a>
          <a href="https://wa.me/9361209066" target="_blank" rel="noreferrer" className="footer-social-btn" title="WhatsApp" id="footer-social-whatsapp">
            <Phone size={18} />
          </a>
        </div>

        {/* Bottom copyright & Scroll top */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} Sabarish. Built with raw passion & premium React. All rights reserved.
          </p>

          <button 
            className="footer-scroll-top"
            onClick={() => handleNavClick('hero')}
            id="footer-scroll-top-btn"
          >
            Back to Top <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
