import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.js'),
        content: resolve(__dirname, 'src/content.js'),
        popup: resolve(__dirname, 'src/popup/popup.js'), 
        options: resolve(__dirname, 'src/options/options.js'), 
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === 'popup') {
            return 'popup/[name].js';
          }
          if (chunk.name === 'options') {
            return 'options/[name].js';
          }
          return '[name].js';
        },
        chunkFileNames: '[name].[hash].js',
        assetFileNames: (chunkInfo) => {
					console.log(chunkInfo)
          const info = chunkInfo.name;
					console.log(info)
          if (info.includes('popup')) {
            return 'popup/[name].[ext]';
          }
          if (info.includes('options')) {
            return 'options/[name].[ext]';
          }
          return '[name].[ext]';
        },
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'src/manifest.json', dest: '.' },
        { src: 'public/icons', dest: 'icons' },
        { src: 'src/popup/popup.html', dest: 'popup' },
        { src: 'src/popup/popup.css', dest: 'popup' },
        { src: 'src/options/options.html', dest: 'options' },
        { src: 'src/options/options.css', dest: 'options' },
      ],
    }),
  ],
});
