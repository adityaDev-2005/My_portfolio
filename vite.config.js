import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set base to "/<your-repo-name>/" before deploying to GitHub Pages.
// Example: base: "/portfolio/"
export default defineConfig({
  plugins: [react()],
  base: "/My_portfolio/",
});
