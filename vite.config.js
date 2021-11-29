import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'PttUiLib',
      // fileName: (format) => `ptt-ui-lib.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
      // output: [{
      //   format: "esm",
      //   sourcemap: true,
      //   esModule: true,
      //   exports: "named",
      //   globals: {
      //     vue: "Vue"
      //   }
      // }, {
      //   format: "umd",
      //   inlineDynamicImports: true,
      //   interop: "esModule",
      //   exports: "named",
      //   globals: {
      //     vue: "Vue"
      //   }
      // }],
    }
  }
})
