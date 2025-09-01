import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './index.css'; 
const Contact = () => {
  return (
    <div className='share'>
        <div className='ShareToggle'>
            <ion-icon Name='shareSocial'></ion-icon>
        </div>
      <li style="--i:0;clr: #1877f2">
        <a href="#"><i className="fab fa-facebook-f"></i></a></li>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} M Janani. All rights reserved.
        </p>
        <div className="footer-icons">
          <a href="https://github.com/janani03m" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/janani-m--aiml/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="mailto:janani03mohan@gmail.com">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
