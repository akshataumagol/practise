import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/practise/',
  server: {
    proxy: {
      '/get-users': {
        target: 'https://chitwanhumad.pythonanywhere.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/get-users/, '/get-users'),
      },
    },
  },
})