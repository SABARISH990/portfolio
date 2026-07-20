import React from 'react';
import { motion } from 'motion/react';
import { Calendar, GraduationCap } from 'lucide-react';
import '../styles/education.css';

const educationTimeline = [
  {
    id: 'PG',
    degree: 'Master Of Computer Application ',
    institution: 'Nandha Enginnering College, Erode',
    period: '2025 - 2027',
    description: 'Specializing in Full-Stack Web Development, Data Structures, and Software Design. Active participant in college tech-symposiums, coding clubs, and hackathons.',
    grade: 'CGPA: 8.3 / 10'
  },
  {
    id: 'UG',
    degree: 'Bachelor of Information Technology ',
    institution: 'Kpr College Of Arts Science And Research, Coimbatore',
    period: '2022 - 2025',
    description: 'Specializing in Full-Stack Web Development, Data Structures, and Software Design. Active participant in college tech-symposiums, coding clubs, and hackathons.',
    grade: 'CGPA: 8.01 / 10'
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Schooling',
    institution: 'APS Academy Matriculation Higher Secondary School',
    period: '2020 - 2022',
    description: 'Rigorous coursework Computer Science. Designed a basic library management system using Python and C++ for practical assessments.',
    grade: 'Score: 95.5%'
  },
  {
    id: 'sslc',
    degree: 'Secondary Schooling',
    institution: 'APS Academy Matriculation Higher Secondary School',
    period: '2019 - 2020',
    description: 'Elected school science exhibition representative. Won first-place for a clean energy prototype and graduated with honors.',
    grade: 'Score: 87.8%'
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">04. Milestones</span>
          <h2 className="section-title">Academic Timeline</h2>
          <div className="section-underline"></div>
        </div>

        {/* Vertical Timeline container */}
        <div className="timeline-container">
          {educationTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Pulsing bullet node */}
              <div className="timeline-dot" />

              {/* Card container */}
              <div className="glass-card timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <Calendar size={12} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                    {item.period}
                  </span>
                  {item.grade && (
                    <span style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--accent-color)', 
                      fontWeight: 600, 
                      fontFamily: 'var(--font-mono)' 
                    }}>
                      {item.grade}
                    </span>
                  )}
                </div>

                <h3 className="timeline-degree">{item.degree}</h3>
                
                <h4 className="timeline-institution">
                  <GraduationCap size={16} />
                  {item.institution}
                </h4>

                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
