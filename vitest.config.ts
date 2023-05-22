import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
    },
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: '.',
      },
    ],
  },
});
