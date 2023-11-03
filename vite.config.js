import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://Bryaan159.github.io/MultiForm',
  build: {
    rollupOptions: {
      external: ['react-toastify'], // Indicar que react-toastify es un módulo externo
    },
  },
});
