import React, { useRef, useState } from "react";
import projects from "../data/projects.js";
import useReveal from "../hooks/useReveal.js";
import ProjectModal from "./ProjectModal.jsx";
import ProjectPlaceholder from "./ProjectPlaceholder.jsx";

function TiltCard({ children, className, style: styleProp }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({});
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      transform: `perspective(700px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(
        2
      )}deg) translateY(-4px)`,
      "--glow-x": `${(px + 0.5) * 100}%`,
      "--glow-y": `${(py + 0.5) * 100}%`,
    });
  };

  const onLeave = () => setTilt({});

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...styleProp, ...tilt }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="project-card-glow" />
      {children}
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">WORK</div>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-subtitle">
            A selection of systems, experiments and applications I've built.
          </p>
        </div>

        <div ref={ref} className="reveal projects-grid">
          {projects.map((p, i) => (
            <TiltCard
              className="card project-card"
              key={p.id}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="project-media">
                {p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" />
                ) : (
                  <ProjectPlaceholder title={p.title} category={p.category} />
                )}
              </div>
              <div className="project-body">
                <span className="tag">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.technologies.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {p.githubUrl ? (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn">
                      GitHub
                    </a>
                  ) : null}
                  <button className="btn btn-primary" onClick={() => setActive(p)}>
                    View Project
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
