import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const workspace = new URL('../../../', import.meta.url)
const buttonSource = new URL('packages/button/src/', workspace)
const cardSource = new URL('packages/card/src/', workspace)
const headerSource = new URL('packages/header/src/', workspace)
const linkSource = new URL('packages/link/src/', workspace)

export default defineConfig({
  title: 'Pixlet',
  description: 'Composable, themeable Vue components',
  cleanUrls: true,
  vite: {
    resolve: { dedupe: ['vue'] },
    plugins: [{
      name: 'pixlet:workspace-source',
      apply: 'serve',
      config: () => ({
        resolve: {
          alias: [
            { find: /^@pixlet\/button$/, replacement: fileURLToPath(new URL('index.ts', buttonSource)) },
            { find: /^@pixlet\/button\/style\.css$/, replacement: fileURLToPath(new URL('style.css', buttonSource)) },
            { find: /^@pixlet\/card$/, replacement: fileURLToPath(new URL('index.ts', cardSource)) },
            { find: /^@pixlet\/card\/style\.css$/, replacement: fileURLToPath(new URL('style.css', cardSource)) },
            { find: /^@pixlet\/header$/, replacement: fileURLToPath(new URL('index.ts', headerSource)) },
            { find: /^@pixlet\/header\/style\.css$/, replacement: fileURLToPath(new URL('style.css', headerSource)) },
            { find: /^@pixlet\/link$/, replacement: fileURLToPath(new URL('index.ts', linkSource)) },
            { find: /^@pixlet\/link\/style\.css$/, replacement: fileURLToPath(new URL('style.css', linkSource)) },
          ],
        },
        optimizeDeps: { exclude: ['@pixlet/button', '@pixlet/card', '@pixlet/header', '@pixlet/link'] },
        server: { fs: { allow: [fileURLToPath(workspace)] } },
      }),
    }],
  },
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Components', link: '/components/button' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Theming', link: '/guide/theming' },
          { text: 'Accessibility', link: '/guide/accessibility' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Header', link: '/components/header' },
          { text: 'Link', link: '/components/link' }
        ]
      }
    ],
    search: { provider: 'local' }
  }
})
