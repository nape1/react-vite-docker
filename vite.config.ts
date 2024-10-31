import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from outside the container
    port: 5173,      // Specify the port if different from default
    strictPort: true, // Ensures Vite uses this port only
    watch: {
        usePolling: true, // Helps with file change detection, especially on WSL
    },
  }
})