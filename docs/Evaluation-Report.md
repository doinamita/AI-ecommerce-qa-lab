# Evaluation Report

## Summary

This project validates the main e-commerce user flows for MiniShop using Playwright automated tests and AI-assisted QA analysis.

## Test Execution Scope

Automated coverage includes:

- Product catalog visibility
- Search
- Empty search state
- Sorting
- Add to cart
- Remove from cart
- Valid coupon
- Invalid coupon
- Checkout
- Basic accessibility

## AI Contribution

AI was used to support:

- Test scenario generation
- Risk analysis
- Edge case brainstorming
- Test case wording
- Bug report drafting
- Coverage review

## Human QA Review

All AI-generated outputs were reviewed and adjusted by the QA owner to ensure:

- Relevance
- Accuracy
- Clear expected results
- Alignment with real functionality
- No invented requirements

## Result

The project demonstrates a practical AI-assisted QA workflow for an e-commerce application.

## Future Improvements

- Add mobile viewport tests
- Add API-level tests when backend exists
- Add visual regression tests
- Add accessibility scanning with axe
- Add test coverage tags by risk level
- Add known-bug suite and defect trend report

## Regression Finding After Catalog Expansion

After expanding the product catalog to 5 categories and 100 products, one existing Playwright regression test failed.

### Failed Test

`search shows empty state when no product matches`

### Root Cause

The test used `laptop` as a search term for validating the empty search state. After the catalog expansion, `laptop` became valid product data, so the test no longer represented a no-result scenario.

### Fix

The test input was updated from:

`await page.getByTestId('search-input').fill('laptop');`

to:

`await page.getByTestId('search-input').fill('zzzz-no-product');`

### QA Learning

This issue demonstrates the importance of maintaining test data when product catalogs or fixtures change. A regression test can become invalid not because the application is broken, but because the test data no longer matches the expected scenario.

