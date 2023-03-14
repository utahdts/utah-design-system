import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: '@utahdts/utah-design-system-header',
      // the proper extensions will be added
      formats: ['es', 'umd'],
      fileName: (format) => `utah-design-system-header.${format}.js`,
    },
    sourceMap: 'inline',
  },
  define: {
    'process.env': {}
  }
});
