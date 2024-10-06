import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // assetsDir: 'public/sample/v1/assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // https://stackoverflow.com/questions/68147471/how-to-set-sassoptions-in-vite/78997875#78997875
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or 'modern'
      },
    },
  },
  // publicDir: resolve(__dirname, 'src'),
});
