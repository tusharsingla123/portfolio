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
  description: string;
  html_url: string;
  homepage: string | null;
  tools: string[];
}

interface CustomRepoDetails {
  formattedName?: string;
  description?: string;
  tools?: string[];
}

const CUSTOM_PROJECT_DETAILS: Record<string, CustomRepoDetails> = {
  "vbook-webapp": {
    formattedName: "Vbook Webapp",
    description: "Vehicle & equipment scheduling web app with calendar views, conflict detection, approval workflows, and utilization metrics.",
    tools: ["React 18", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Framer Motion"]
  },
  "resource-allocation-billing-system": {
    formattedName: "Resource Allocation & Billing System",
    description: "Full-stack application to manage port cargo logs, scheduling, and penalty tariffs for maritime vessels.",
    tools: ["Python", "Flask", "SQLAlchemy", "Bootstrap", "Chart.js", "Pandas", "XlsxWriter"]
  },
  "contact-management": {
    formattedName: "Contact Management CRM",
    description: "CRM system featuring contact directories, sortable tables, form validation, and database records CRUD operations.",
    tools: ["React.js", "Material-UI", "Node.js", "Express.js", "MongoDB"]
  },
  "blood-bank": {
    formattedName: "Blood Bank Management",
    description: "Coordinating blood donation records, donor queries, real-time requests, and localized search options.",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"]
  },
  "expense-tracker": {
    formattedName: "Expense Tracker",
    description: "Track spending habits, manage custom categories, compute balance summaries, and analyze inflation forecasts.",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"]
  },
  "Fruit": {
    formattedName: "Fruit.ai Health Manager",
    description: "Wellness companion equipped with custom chatbot assistants, multi-lingual translations, product panels, and FAQ managers.",
    tools: ["React.js", "Python", "FastAPI", "Flask", "googletrans", "Vercel"]
  },
  "FruitBackend": {
    formattedName: "Fruit.ai Backend",
    description: "Providing high-performance API endpoints for translational queries, health lookups, and FAQ persistence.",
    tools: ["Python", "FastAPI", "Flask", "REST APIs", "Vercel"]
  },
  "just-search": {
    formattedName: "Just Search Utility",
    description: "Search interface tool featuring clean search filters and query matching index systems.",
    tools: ["React.js", "JavaScript", "CSS3", "Tailwind CSS"]
  },
  "To-Do-List-API-with-User-Authentication": {
    formattedName: "Secure To-Do List API",
    description: "Backend services with JWT session authorization, credential hashing, and mongo persistence.",
    tools: ["Node.js", "Express.js", "JWT", "MongoDB", "Mongoose"]
  }
};

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
          .filter((repo: any) => !repo.fork && repo.name !== "tusharsingla123" && repo.name !== "portfolio")
          .map((repo: any) => {
            const custom = CUSTOM_PROJECT_DETAILS[repo.name] || {};

            // Custom formatting or generic title parsing
            const formattedName = custom.formattedName || repo.name
              .split("-")
              .map((word: string) => {
                if (word.toLowerCase() === "api") return "API";
                return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join(" ");

            // Tech stack tools
            const tools = custom.tools || Array.from(
              new Set(
                [repo.language, ...(repo.topics || [])].filter(Boolean)
              )
            ) as string[];

            // Description
            const description = custom.description || repo.description || "A clean full-stack application built for production logistics and deployment details.";

            return {
              id: repo.id,
              name: repo.name,
              formattedName,
              description,
              html_url: repo.html_url,
              homepage: repo.homepage,
              tools,
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

    const mm = gsap.matchMedia();

    // Desktop Media Query (Width > 1024px): Enable GSAP Pinned Horizontal Scroll
    mm.add("(min-width: 1025px)", () => {
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
    });

    // Clean up media query contexts
    return () => {
      mm.revert();
    };
  }, [projects]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Personal <span>Projects</span>
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
                      <h4 style={{ textTransform: "none" }}>{project.formattedName}</h4>
                      <p style={{ minHeight: "45px", textTransform: "none", fontSize: "14px", lineHeight: "1.4" }}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p style={{ textTransform: "none" }}>{project.tools.join(", ")}</p>
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
