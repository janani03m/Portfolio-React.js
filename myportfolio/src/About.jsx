import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <div className="about-container">
        <h2 className="section-heading">About Me</h2>
        <h2 className='abouth'>I'M A <span className='span'>
        <span>   </span>
        <span> CODER</span>
        <span> DEVELOPER</span>
        <span> DESIGNER</span>
        <span> PORTRAIT ARTIST</span>
        <span> PROBLEM SOLVER</span>
        <span> DREAMER</span>
        </span></h2>
        <p className="about-text">
          I'm <strong>M Janani</strong>, a passionate software developer with a strong interest in
          building intelligent, scalable, and user-friendly web applications.
          With hands-on experience in React, Django, Python, and MySQL, I strive to create
          innovative solutions that solve real-world problems. I enjoy learning new technologies
          and constantly improving my skills through real projects, collaboration, and self-learning.
        </p>
        <p className="about-text">
          My journey in tech began with curiosity and has grown into a career focused on creating
          impactful digital experiences. I'm committed to clean code, strong architecture, and
          intuitive design.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
