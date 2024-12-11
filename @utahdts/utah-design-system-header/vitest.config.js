import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  assetsInclude: ['**/*.json'],
  test: {
    coverage: {
      all: true,
      exclude: [
        '**/index.js',
        '**/enumerations',
        '**/settings',
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
});
