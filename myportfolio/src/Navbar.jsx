import React, { useState } from 'react';
import './index.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo"></div>

      {/* Mobile Toggle Button */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation List */}
      <ul className={`nav-list d-flex ${isOpen ? 'active' : ''}`}>
        <li><button onClick={() => scrollToSection("home")}><i className="bi bi-house"></i>Home</button></li>
        <li><button onClick={() => scrollToSection("about")}><i className="bi bi-file-earmark-person"></i>About</button></li>
        <li><button onClick={() => scrollToSection("skills")}><i className="bi bi-card-checklist"></i>Skills</button></li>
        <li><button onClick={() => scrollToSection("projects")}><i className="bi bi-cast"></i>Projects</button></li>
        <li><button onClick={() => scrollToSection("contact")}><i className="bi bi-person-lines-fill"></i>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
