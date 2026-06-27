import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p className="footer-copy">© {new Date().getFullYear()} Ravi Raman — Full Stack Developer & AI Engineer</p>
      <div className="footer-social">
        <a href="https://github.com/raviramanQ" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/ravi-raman-56604a184/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:raviraman03111996@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
