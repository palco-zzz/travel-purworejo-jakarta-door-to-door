import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    // Build optimizations for production
    build: {
      // Use esbuild for minification (built-in, no extra dependency)
      minify: "esbuild",
      // Split chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunk for React
            "vendor-react": ["react", "react-dom"],
            // Animation library chunk
            "vendor-motion": ["framer-motion"],
            // Icon library chunk
            "vendor-icons": ["lucide-react"],
          },
        },
      },
      // Reduce chunk size warnings threshold
      chunkSizeWarningLimit: 500,
    },
  };
});
