import { expect, test } from '@playwright/test'

test('card composes its header, actions, content, and optional footer', async ({ page }) => {
  await page.goto('/components/card')
  const demo = page.locator('.pix-demo-preview')
  const shadowCard = demo.locator('.pix-card--shadow')
  const borderCard = demo.locator('.pix-card--border')

  await expect(shadowCard.locator('.pix-header--card').getByRole('heading', {
    name: 'Project setup',
    level: 3,
  })).toBeVisible()
  await expect(shadowCard.locator('.pix-card__header')).toHaveCSS('border-bottom-width', '1px')
  await expect(shadowCard.getByText('Pixlet for Vue 3')).toBeVisible()
  const action = shadowCard.locator('.pix-header__actions').getByRole('button', { name: 'Show details' })
  await action.click()
  await expect(shadowCard.locator('.pix-card__content')).toContainText('Import the token stylesheet')

  const footer = shadowCard.locator('.pix-card__footer')
  await expect(footer.getByRole('link')).toHaveCount(2)
  await expect(footer.locator('.card-example-links')).toHaveCSS('column-gap', '16px')
  await expect(shadowCard).not.toHaveCSS('box-shadow', 'none')
  await expect(borderCard).toHaveCSS('box-shadow', 'none')
  await expect(borderCard).toHaveCSS('border-top-width', '1px')
  await expect(borderCard.locator('.pix-card__footer, .pix-header__actions')).toHaveCount(0)
})
