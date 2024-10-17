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
        '**/PlaceHolderDocumentation.jsx',
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
    environment: 'jsdom',
    globals: true,
  },
  plugins: [
    eslintPlugin(),
  ],
});
