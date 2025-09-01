import React from "react";
import Home from "./Home";
import "./index.css";
import About from "./About.jsx";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VideoBackground from './VideoBackground.jsx';

function App() {
  return (
    <>  <div className="app-container">
        <VideoBackground />

    <div className="App">
      <header className="navbar">
         <Navbar />
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
          <section id="about">
    <About />
  </section>
<section id="skills">
  <Skills />
</section>
<section id="projects">
  <Projects />
</section>
<section id="contact">
  <Contact />
</section>
      </main>

      <Footer/>
    
    </div>
    </div>
    </>
  );
}

export default App;
