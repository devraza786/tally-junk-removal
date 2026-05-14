import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    target: "ES2020",
    minify: "terser",
    reportCompressedSize: true,
    outDir: "dist",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          query: ["@tanstack/react-query"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-popover", "@radix-ui/react-select"],
          animations: ["gsap", "framer-motion"],
          utils: ["clsx", "tailwind-merge", "zod"],
        },
      },
    },
  },
  ssr: {
    noExternal: ["@radix-ui/*"],
  },
});
