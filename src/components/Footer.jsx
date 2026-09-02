import React from "react";
import profile from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-name">{profile.name.toUpperCase()}</div>
          <div className="footer-tagline">{profile.tagline}</div>
        </div>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.links.email}`}>Email</a>
        </div>
      </div>
      <div className="container footer-copyright">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
