import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@pixlet/tokens/tokens.css'
import '@pixlet/button/style.css'
import './custom.css'

export default {
  extends: DefaultTheme
} satisfies Theme
