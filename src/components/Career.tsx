import { useEffect } from "react";
import "./styles/Career.css";
import { setAllTimeline } from "./utils/GsapScroll";

const Career = () => {
  useEffect(() => {
    setAllTimeline();
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GET - AI & Software Engineer</h4>
                <h5>Tata Chemicals</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed enterprise web applications, designed backend APIs, created interactive dashboards, and automated business workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Manager - AI & Software Engineer</h4>
                <h5>Tata Chemicals</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lead enterprise software engineering and AI solutions on Microsoft Azure. Design and deploy vector-database RAG platforms, vector search models, and cloud infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
