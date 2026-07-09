import { test, expect } from '@playwright/test';

test.describe('Local storage persistence scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('persists cart after page refresh', async ({ page }) => {
    await page.getByTestId('add-backpack').click();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('cart-item-backpack')).toBeVisible();

    await page.reload();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('cart-item-backpack')).toBeVisible();
    await expect(page.getByTestId('subtotal')).toHaveText('$49.99');
  });

  test('persists valid coupon after page refresh', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('coupon-input').fill('QA10');
    await page.getByTestId('apply-coupon').click();

    await expect(page.getByTestId('discount')).toHaveText('$5.00');
    await expect(page.getByTestId('total')).toHaveText('$44.99');

    await page.reload();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('coupon-message')).toContainText('Coupon QA10 applied');
    await expect(page.getByTestId('discount')).toHaveText('$5.00');
    await expect(page.getByTestId('total')).toHaveText('$44.99');
  });

  test('saves last order locally after checkout', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('checkout-open').click();

    await page.getByTestId('name-input').fill('QA Tester');
    await page.getByTestId('email-input').fill('qa@example.com');
    await page.getByTestId('address-input').fill('123 Test Street');
    await page.getByTestId('place-order').click();

    await expect(page.getByTestId('cart-count')).toHaveText('0');
    await expect(page.getByTestId('last-order-summary')).toContainText('Last order: 1 item(s), total $49.99.');

    const lastOrder = await page.evaluate(() => localStorage.getItem('ai-ecommerce-last-order'));
    expect(lastOrder).not.toBeNull();

    await page.reload();

    await expect(page.getByTestId('last-order-summary')).toContainText('Last order: 1 item(s), total $49.99.');
  });
});
