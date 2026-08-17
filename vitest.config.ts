import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'astro:content': path.resolve(__dirname, 'tests/__mocks__/astro-content.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    setupFiles: ['tests/setup.ts'],
  },
});
