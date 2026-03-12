import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/react-ui-guide/',
    css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@use "/src/styles/global.scss" as *;`
        }
    }
}
})
