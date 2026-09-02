import React from "react";
import experience from "../data/experience.js";
import useReveal from "../hooks/useReveal.js";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">TIMELINE</div>
          <h2 className="section-title">Experience & education</h2>
        </div>

        <div ref={ref} className="reveal timeline">
          {experience.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.role}</h3>
                <span className="timeline-org">{item.organization}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
