import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO" id="whatIDo">
      <div className="what-container">
        {/* Section Title */}
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>

        {/* 3 Columns of IDE blocks */}
        <div className="ide-columns-grid">
          
          {/* Column 1: FastAPI */}
          <div className="cyber-ide fastapi-ide">
            <div className="ide-header">
              <span className="ide-dot red"></span>
              <span className="ide-dot yellow"></span>
              <span className="ide-dot green"></span>
              <span className="ide-tab">api_server.py</span>
            </div>
            <div className="ide-body">
              <pre>
                <code>
{`from fastapi import FastAPI
from rag_agent import DocumentSearch

app = FastAPI(title="Tushar AI API")
search_engine = DocumentSearch()

@app.post("/query")
async def handle_query(user_prompt: str):
    # Retrieve contextual documentation
    context = search_engine.search(user_prompt)
    
    # Generate intelligent response
    response = await openai.generate(
        prompt=user_prompt,
        context=context
    )
    return {"response": response}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Column 2: Flask */}
          <div className="cyber-ide flask-ide">
            <div className="ide-header">
              <span className="ide-dot red"></span>
              <span className="ide-dot yellow"></span>
              <span className="ide-dot green"></span>
              <span className="ide-tab">vessel_billing.py</span>
            </div>
            <div className="ide-body">
              <pre>
                <code>
{`from flask import Flask, render_template
from models import db, VesselRecord

app = Flask(__name__)

@app.route("/billing/<int:vessel_id>")
def calculate_bill(vessel_id):
    vessel = VesselRecord.query.get(vessel_id)
    # Calculate occupancy tariff billing
    bill = vessel.calculate_tariff()
    return render_template(
        "bill.html", 
        bill=bill
    )`}
                </code>
              </pre>
            </div>
          </div>

          {/* Column 3: React */}
          <div className="cyber-ide react-ide">
            <div className="ide-header">
              <span className="ide-dot red"></span>
              <span className="ide-dot yellow"></span>
              <span className="ide-dot green"></span>
              <span className="ide-tab">ProjectGrid.tsx</span>
            </div>
            <div className="ide-body">
              <pre>
                <code>
{`import React, { useEffect, useState } from "react";

export const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);
  
  return (
    <div className="grid">
      {projects.map(p => (
        <Card key={p.id} title={p.name} />
      ))}
    </div>
  );
};`}
                </code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
