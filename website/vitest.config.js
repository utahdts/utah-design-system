// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  test: {
    globals: true,
  },
  compilerOptions: {
    types: ['vitest/globals'],
  },
  coverage: {
    all: true,
  },
  environment: 'happy-dom',
  plugins: [
    eslintPlugin(),
  ],
});
