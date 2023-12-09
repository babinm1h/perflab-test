import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    port: 3010,
    host: true,
  },
  define: {
    'process.env': { API_URL: 'http://localhost:3080/' },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/core'),
      '@api': path.resolve(__dirname, './src/api'),
      '@models': path.resolve(__dirname, './src/models'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@modules': path.resolve(__dirname, './src/modules'),
    },
  },
});
