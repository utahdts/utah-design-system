import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [
    react(),
    eslintPlugin(),
  ],
  server: {
    port: 9180,
  },
  preview: {
    port: 8080,
  },
});
