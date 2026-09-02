import React from "react";
import profile from "../data/profile.js";
import useReveal from "../hooks/useReveal.js";

export default function Contact() {
  const ref = useReveal();
  const { email, github, linkedin } = profile.links;

  return (
    <section id="contact" className="section" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">CONTACT</div>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-subtitle">
            Interested in robotics, AI, computer vision, or building something interesting
            together?
          </p>
        </div>

        <div ref={ref} className="reveal contact-links">
          <a href={`mailto:${email}`} className="card contact-item">
            <span className="contact-label">Email</span>
            <span>{email}</span>
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="card contact-item">
            <span className="contact-label">GitHub</span>
            <span>{github === "#" ? "Add your GitHub URL" : github}</span>
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="card contact-item">
            <span className="contact-label">LinkedIn</span>
            <span>{linkedin === "#" ? "Add your LinkedIn URL" : linkedin}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
