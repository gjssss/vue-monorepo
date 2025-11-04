import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'tsdown'

export default defineConfig({
  // ...config options
  minify: process.env.NODE_ENV === 'production',
  clean: process.env.NODE_ENV === 'production',
  treeshake: true,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
})
