import React from 'react';
import { FaBook, FaPen, FaRunning, FaUtensils, FaMusic } from 'react-icons/fa';
import './Hobbies.css';

const Hobbies = () => {
  const books = [
    "Biography of Indra Nooyi",
    "Wings of Fire",
    "Think Like a Monk",
    "Autobiography of B.R. Ambedkar",
    "Indian History",
    "India Before Independence",
    "Can't Hurt Me - David Goggins",
    "Attitude is Everything - Jeff Keller",
    "Steve Jobs Biography",
    "Doglapan - Ashneer Grover",
    "Mossad",
    "Discipline is Everything"
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
                <span className="book-title">{book}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
