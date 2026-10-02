import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/AAT1-RA2/" : "/",
  plugins: [react()],
}));