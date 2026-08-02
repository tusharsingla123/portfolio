import React, { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/Landing.css";

const Landing = () => {
  const { setLoading } = useLoading();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Complete page loading after 1 second to reveal landing elements
    const timer = setTimeout(() => {
      setLoading(100);
      document.body.classList.add("character-loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Normalizing tilt angles to range [-12, 12] degrees
    const rotateX = -(y / (box.height / 2)) * 12;
    const rotateY = (x / (box.width / 2)) * 12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>

      <div className="landing-container">
        {/* Left Column: Bio & Text */}
        <div className="landing-text-col">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TUSHAR <span>SINGLA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-info">AI & Software Engineer</div>
            </h2>
          </div>
        </div>

        {/* Right Column: Premium Image Card */}
        <div className="landing-image-col">
          <div
            className={`avatar-wrapper ${!isHovered ? "avatar-float" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: isHovered ? "transform 0.05s ease" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <img
              src="https://github.com/tusharsingla123.png"
              alt="Tushar Singla"
              className="avatar-img"
              draggable="false"
            />
            <div className="character-rim"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
