# Test Scenarios - Ecommerce Automation

## Objective

This document defines automated test scenarios for the AI Ecommerce QA Lab project.

The goal is to validate core ecommerce functionality after expanding the catalog to 5 categories and 100 products.

## Automated Test Scenarios

| ID | Area | Scenario | Expected Result | Priority |
|---|---|---|---|---|
| TC-001 | Catalog | Verify full product catalog is displayed | 100 product cards are visible | High |
| TC-002 | Category Filter | Filter products by Electronics category | Only Electronics products are displayed | High |
| TC-003 | Category Filter | Filter products by Clothing category | Only Clothing products are displayed | High |
| TC-004 | Search | Search by product name | Matching product is displayed and unrelated products are hidden | High |
| TC-005 | Search | Search by category keyword | Products from the matching category are displayed | Medium |
| TC-006 | Search | Search using a non-existing keyword | Empty state is displayed | High |
| TC-007 | Combined Filters | Apply category filter and search together | Results match both category and search criteria | Medium |
| TC-008 | Sorting | Sort Electronics products by price high to low | Most expensive Electronics product appears first | Medium |
| TC-009 | Stock | Verify out-of-stock product state | Out-of-stock product has disabled Add to cart button | High |
| TC-010 | Cart | Add same product twice | Cart count and quantity are updated correctly | High |
| TC-011 | Cart | Add multiple different products | Cart count and subtotal are calculated correctly | High |
| TC-012 | Cart | Remove one product from cart | Removed product disappears and remaining item stays in cart | High |
| TC-013 | Coupon | Apply lowercase valid coupon | Coupon is accepted and discount is applied | Medium |
| TC-014 | Coupon | Replace valid coupon with invalid coupon | Discount is removed and invalid coupon message is displayed | Medium |
| TC-015 | Checkout | Place order with coupon applied | Order confirmation is shown and cart is reset | High |

## Risks Covered

These tests cover the following ecommerce risks:

- Product catalog not rendering correctly
- Incorrect category filtering
- Search returning wrong results
- Empty state not displayed
- Sorting not working correctly after filtering
- Out-of-stock products being added to cart
- Cart quantity miscalculation
- Subtotal, discount, and total calculation errors
- Coupon validation issues
- Checkout flow failure
- Cart not resetting after order placement

## QA Notes

After expanding the catalog, test data became more important. Some previous assumptions, such as using `laptop` as a no-result search term, were no longer valid because the catalog now contains laptop-related products.

This is a realistic regression testing example where automated tests had to be updated after product data changed.
