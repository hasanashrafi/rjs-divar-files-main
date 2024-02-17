import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import paths from './src/constants/paths'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...paths.reduce((acc, cur) => ({
        ...acc,
        [cur]: `/${cur === "src" ? cur : "src/" + cur}`
      }), "")
    }
  }
})


// src:"/src",
//       services:"/src/services",
//       utils:"/src/utils",
//       configs:"/src/configs",
//       pages:"/src/pages",
//       styles:"/src/styles",
//       assets:"/src/assets",
//       components:"/src/components",
//       layouts:"/src/layouts",
//       router:"/src/router"