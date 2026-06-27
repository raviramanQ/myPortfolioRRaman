# Portfolio UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 2-year-old light theme with a bold deep-navy + amber-gold editorial dark theme, converting from single-page scroll to React Router page-based navigation.

**Architecture:** React Router v6 replaces the single-page scroll — each section (`/`, `/about`, `/skills`, `/projects`, `/experience`, `/contact`) is its own route. A shared `Navbar` and `Footer` wrap every page. All component logic and data stays unchanged; only CSS and App.js routing change.

**Tech Stack:** React 18, React Router DOM v6 (already installed), Framer Motion (already installed), react-icons (already installed)

---

## File Map

| Action | File | Purpose |
|---|---|---|
| Modify | `src/index.css` | Global CSS vars: navy/amber palette, reset, scrollbar |
| Modify | `src/App.js` | Add `<BrowserRouter>` + `<Routes>` with 6 routes |
| Modify | `src/App.css` | Strip old styles, set `#root` bg to navy |
| Replace | `src/components/Header/Header.js` | New `Navbar` — fixed top, amber active link, HIRE ME btn |
| Replace | `src/components/Header/Header.css` | New navbar styles |
| Replace | `src/components/Hero/Hero.js` | New `Home` page — editorial headline, stats, CTAs |
| Replace | `src/components/Hero/Hero.css` | Home page styles |
| Replace | `src/components/About/About.css` | Dark editorial about styles |
| Replace | `src/components/Skills/Skills.css` | Dark grid skills styles |
| Replace | `src/components/Projects/Projects.css` | Dark card grid projects styles |
| Replace | `src/components/Experience/Experience.css` | Dark timeline styles |
| Replace | `src/components/Contact/Contact.css` | Dark contact row styles |
| Replace | `src/components/Footer/Footer.js` | Minimal dark footer |
| Replace | `src/components/Footer/Footer.css` | Footer styles |
| Delete (unused) | `src/components/Biodata/` | Not in new design |
| Delete (unused) | `src/components/Hobbies/` | Not in new design |

---

## Task 1: Global CSS variables + reset

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`

- [ ] **Step 1: Replace `src/index.css` entirely**

```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --navy: #0a0f1e;
  --navy-surface: #111827;
  --navy-card: #1e293b;
  --amber: #f59e0b;
  --amber-dim: #f59e0b22;
  --amber-border: #f59e0b44;
  --text-primary: #f1f5f9;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --text-dimmer: #475569;
  --border-slate: #1e293b;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: var(--navy);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
}

a { text-decoration: none; color: inherit; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--navy); }
::-webkit-scrollbar-thumb { background: var(--amber-dim); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--amber); }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

@media (max-width: 768px) {
  .container { padding: 0 20px; }
}
```

- [ ] **Step 2: Replace `src/App.css` entirely**

```css
#root, .App {
  min-height: 100vh;
  background-color: var(--navy);
}

.page {
  min-height: calc(100vh - 60px);
  padding: 60px 0 80px;
}

.section-number {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 28px;
}

.section-number span {
  font-size: 9px;
  color: var(--amber);
  letter-spacing: 2px;
  padding-top: 3px;
  flex-shrink: 0;
}

.section-number::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--amber-dim);
  margin-top: 7px;
}

.page-headline {
  font-size: 48px;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.05;
  margin-bottom: 12px;
}

.page-headline .amber { color: var(--amber); }

.amber-rule {
  width: 28px;
  height: 2px;
  background: var(--amber);
  margin-bottom: 24px;
}

.amber-tag {
  display: inline-block;
  background: var(--navy-card);
  border: 0.5px solid var(--amber-border);
  color: var(--amber);
  font-size: 10px;
  padding: 3px 10px;
  letter-spacing: 1px;
  border-radius: 2px;
}

.left-border-card {
  background: var(--navy-surface);
  border-left: 2px solid var(--amber);
  padding: 12px 16px;
}

.left-border-card .label {
  font-size: 8px;
  color: var(--text-dimmer);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.left-border-card .value {
  font-size: 13px;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .page-headline { font-size: 34px; }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/index.css src/App.css
git commit -m "style: global CSS variables and shared utilities for dark editorial theme"
```

---

## Task 2: App.js — React Router page-based routing

**Files:**
- Modify: `src/App.js`

- [ ] **Step 1: Replace `src/App.js`**

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 2: Verify dev server compiles without errors**

```bash
# Check terminal running `npm start` for compilation errors
# Expected: "Compiled successfully"
```

- [ ] **Step 3: Commit**

```bash
git add src/App.js
git commit -m "feat: add React Router v6 page-based routing"
```

---

## Task 3: Navbar

**Files:**
- Modify: `src/components/Header/Header.js`
- Modify: `src/components/Header/Header.css`

- [ ] **Step 1: Replace `src/components/Header/Header.js`**

```jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo">RR</NavLink>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://drive.google.com/uc?export=download&id=1WrsaJ83sot4d1MAVOZ8lDgEVoDXPtdS6"
          className="hire-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          HIRE ME
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
```

- [ ] **Step 2: Replace `src/components/Header/Header.css`**

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  background: var(--navy);
  border-bottom: 0.5px solid var(--amber-dim);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar-logo {
  font-size: 16px;
  font-weight: 800;
  color: var(--amber);
  letter-spacing: 1px;
}

.navbar-links {
  display: flex;
  gap: 28px;
}

.nav-link {
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--text-dim);
  transition: color 0.2s;
}

.nav-link:hover { color: var(--text-muted); }

.nav-link.active {
  color: var(--amber);
  border-bottom: 1px solid var(--amber);
  padding-bottom: 1px;
}

.hire-btn {
  font-size: 9px;
  letter-spacing: 1.5px;
  border: 0.5px solid var(--amber);
  color: var(--amber);
  padding: 6px 14px;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;
}

.hire-btn:hover {
  background: var(--amber);
  color: var(--navy);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--amber);
  font-size: 18px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
    position: fixed;
    top: 60px;
    left: 0; right: 0;
    background: var(--navy);
    flex-direction: column;
    padding: 24px 32px;
    gap: 20px;
    border-bottom: 0.5px solid var(--amber-dim);
  }
  .navbar-links.open { display: flex; }
  .hire-btn { display: none; }
  .menu-toggle { display: block; }
}
```

- [ ] **Step 3: Check browser — navbar shows amber RR logo, nav links, HIRE ME button**

- [ ] **Step 4: Commit**

```bash
git add src/components/Header/Header.js src/components/Header/Header.css
git commit -m "feat: new dark editorial navbar with React Router NavLink"
```

---

## Task 4: Home page (replaces Hero)

**Files:**
- Modify: `src/components/Hero/Hero.js`
- Modify: `src/components/Hero/Hero.css`

- [ ] **Step 1: Replace `src/components/Hero/Hero.js`**

```jsx
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
          <p className="home-kicker">FULL STACK · AI ENGINEER · 5 YRS</p>
          <h1 className="page-headline home-headline">
            Building<br />
            <span className="amber">the future</span><br />
            with code<span className="amber">.</span>
          </h1>
          <p className="home-tagline">
            MERN · PHP · Agentic AI · Generative AI · RAG · AWS · Networking
          </p>

          <div className="home-ctas">
            <Link to="/projects" className="btn-outline">VIEW WORK</Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1WrsaJ83sot4d1MAVOZ8lDgEVoDXPtdS6"
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
              <img src="/profile-photo.jpg" alt="Ravi Raman" className="avatar-photo" />
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
```

- [ ] **Step 2: Replace `src/components/Hero/Hero.css`**

```css
.home-page {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding-top: 80px;
}

.home-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 60px;
  align-items: center;
  margin-bottom: 60px;
}

.home-kicker {
  font-size: 10px;
  color: var(--amber);
  letter-spacing: 2.5px;
  margin-bottom: 16px;
}

.home-headline {
  font-size: 64px;
  margin-bottom: 20px;
}

.home-tagline {
  font-size: 11px;
  color: var(--text-dimmer);
  letter-spacing: 1px;
  line-height: 1.8;
  margin-bottom: 36px;
}

.home-ctas {
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.btn-outline {
  font-size: 10px;
  letter-spacing: 1.5px;
  border: 0.5px solid var(--amber);
  color: var(--amber);
  padding: 10px 22px;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;
}

.btn-outline:hover { background: var(--amber); color: var(--navy); }

.btn-solid {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 10px;
  letter-spacing: 1.5px;
  background: var(--amber);
  color: var(--navy);
  padding: 10px 22px;
  border-radius: 2px;
  font-weight: 700;
  transition: opacity 0.2s;
}

.btn-solid:hover { opacity: 0.88; }

.home-social {
  display: flex;
  gap: 16px;
}

.home-social a {
  color: var(--text-dim);
  font-size: 18px;
  transition: color 0.2s;
}

.home-social a:hover { color: var(--amber); }

.avatar-ring {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 2px solid var(--amber);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.avatar-inner {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: var(--navy-surface);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar-fallback {
  font-size: 52px;
  font-weight: 800;
  color: var(--amber);
}

.avatar-photo + .avatar-fallback { display: none; }
.avatar-photo:not([src]), .avatar-photo[src=""] { display: none; }
.avatar-photo[src="/profile-photo.jpg"]:not([complete]) + .avatar-fallback { display: flex; }

.home-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 32px;
  border-top: 0.5px solid var(--border-slate);
}

.stat { text-align: center; }

.stat-num {
  display: block;
  font-size: 32px;
  font-weight: 800;
  color: var(--amber);
  line-height: 1;
}

.stat-label {
  display: block;
  font-size: 8px;
  color: var(--text-dimmer);
  letter-spacing: 1.5px;
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-slate);
}

.home-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.blob-1 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, #f59e0b08, transparent 70%);
  top: -80px;
  right: -60px;
}

.blob-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #f59e0b05, transparent 70%);
  bottom: 40px;
  left: 120px;
}

@media (max-width: 900px) {
  .home-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .home-right { display: none; }
  .home-headline { font-size: 44px; }
}

@media (max-width: 480px) {
  .home-headline { font-size: 34px; }
  .home-stats { gap: 20px; }
}
```

- [ ] **Step 3: Check browser at `http://localhost:3000` — editorial headline, amber accents, stat counters**

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero/Hero.js src/components/Hero/Hero.css
git commit -m "feat: new editorial Home page with amber headline, stats, CTAs"
```

---

## Task 5: About page

**Files:**
- Modify: `src/components/About/About.js`
- Modify: `src/components/About/About.css`

- [ ] **Step 1: Replace `src/components/About/About.js`**

```jsx
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
```

- [ ] **Step 2: Replace `src/components/About/About.css`**

```css
.about-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 60px;
  align-items: flex-start;
}

.about-text p {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.85;
  margin-bottom: 18px;
}

.about-text strong { color: var(--text-primary); font-weight: 500; }

.about-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.amber-link { color: var(--amber); }
.amber-link:hover { text-decoration: underline; }

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
```

- [ ] **Step 3: Check `/about` in browser**

- [ ] **Step 4: Commit**

```bash
git add src/components/About/About.js src/components/About/About.css
git commit -m "feat: dark editorial About page"
```

---

## Task 6: Skills page

**Files:**
- Modify: `src/components/Skills/Skills.js`
- Modify: `src/components/Skills/Skills.css`

- [ ] **Step 1: Replace `src/components/Skills/Skills.js`**

```jsx
import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaDocker, FaPhp, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiRedux, SiNextdotjs, SiMysql, SiRedis, SiElasticsearch, SiJenkins, SiBitbucket, SiPostman } from 'react-icons/si';
import './Skills.css';

const CATEGORIES = [
  {
    key: 'frontend', label: 'Frontend',
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
    ]
  },
  {
    key: 'backend', label: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'REST APIs', icon: <FaCode /> },
    ]
  },
  {
    key: 'ai', label: 'AI / GenAI',
    skills: [
      { name: 'Generative AI', icon: <FaCode /> },
      { name: 'Agentic AI', icon: <FaCode /> },
      { name: 'RAG', icon: <FaCode /> },
      { name: 'LangChain', icon: <FaCode /> },
      { name: 'OpenAI API', icon: <FaCode /> },
      { name: 'Prompt Eng.', icon: <FaCode /> },
      { name: 'Vector DB', icon: <FaCode /> },
    ]
  },
  {
    key: 'database', label: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Elasticsearch', icon: <SiElasticsearch /> },
    ]
  },
  {
    key: 'cloud', label: 'Cloud / AWS',
    skills: [
      { name: 'AWS EC2', icon: <FaAws /> },
      { name: 'AWS S3', icon: <FaAws /> },
      { name: 'AWS Lambda', icon: <FaAws /> },
      { name: 'VPC / Networking', icon: <FaCode /> },
      { name: 'Load Balancing', icon: <FaCode /> },
    ]
  },
  {
    key: 'tools', label: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'Bitbucket', icon: <SiBitbucket /> },
      { name: 'Postman', icon: <SiPostman /> },
    ]
  },
];

const Skills = () => {
  const [active, setActive] = useState('all');
  const shown = active === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.key === active);

  return (
    <main className="page">
      <div className="container">
        <div className="section-number"><span>№ 03</span></div>
        <h1 className="page-headline">Skills<span className="amber">.</span></h1>
        <div className="amber-rule" />

        <div className="skills-filters">
          <button className={`skill-filter-btn ${active === 'all' ? 'active' : ''}`} onClick={() => setActive('all')}>All</button>
          {CATEGORIES.map(c => (
            <button key={c.key} className={`skill-filter-btn ${active === c.key ? 'active' : ''}`} onClick={() => setActive(c.key)}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {shown.map(cat => (
            <div key={cat.key} className="skill-category">
              <p className="skill-cat-label">{cat.label.toUpperCase()}</p>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s.name} className="skill-tag">
                    <span className="skill-tag-icon">{s.icon}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-stats">
          <div className="stat"><span className="stat-num">5+</span><span className="stat-label">YRS EXPERIENCE</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">20+</span><span className="stat-label">TECHNOLOGIES</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">12+</span><span className="stat-label">PROJECTS</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">100%</span><span className="stat-label">COMMITTED</span></div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
```

- [ ] **Step 2: Replace `src/components/Skills/Skills.css`**

```css
.skills-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.skill-filter-btn {
  font-size: 9px;
  letter-spacing: 1.5px;
  border: 0.5px solid var(--border-slate);
  color: var(--text-dim);
  background: none;
  padding: 6px 14px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
}

.skill-filter-btn:hover { border-color: var(--amber-border); color: var(--text-muted); }
.skill-filter-btn.active { border-color: var(--amber); color: var(--amber); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 60px;
}

.skill-category {
  background: var(--navy-surface);
  border: 0.5px solid var(--border-slate);
  padding: 20px;
}

.skill-cat-label {
  font-size: 8px;
  color: var(--amber);
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: var(--text-muted);
  background: var(--navy-card);
  padding: 4px 10px;
  border-radius: 2px;
}

.skill-tag-icon {
  font-size: 12px;
  color: var(--amber);
  display: flex;
  align-items: center;
}

.skills-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 32px;
  border-top: 0.5px solid var(--border-slate);
  flex-wrap: wrap;
}
```

- [ ] **Step 3: Check `/skills` in browser — category grid, filter buttons, stats**

- [ ] **Step 4: Commit**

```bash
git add src/components/Skills/Skills.js src/components/Skills/Skills.css
git commit -m "feat: dark editorial Skills page with category filters"
```

---

## Task 7: Projects page

**Files:**
- Modify: `src/components/Projects/Projects.js`
- Modify: `src/components/Projects/Projects.css`

- [ ] **Step 1: Replace `src/components/Projects/Projects.css`**

```css
.projects-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.proj-filter-btn {
  font-size: 9px;
  letter-spacing: 1.5px;
  border: 0.5px solid var(--border-slate);
  color: var(--text-dim);
  background: none;
  padding: 6px 14px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
}

.proj-filter-btn:hover { border-color: var(--amber-border); color: var(--text-muted); }
.proj-filter-btn.active { border-color: var(--amber); color: var(--amber); }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--navy-surface);
  border: 0.5px solid var(--border-slate);
  border-top: 2px solid var(--amber);
  padding: 24px;
  transition: border-color 0.2s, transform 0.2s;
}

.project-card:hover {
  border-color: var(--amber);
  transform: translateY(-3px);
}

.project-card.secondary { border-top-color: var(--border-slate); }
.project-card.secondary:hover { border-top-color: var(--amber); }

.project-cat {
  font-size: 8px;
  color: var(--amber);
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.project-card.secondary .project-cat { color: var(--text-dim); }

.project-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.project-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 14px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}

.project-tech span {
  font-size: 9px;
  color: var(--text-dim);
  background: var(--navy-card);
  padding: 3px 8px;
  border-radius: 2px;
}

.project-links {
  display: flex;
  gap: 12px;
}

.project-links a {
  font-size: 9px;
  letter-spacing: 1.5px;
  color: var(--amber);
  border: 0.5px solid var(--amber-border);
  padding: 5px 12px;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;
}

.project-links a:hover { background: var(--amber); color: var(--navy); }
```

- [ ] **Step 2: Update `src/components/Projects/Projects.js` — wrap with page layout and restyle cards**

Replace the return statement's JSX inside the existing `Projects` component (keep all the data arrays unchanged, only change the JSX render section):

```jsx
  return (
    <main className="page">
      <div className="container">
        <div className="section-number"><span>№ 04</span></div>
        <h1 className="page-headline">Projects<span className="amber">.</span></h1>
        <div className="amber-rule" />

        <div className="projects-filters">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`proj-filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.category === 'frontend' ? 'secondary' : ''}`}>
              <p className="project-cat">{project.category.toUpperCase()} {project.category === 'ai' ? '/ GENAI' : ''}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">LIVE</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
```

Also add `'page-headline'` and `'amber'` classes to the imports — they are globally available via App.css, no import needed.

- [ ] **Step 3: Check `/projects` in browser**

- [ ] **Step 4: Commit**

```bash
git add src/components/Projects/Projects.js src/components/Projects/Projects.css
git commit -m "feat: dark editorial Projects page with amber card borders"
```

---

## Task 8: Experience page

**Files:**
- Modify: `src/components/Experience/Experience.js`
- Modify: `src/components/Experience/Experience.css`

- [ ] **Step 1: Replace `src/components/Experience/Experience.css`**

```css
.experience-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.exp-section-title {
  font-size: 9px;
  letter-spacing: 2px;
  color: var(--amber);
  margin-bottom: 24px;
  text-transform: uppercase;
}

.timeline { display: flex; flex-direction: column; gap: 0; }

.timeline-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.timeline-spine {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  flex-shrink: 0;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--amber);
  flex-shrink: 0;
}

.timeline-dot.past { background: var(--border-slate); }

.timeline-line {
  width: 1px;
  flex: 1;
  min-height: 20px;
  background: var(--border-slate);
  margin-top: 4px;
}

.timeline-body {
  flex: 1;
  background: var(--navy-surface);
  border-left: 2px solid var(--amber);
  padding: 14px 16px;
  margin-bottom: 16px;
}

.timeline-body.past { border-left-color: var(--border-slate); }

.exp-role {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3px;
}

.exp-company {
  font-size: 11px;
  color: var(--amber);
  margin-bottom: 8px;
}

.timeline-body.past .exp-company { color: var(--text-muted); }

.exp-desc {
  font-size: 11px;
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 10px;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.exp-tech span {
  font-size: 8px;
  color: var(--text-dimmer);
  background: var(--navy-card);
  padding: 2px 7px;
  border-radius: 2px;
}

.edu-item {
  background: var(--navy-surface);
  border-left: 2px solid var(--amber);
  padding: 14px 16px;
  margin-bottom: 12px;
}

.edu-degree {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 3px;
}

.edu-inst {
  font-size: 11px;
  color: var(--amber);
  margin-bottom: 3px;
}

.edu-year { font-size: 10px; color: var(--text-dim); }

@media (max-width: 900px) {
  .experience-layout { grid-template-columns: 1fr; gap: 40px; }
}
```

- [ ] **Step 2: Replace the return JSX in `src/components/Experience/Experience.js`** (keep all data arrays unchanged):

```jsx
  return (
    <main className="page">
      <div className="container">
        <div className="section-number"><span>№ 05</span></div>
        <h1 className="page-headline">Experience<span className="amber">.</span></h1>
        <div className="amber-rule" />

        <div className="experience-layout">
          <div>
            <p className="exp-section-title">Work Experience</p>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-spine">
                    <div className={`timeline-dot ${i > 0 ? 'past' : ''}`} />
                    {i < experiences.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className={`timeline-body ${i > 0 ? 'past' : ''}`}>
                    <p className="exp-role">{exp.title}</p>
                    <p className="exp-company">{exp.company} · {exp.duration}</p>
                    <p className="exp-desc">{exp.description.slice(0, 3).join(' • ')}</p>
                    <div className="exp-tech">
                      {exp.technologies.map((t, j) => <span key={j}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="exp-section-title">Education</p>
            {education.map((edu, i) => (
              <div key={i} className="edu-item">
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-inst">{edu.institution}</p>
                <p className="edu-year">{edu.duration} · {edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
```

- [ ] **Step 3: Check `/experience` in browser**

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience/Experience.js src/components/Experience/Experience.css
git commit -m "feat: dark editorial Experience page with amber timeline"
```

---

## Task 9: Contact page

**Files:**
- Modify: `src/components/Contact/Contact.js`
- Modify: `src/components/Contact/Contact.css`

- [ ] **Step 1: Replace `src/components/Contact/Contact.js`**

```jsx
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
            <a href="mailto:raviraman03111996@gmail.com" className="btn-solid" style={{display:'inline-flex',marginTop:'20px'}}>
              SAY HELLO
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
```

- [ ] **Step 2: Replace `src/components/Contact/Contact.css`**

```css
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 60px;
  align-items: flex-start;
}

.contact-intro {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.85;
  margin-bottom: 32px;
  max-width: 480px;
}

.contact-rows { display: flex; flex-direction: column; gap: 10px; }

.contact-row {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--navy-surface);
  border-left: 2px solid var(--amber);
  padding: 12px 16px;
}

.contact-row-icon { font-size: 14px; color: var(--amber); flex-shrink: 0; }

.contact-row-label {
  font-size: 8px;
  letter-spacing: 1.5px;
  color: var(--text-dimmer);
  width: 70px;
  flex-shrink: 0;
}

.contact-row-value { font-size: 12px; color: var(--text-primary); }

.cta-box {
  background: var(--navy-surface);
  border: 0.5px solid var(--border-slate);
  border-top: 2px solid var(--amber);
  padding: 28px 24px;
}

.cta-label {
  font-size: 8px;
  letter-spacing: 2px;
  color: var(--amber);
  margin-bottom: 18px;
}

.cta-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cta-list li {
  font-size: 13px;
  color: var(--text-muted);
  padding-left: 16px;
  position: relative;
}

.cta-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--amber);
}

@media (max-width: 900px) {
  .contact-layout { grid-template-columns: 1fr; gap: 36px; }
}
```

- [ ] **Step 3: Check `/contact` in browser**

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact/Contact.js src/components/Contact/Contact.css
git commit -m "feat: dark editorial Contact page with rows and CTA box"
```

---

## Task 10: Footer

**Files:**
- Modify: `src/components/Footer/Footer.js`
- Modify: `src/components/Footer/Footer.css`

- [ ] **Step 1: Replace `src/components/Footer/Footer.js`**

```jsx
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
```

- [ ] **Step 2: Replace `src/components/Footer/Footer.css`**

```css
.footer {
  border-top: 0.5px solid var(--amber-dim);
  padding: 20px 0;
  background: var(--navy);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-copy {
  font-size: 10px;
  color: var(--text-dimmer);
  letter-spacing: 0.5px;
}

.footer-social { display: flex; gap: 16px; }

.footer-social a {
  color: var(--text-dim);
  font-size: 16px;
  transition: color 0.2s;
}

.footer-social a:hover { color: var(--amber); }
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer/Footer.js src/components/Footer/Footer.css
git commit -m "feat: minimal dark footer with social links"
```

---

## Task 11: Remove unused components + final cleanup

**Files:**
- Modify: `src/App.js` (already done in Task 2 — no Hobbies/Biodata imports)
- Delete: `src/components/Hobbies/` (entire folder)
- Delete: `src/components/Biodata/` (entire folder)

- [ ] **Step 1: Remove unused component folders**

```bash
rm -rf src/components/Hobbies src/components/Biodata
```

- [ ] **Step 2: Verify `npm start` still compiles cleanly — no references to Hobbies or Biodata remain**

- [ ] **Step 3: Add `.superpowers/` to `.gitignore` if not present**

```bash
grep -q '.superpowers' .gitignore || echo '.superpowers/' >> .gitignore
```

- [ ] **Step 4: Final build check**

```bash
npm run build 2>&1 | tail -10
# Expected: "Compiled successfully" or "The build folder is ready to be deployed."
```

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: remove unused Hobbies and Biodata components, add .superpowers to .gitignore"
```

---

## Task 12: Smoke test all pages

- [ ] Open `http://localhost:3000` — Home page loads, headline visible, amber accents correct
- [ ] Click **About** — dark grid layout, left-border info cards
- [ ] Click **Skills** — category grid, filter buttons work
- [ ] Click **Projects** — card grid, filter tabs work, amber top-border on featured cards
- [ ] Click **Experience** — amber timeline dot on current job, slate on past
- [ ] Click **Contact** — contact rows with amber left border, CTA box
- [ ] Mobile (resize to 375px) — hamburger menu appears, layouts stack vertically
- [ ] **HIRE ME** button links to CV download
- [ ] Footer social icons link correctly

```bash
git tag v2.0-dark-editorial
```
