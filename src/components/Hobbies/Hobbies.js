import React from 'react';
import { FaBook, FaPen, FaRunning, FaUtensils, FaMusic } from 'react-icons/fa';
import './Hobbies.css';

const Hobbies = () => {
  const books = [
    {
      title: "Biography of Indra Nooyi",
      wisdom: "Leadership isn't about being perfect—it's about being authentic, making tough decisions, and caring deeply about people while driving results."
    },
    {
      title: "Wings of Fire",
      wisdom: "Dream is not what you see in sleep, it's the thing which doesn't let you sleep. Success comes to those who dare to begin."
    },
    {
      title: "Think Like a Monk",
      wisdom: "The mind is everything. What you think you become. Train your mind to see the good in everything, and you'll find peace in any situation."
    },
    {
      title: "Autobiography of B.R. Ambedkar",
      wisdom: "Education is the milk of lioness—whoever drinks it will roar. Fight for justice, equality, and never let circumstances define your destiny."
    },
    {
      title: "Indian History",
      wisdom: "Understanding our past illuminates our present. Every civilization rises through knowledge, falls through ignorance, and rebuilds through wisdom."
    },
    {
      title: "India Before Independence",
      wisdom: "Freedom is not given, it's earned through sacrifice. The struggles of yesterday teach us to value the opportunities of today."
    },
    {
      title: "Can't Hurt Me - David Goggins",
      wisdom: "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential."
    },
    {
      title: "Attitude is Everything - Jeff Keller",
      wisdom: "Your attitude determines your altitude. Positive thinking isn't about expecting the best to happen—it's about accepting whatever happens for the best."
    },
    {
      title: "Steve Jobs Biography",
      wisdom: "Innovation distinguishes between a leader and a follower. Stay hungry, stay foolish, and never settle for anything less than extraordinary."
    },
    {
      title: "Doglapan - Ashneer Grover",
      wisdom: "Entrepreneurship is about taking calculated risks, learning from failures, and never compromising on your vision despite criticism."
    },
    {
      title: "Mossad",
      wisdom: "Intelligence is not just about gathering information—it's about understanding human nature, building trust, and making split-second decisions."
    },
    {
      title: "Discipline is Everything",
      wisdom: "Discipline is the bridge between goals and accomplishment. Small daily improvements lead to stunning long-term results."
    }
  ];

  const hobbies = [
    {
      icon: <FaBook />,
      title: "Reading",
      description: "Non-fictional book enthusiast",
      details: "I'm passionate about reading non-fiction books, especially biographies, self-help, and Indian history. Books have shaped my perspective and continue to inspire my personal growth."
    },
    {
      icon: <FaPen />,
      title: "Journaling",
      description: "Reflective writing",
      details: "Writing journals helps me reflect on my experiences, track my progress, and organize my thoughts. It's a therapeutic practice that enhances my self-awareness."
    },
    {
      icon: <FaRunning />,
      title: "Running",
      description: "Fitness enthusiast",
      details: "Running is my way to stay physically fit and mentally sharp. It helps me clear my mind, build endurance, and maintain a healthy lifestyle."
    },
    {
      icon: <FaUtensils />,
      title: "Cooking",
      description: "Culinary explorer",
      details: "I enjoy experimenting with different cuisines and creating delicious meals. Cooking is both a creative outlet and a way to connect with my cultural roots."
    },
    {
      icon: <FaMusic />,
      title: "Music",
      description: "Old Hindi songs lover",
      details: "I have a deep appreciation for classic Hindi music. These timeless melodies provide relaxation and connect me to the rich musical heritage of India."
    }
  ];

  return (
    <section id="hobbies" className="hobbies">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Hobbies</h2>
          <p className="section-subtitle">
            Beyond coding, I pursue various interests that enrich my life and broaden my perspective
          </p>
        </div>

        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <div className="hobby-icon">
                {hobby.icon}
              </div>
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
              <p className="hobby-details">{hobby.details}</p>
            </div>
          ))}
        </div>

        <div className="reading-section">
          <h3 className="reading-title">Books I've Read</h3>
          <div className="books-grid">
            {books.map((book, index) => (
              <div key={index} className="book-item">
                <FaBook className="book-icon" />
                <div className="book-content">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-wisdom">{book.wisdom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
