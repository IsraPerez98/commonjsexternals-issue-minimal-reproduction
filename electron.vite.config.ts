import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

import commonjsExternals from 'vite-plugin-commonjs-externals'

const externals = ['path', /^electron(\/.+)?$/]

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [
      externalizeDepsPlugin(),
      commonjsExternals({
        externals
      })
    ]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
