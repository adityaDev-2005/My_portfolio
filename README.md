# Aditya Asutosh Mishra — Portfolio

A fully static portfolio site built with React + Vite. No backend, no database,
no server required to view it once deployed — just static files.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 3. Edit personal information

Everything personal lives in **`src/data/profile.js`**:

- Name, tagline, hero text
- GitHub / LinkedIn / email links
- Resume path
- About section text and profile card

Change it once there — it updates the navbar, hero, footer, about, and contact
sections automatically.

## 4. Add or edit a project

Open **`src/data/projects.js`** and add a new object to the array:

```js
{
  id: "unique-id",
  title: "Project title",
  category: "Robotics",
  description: "Short one-line description.",
  image: "/images/your-image.png", // put the file in public/images
  technologies: ["ROS 2", "Python"],
  githubUrl: "",
  demoUrl: "",
  details: {
    problem: "...",
    objective: "...",
    technologies: ["ROS 2", "Python"],
    architecture: "...",
    implementation: "...",
    results: "...",
    challenges: "...",
    lessonsLearned: "...",
    links: { github: "", demo: "", documentation: "", video: "" },
  },
}
```

No component code needs to change — the grid and the detail modal both read
from this file. Leave any field empty (`""`) and it's hidden or shown as a
placeholder automatically.

## 5. Edit skills

Open **`src/data/skills.js`**. Each entry is `{ category, items: [] }`.
`currentlyExploring` (same file) powers the "Currently exploring" section.

## 6. Add experience / education

Open **`src/data/experience.js`** and add entries with `date`, `organization`,
`role`, `description`.

## 7. Replace images

Put image files in `public/images/` and reference them as `/images/filename.png`
in `src/data/projects.js`.

## 8. Add your resume

Place your PDF at `public/resume.pdf` (the file must be named exactly
`resume.pdf`, or update the path in `src/data/profile.js` → `links.resume`).

## 9. Change the color palette

All colors are CSS variables at the top of `src/index.css`:

```css
--bg: #070707;
--bg-2: #111111;
--surface: #151515;
--red: #dc2626;
--red-bright: #ef4444;
--text: #f5f5f5;
--text-2: #a1a1aa;
--border: #292929;
```

Change these and the whole site updates.

## 10. Build for production

```bash
npm run build
```

This creates a static, production-ready bundle in `dist/`. Preview it locally
with:

```bash
npm run preview
```

## 11. Deploy to GitHub Pages

1. In `vite.config.js`, set `base` to your repository name:
   ```js
   base: "/your-repo-name/",
   ```
2. Install the deploy helper (already listed in `devDependencies`):
   ```bash
   npm install
   ```
3. Add a deploy script to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
4. Run it:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo settings → Pages, set the source to the `gh-pages`
   branch.

Your site will be live at `https://<username>.github.io/<repo-name>/` with no
server required — it's a static build the whole time.

### Deploying to Netlify / Vercel instead

Both work out of the box with zero config:

- Build command: `npm run build`
- Output directory: `dist`

No `base` path change is needed for Netlify/Vercel (only GitHub Pages needs the
repo-name subpath).

## Project structure

```
portfolio/
├── public/
│   ├── images/        # project images
│   ├── favicon.svg
│   └── resume.pdf      # add your resume here
├── src/
│   ├── components/     # one file per section
│   ├── data/            # profile.js, projects.js, skills.js, experience.js
│   ├── hooks/           # useReveal.js — scroll-in animation
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css        # design tokens + base styles
│   └── components.css   # section-specific styles
├── index.html
├── vite.config.js
└── package.json
```

## Notes

- All project results, metrics, achievements, and dates in the data files are
  placeholders — replace them with real information as it becomes available.
- The site respects `prefers-reduced-motion` and is keyboard/screen-reader
  accessible (semantic headings, focus states, `aria` attributes on the modal
  and mobile nav).
