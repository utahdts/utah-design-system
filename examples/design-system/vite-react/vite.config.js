import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
  plugins: [react()],
  server: {
    open: true,
  },
});
