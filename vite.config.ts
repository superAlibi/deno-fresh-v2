import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  server: {
    port: 5030,
    host: true,
  },
  plugins: [fresh({}), tailwindcss()],
});
