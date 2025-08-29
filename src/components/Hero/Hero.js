import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone, FaCalendar, FaCode, FaCogs, FaArrowDown, FaJs } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiRedis } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-intro">
              <span className="greeting">Hello, I'm</span>
              <h1 className="hero-name">Ravi Raman</h1>
              <h2 className="hero-role">Full Stack Developer</h2>
              <p className="hero-tagline">Building scalable web apps | MERN | API integrations</p>
            </div>
            
            <p className="hero-description">
              Full Stack Software Developer with 3.5 years of experience 
              in MERN stack development. Specialize in building scalable web applications 
              using React, Node.js, MongoDB, MySQL, Redis, and Express.js. 
              Expert in lead management systems, e-commerce platforms, and API integrations.
            </p>
            
            <div className="hero-metrics">
              <div className="metric-card">
                <FaCalendar className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-number">3.5+</span>
                  <span className="metric-label">Years Experience</span>
                </div>
              </div>
              <div className="metric-card">
                <FaCode className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-number">9+</span>
                  <span className="metric-label">Projects Completed</span>
                </div>
              </div>
              <div className="metric-card">
                <FaCogs className="metric-icon" />
                <div className="metric-info">
                  <span className="metric-number">12+</span>
                  <span className="metric-label">Technologies</span>
                </div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a 
                href="https://drive.google.com/uc?export=download&id=1WrsaJ83sot4d1MAVOZ8lDgEVoDXPtdS6" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaDownload /> Download CV
              </a>
              <button className="btn btn-secondary" onClick={scrollToAbout}>
                Get in Touch
              </button>
            </div>
            
            <div className="hero-social">
              <a href="https://github.com/raviramanQ" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ravi-raman-56604a184/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:raviraman03111996@gmail.com">
                <FaEnvelope />
              </a>
              <a href="tel:+918851048263">
                <FaPhone />
              </a>
            </div>
            
            <div className="tech-stack">
              <div className="tech-item">
                <SiReact />
                <span>React</span>
              </div>
              <div className="tech-item">
                <SiNodedotjs />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <SiMongodb />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <SiMysql />
                <span>MySQL</span>
              </div>
              <div className="tech-item">
                <SiRedis />
                <span>Redis</span>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="profile-container">
              <div className="profile-image">
                <img 
                  src="/profile-photo.jpg" 
                  alt="Ravi Raman" 
                  className="profile-photo"
                />
              </div>
              <div className="floating-tech">
                <div className="floating-badge react">
                  <SiReact /> React
                </div>
                <div className="floating-badge nodejs">
                  <SiNodedotjs /> Node.js
                </div>
                <div className="floating-badge mongodb">
                  <SiMongodb /> MongoDB
                </div>
                <div className="floating-badge javascript">
                  <FaJs /> JavaScript
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <FaArrowDown />
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
