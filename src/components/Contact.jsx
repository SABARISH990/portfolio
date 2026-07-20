import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, Mail, Phone, MapPin, Github, Linkedin, 
  MessageSquare, User, CheckCircle, AlertTriangle 
} from 'lucide-react';
import '../styles/contact.css';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [alertStatus, setAlertStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setAlertStatus({
      type: "error",
      message: "Please fill in all form fields before submitting.",
    });
    return;
  }

 try {
  await emailjs.send(
    "service_930c9yc",
    "template_ht21mp9",
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    "a-3BPpyMwsy1coUA_"
  );

  // Success
  setAlertStatus({
    type: "success",
    message: `Thank you ${formData.name}! Your message has been sent successfully.`,
  });

  // Clear form
  setFormData({
    name: "",
    email: "",
    message: "",
  });

} catch (error) {
  console.error("EmailJS Error:", error);

  setAlertStatus({
    type: "error",
    message: error.text || "Failed to send message.",
  });

  console.log("Status:", error.status);
  console.log("Text:", error.text);
}};

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05. Connection</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline"></div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Social/Direct contact info cards */}
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffffff' }}>
              Let's create something remarkable together.
            </h3>
            
            <p className="contact-info-intro">
              Whether you have a groundbreaking startup concept, a freelancing proposal, or simply want to chat 
              about clean software architecture, reach out! My channels are always open.
            </p>

            <div className="contact-cards-list">
              {/* Email Card */}
              <a href="mailto:sabarish5763@gmail.com" className="glass-card contact-info-card" id="contact-card-email">
                <div className="contact-card-icon-wrap">
                  <Mail size={20} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-title">Email Me</span>
                  <span className="contact-card-value">sabarish5763@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a href="https://wa.me/9361209066" target="_blank" rel="noreferrer" className="glass-card contact-info-card" id="contact-card-whatsapp">
                <div className="contact-card-icon-wrap">
                  <Phone size={20} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-title">WhatsApp Chat</span>
                  <span className="contact-card-value">+91 93612 09066</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass-card contact-info-card">
                <div className="contact-card-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-title">Location</span>
                  <span className="contact-card-value">Tiruppur, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div
            className="glass-card contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Display validation or success messages */}
            {alertStatus && (
              <div className={`contact-alert ${alertStatus.type === 'success' ? 'contact-alert-success' : 'contact-alert-error'}`} style={{
                background: alertStatus.type === 'success' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                border: alertStatus.type === 'success' ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)',
                color: alertStatus.type === 'success' ? '#34D399' : '#F87171',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {alertStatus.type === 'success' ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                <span>{alertStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className={`form-group ${focusedField === 'name' ? 'form-group-focus' : ''}`}>
                <label className="form-label" htmlFor="name">
                  <User size={12} style={{ display: 'inline', marginRight: '6px' }} /> Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="sabarish"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className={`form-group ${focusedField === 'email' ? 'form-group-focus' : ''}`}>
                <label className="form-label" htmlFor="email">
                  <Mail size={12} style={{ display: 'inline', marginRight: '6px' }} /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="sabarish@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Message Field */}
              <div className={`form-group ${focusedField === 'message' ? 'form-group-focus' : ''}`}>
                <label className="form-label" htmlFor="message">
                  <MessageSquare size={12} style={{ display: 'inline', marginRight: '6px' }} /> Detailed Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="I'd love to work together on a modular React project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Action Submit */}
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                id="submit-form-btn"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
