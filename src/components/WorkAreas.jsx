import React from "react";
import useReveal from "../hooks/useReveal.js";

const AREAS = [
  {
    title: "Robotics",
    desc: "ROS 2, robot simulation, autonomous systems and robot software.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="9" width="14" height="10" rx="2" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
        <circle cx="9" cy="14" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    desc: "Machine learning and intelligent systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "Computer Vision",
    desc: "Image understanding, object detection and vision-based applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Intelligent Systems",
    desc: "Combining perception, learning and robotics to build intelligent systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
];

export default function WorkAreas() {
  const ref = useReveal();
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">FOCUS AREAS</div>
          <h2 className="section-title">What I work on</h2>
        </div>

        <div ref={ref} className="reveal work-grid">
          {AREAS.map((a) => (
            <div className="card work-card" key={a.title}>
              <div className="work-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
