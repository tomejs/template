import { defineConfig } from 'vite';
import tome from '@tomejs/vite-plugin-tome';

export default defineConfig({
  plugins: [tome({
    pages: 'src/pages',
    components: 'src/components',
    store: 'src/store',
  })],
});