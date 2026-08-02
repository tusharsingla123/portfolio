import "./styles/About.css";
import { 
  SiPython, SiReact, SiDocker, SiNodedotjs 
} from "react-icons/si";
import { 
  FaBrain, FaCloud, FaDatabase, FaMicrochip 
} from "react-icons/fa6";

const About = () => {
  const skills = [
    { name: "React & TypeScript", icon: <SiReact color="#00ffd5" /> },
    { name: "Python & FastAPI & Flask", icon: <SiPython color="#00ffd5" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#00ffd5" /> },
    { name: "SQL & NoSQL Databases", icon: <FaDatabase color="#00ffd5" /> },
    { name: "Microsoft Azure", icon: <FaCloud color="#00ffd5" /> },
    { name: "Docker & Kubernetes & DevOps", icon: <SiDocker color="#00ffd5" /> },
    { name: "GenAI & RAG", icon: <FaBrain color="#00ffd5" /> },
    { name: "Machine Learning", icon: <FaMicrochip color="#00ffd5" /> },
  ];

  return (
    <div className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Skills Dashboard */}
        <div className="about-skills">
          <h3 className="skills-title">Core Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-badge" key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Biography */}
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            I'm an <strong>Assistant Manager - AI & Software Engineer at Tata Chemicals</strong>, passionate about building enterprise-grade software solutions powered by <strong>Artificial Intelligence</strong>, <strong>Cloud Technologies</strong>, and <strong>Modern Web Development</strong>. My work spans the complete software lifecycle—from designing scalable web applications and backend APIs to deploying production-ready solutions on <strong>Microsoft Azure</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
