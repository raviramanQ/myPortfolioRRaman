import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaDocker, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiRedux, SiPostman, SiNextdotjs, SiMysql, SiRedis, SiElasticsearch, SiJenkins, SiBitbucket, SiWordpress, SiCplusplus, SiC, SiJquery } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = entry.target.getAttribute('data-skill-index');
            setAnimatedSkills(prev => new Set([...prev, skillIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('.skill-badge');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "PHP", icon: <FaPhp />, level: 85 },
        { name: "C++", icon: <SiCplusplus />, level: 75 },
        { name: "C", icon: <SiC />, level: 70 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
        { name: "Redux", icon: <SiRedux />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
        { name: "jQuery", icon: <SiJquery />, level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 90 },
        { name: "Express.js", icon: <SiExpress />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "MySQL", icon: <SiMysql />, level: 80 },
        { name: "Redis", icon: <SiRedis />, level: 75 },
        { name: "Elasticsearch", icon: <SiElasticsearch />, level: 70 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "GitHub", icon: <FaGitAlt />, level: 90 },
        { name: "AWS", icon: <FaAws />, level: 75 },
        { name: "Docker", icon: <FaDocker />, level: 80 },
        { name: "Jenkins", icon: <SiJenkins />, level: 70 },
        { name: "Bitbucket", icon: <SiBitbucket />, level: 85 },
        { name: "Postman", icon: <SiPostman />, level: 90 },
        { name: "WordPress", icon: <SiWordpress />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="skills-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          {skillCategories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeCategory === category.title.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.title.toLowerCase())}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="skills-categories">
          {skillCategories
            .filter(category => activeCategory === 'all' || activeCategory === category.title.toLowerCase())
            .map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-section">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid-category">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const isAnimated = animatedSkills.has(skillKey);
                  return (
                    <div 
                      key={skillIndex} 
                      className={`skill-badge ${isAnimated ? 'animated' : ''}`}
                      data-skill-index={skillKey}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      {skill.level && (
                        <div className="skill-level">
                          <div className="skill-bar">
                            <div 
                              className="skill-progress"
                              style={{
                                width: isAnimated ? `${skill.level}%` : '0%',
                                transition: 'width 1.5s ease-out'
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Technical Expertise</h3>
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-number">3.5+</div>
                <div className="expertise-label">Years Experience</div>
              </div>
              <div className="expertise-item">
                <div className="expertise-number">12+</div>
                <div className="expertise-label">Technologies</div>
              </div>
              <div className="expertise-item">
                <div className="expertise-number">9+</div>
                <div className="expertise-label">Projects Completed</div>
              </div>
              <div className="expertise-item">
                <div className="expertise-number">100%</div>
                <div className="expertise-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
