import { defineConfig } from 'vite'
import path from 'path'
import inspect from 'vite-plugin-inspect';


export default defineConfig({
  base: '/form-js-dome/', // Имя репозитория на GitHub
  root: path.resolve(__dirname, 'src'),
  // resolve: {
  //   alias: {
  //     '@assets': path.resolve(__dirname, 'dist/assets'), // Алиас для папки assets
  //   },
  // },
  server: {
    fs: {
      // Разрешить доступ к файлам в node_modules
      allow: ['..'],
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext',
  },
  plugins: [inspect()],
  
})