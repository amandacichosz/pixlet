import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const workspace = new URL('../../../', import.meta.url)
const buttonSource = new URL('packages/button/src/', workspace)

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
          ],
        },
        optimizeDeps: { exclude: ['@pixlet/button'] },
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
        items: [{ text: 'Button', link: '/components/button' }]
      }
    ],
    search: { provider: 'local' }
  }
})
