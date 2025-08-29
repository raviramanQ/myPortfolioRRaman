import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Ravi Raman</h3>
              <p>Full Stack Software Developer</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li>Web Development</li>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>API Development</li>
                  <li>Database Design</li>
                  <li>Consulting</li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
            
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <p>Ready to work together?</p>
              <a href="mailto:raviraman03111996@gmail.com" className="footer-email">
                <FaEnvelope /> raviraman03111996@gmail.com
              </a>
              <div className="footer-social">
                <a href="https://github.com/raviramanQ" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/ravi-raman-56604a184/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:raviraman03111996@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} Ravi Raman. Made with <FaHeart className="heart" /> using React.js
              </p>
            </div>
            
            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
