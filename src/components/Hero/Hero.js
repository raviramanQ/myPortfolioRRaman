import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Home = () => (
  <main className="page home-page">
    <div className="container">
      <div className="section-number"><span>№ 01</span></div>

      <div className="home-grid">
        <div className="home-content">
          <p className="home-kicker">MERN/MEAN Stack Developer · 5+ YRS Experiance</p>
          <h1 className="page-headline home-headline">
          Senior Software  <br /> Engineer <br />
            <span className="amber">AI the future</span><br />
          
          </h1>
          <p className="home-tagline">
            MERN · Agentic AI · Generative AI · RAG · AWS · PHP · Networking
          </p>

          <div className="home-ctas">
            <Link to="/projects" className="btn-outline">VIEW WORK</Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1p-_a5zYJ30W-DIUea7SElhXoLjGEb52C"
              className="btn-solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> DOWNLOAD CV
            </a>
          </div>

          <div className="home-social">
            <a href="https://github.com/raviramanQ" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/ravi-raman-56604a184/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:raviraman03111996@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="home-right">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <img src="/profile-photo.jpg" alt="Ravi Raman" className="avatar-photo" onError={e => { e.target.style.display='none'; }} />
              <div className="avatar-fallback">RR</div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-stats">
        <div className="stat">
          <span className="stat-num">5+</span>
          <span className="stat-label">YRS EXPERIENCE</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">12+</span>
          <span className="stat-label">PROJECTS</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">20+</span>
          <span className="stat-label">TECHNOLOGIES</span>
        </div>
      </div>
    </div>

    <div className="home-blob blob-1" />
    <div className="home-blob blob-2" />
  </main>
);

export default Home;
