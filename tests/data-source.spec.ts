import { test, expect } from '@playwright/test';

test.describe('Product data source', () => {
  test('loads product catalog from JSON data source', async ({ page }) => {
    await page.goto('/');

    const products = await page.evaluate(async () => {
      const response = await fetch('./data/products.json');
      return response.json();
    });

    expect(products).toHaveLength(100);
    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name');
    expect(products[0]).toHaveProperty('price');
    expect(products[0]).toHaveProperty('category');
    expect(products[0]).toHaveProperty('stock');

    await expect(page.locator('.product-card')).toHaveCount(100);
  });

  test('renders product categories from JSON dataset', async ({ page }) => {
    await page.goto('/');

    const categories = await page.evaluate(async () => {
      const response = await fetch('./data/products.json');
      const products = await response.json();
      return [...new Set(products.map((product: { category: string }) => product.category))];
    });

    expect(categories).toEqual([
      'Accessories',
      'Clothing',
      'Footwear',
      'Electronics',
      'Home Office'
    ]);
  });
});
