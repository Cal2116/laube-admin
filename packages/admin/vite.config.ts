import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '')
  const apiUrl = env.VITE_API_URL || 'http://localhost:8848'
  const apiUrlPrefix = env.VITE_API_URL_PREFIX || '/api'

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 8847,
      proxy: {
        [apiUrlPrefix]: {
          target: apiUrl,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${apiUrlPrefix}`), ''),
        },
      },
    },
  }
})
