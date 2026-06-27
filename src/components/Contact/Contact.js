import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const CONTACT_ROWS = [
  { icon: <FaEnvelope />, label: 'EMAIL', value: 'raviraman03111996@gmail.com', href: 'mailto:raviraman03111996@gmail.com' },
  { icon: <FaPhone />, label: 'PHONE', value: '+91 88-510-48263', href: 'tel:+918851048263' },
  { icon: <FaMapMarkerAlt />, label: 'LOCATION', value: 'Delhi, Pan India', href: null },
  { icon: <FaGithub />, label: 'GITHUB', value: 'github.com/raviramanQ', href: 'https://github.com/raviramanQ' },
  { icon: <FaLinkedin />, label: 'LINKEDIN', value: 'ravi-raman-56604a184', href: 'https://linkedin.com/in/ravi-raman-56604a184/' },
];

const Contact = () => (
  <main className="page">
    <div className="container">
      <div className="section-number"><span>№ 06</span></div>
      <h1 className="page-headline">Let's <span className="amber">talk.</span></h1>
      <div className="amber-rule" />

      <div className="contact-layout">
        <div>
          <p className="contact-intro">
            Open to full-time roles, freelance projects, and tech conversations.
            Reach out — I respond within 24 hours.
          </p>
          <div className="contact-rows">
            {CONTACT_ROWS.map(({ icon, label, value, href }) => (
              <div key={label} className="contact-row">
                <span className="contact-row-icon">{icon}</span>
                <span className="contact-row-label">{label}</span>
                {href
                  ? <a href={href} className="contact-row-value amber-link" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{value}</a>
                  : <span className="contact-row-value">{value}</span>
                }
              </div>
            ))}
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-box">
            <p className="cta-label">CURRENTLY AVAILABLE FOR</p>
            <ul className="cta-list">
              <li>Full-time positions</li>
              <li>Freelance / Contract</li>
              <li>AI / GenAI consulting</li>
              <li>Open source collaboration</li>
            </ul>
            <a
              href="mailto:raviraman03111996@gmail.com"
              className="btn-solid"
              style={{marginTop:'20px'}}
            >
              SAY HELLO
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
