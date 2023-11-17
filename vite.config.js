import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '', // Cambia "tgsauz.github.io" por tu nombre de repositorio en GitHub
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos construidos
    assetsDir: 'assets', // Carpeta de activos (si está en la raíz)
    // Más configuraciones según tus necesidades
  },
});