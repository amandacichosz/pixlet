import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export function defineVueLibrary(configUrl: string) {
  const root = fileURLToPath(new URL('.', configUrl))

  return defineConfig({
    root,
    plugins: [
      vue(),
      dts({
        root,
        tsconfigPath: fileURLToPath(new URL('./tsconfig.json', configUrl)),
        entryRoot: 'src',
        include: ['src/**/*'],
      }),
    ],
    build: {
      lib: {
        entry: fileURLToPath(new URL('./src/index.ts', configUrl)),
        formats: ['es'],
        fileName: 'index',
        cssFileName: 'style',
      },
      rollupOptions: { external: /^vue(?:\/|$)/ },
    },
  })
}
