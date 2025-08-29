import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "raviraman03111996@gmail.com",
      link: "mailto:raviraman03111996@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 88-510-48263",
      link: "tel:+918851048263"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Delhi, Pan India",
      link: null
    }
  ];


  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to work together? Let's discuss your next project
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info-full">
            <div className="contact-intro">
              <h3>Let's Start a Conversation</h3>
              <p>
                I'm always interested in new opportunities, whether it's a full-time position, 
                freelance project, or just a chat about technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
