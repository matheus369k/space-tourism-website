import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import dotenv from 'dotenv'
import path from 'node:path'

dotenv.config({ quiet: true })

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: process.env.VITE_BASE_ROUTE,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
