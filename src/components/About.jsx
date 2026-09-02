import React from "react";
import profile from "../data/profile.js";
import useReveal from "../hooks/useReveal.js";

export default function About() {
  const ref = useReveal();
  const { text, profileCard } = profile.about;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">ABOUT</div>
          <h2 className="section-title">About me</h2>
        </div>

        <div ref={ref} className="reveal about-grid">
          <div className="about-text">
            {text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="card about-card">
            <div className="about-card-row">
              <span className="about-card-label">Focus</span>
              <span className="about-card-value">{profileCard.focus}</span>
            </div>
            <div className="about-card-row">
              <span className="about-card-label">Interests</span>
              <ul>
                {profileCard.interests.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="about-card-row">
              <span className="about-card-label">Current focus</span>
              <ul>
                {profileCard.currentFocus.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
