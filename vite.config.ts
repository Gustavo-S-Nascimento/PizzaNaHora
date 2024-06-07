import path from "path"
import { resolve } from 'path';
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const BASE = (process.env.VITE_APP_BASE_URL);


export default defineConfig({
  base: BASE,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})