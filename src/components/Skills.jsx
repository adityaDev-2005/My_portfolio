import React from "react";
import skills from "../data/skills.js";
import useReveal from "../hooks/useReveal.js";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">CAPABILITIES</div>
          <h2 className="section-title">Technical skills</h2>
        </div>

        <div ref={ref} className="reveal skills-grid">
          {skills.map((group) => (
            <div className="card skills-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
