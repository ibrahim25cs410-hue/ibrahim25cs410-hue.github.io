import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages is currently publishing the repository root (source files),
// so the production build is served from /docs/.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "build" ? "/docs/" : "/",
  build: {
    target: "es2020",
  },
}));
