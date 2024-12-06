/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@contexts': path.resolve(__dirname, 'src/contexts')
    }
  }
})
