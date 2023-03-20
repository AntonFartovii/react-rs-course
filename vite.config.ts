import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { InlineConfig } from 'vitest';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
} as VitestConfigExport);
