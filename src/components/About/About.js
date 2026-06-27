import React from 'react';
import './About.css';

const About = () => (
  <main className="page">
    <div className="container">
      <div className="section-number"><span>№ 02</span></div>
      <h1 className="page-headline">About <span className="amber">me.</span></h1>
      <div className="amber-rule" />

      <div className="about-grid">
        <div className="about-text">
          <p>
            Full Stack developer with <strong>5 years</strong> building scalable web applications,
            AI-powered pipelines, and cloud systems. Currently at{' '}
            <span className="amber">Vansun Media Tech</span> as a Full Stack Developer.
          </p>
          <p>
            Expert in the <span className="amber">MERN stack</span> and <span className="amber">PHP</span>,
            with deep experience in Agentic AI, Retrieval-Augmented Generation (RAG), and Generative AI
            using LangChain and OpenAI. Two years of hands-on AWS and networking — EC2, S3, Lambda, VPC.
          </p>
          <p>
            I hold a B.Tech in Computer Science from Manav Rachna International Institute of Research
            and Studies, Delhi NCR. I'm passionate about building systems that are fast, intelligent,
            and built to scale.
          </p>
        </div>

        <div className="about-info">
          <div className="left-border-card">
            <p className="label">Name</p>
            <p className="value">Ravi Raman</p>
          </div>
          <div className="left-border-card">
            <p className="label">Location</p>
            <p className="value">Delhi, Pan India</p>
          </div>
          <div className="left-border-card">
            <p className="label">Experience</p>
            <p className="value">5 Years</p>
          </div>
          <div className="left-border-card">
            <p className="label">Specialization</p>
            <p className="value">MERN · PHP · Agentic AI · RAG · AWS</p>
          </div>
          <div className="left-border-card">
            <p className="label">Email</p>
            <p className="value">
              <a href="mailto:raviraman03111996@gmail.com" className="amber-link">raviraman03111996@gmail.com</a>
            </p>
          </div>
          <div className="left-border-card status-open">
            <p className="label">Status</p>
            <p className="value amber">Open to Opportunities</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default About;
