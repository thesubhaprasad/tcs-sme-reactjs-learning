# ReactJS SME training — Day 2

**Subha Prasad**, TCS Assets Consultant (C3A), SME trainer.
**13 October 2026, 10:00–11:00 AM IST**, Microsoft Teams.

## Learning outcomes

Extract reusable components, pass and read props, explain default values, compose nested JSX with `children`, choose conditional UI, and render lists with stable keys. This builds on the Day 1 branch. Day 2 changes configuration in source files. State and interactive event handling belong to Day 3.

## Setup

Use an organisation-approved compatible Node.js version (Vite 7 requires Node 20.19+ or 22.12+).

```sh
git clone --branch tcs-sme-reactjs/day-two git@github.com:thesubhaprasad/tcs-sme-reactjs-learning.git
cd tcs-sme-reactjs-learning
npm ci
npm run dev
```

For an existing clean checkout, use `git switch tcs-sme-reactjs/day-two`. Open the local URL printed by Vite.

## One-hour delivery plan

| Time (IST) | Activity |
| --- | --- |
| 10:00–10:05 | Introduction, Day 1 recall, index |
| 10:05–10:17 | Component extraction, imports, props and defaults |
| 10:17–10:25 | children and conditional rendering |
| 10:25–10:30 | Lists, keys and styling |
| 10:30–10:45 | Guided project walkthrough |
| 10:45–10:55 | Learner practice |
| 10:55–11:00 | Quiz and recap |

Use slides as a reference, predict results before running examples, and keep extended default-value and key explanations for revision if learners need more practice. The trainer notes include slide timing and answers.

## Project structure and data flow

- `App.jsx` supplies source configuration and composes the page.
- `PageHeader.jsx` reads title, subtitle, trainer and date props.
- `ProductSummary.jsx` derives totals from all products.
- `Section.jsx` wraps nested JSX using `children`.
- `ProductList.jsx` handles the empty branch and maps visible products.
- `ProductCard.jsx` reads one product and the showCategory boolean.
- `StockBadge.jsx` chooses a stock class and demonstrates a default prop.
- `data/products.js` contains four fictional product objects.
- `lessons/day-two-data.js` demonstrates filter, map, defaults and stable IDs.
- `training/day-2/` contains the editable PPT and trainer notes.
- `training/day-1/` preserves the Day 1 presentation and notes.

The original screen shows **4 total, 2 in stock, 2 out of stock**, four inventory cards, and a separate empty-list message.

## Guided hands-on

1. Read the parent props in App and identify the receiving component.
2. Trace the `product` object from ProductList into ProductCard.
3. Change `selectedStock` to `In stock` and save. The inventory now shows two cards, while the summary still describes all four products.
4. Change `showCategory` to `false`. Category paragraphs disappear.
5. Change the inventory's ProductList prop to `products={[]}`. Its empty message appears.
6. Restore the original configuration.
7. Add a fifth product with a unique ID. Confirm counts match its inStock boolean.

Expected result: the reusable components handle different data without duplicating their markup or mutating props. IDs remain attached to their products even when you reorder the array.

## Practice and homework

Live practice: add `brand` to every product and display it in ProductCard. Pass a new `showBrand` boolean through App, ProductList and ProductCard. Verify true and false cases.

After class: extract a ProductDetails component that receives category and price props. Compare missing, undefined and null values for a default prop.

## Quiz answers

1. A parent passes data to a child through props.
2. Default values apply to omitted or undefined props, not null.
3. Nested JSX arrives through children.
4. A stable key identifies an item among its siblings across updates.
5. Use `count > 0 && ...` instead of `count && ...` to avoid rendering zero.
6. Treat props as read-only. The parent supplies new values.

## Checks

```sh
npm run check:lessons
npm run check:day-two
npm run build
npm run preview
```

Manual browser checks: original counts and four cards, In stock filtering, category visibility, empty-list fallback, and no console errors. `preview` serves the production build locally.

## References and scope

- https://react.dev/learn/passing-props-to-a-component
- https://react.dev/learn/importing-and-exporting-components
- https://react.dev/learn/conditional-rendering
- https://react.dev/learn/rendering-lists

This is foundation training. TCS E1 official syllabus, assessment rules and eligibility govern certification. No backend, API loading or persistence is required for Day 2.

## Product Catalog data

Each product has `id`, `name`, `price` (INR), `category` and a boolean `inStock`. The sample shop sells Notebook (₹80), Pen (₹20), Bag (₹500) and Bottle (₹250). All example data and prices are fictional.

Use `selectedStock = "In stock"` or `"Out of stock"` to select a boolean filter; `"All"` displays all four products. Use `showCategory = false` to hide category paragraphs. The price stays visible. `StockBadge` receives `inStock`, with a default of `true`; an explicit `false` stays false.

Day 2 sets Bottle to `inStock: false` so the four-item dataset demonstrates both stock states evenly. The Day 1 add-product exercise uses `inStock: true` for its separate expected-count example.
