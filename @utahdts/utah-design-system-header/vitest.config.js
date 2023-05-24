// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
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
