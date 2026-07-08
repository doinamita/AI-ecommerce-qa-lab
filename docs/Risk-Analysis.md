# Risk Analysis

## High-Risk Areas

| Risk | Impact | Priority | Mitigation |
|---|---|---:|---|
| Cart total is calculated incorrectly | Customer may be charged the wrong amount | Critical | Automated total validation tests |
| Coupon discount is calculated incorrectly | Revenue or customer trust impact | High | Coupon positive and negative tests |
| Checkout is enabled with empty cart | Invalid order flow | High | Checkout disabled-state test |
| Search returns wrong products | Product discovery issue | Medium | Search filtering tests |
| Sorting is incorrect | Poor shopping experience | Medium | Sort order validation |
| Order confirmation does not appear | User cannot confirm purchase success | Critical | End-to-end checkout test |
| Controls are not accessible | Accessibility and usability issue | Medium | Role/label-based checks |

## AI-Specific Risks

| AI Risk | Example | QA Control |
|---|---|---|
| AI generates irrelevant test cases | Suggests payment gateway tests although no payment exists | Human review against scope |
| AI invents requirements | Claims users can create accounts when login does not exist | Requirement validation |
| AI misses edge cases | Does not suggest invalid coupon testing | Risk-based review |
| AI creates weak expected results | Expected result is generic and not measurable | QA rewrites expected result |

## Quality Decision

The purchase flow is considered the most critical path because it covers product selection, cart logic, pricing, and checkout confirmation.
