import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  let config = {
    css: {
      devSourcemap: true,
    },
    build: {
      minify: false,
      sourcemap: true,
    },
    plugins: [
      react(),
      eslintPlugin(),
      // basicSsl(),
      mkcert({
        force: true,
        hosts: ['*.utah.gov', '*.local.utah.gov', '127.0.0.1', 'localhost', '::1'],
      }),
    ],
    server: {
      fs: {
        allow: [
          // search up for workspace root
          searchForWorkspaceRoot(process.cwd()),
          // your custom rules
          '../library'
        ]
      },
      https: true,
      port: 9180,
    },
    preview: {
      port: 8080,
    },
    base: '/'
  };

  if (mode === 'dev-pages') {
    config.base = '/utah-design-system/dev/';
  }
  return config;
});
