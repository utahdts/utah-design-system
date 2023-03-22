import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
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
  plugins: [
    eslintPlugin(),
  ],
  define: {
    'process.env': {}
  }
});
