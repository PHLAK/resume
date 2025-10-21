import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    cacheDir: '.cache/vite',
    plugins: [
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@node_modules': 'node_modules',
        }
    }
});
