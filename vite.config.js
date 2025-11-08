import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // нужно для некоторых библиотек Less
      },
    },
  },
  build: {
    outDir: "docs",
    emptyOutDir: true, // очищает docs перед сборкой
  },
  base: "./", // важно для GitHub Pages - относительные пути
});
