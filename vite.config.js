import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/form-js-dome/', // Имя репозитория на GitHub
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})