import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Zap, Flame, User, MapPin, Calendar, CheckCircle } from 'lucide-react';
import '../styles/about.css';

const statsData = [
  {
    id: 'exp',
    icon: <Briefcase size={22} />,
    value: 'Fresher',
    label: 'Engineering Practice'
  },
  {
    id: 'projects',
    icon: <Award size={22} />,
    value: '15+ Projects',
    label: 'Completed & Live'
  },
  {
    id: 'learning',
    icon: <Flame size={22} />,
    value: '24/7 Core',
    label: 'Continuous Learning'
  },
  {
    id: 'delivery',
    icon: <Zap size={22} />,
    value: 'Agile',
    label: 'Fast & Secure Dev'
  }
];

const quickInfo = [
  { label: 'Role', value: 'Full Stack Developer', icon: <User size={14} /> },
  { label: 'Location', value: 'Tiruppur, India', icon: <MapPin size={14} /> },
  { label: 'Academic Year', value: '2027 Grad', icon: <Calendar size={14} /> },
  { label: 'Availability', value: 'Open to Work', icon: <CheckCircle size={14} /> }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">01. Identity</span>
          <h2 className="section-title">About My Journey</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-grid">
          {/* Column Left: Text Bio */}
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffffff' }}>
              Building elegant solutions to complex digital challenges.
            </h3>
            
            <p className="about-bio">
              I am a modern Full-Stack Software Developer dedicated to writing highly performant, 
              clean, and reusable codebase. My work focuses on constructing responsive frontend interfaces 
              and architecting secure backend APIs. I love making systems that are 
              visually beautiful and functional on any viewport scale.
            </p>

            <div className="about-objective">
              "My career objective is to drive digital innovation inside a progressive engineering team, 
              translating scalable logic into beautiful user experiences. I thrive on refining 
              workflows, mastering new SDK capabilities, and bringing robust projects from canvas layout to final production."
            </div>

            {/* Quick Profile details */}
            <div className="info-list">
              {quickInfo.map((info, idx) => (
                <div key={idx} className="info-item">
                  <span className="info-label">
                    <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '6px', opacity: 0.8 }}>
                      {info.icon}
                    </span>
                    {info.label}
                  </span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column Right: Stats Cards Bento */}
          <div className="personal-cards">
            {statsData.map((stat, idx) => (
              <motion.div
                key={stat.id}
                className="glass-card personal-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="personal-card-icon">
                  {stat.icon}
                </div>
                <div className="personal-card-val">
                  {stat.value}
                </div>
                <div className="personal-card-label">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
