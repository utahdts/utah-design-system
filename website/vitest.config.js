// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
  },
  compilerOptions: {
    types: ['vitest/globals'],
  },
  environment: 'happy-dom',
});
