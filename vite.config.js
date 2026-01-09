import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mediaPipePlugin from './media-pipe-plugin'

export default defineConfig({
  plugins: [react()],
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //     include: [/node_modules/, /fcmv2/],
  //     exclude: [ 'mediaPipePlugin.ts' ],
  //     extensions: ['.js', '.cjs', '.jsx']
  //   },
  //   rollupOptions: {
  //     plugins: [mediaPipePlugin()]
  //   }
  // }
})

