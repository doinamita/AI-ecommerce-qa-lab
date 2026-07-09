# Ecommerce QA Lab - Improvement Plan

## Objective

This document defines planned improvements for the AI Ecommerce QA Lab project.

The goal is to evolve the project from a static ecommerce demo into a more realistic QA portfolio project that demonstrates ecommerce functionality, test automation, AI-assisted QA, data handling, and regression testing.

## Current Project Status

The project currently includes:

- Public ecommerce demo deployed with GitHub Pages
- 5 product categories
- 100 products
- Search
- Category filtering
- Sorting
- Stock handling
- Add to cart
- Remove from cart
- Coupon validation
- Checkout flow
- Checkout validation
- Playwright automated tests
- GitHub Actions CI execution
- QA documentation and regression findings

## Improvement Area 1: Data Source and Persistence

### Current State

The product catalog is currently stored directly in `app.js`.

The site does not currently use a real database.

This means:

- Products are hardcoded in the frontend code.
- Cart data is stored only in page memory.
- Cart data is lost after page refresh.
- Orders are not saved permanently.
- Checkout confirmation is shown in the UI but not stored.

### Planned Improvements

#### Phase 1: Move Products to JSON File

Move product data from `app.js` into a separate file:

```text
data/products.json