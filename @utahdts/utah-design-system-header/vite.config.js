import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ command, mode, ssrBuild }) => {
  // throw new Error(`header mode: '${mode}'`);
  return {
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        name: '@utahdts/utah-design-system-header',
        entry: (
          ['development-local', 'production-website'].includes(mode)
            ? [resolve(__dirname, 'src/index.js'), resolve(__dirname, 'dist/utah-design-system-header.es.js'), resolve(__dirname, 'dist/utah-design-system-header.umd.js')]
            : [resolve(__dirname, 'src/index.js')]
        ),
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
  };
});
