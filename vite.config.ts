import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'MyLibrary',
      formats: ['iife'],
    },
  },
  plugins: [preact()],
})
