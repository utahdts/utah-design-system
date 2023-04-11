/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      exclude: [
        '**/Icons.jsx',
        '**/propTypesShapes/**',
        'index.js',
        'react/enums/**',
        '**/lcov-report/**',
      ],
      provider: 'istanbul',
      reporter: ['text', 'json', 'lcov'],
    },
    globals: true,
  },
  plugins: [
    eslintPlugin(),
  ],
});
