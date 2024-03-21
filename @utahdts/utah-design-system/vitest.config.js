/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(() => ({
  test: {
    coverage: {
      all: true,
      exclude: [
        'artifacts/index.d.ts',
        '**/Icons.jsx',
        '**/propTypesShapes/**',
        'index.js',
        'react/enums/**',
        '**/lcov-report/**',
      ],
      provider: 'istanbul',
      reporter: ['text', 'json', 'lcov'],
    },
    environment: 'jsdom',
    globals: true,
  },
  plugins: [
    eslintPlugin(),
  ],
}));
