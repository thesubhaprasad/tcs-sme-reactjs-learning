# ReactJS SME training — Day 3

**Subha Prasad**, TCS Assets Consultant (C3A), SME trainer.

**14 October 2026, 10:00–11:00 AM IST**, Microsoft Teams.

Audience: learners who completed the Day 1 JavaScript foundations and Day 2 props lessons.

## Learning outcomes

Connect events to handlers, use `useState`, read controlled inputs, pass callbacks through props, and update arrays without mutation. Build live search, category and stock filters, then add and remove products from a small cart. Compute the total from the cart and handle a local form submission.

## Setup

Use an organisation-approved compatible Node.js version. Vite 7 requires Node 20.19+ or 22.12+.

```sh
git clone --branch tcs-sme-reactjs/day-three git@github.com:thesubhaprasad/tcs-sme-reactjs-learning.git
cd tcs-sme-reactjs-learning
npm ci
npm run dev
```

For an existing clean checkout, run `git switch tcs-sme-reactjs/day-three`, then `npm ci` and `npm run dev`. Open the URL printed by Vite. Stop the server with Ctrl+C.

## One-hour delivery plan

| Time (IST) | Activity |
| --- | --- |
| 10:00–10:04 | Introduction, index and Day 2 recall |
| 10:04–10:15 | Event handlers, useState and updates |
| 10:15–10:21 | Controlled inputs and derived filters |
| 10:21–10:31 | Shared state, callback props, cart and forms |
| 10:31–10:45 | Project walkthrough and browser experiments |
| 10:45–10:53 | Learner checkbox exercise |
| 10:53–11:00 | Common mistakes, quiz and recap |

The PPT contains 30 slides. Its speaker notes and `training/day-3/TRAINER_NOTES.md` include timing, prediction questions and quiz answers. Keep snapshot details and the note form brief if learners need more input practice.

## Product Catalog rules

| Product | Price (INR) | Category | Stock |
| --- | ---: | --- | --- |
| Notebook | 80 | Stationery | In stock |
| Pen | 20 | Stationery | Out of stock |
| Bag | 500 | Accessories | In stock |
| Bottle | 250 | Accessories | Out of stock |

All data and prices are fictional. The original catalog shows **4 total, 2 in stock, 2 out of stock**. Search ignores case and trims leading/trailing spaces. Name, category and stock filters combine, so every active condition must match.

The cart accepts **one entry per in-stock product**. Selected products have a disabled Add button. Filters and Reset filters preserve cart selections. Clear cart removes all cart items. State stays in memory and resets after a page reload. This lesson has no checkout, payment, backend or storage.

## Files and state ownership

- `src/App.jsx`: owns `search`, `category`, `onlyInStock` and `cart`; computes visible products and the total; supplies callbacks.
- `src/components/FilterBar.jsx`: controlled text, select and checkbox inputs.
- `src/components/ProductList.jsx`: maps the visible products and checks whether an item is in the cart.
- `src/components/ProductCard.jsx`: displays product data and calls `onAddToCart(product)` after a click.
- `src/components/CartPanel.jsx`: displays selected items and calls remove/clear callbacks.
- `src/components/PracticeNote.jsx`: owns its local draft and saved note; handles `onSubmit` with `preventDefault`.
- `src/components/ProductSummary.jsx`, `StockBadge.jsx` and `Section.jsx`: reused Day 2 components.
- `src/data/products.js`: the same four products from Day 2.
- `src/lessons/day-three-state.js`: runnable JavaScript examples for search, combined filters, array copies, removal and totals. It does not run React Hooks in Node.
- `training/day-3/`: editable PPT, trainer notes and presentation media.
- `training/day-1/` and `training/day-2/`: earlier presentations and notes.

Values go from App into child props. User actions call the parent callbacks. The setters request another render. `visibleProducts` and `cartTotal` derive from current data during rendering, so they do not need their own state.

## Guided hands-on

1. Run `npm run check:day-three`. Predict the search and cart totals before reading the output.
2. Find the four `useState` declarations at the top of App. Explain the initial value and setter for each.
3. Trace `search` and `setSearch` from App into FilterBar's `value` and `onChange`.
4. Type `  NOTE  `. Only Notebook should appear. Choose Accessories at the same time: expect the no-matches message.
5. Clear the search, keep Accessories and check In stock only. Only Bag should appear.
6. Click Reset filters. Expect four cards, All category and an unchecked stock filter.
7. Add Notebook and Bag. Expect **2 items, ₹580**. Pen and Bottle remain disabled.
8. Search for Pen. The catalog changes but the two cart items remain. Reset filters also preserves the cart.
9. Remove Notebook. Expect **1 item, ₹500**. Notebook's Add button becomes available again.
10. Clear cart. Expect **0 items, ₹0** and the empty message.
11. Type `Gift wrap please` in the note form and press Enter. Expect the saved note on the same page. Empty/whitespace notes keep Save note disabled.
12. Reload the page. Filters, cart and note return to their initial values.

## Your turn: Show categories checkbox

Use the existing Day 2 `showCategory` prop with a new state value.

1. Add `const [showCategory, setShowCategory] = useState(true);` at the top of App.
2. Add a labelled checkbox in App's catalog section. Bind `checked={showCategory}` and use `onChange={event => setShowCategory(event.target.checked)}`.
3. Add `showCategory={showCategory}` to App's ProductList usage. Keep its existing `cart` and `onAddToCart` props.
4. ProductList already forwards this prop to ProductCard.
5. Uncheck and recheck: category paragraphs hide and reappear, prices remain visible, and the cart still works.

Optional extension: move the checkbox into FilterBar and forward `showCategory` and `onShowCategoryChange`. This practices callback props. The starter intentionally leaves the new checkbox for learners to build.

## Try at home

Add a maximum price input. Store its text in state, treat an empty string as no price limit, validate the value, then convert it with `Number` for the comparison. Check ₹100 displays Notebook and Pen before applying the stock filter. Keep the cart total derived from `cart`.

Explain why `onClick={handler}` differs from `onClick={handler()}`. Compare a local variable with state, and describe why the cart update uses spread/filter rather than push/splice.

## Quiz answers

1. A click handler runs after the user clicks.
2. `useState` returns the current value and a setter function.
3. A checkbox's boolean is `event.target.checked`.
4. Return a new array to update state without modifying the previous array.
5. Shared cart state belongs in the closest common parent, App here.
6. `preventDefault` prevents the form's default browser navigation so React can handle submission on the current page.

## Checks

```sh
npm run check:lessons
npm run check:day-two
npm run check:day-three
npm run build
npm run preview
```

The Day 3 script checks plain JavaScript operations and prints their results. Verify React interactions in the browser using the guided steps above. `preview` serves the production build.

## References

- https://react.dev/learn/responding-to-events
- https://react.dev/learn/state-a-components-memory
- https://react.dev/learn/state-as-a-snapshot
- https://react.dev/reference/react/useState
- https://react.dev/reference/rules/rules-of-hooks
- https://react.dev/reference/react-dom/components/input
- https://react.dev/reference/react-dom/components/select
- https://react.dev/learn/sharing-state-between-components
- https://react.dev/learn/updating-arrays-in-state
- https://react.dev/learn/choosing-the-state-structure

Day 4 introduces `useEffect`, product loading and loading/error states. TCS E1 certification follows the official syllabus and assessment rules.
