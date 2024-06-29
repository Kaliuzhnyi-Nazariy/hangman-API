import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Adjust if you're using a different framework

export default defineConfig({
  plugins: [react()],
  base: "/hangman-API/",
});
