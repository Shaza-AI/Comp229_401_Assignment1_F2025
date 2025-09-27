import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
    'comp229-401-assignment1-f2025.onrender.com'
    ]
  }
})