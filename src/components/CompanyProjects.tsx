import "./styles/CompanyProjects.css";
import WorkImage from "./WorkImage";

interface CompanyProject {
  id: number;
  name: string;
  formattedName: string;
  description: string;
  tools: string[];
}

const COMPANY_PROJECTS: CompanyProject[] = [
  {
    id: 1002,
    name: "crane-connect",
    formattedName: "Crane Connect — Resource Booking System",
    description: "Built an enterprise crane booking platform enabling teams to request, schedule, and track crane allocations. Implemented real-time calendar scheduling with conflict detection and RESTful admin dashboards.",
    tools: ["React 18", "TypeScript", "FastAPI", "Azure PostgreSQL", "Tailwind CSS", "JWT", "Docker"]
  },
  {
    id: 1001,
    name: "samarth-sarathi",
    formattedName: "Samarth Sarathi — Enterprise GenAI RAG Platform",
    description: "Architected a GenAI-driven RAG platform to facilitate intelligent retrieval of SOPs and equipment manuals. Devised a scanned document processing pipeline and conversational interface with precise source references.",
    tools: ["Angular 19", "FastAPI", "Python", "Azure OpenAI", "Azure AI Search", "Azure SQL", "Vector Database", "Power BI", "Docker"]
  },
  {
    id: 1003,
    name: "vibration-predictive-maintenance",
    formattedName: "Vibration Alerting & Predictive Maintenance System",
    description: "Automated extraction of vibration metrics from PDF reports. Applied XGBoost modeling to forecast equipment health categories and enabled real-time alerts through custom dashboards.",
    tools: ["Python", "PostgreSQL", "Power BI", "Machine Learning (XGBoost)", "Data Lakehouse", "PAM Server"]
  },
  {
    id: 1004,
    name: "substore-management-system",
    formattedName: "Substore Management System",
    description: "Developed an enterprise inventory portal tracking stock allocations across plants. Handles material issuance, multi-level admin approvals, store-to-store transfers, and automated valuation audits.",
    tools: ["React 19", "TypeScript", "Tailwind CSS", "Radix UI", "FastAPI", "Azure PostgreSQL", "JWT", "Docker"]
  }
];

const CompanyProjects = () => {
  return (
    <div className="company-projects-section" id="company-projects">
      <div className="company-projects-container section-container">
        <h2>
          Company <span>Projects</span>
        </h2>
        <div className="company-projects-grid">
          {COMPANY_PROJECTS.map((project, index) => (
            <div className="company-project-card" key={project.id}>
              <div className="company-project-info">
                <div className="company-project-header">
                  <h3>0{index + 1}</h3>
                  <h4 className="company-project-title">{project.formattedName}</h4>
                </div>
                <p className="company-project-desc">{project.description}</p>
                
                <h5 className="company-project-tools-title">Tools and features</h5>
                <p className="company-project-tools">{project.tools.join(", ")}</p>
              </div>
              <div className="company-project-image-wrapper">
                <WorkImage 
                  image={`https://picsum.photos/seed/${project.id}/600/400`} 
                  alt={project.formattedName} 
                  link="https://github.com/tusharsingla123"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProjects;
