import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-content">
        <h1>Hello, I'm <span>M Janani</span></h1>
        <h2>A Passionate Full Stack Developer</h2>
        <p>
          I build responsive and scalable web applications using React, Django, Python, and MySQL.
          I love creating digital experiences that solve real-world problems.
        </p>
        <a href="#contact" className="home-button">Contact Me</a>
      </div>
      <div className="">
        <gif src="assets/profile.gif" alt="" />
      </div><br/>
    </motion.div>
  );
};

export default Home;
