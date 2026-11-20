import { mergeConfig } from 'vite'
import { defineVueLibrary } from '../../tooling/vite-library'

export default mergeConfig(defineVueLibrary(import.meta.url), {
  build: {
    rollupOptions: { external: ['@pixlet/header'] },
  },
})
