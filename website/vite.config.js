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
      sourcemap: "inline",
    },
    resolve: {
      // mode is `development`, `production`, and this allows a custom condition (otherwise it defaulted back to development)
      conditions: [mode]
    },
    plugins: [
      react(),
      eslintPlugin(),
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
      host: 'designsystem.local.utah.gov',
      port: 9180,
    },
    preview: {
      port: 8080,
    }
  };

  return config;
});
