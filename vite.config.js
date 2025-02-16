import { defineConfig } from 'vite'

export default defineConfig({
  base: '/webp-animated-test/',
  build: {
    outDir: 'docs'
  },
  optimizeDeps: {
    exclude: ["@jsquash/webp"]
  }
})
