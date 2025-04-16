import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_DUMMYJSON_BASE_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      }
    }
  }
})
