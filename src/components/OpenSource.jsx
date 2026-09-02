import React from "react";
import profile from "../data/profile.js";
import useReveal from "../hooks/useReveal.js";

export default function OpenSource() {
  const ref = useReveal();
  return (
    <section className="section opensource">
      <div className="container">
        <div ref={ref} className="reveal opensource-inner">
          <h2 className="section-title">Build. Experiment. Learn.</h2>
          <p>Explore the projects, experiments and code behind my work.</p>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-primary">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
