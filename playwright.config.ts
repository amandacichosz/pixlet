import { defineConfig } from '@playwright/test'

const baseURL = 'http://127.0.0.1:4173'

export default defineConfig({
  testDir: './packages',
  testMatch: '**/tests/**/*.browser.ts',
  use: { baseURL, browserName: 'chromium' },
  webServer: {
    command: 'pnpm exec vite preview --outDir apps/docs/.vitepress/dist --host 127.0.0.1 --port 4173 --strictPort',
    url: baseURL,
  },
})
