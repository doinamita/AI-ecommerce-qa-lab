import { test, expect } from '@playwright/test';

test.describe('Basic accessibility and usability checks', () => {
  test('main interactive elements have accessible names', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('button', { name: 'Open cart' })).toBeVisible();
    await expect(page.getByLabel('Search products')).toBeVisible();
    await expect(page.getByLabel('Product controls')).toBeVisible();
  });
});
