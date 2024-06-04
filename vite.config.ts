import path from "path"
import { resolve } from 'path';
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/PizzaNaHora',
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