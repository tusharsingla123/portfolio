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
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Lead enterprise software engineering and AI solutions on Microsoft Azure. Design and deploy vector-database RAG platforms, vector search models, cloud infrastructure, enterprise web applications, backend APIs, interactive dashboards, and automated business workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Manager - AI & Software Engineer</h4>
                <h5>Tata Chemicals</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Lead enterprise software engineering and AI solutions on Microsoft Azure. Design and deploy vector-database RAG platforms, vector search models, cloud infrastructure, enterprise web applications, backend APIs, interactive dashboards, and automated business workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
