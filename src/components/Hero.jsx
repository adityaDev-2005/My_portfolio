import React from "react";
import profile from "../data/profile.js";

function TechnicalVisual() {
  const nodes = [
    { x: 60, y: 40 },
    { x: 220, y: 90 },
    { x: 340, y: 30 },
    { x: 120, y: 180 },
    { x: 300, y: 210 },
    { x: 400, y: 140 },
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [4, 5],
    [2, 5],
  ];

  return (
    <svg
      className="hero-visual"
      viewBox="0 0 440 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#1c1c1c" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="440" height="260" fill="url(#grid)" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#3a1414"
          strokeWidth="1"
          className="hero-edge"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 1 ? 5 : 3.5}
          fill={i === 1 ? "#EF4444" : "#DC2626"}
          opacity={i === 1 ? 1 : 0.75}
          className="hero-node"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline hero-fade-in">{profile.tagline}</p>
          <p className="hero-intro">{profile.heroIntro}</p>
          <p className="hero-desc">{profile.heroDescription}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={profile.links.github} className="btn" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.resume} className="btn" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <TechnicalVisual />
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
