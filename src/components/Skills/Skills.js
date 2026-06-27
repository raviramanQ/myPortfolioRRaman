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

        <div className="home-stats" style={{marginTop: '48px'}}>
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
