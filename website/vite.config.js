import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  build: {
    minify: false,
    sourcemap: true,
  },
  plugins: [
    react(),
    eslintPlugin(),
  ],
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '../library'
      ]
    },
    port: 9180,
  },
  preview: {
    port: 8080,
  },
  base: './'
});
