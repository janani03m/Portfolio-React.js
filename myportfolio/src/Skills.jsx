import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, 
  FaJsSquare, FaNodeJs, FaJava 
} from 'react-icons/fa';
import { 
  SiPandas, SiNumpy, SiOpenai, SiCplusplus, SiMysql, SiDjango, 
  SiMongodb, SiScikitlearn, SiTensorflow, SiPytorch, SiFlask, 
  SiStreamlit, SiC, SiFlutter 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import './index.css';
const baseSkills = [
  // Machine Learning & AI
  { Icon: SiPandas, name: 'Pandas' },
  { Icon: SiNumpy, name: 'NumPy' },
  { Icon: SiOpenai, name: 'OpenAI' },

  // Programming Languages
  { Icon: FaPython, name: 'Python' },
  { Icon: SiC, name: 'C' },
  { Icon: SiCplusplus, name: 'C++' },
  { Icon: FaJava, name: 'Java' },
  { Icon: FaJsSquare, name: 'JavaScript' },

  // Frontend
  { Icon: FaHtml5, name: 'HTML' },
  { Icon: FaCss3Alt, name: 'CSS' },
  { Icon: FaReact, name: 'React' },

  // Backend
  { Icon: SiDjango, name: 'Django' },
  { Icon: FaNodeJs, name: 'Node.js' },

  // Databases
  { Icon: FaDatabase, name: 'SQL' },
  { Icon: SiMysql, name: 'MySQL' },
  { Icon: SiMongodb, name: 'MongoDB' },

  // Tools & Design
  { Icon: FaGitAlt, name: 'Git' },
  { Icon: FaFigma, name: 'Figma' },

  // Cross-platform
];

const baseSofts = [
  { name: 'Problem Solving' },
  { name: 'Teamwork' },
  { name: 'Creative Thinking' },
  { name: 'Leadership' },
  { name: 'Management Skills' },
  { name: 'Time Management' },
];
// Pad skills so there are always 9 cards
const skills = [...baseSkills];
while (skills.length < 18) skills.push({ Icon: null, name: '' });
const soft = [...baseSofts];
while (soft.length < 1) soft.push({  name: '' });

const Skills = () => (
  <motion.section
    id="skills"
    className="skills-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
  <motion.section
    id="soft"
    className="skills-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    </motion.section>     
    <h2 className="section-heading">My Skills</h2>
    <h3 className='h3'>Technical Skills</h3>
    <div className="skills-grid">
     
      {skills.map((skill, idx) => (
        skill.Icon
          ? <FlippableSkill key={skill.name} skill={skill} />
          : <div key={`empty-${idx}`} aria-hidden="true" style={{ width: '100px', height: '100px' }} />
      ))}
    </div>
    <h3 className='h3'>Soft Skills</h3>
    <div className="skills-grid">
  {soft.map((soft, idx) => (
    soft.name
      ? <div key={soft.name} className="skill-name">{soft.name}</div>
      : <div key={`empty-${idx}`} aria-hidden="true" style={{ width: '100px', height: '100px' }} />
  ))}
</div>
<a href="https://www.instagram.com/myyrandom_sketches/" className="portrait-button">Check out my Protrait page</a>
      
  </motion.section>
);

function FlippableSkill({ skill }) {
  const [isFlipped, setFlipped] = React.useState(false);
  const Icon = skill.Icon;

  return (
    <motion.div
      className="card-wrapper"
      tabIndex={0}
      onClick={() => setFlipped((prev) => !prev)}
      onKeyDown={(e) => ['Enter', ' '].includes(e.key) && setFlipped((prev) => !prev)} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className={`skill-card${isFlipped ? ' flipped' : ''}`}
        style={{ width: 60, height: 60}}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="face front">
          <Icon size={100} />
        </div>
        <div className="face back">
          <span className="skill-label">{skill.name}</span>
        </div>
        
      </motion.div>
    </motion.div>
      
    
  );
}

export default Skills;
