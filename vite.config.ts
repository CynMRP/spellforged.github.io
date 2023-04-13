// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        apply: resolve(__dirname, "apply/index.html"),
        faq: resolve(__dirname, "faq/index.html"),
      },
    },
  },
});
