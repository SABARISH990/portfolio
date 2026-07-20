import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, ChevronRight, X, ExternalLink, ShieldCheck } from 'lucide-react';
import '../styles/certificates.css';

const certificatesData = [
  {
    id: 'google-analytics',
    title: 'Google Advanced Data Analytics',
    issuer: 'Google',
    date: 'Dec 2025',
    credentialId: 'GOOG-ANA-88939',
    url: 'https://coursera.org',
    description: 'Mastered predictive modeling, Python analysis frameworks (pandas, numpy), data visualizations using seaborn, and statistical testing paradigms.'
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta',
    date: 'Oct 2025',
    credentialId: 'META-FED-55412',
    url: 'https://coursera.org',
    description: 'In-depth specialization in advanced React design patterns, custom hooks development, testing with Jest, and client-side system architecture.'
  },
  {
    id: 'aws-cloud',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Aug 2025',
    credentialId: 'AWS-CCP-99281',
    url: 'https://aws.amazon.com',
    description: 'Validates overall understanding of AWS Cloud platform, core infrastructure concepts, billing policies, security standards, and scalable databases.'
  }
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05. Credentials</span>
          <h2 className="section-title">Certifications & Honors</h2>
          <div className="section-underline"></div>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="glass-card certificate-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveCert(cert)}
              id={`cert-trigger-${cert.id}`}
            >
              <span className="certificate-issuer">{cert.issuer}</span>
              <h3 className="certificate-title">{cert.title}</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span className="certificate-date">{cert.date}</span>
                <span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  Preview <ChevronRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay Preview Portal */}
        <AnimatePresence>
          {activeCert && (
            <motion.div
              className="certificate-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
            >
              {/* Modal Container */}
              <motion.div
                className="glass-panel certificate-modal-container"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()} // Prevent close on modal click
              >
                {/* Header */}
                <div className="certificate-modal-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)' }}>
                    <ShieldCheck size={20} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.05rem', textTransform: 'uppercase' }}>Verified Credential</span>
                  </div>
                  <button 
                    className="certificate-modal-close"
                    onClick={() => setActiveCert(null)}
                    aria-label="Close Preview"
                    id="modal-close-btn"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="certificate-modal-content">
                  {/* Decorative visual preview badge */}
                  <div className="certificate-preview-placeholder">
                    <Award size={60} />
                    <span style={{ fontWeight: 600, fontSize: '1.1rem', color: '#ffffff' }}>{activeCert.issuer} Certified</span>
                  </div>

                  <div className="certificate-modal-meta">
                    <h3 className="certificate-modal-title">{activeCert.title}</h3>
                    <span className="certificate-modal-issuer">{activeCert.issuer}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', marginTop: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                      Credential ID: {activeCert.credentialId}
                    </span>
                  </div>

                  <p className="certificate-modal-desc">{activeCert.description}</p>

                  <div className="certificate-modal-actions">
                    <a
                      href={activeCert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-primary"
                      id={`modal-external-link-${activeCert.id}`}
                    >
                      <ExternalLink size={16} /> Verify Credential
                    </a>
                    <button
                      className="project-btn project-btn-secondary"
                      onClick={() => setActiveCert(null)}
                      id="modal-dismiss-btn"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
