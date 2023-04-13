/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      exclude: [
        '**/App.jsx',
        '**/main.jsx',
        '**/components/demo',
        '**/HomeLanding.jsx',
        '**/PLACEHOLDERDOCUMENTATION.jsx',
        '**/FoundationLanding.jsx',
        '**/GuidelinesLanding.jsx',
        '**/LibraryLanding.jsx',
        '**/websiteContent/resources',
        '**/enums',
        '**/colors.js',
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