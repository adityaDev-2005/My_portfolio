import React from "react";

// Deterministic pseudo-random node layout seeded by a string, so the same
// project always renders the same pattern.
function seededLayout(seed, count) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s += seed.charCodeAt(i) * (i + 1);
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    x: 20 + rand() * 360,
    y: 20 + rand() * 120,
  }));
}

const CATEGORY_ICON = {
  "Audio Forensics": (
    <path d="M12 4v16M8 8v8M16 8v8M4 11v2M20 11v2" strokeLinecap="round" />
  ),
  "Computer Vision": (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "Geospatial / Computer Vision": (
    <>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </>
  ),
  default: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
};

export default function ProjectPlaceholder({ title, category }) {
  const nodes = seededLayout(title, 7);
  const edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [4, 5],
    [2, 6],
  ];
  const icon = CATEGORY_ICON[category] || CATEGORY_ICON.default;

  return (
    <svg
      className="project-placeholder"
      viewBox="0 0 400 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${title} — no preview image yet`}
    >
      <rect width="400" height="160" fill="#111111" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#2a1414"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 1 ? 3.5 : 2.2}
          fill={i === 1 ? "#EF4444" : "#DC2626"}
          opacity={i === 1 ? 1 : 0.6}
          className="placeholder-node"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      <g transform="translate(168, 60)" stroke="#DC2626" strokeWidth="1.4" fill="none">
        <g transform="scale(1.6)">{icon}</g>
      </g>
      <text x="200" y="128" textAnchor="middle" fill="#6b6b6b" fontSize="10" fontFamily="'Space Grotesk', sans-serif" letterSpacing="1">
        PREVIEW PENDING
      </text>
    </svg>
  );
}
