import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Software Developer",
      company: "Vansun Media Tech",
      location: "Gurugram, Haryana",
      duration: "February 2022 - Present",
      type: "Full-time",
      description: [
        "Spearheaded the development of a Lead Management System, improving lead allocation efficiency by 40% and reducing manual intervention by 60%",
        "Engineered real-time data aggregation and filtering modules, enabling client-specific reporting and reducing query response time by 25%",
        "Deployed MongoDB and MySQL to streamline data storage, achieving 30% faster server-side retrieval and reducing downtime by 20%",
        "Showcased expertise in 91 Wheels through in-house scripting using Redux, REST API",
        "Utilized AWS services (EC2, S3) for cloud-based deployment and data storage",
        "Automated and visualized daily test results, reducing report preparation time from 2 hours to 10 minutes",
        "Managed backend schema for 'Giz Technology' with Node.js, ensuring efficient data processing, API integration, and robust server operations",
        "Led front-end optimization efforts for Giz Next, improving page load speed by 35% and optimizing database queries to support 20K+ daily users"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "MySQL", "Redux", "AWS", "Express.js", "REST API"]
    },
    {
      title: "Full Stack Software Developer",
      company: "TyrePlex",
      location: "Gurugram, Haryana",
      duration: "March 2020 - January 2022",
      type: "Full-time",
      description: [
        "Designed and developed a scalable eCommerce backend using Node.js and Express, supporting 50K+ products and handling over 10K daily transactions",
        "Implemented dynamic product catalog APIs with advanced filtering, pagination, and search capabilities to enhance user experience and performance",
        "Developed secure user authentication and authorization workflows using JWT, enabling role-based access for customers, admins, and vendors",
        "Integrated payment gateways (Razorpay/Stripe) with order lifecycle management, ensuring smooth transactions and accurate order tracking",
        "Optimized database operations for MongoDB, reducing query execution time by 40% and enhancing checkout speed during peak traffic",
        "Built RESTful APIs for wishlist, cart, and order history features, ensuring smooth communication between frontend and backend services",
        "Conducted unit and integration testing using Mocha and Chai, achieving 90% code coverage and reducing production bugs by 50%"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Stripe", "RESTful APIs", "Mocha", "Chai"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Manav Rachna International Institute of Research and Studies",
      duration: "2016 - 2020",
      grade: "Delhi NCR, Faridabad",
      description: "Specialized in Computer Science and Engineering"
    },
    {
      degree: "12th and 10th Grade",
      institution: "Dev Samaj Modern School - Nehru Nagar",
      duration: "Primary Schooling",
      grade: "Delhi",
      description: "Completed secondary education with strong foundation in mathematics and sciences"
    }
  ];

  const certifications = [
    "MongoDB Certified Developer",
    "AWS Certified Cloud Practitioner",
    "React.js Professional Certificate",
    "Node.js Application Development",
    "Full Stack Web Development Bootcamp"
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="experience-content">
          {/* Work Experience */}
          <div className="experience-section">
            <h3 className="subsection-title">
              <FaBriefcase /> Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h4 className="job-title">{exp.title}</h4>
                      <div className="job-meta">
                        <span className="company">{exp.company}</span>
                        <span className="location">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                        <span className="duration">
                          <FaCalendarAlt /> {exp.duration}
                        </span>
                        <span className="job-type">{exp.type}</span>
                      </div>
                    </div>
                    
                    <ul className="job-description">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="technologies">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h4 className="degree">{edu.degree}</h4>
                <div className="institution-info">
                  <span className="institution">{edu.institution}</span>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
                <div className="grade">{edu.grade}</div>
                <p className="edu-description">{edu.description}</p>
              </div>
            ))}
            
            {/* Certifications */}
            <div className="certifications">
              <h4 className="cert-title">Certifications</h4>
              <div className="cert-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-item">
                    <span className="cert-name">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
