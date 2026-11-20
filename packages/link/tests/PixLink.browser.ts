import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

for (const mode of ['light', 'dark'] as const) {
  test(`link demo passes automated accessibility checks in ${mode} mode`, async ({ page }) => {
    await page.addInitScript((appearance) => {
      localStorage.setItem('vitepress-theme-appearance', appearance)
    }, mode)
    await page.goto('/components/link')
    await expect(page.locator('html')).toHaveCSS('color-scheme', mode)

    const demo = page.locator('.pix-demo-preview')
    const link = demo.getByRole('link', { name: 'theming guide' })
    const button = demo.getByRole('button', { name: 'Toggle light' })
    for (const control of [link, button]) {
      await expect(control).toHaveCSS('text-decoration-line', 'underline')
      await expect(control).toHaveCSS('text-decoration-style', 'dotted')
    }

    const results = await new AxeBuilder({ page })
      .include('.pix-demo-preview')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(results.violations).toEqual([])
  })
}

test('link styling preserves native navigation and button interaction', async ({ page }) => {
  await page.goto('/components/link')
  const demo = page.locator('.pix-demo-preview')
  const link = demo.getByRole('link', { name: 'theming guide' })
  const button = demo.getByRole('button', { name: 'Toggle light' })
  const bulb = demo.locator('.light-toggle__bulb')

  await expect(button).toHaveAttribute('aria-pressed', 'false')
  await expect(bulb).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await link.hover()
  await expect(link).toHaveCSS('text-decoration-style', 'solid')
  await link.focus()
  await page.keyboard.press('Tab')
  await expect(button).toBeFocused()
  await expect(button).toHaveCSS('outline-style', 'solid')
  await expect(button).toHaveCSS('text-decoration-style', 'solid')
  await expect(button).toHaveCSS('border-top-width', '0px')
  await expect(button).toHaveCSS('padding-inline-start', '0px')
  await page.keyboard.press('Space')
  await expect(button).toHaveAttribute('aria-pressed', 'true')
  await expect(bulb).toHaveCSS('background-color', 'rgb(250, 204, 21)')
  await page.keyboard.press('Enter')
  await expect(button).toHaveAttribute('aria-pressed', 'false')
  await expect(bulb).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await button.click()
  await expect(button).toHaveAttribute('aria-pressed', 'true')

  await button.evaluate((element: HTMLButtonElement) => { element.disabled = true })
  await button.hover()
  await expect(button).toBeDisabled()
  await expect(button).toHaveCSS('text-decoration-style', 'dotted')
  await page.keyboard.press('Shift+Tab')
  await expect(link).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/guide\/theming$/)
})
