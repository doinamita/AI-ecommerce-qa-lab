import { test, expect } from '@playwright/test';

test.describe('Product details modal scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('opens product details from product card', async ({ page }) => {
    await page.getByTestId('product-card-backpack').click();

    await expect(page.getByTestId('product-detail-modal')).toBeVisible();
    await expect(page.getByTestId('product-detail-title')).toHaveText('QA Travel Backpack');
    await expect(page.getByTestId('product-detail-category')).toHaveText('Category: Accessories');
    await expect(page.getByTestId('product-detail-description')).toContainText('backpack');
    await expect(page.getByTestId('product-detail-rating')).toContainText('Rating:');
    await expect(page.getByTestId('product-detail-stock')).toContainText('In stock:');
  });

  test('adds product to cart from product details modal', async ({ page }) => {
    await page.getByTestId('product-card-backpack').click();
    await page.getByTestId('product-detail-add').click();

    await expect(page.getByTestId('product-detail-modal')).toBeHidden();
    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('cart-item-backpack')).toBeVisible();
    await expect(page.getByTestId('subtotal')).toHaveText('$49.99');
  });

  test('closes product details modal', async ({ page }) => {
    await page.getByTestId('product-card-backpack').click();
    await expect(page.getByTestId('product-detail-modal')).toBeVisible();

    await page.getByTestId('product-detail-close').click();

    await expect(page.getByTestId('product-detail-modal')).toBeHidden();
  });

  test('disables detail add button for out-of-stock products', async ({ page }) => {
    const outOfStockProductId = await page.evaluate(async () => {
      const response = await fetch('./data/products.json');
      const products = await response.json();
      return products.find((product: { stock: number }) => product.stock === 0).id;
    });

    await page.getByTestId(`product-card-${outOfStockProductId}`).click();

    await expect(page.getByTestId('product-detail-stock')).toHaveText('Out of stock');
    await expect(page.getByTestId('product-detail-add')).toBeDisabled();
  });
});
