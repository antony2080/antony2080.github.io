import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
// @ts-ignore
import { fileURLToPath, URL } from "url"
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), mkcert()],
  server: {
    https: true
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
