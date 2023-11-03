import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false, // Deshabilita la división de código CSS para evitar problemas con las bibliotecas
    minify: 'esbuild', // Usa esbuild para minificar los archivos (asegúrate de tener las últimas versiones de Vite y esbuild)
  },
});
