import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // throw new Error(`website mode: '${mode}'`);
  return {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
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
      // fail on eslint errors for build, but don't slow dev down
      mode === 'production-website' ? eslintPlugin() : null,
      mkcert({
        force: true,
        hosts: ['*.utah.gov', '*.local.utah.gov', '127.0.0.1', 'localhost', '::1'],
      }),
    ],
    server: {
      https: true,
      host: 'designsystem.local.utah.gov',
      port: 9180,
      open: true,
    },
    preview: {
      port: 8080,
    }
  };
});
