import { defineConfig, loadEnv } from 'vite'
import preact from '@preact/preset-vite'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // console.log(JSON.stringify(env, null, 2))
  return {
    resolve: {
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
      },
    },
    build: {
      lib: {
        entry: './src/main.tsx',
        name: 'MyLibrary',
        formats: ['iife'],
      },
    },
    plugins: [preact()],
    define: {
      // 'process.env': env,
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
  }
})
