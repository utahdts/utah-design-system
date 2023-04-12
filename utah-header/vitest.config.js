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
    globals: true,
    // environment: 'happy-dom',
  },
  plugins: [
    eslintPlugin(),
  ],
});
