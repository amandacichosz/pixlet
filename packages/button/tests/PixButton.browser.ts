import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

for (const mode of ['light', 'dark'] as const) {
  test(`button demos pass automated accessibility checks in ${mode} mode`, async ({ page }) => {
    await page.addInitScript((appearance) => {
      localStorage.setItem('vitepress-theme-appearance', appearance)
    }, mode)
    await page.goto('/components/button')
    await expect(page.locator('html')).toHaveCSS('color-scheme', mode)
    await expect(page.getByRole('button', { name: 'Primary', exact: true })).toBeVisible()

    const results = await new AxeBuilder({ page })
      .include('.pix-demo-preview')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(results.violations).toEqual([])
  })
}

test('supports keyboard activation and exposes the loading state', async ({ page }) => {
  await page.goto('/components/button')
  const save = page.getByRole('button', { name: 'Save changes' })
  const loading = page.getByRole('button', { name: 'Saving…' })

  await page.locator('#loading .header-anchor').focus()
  await page.keyboard.press('Tab')
  await expect(save).toBeFocused()
  await expect(save).toHaveCSS('outline-style', 'solid')
  await page.keyboard.press('Enter')
  await expect(loading).toBeDisabled()
  await expect(loading).toHaveAttribute('aria-busy', 'true')
})

test('resolves scoped forest colors and button token overrides', async ({ page }) => {
  await page.goto('/components/button')
  const primary = page.getByRole('button', { name: 'Primary', exact: true })
  const demo = page.locator('.pix-demo-preview').first()

  await demo.evaluate((element) => {
    element.setAttribute('data-pix-theme', 'forest')
    element.setAttribute('data-pix-mode', 'dark')
  })
  await expect(primary).toHaveCSS('background-color', 'rgb(135, 219, 178)')
  await expect(primary).toHaveCSS('color', 'rgb(26, 23, 40)')

  await demo.evaluate((element: HTMLElement) => {
    element.setAttribute('data-pix-mode', 'light')
    element.style.setProperty('--pix-button-radius', '4px')
  })
  await expect(primary).toHaveCSS('background-color', 'rgb(36, 116, 82)')
  await expect(primary).toHaveCSS('border-radius', '4px')
})
