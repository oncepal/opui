import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://localhost:1996/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  }
})
