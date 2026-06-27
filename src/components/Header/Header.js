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
        <NavLink to="/" className="navbar-logo">RAVI RAMAN</NavLink>

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
          <a
            href="https://drive.google.com/uc?export=download&id=1p-_a5zYJ30W-DIUea7SElhXoLjGEb52C"
            className="nav-hire-mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
           CV
          </a>
        </nav>

        <a
          href="https://drive.google.com/uc?export=download&id=1p-_a5zYJ30W-DIUea7SElhXoLjGEb52C"
          className="hire-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
