import React from 'react';
import { FaCode, FaServer, FaDatabase, FaMobile } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                I'm a dedicated Full Stack Software Developer with 3.5 years of experience 
                in creating robust, scalable web applications. Currently working at Vansun Media Tech 
                as a Full Stack Developer, I specialize in lead management systems, e-commerce platforms, 
                and API integrations that drive business growth.
              </p>
              
              <p>
                I have extensive expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) 
                along with modern technologies like Redis, MySQL, TypeScript, and cloud services. 
                My experience includes developing high-performance applications that serve 20K+ daily users 
                and optimizing systems for 40% efficiency improvements.
              </p>
              
              <p>
                I hold a Bachelor of Technology in Computer Science from Manav Rachna International 
                Institute of Research and Studies, Delhi NCR. I'm passionate about building scalable 
                solutions and continuously learning new technologies to enhance development efficiency 
                and user experience.
              </p>
            </div>
            
            <div className="personal-info">
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Name:</span>
                  <span className="value">Ravi Raman</span>
                </div>
                <div className="info-item">
                  <span className="label">Location:</span>
                  <span className="value">Delhi, Pan India</span>
                </div>
                <div className="info-item">
                  <span className="label">Experience:</span>
                  <span className="value">3.5 Years</span>
                </div>
                <div className="info-item">
                  <span className="label">Specialization:</span>
                  <span className="value">Full Stack MERN Development</span>
                </div>
                <div className="info-item">
                  <span className="label">Phone:</span>
                  <span className="value">+91 88-510-48263</span>
                </div>
                <div className="info-item">
                  <span className="label">Email:</span>
                  <span className="value">raviraman03111996@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="label">Availability:</span>
                  <span className="value">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Frontend Development</h3>
              <p>
                Creating responsive, interactive user interfaces using React.js, 
                HTML5, CSS3, and modern JavaScript frameworks.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaServer />
              </div>
              <h3>Backend Development</h3>
              <p>
                Building robust server-side applications with Node.js, Express.js, 
                and implementing secure RESTful APIs.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaDatabase />
              </div>
              <h3>Database Management</h3>
              <p>
                Designing and optimizing databases using MongoDB, MySQL, Redis, Elastic
                and implementing efficient data structures.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaMobile />
              </div>
              <h3>Responsive Design</h3>
              <p>
                Ensuring seamless user experience across all devices with 
                mobile-first approach and modern CSS frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
