import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@hook': path.resolve(__dirname, 'src/hook'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@type': path.resolve(__dirname, 'src/type')
    }
  }
})
