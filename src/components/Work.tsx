import { useState, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Project {
  id: number;
  name: string;
  formattedName: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  tools: string[];
}

const Work = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/tusharsingla123/repos?sort=updated&per_page=100"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        // Filter and format the repositories
        const filtered: Project[] = data
          .filter((repo: any) => !repo.fork && repo.name !== "tusharsingla123")
          .map((repo: any) => {
            // Clean up repository name (e.g. "blood-bank" -> "Blood Bank")
            const formattedName = repo.name
              .split("-")
              .map((word: string) => {
                if (word.toLowerCase() === "api") return "API";
                return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join(" ");

            // Combine primary language and topics as tools
            const tools = Array.from(
              new Set(
                [repo.language, ...(repo.topics || [])].filter(Boolean)
              )
            ) as string[];

            return {
              id: repo.id,
              name: repo.name,
              formattedName,
              description: repo.description,
              html_url: repo.html_url,
              homepage: repo.homepage,
              tools: tools.length > 0 ? tools : ["HTML", "CSS", "JavaScript"],
            };
          });

        setProjects(filtered);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useGSAP(() => {
    if (projects.length === 0) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, [projects]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        {loading ? (
          <div className="work-loading" style={{ padding: "100px 0", textAlign: "center", fontSize: "24px" }}>
            Loading Projects...
          </div>
        ) : (
          <div className="work-flex">
            {projects.map((project, index) => (
              <div className="work-box" key={project.id}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>{(index + 1) < 10 ? `0${index + 1}` : index + 1}</h3>

                    <div>
                      <h4 style={{ textTransform: "capitalize" }}>{project.formattedName}</h4>
                      <p style={{ minHeight: "45px", textTransform: "none", fontSize: "14px", lineHeight: "1.4" }}>
                        {project.description || "A clean full-stack application built for production logistics and deployment details."}
                      </p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p style={{ textTransform: "capitalize" }}>{project.tools.join(", ")}</p>
                </div>
                <WorkImage 
                  image={`https://picsum.photos/seed/${project.id}/600/400`} 
                  alt={project.formattedName} 
                  link={project.homepage || project.html_url}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
