import React, { useEffect, useRef } from "react";

function Field({ label, value }) {
  if (!value) return null;
  return (
    <div className="modal-field">
      <span className="modal-field-label">{label}</span>
      <p>{value}</p>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  const d = project.details;
  const links = Object.entries(d.links || {}).filter(([, url]) => url);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          ref={closeRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ✕
        </button>

        <span className="tag">{project.category}</span>
        <h3 id="modal-title" className="modal-title">
          {project.title}
        </h3>

        <div className="modal-tags">
          {d.technologies.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <Field label="Problem" value={d.problem} />
        <Field label="Objective" value={d.objective} />
        <Field label="Architecture" value={d.architecture} />
        <Field label="Implementation" value={d.implementation} />
        <Field label="Results" value={d.results} />
        <Field label="Challenges" value={d.challenges} />
        <Field label="Lessons learned" value={d.lessonsLearned} />

        {links.length > 0 && (
          <div className="modal-links">
            {links.map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noreferrer" className="btn">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
