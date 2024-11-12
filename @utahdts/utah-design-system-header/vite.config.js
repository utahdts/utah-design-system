import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  // throw new Error(`header mode: '${mode}'`);
  return {
    build: {
      emptyOutDir: false,
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
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    plugins: [
      eslintPlugin(),
    ],
    define: {
      'process.env': {}
    }
  };
});
