import React from "react";
import healthImg from "./assets/health.webp";
import appointment from "./assets/appointment.jpg";
import portfolioImg from "./assets/portfolio.jpg";
import azure from "./assets/microsoft-azure-fundamentals-2.jpg";
import oracleaivector from "./assets/oracleaivector.jpg";
import MongoDB from "./assets/image.png";
import { motion } from "framer-motion";
import "./index.css";

const projectList = [
  {
    title: "Smart Health Monitoring System",
    description: "Real-time health tracker built with Django and MySQL. Includes appointment booking and personalized insights.",
    link: "https://github.com/janani03m/Smart-health-janani",
    image: healthImg,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio made using React, Framer Motion, and custom CSS animations.",
    link: "https://github.com/jananicode/portfolio",
    image: portfolioImg,
  },
  {
    title: "Appointment Booking App",
    description: "A full-stack appointment system using React and Django REST Framework.",
    link: "https://github.com/jananicode/appointment-app",
    image: appointment,
  },
];
const certificationList = [
  {
    title: "	Microsoft Azure Fundamentals",
    description: "Entry-level certification that validates basic knowledge of cloud concepts, Azure services, pricing, support, and security fundamentals.",
    link: "https://drive.google.com/file/d/1JactS3vsBp1YNeFEtu5UNhUvHDMxq5XD/view?usp=drive_link", 
    image: azure, 
  },
  {
    title: "Oracle AI Vector Search Professional",
    description: "Leveraging Oracle Database’s vector search to enable semantic search, retrieval-augmented generation (RAG), and AI-driven insights.",
    link: "https://drive.google.com/file/d/1lCumxX2e2NBb7OL5gLhjaJmhcrImPNo_/view?usp=drive_link", 
    image: oracleaivector,
  },
  {
    title: "Building GenAI Applications with MongoDB",
    description: "Leveraging MongoDB’s flexible, scalable database to efficiently store, manage, and retrieve unstructured data for powering generative AI applications.",
    link: "https://drive.google.com/file/d/1RmKNu-1A7YsqzMXykl5cdgvs95Ka5Zhc/view?usp=drive_link", 
    image: MongoDB,
  },
];
const Projects = () => {
  return (
    <>
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-container">
        <h2 className="section-heading">My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
      <motion.section
        id="certifications"
        className="projects-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="projects-container">
          <h2 className="section-heading">My Certifications</h2>
          <div className="projects-grid">
            {certificationList.map((cert, index) => (
              <motion.div
                key={index}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={cert.image} alt={cert.title} className="project-image" />
                <div className="project-info">
                  <h3 className="project-title">{cert.title}</h3>
                  <p className="project-description">{cert.description}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
    
  );
};

export default Projects;
