import React from "react";
import { currentlyExploring } from "../data/skills.js";
import useReveal from "../hooks/useReveal.js";

export default function Exploring() {
  const ref = useReveal();
  return (
    <section className="section exploring">
      <div className="container">
        <div className="eyebrow">ONGOING</div>
        <h2 className="section-title">Currently exploring</h2>

        <div ref={ref} className="reveal exploring-list">
          {currentlyExploring.map((topic) => (
            <span key={topic} className="exploring-pill">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
