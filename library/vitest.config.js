// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'lcov'],
    },
    globals: true,
    // environment: 'happy-dom',
  },
});
