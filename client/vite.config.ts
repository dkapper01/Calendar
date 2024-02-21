import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    proxy: {
      "/server": {
        target: "http://localhost:3000", // Your Express backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ""),
      },
    },
  },
});
