import React from 'react';
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
        "Built Agentic AI workflows and RAG pipelines using LangChain and OpenAI API to automate content generation and intelligent data retrieval",
        "Engineered real-time data aggregation and filtering modules, enabling client-specific reporting and reducing query response time by 25%",
        "Deployed MongoDB and MySQL to streamline data storage, achieving 30% faster server-side retrieval and reducing downtime by 20%",
        "Utilized AWS services (EC2, S3, Lambda, VPC) for cloud-native deployment, networking, and scalable infrastructure management",
        "Automated and visualized daily test results, reducing report preparation time from 2 hours to 10 minutes",
        "Managed backend schema for 'Giz Technology' with Node.js and PHP, ensuring efficient data processing, API integration, and robust server operations",
        "Led front-end optimization efforts for Giz Next, improving page load speed by 35% and optimizing database queries to support 20K+ daily users"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "MySQL", "Redux", "AWS", "Express.js", "PHP", "LangChain", "OpenAI API", "RAG"]
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
};

export default Experience;
