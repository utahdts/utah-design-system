import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  // throw new Error(`website mode: '${mode}'`);
  return {
    plugins: [
      react(),
      eslintPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    build: {
      emptyOutDir: false,
      minify: false,
      sourceMap: 'inline',
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: (
          ['development-local', 'production-website'].includes(mode)
            ? [resolve(__dirname, 'index.js'), resolve(__dirname, 'dist/utah-design-system.es.js'), resolve(__dirname, 'dist/utah-design-system.umd.js')]
            : [resolve(__dirname, 'index.js')]
        ),
        name: '@utahdts/utah-design-system',
        // the proper extensions will be added
        formats: ['es', 'umd'],
        fileName: (format) => `utah-design-system.${format}.js`,
        cssFileName: 'style',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: [
          '@floating-ui/react-dom',
          '@utahdts/utah-design-system-header',
          'date-fns',
          'immer',
          'lodash',
          'react-dom',
          'react',
          'react/jsx-runtime',
          'use-immer',
          'uuid',
        ],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            '@floating-ui/react-dom': '@floating-ui/react-dom',
            '@utahdts/utah-design-system-header': '@utahdts/utah-design-system-header',
            'date-fns': 'dateFns',
            'immer': 'immer',
            'lodash': 'lodash',
            'react': 'React',
            'react/jsx-runtime': 'jsxRuntime',
            'use-immer': 'useImmer',
            'uuid': 'uuid',
          },
        },
      },
    },
  };
});
