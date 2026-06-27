import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AstroStock",
      description: "Built AstroStock — a web app that takes time-of-birth (TOB), place-of-birth (POB), date-of-birth (DOB), investment amount and investment horizon, and suggests which **sector** to invest in based on astrological alignment combined with market-data insights.",
      image: "/api/placeholder/400/250",
      technologies: ["TypeScript", "Node.js", "React", "OpenAI API", "MongoDB", "Redis"],
      category: "fullstack",
      github: "https://github.com/raviramanQ/astrostock",
      live: "https://astro-stocks-9mizcyp24-raviramanqs-projects.vercel.app/",
      features: [
        "Integrated OpenAI API to fetch and summarise sector-related market news",
        "Implemented modular pipeline: (1) user input validation geolocation, (2) astrological alignment engine, (3) sector-scoring algorithm, (4) market-data enrichment, (5) result ranking explanation",
        "Designed backend in Node.js/Express with MongoDB for user profiles and Redis for caching computed charts and recent recommendations",
        "Focused on UX: step-by-step onboarding, clear risk disclaimers, and human-readable explanations for each sector recommendation"
      ]
    },
    {
      id: 2,
      title: "WhatsApp Webhook Integration for Vehicle Services",
      description: "Developed and deployed a complete end-to-end WhatsApp Webhook system to enable users to interact for vehicle-related services such as car price quotations, car insurance submissions, dealer information sharing, and selling inquiries.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "Node.js", "WhatsApp Business API"],
      category: "backend",
      github: "https://github.com/raviramanQ/whatsapp-webhook",
      live: "https://whatsapp-vehicle-services.herokuapp.com",
      features: [
        "Designed and implemented full backend and frontend architecture to handle real-time user communication",
        "Automated WhatsApp marketing campaigns for lead generation and personalized customer engagement related to vehicle sales and dealership promotions",
        "Built dynamic message flows using text messages, image handling, and interactive templates to collect user data efficiently",
        "Configured and optimized the WhatsApp Business API for high-reliability message delivery and enhanced customer experience",
        "Implemented validation, authentication, error handling, and database integration to maintain a scalable, secure, and robust system"
      ]
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Engineered a scalable food delivery web application using React.js and Redux, achieving efficient component reusability and global state management.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "JavaScript", "HTML", "CSS", "Postman", "Git"],
      category: "fullstack",
      github: "https://github.com/raviramanQ/food-delivery-app",
      live: "https://food-delivery-demo.netlify.app",
      features: [
        "Implemented key user-facing features including dynamic restaurant listings, smart search functionality, cart operations, and secure user authentication",
        "Built and deployed RESTful backend services with Node.js and Express.js, managing restaurant APIs, user sessions, and real-time order processing",
        "Optimized frontend performance with lazy loading, code splitting, and responsive design principles, ensuring fast loading times and cross-device compatibility"
      ]
    },
    {
      id: 4,
      title: "91Wheels Community Platform",
      description: "Contributed to the development of the Community Feature, actively participating in discussions and feature development.",
      image: "/api/placeholder/400/250",
      technologies: ["Redux", "REST API", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "Sequelize"],
      category: "fullstack",
      github: "https://github.com/raviramanQ/91wheels-community",
      live: "https://91wheels.com",
      features: [
        "Played a crucial role in the complete revamp of the product, rewriting the codebase from scratch",
        "Wrote in-house code scripts, showcasing proficiency in scripting languages",
        "Applied a diverse skill set in Redux, REST API, Next.js, Node.js, Express.js, MongoDB, MySQL, Redis, and Sequelize to implement and enhance various feature-rich functionalities",
        "Collaborated effectively with the team to ensure the successful integration of technologies for feature-rich functionalities"
      ]
    },
    {
      id: 5,
      title: "91Wheels ADMIN PANEL",
      description: "Spearheaded the development and management of Admin panel applications using Javascript, PHP, Redis, MongoDB, MySQL, Elastic.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "PHP", "MySQL", "MongoDB", "Redis"],
      category: "fullstack",
      github: "",
      live: "http://backenduat.91wheels.com/tp-admin/authenticator/signin",
      features: [
        "Designed and implemented core key features and modules using Object-Oriented Programming (OOP) principles, prioritizing scalability, code modularity, and facilitating seamless future development",
        "Designed and integrated modules for data aggregation, client-specific data filtering, and customized data delivery via various API formats, employing MongoDB and MySQL for efficient data storage on the server"
      ]
    },
    {
      id: 6,
      title: "Agentic AI RAG Pipeline",
      description: "Built a production-grade Retrieval-Augmented Generation (RAG) pipeline with agentic capabilities. The system ingests documents, indexes them into a vector store, and uses an LLM agent to answer complex multi-hop questions with source citations.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "LangChain", "OpenAI API", "Pinecone", "Node.js", "React", "AWS Lambda"],
      category: "ai",
      github: "https://github.com/raviramanQ/agentic-rag-pipeline",
      live: "",
      features: [
        "Designed multi-agent orchestration using LangChain with tool-calling for document retrieval, summarization, and fact-checking",
        "Implemented semantic chunking and embedding pipeline with OpenAI embeddings stored in Pinecone vector DB",
        "Built REST API with Node.js/Express exposing the RAG pipeline and deployed serverlessly on AWS Lambda",
        "Created React frontend with streaming responses, source citation display, and conversation history management"
      ]
    },
    {
      "id": 8,
      "title": "Editorial Vocabulary Quiz App",
      "description": "Developed an interactive React-based quiz application for practicing advanced editorial vocabulary with timed MCQs, progress tracking, and detailed explanations. Deployed on GitHub Pages for global accessibility.",
      "image": "/api/placeholder/400/250",
      "technologies": ["JavaScript", "React"],
      "category": "frontend",
      "github": "https://github.com/raviramanQ/editorial-mcq-quiz",
      "live": "https://raviramanq.github.io/editorial-mcq-quiz",
      "features": [
        "Built a responsive React application to deliver timed multiple-choice vocabulary quizzes with scoring and feedback",
        "Implemented date-based quiz selection and JSON-driven question management for flexible content updates",
        "Utilized process.env.PUBLIC_URL for correct asset resolution on GitHub Pages, ensuring smooth deployment and reliable data fetching",
        "Designed clean UI with navigation, timer, and results view to improve user engagement and learning outcomes"
      ]
    }
    
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai', label: 'AI / GenAI' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
};

export default Projects;
