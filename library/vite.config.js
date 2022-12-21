import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'index.js'),
      name: '@utahdts/utah-design-system',
      // the proper extensions will be added
      formats:['es', 'umd'],
      fileName: (format) => `utah-design-system.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-router-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-router-dom': 'ReactRouterDom'
        },
      },
    },
  },
})
