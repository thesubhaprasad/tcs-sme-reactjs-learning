# ReactJS SME training — Day 5

**Subha Prasad**, TCS Assets Consultant (C3A), SME trainer.

**16 October 2026, 10:00–11:00 AM IST**, Microsoft Teams.

The final beginner session combines Days 1–4 in the same small Product Catalog. It introduces a custom Hook, controlled form validation and a local practice order preview. Use fictional customer details such as **Demo Customer**.

## Learning outcomes

Explain components, props, state, callbacks and Effects in one working app. Extract Day 4 request logic into `useProducts`, validate form inputs, capture a separate submitted snapshot, reset local form state, and check a production build locally. Learners should be able to narrate the complete flow from JSON request to preview.

## Setup

Use an organisation-approved Node.js version compatible with the existing Vite 7 project (Node 20.19+ or 22.12+).

```sh
git clone --branch tcs-sme-reactjs/day-five git@github.com:thesubhaprasad/tcs-sme-reactjs-learning.git
cd tcs-sme-reactjs-learning
npm ci
npm run dev
```

For an existing clean checkout, switch to `tcs-sme-reactjs/day-five`, then run `npm ci` and `npm run dev`. Open Vite's printed URL. Stop the server with Ctrl+C.

## One-hour delivery plan

| Time (IST) | Activity |
| --- | --- |
| 10:00–10:07 | Introduction, index, five-day recap and final user flow |
| 10:07–10:16 | Component roles and custom Hook |
| 10:16–10:28 | Controlled form, submit handler and validation |
| 10:28–10:35 | Submitted snapshot, conditional preview and reset |
| 10:35–10:39 | Browser checks and production build |
| 10:39–10:46 | Live walkthrough and project files |
| 10:46–10:51 | Delivery city learner exercise |
| 10:51–10:56 | Debugging and final quiz |
| 10:56–11:00 | Next practice, questions and course IDs |

The editable PPT contains 30 slides with 60 minutes of speaker notes. `training/day-5/TRAINER_NOTES.md` includes examples, demo steps and quiz answers. Spend more time on forms if needed; custom Hook internals repeat the working Day 4 code.

## Final project behavior

Products load from the same `public/products.json` over HTTP. The catalog starts with **4 total, 2 in stock, 2 out of stock**. Search ignores case and surrounding spaces. Category and stock filters combine. Only in-stock products can be added, once each.

| Product | Price (INR) | Category | In stock |
| --- | ---: | --- | --- |
| Notebook | 80 | Stationery | true |
| Pen | 20 | Stationery | false |
| Bag | 500 | Accessories | true |
| Bottle | 250 | Accessories | false |

All product data and prices are fictional. Notebook + Bag totals **₹580**. The same cart is shared by the catalog, cart panel and order form through App's state and props.

The form requires a nonempty cart and a trimmed name of at least 2 characters. This is a teaching rule, not a universal validation rule for human names. The delivery note is optional. A valid submission creates a **practice snapshot in memory**. It does not place an order, send customer details, charge money or save data to storage.

The current cart and captured preview are deliberately separate. If you preview Notebook + Bag at ₹580, then remove Notebook, the cart becomes ₹500 while the labelled snapshot stays at ₹580. Submit again to capture the new cart and form values. Reset order form clears its inputs, errors and preview; it preserves the cart. Reload resets all UI memory and starts another JSON request.

## Files and state ownership

- `src/App.jsx`: owns shared search, category, stock filter and cart; calls `useProducts`; computes filtered products and current cart total; composes children.
- `src/hooks/useProducts.js`: the Day 4 state and Effect, extracted into a custom Hook. Returns products, status, error and a retry action. Dependencies are `[url, retryCount]`.
- `src/data/loadProducts.js`: unchanged HTTP status check, JSON parsing and product schema validation.
- `src/components/OrderForm.jsx`: local controlled name/note, submission errors and captured draft; accessible labels/feedback and reset action.
- `src/data/orderDraft.js`: plain `validateOrder` and `createOrderDraft` helpers. The latter copies item details and computes a snapshot total.
- `src/lessons/day-five-order.js`: runnable plain-JavaScript validation/snapshot examples. No React Hooks run in Node.
- `src/components/FilterBar.jsx`, `ProductList.jsx`, `ProductCard.jsx`, `CartPanel.jsx`: retained working catalog/cart components.
- `src/components/PracticeNote.jsx`: retained simple Day 3 form for revision.
- `public/products.json`: live data source. JSON cannot contain comments; its schema is documented in the loader and the Day 4 README on its branch.
- `src/data/products.js`: retained earlier static sample data, used by isolated runnable lessons rather than the live app.
- `training/day-5/`: PPT, trainer notes and actual screenshots. Earlier day presentations remain available.

Custom Hooks reuse stateful logic; separate calls have independent state. App calls `useProducts` once and passes the result down. Search and cart updates do not refetch the fixed resource. Cleanup aborts obsolete requests and guards their continuations. Keep StrictMode enabled; its extra setup/cleanup cycle applies in development.

## Guided hands-on

1. Run `npm run check:day-five`. Predict validation messages and the ₹580 total before reading the output.
2. Open App and compare the shorter `useProducts` call with the full request logic in `src/hooks/useProducts.js`.
3. Load the browser app. Before adding anything, click Preview practice order. Expect **Add an in-stock product before previewing.**
4. Add Notebook and Bag. Try a spaces-only name, then `A`. Both should show the name validation message and create no preview.
5. Enter `  Demo Customer  ` and `  Gift wrap please  `, then press Enter in the name field. Expect trimmed text, two snapshot items and **₹580** without a page reload.
6. Remove Notebook. The current cart is ₹500 but the earlier snapshot stays ₹580. Click Preview again: the snapshot becomes ₹500.
7. Clear the delivery note and preview again. Expect **Delivery note: None**.
8. Edit the name/note. The submitted preview does not change until another valid submission. A failed later submission can leave the earlier valid snapshot visible.
9. Click Reset order form. Inputs, error and preview disappear; Bag remains in the current cart.
10. Confirm search, category/stock filters, Reset filters, disabled out-of-stock buttons and Clear cart still work.
11. Revisit Day 4: make the JSON resource unavailable, reload, restore it and Retry. Missing paths in Vite may return HTML and cause a JSON parsing error instead of HTTP 404.
12. Check keyboard focus, labels and a narrow viewport. Reload: all local inputs, cart and preview reset.

The form uses `noValidate` so explicit JavaScript checks teach the rules consistently. It does not mean validation is automatic. `aria-required`, `aria-invalid`, `aria-describedby` and alert text explain the name error. Actual server-side order systems must validate on the server as well.

## Your turn: Delivery city

The starter leaves this feature for learners to implement.

1. Add `city` state and a labelled controlled input in OrderForm.
2. Extend `validateOrder` to accept city and require `city.trim()` to be nonempty.
3. Pass city into `createOrderDraft` and add the trimmed city to its returned object.
4. Show the submitted city in the preview.
5. Clear city in `handleReset`.
6. Update the runnable lesson calls if helper signatures change.

Acceptance: a blank city stops submission, **Kolkata** appears after a valid submission, reset clears it, and Notebook + Bag still costs ₹580. Add feedback associated with the city input rather than marking the name invalid for a city error.

## Try at home

Add a maximum-price filter. Store the input text, treat blank as no limit, validate before converting with `Number`, and derive visible products without an Effect. At ₹100, Notebook and Pen appear before applying the stock filter. Existing cart selections should remain.

Explain the complete app to a teammate using the code, then practise loading, HTTP error, malformed JSON, empty resource and no filter matches. Add further features only after the basic flow is clear.

## Final quiz answers

1. A custom Hook shares logic, not automatically shared state; separate calls have independent state.
2. `preventDefault` avoids the form's default browser navigation.
3. Validation returns a message; the early return blocks an invalid draft.
4. The draft copied item details and total at submit time. Submit again to update it.
5. `npm run build` creates local `dist` files; it does not publish the app.

## Build and local preview

```sh
npm run check:day-five
npm run build
npm run preview
```

Vite copies the public JSON resource into `dist`. Open the preview URL and repeat the guided browser checks. `preview` checks a build locally; it is not a production hosting server. The root-relative JSON URL assumes deployment at the site root and needs adjustment for subpath hosting.

Earlier runnable examples remain available with `check:lessons`, `check:day-two`, `check:day-three` and `check:day-four`.

## Course IDs

The last PPT slide includes the IDs supplied by Subha Prasad:

- **75214**
- **62104**

Use the internal learning portal to check course details. Course names, portal URLs and an official syllabus have not been supplied. TCS E1 certification follows official assessment requirements.

## References

- https://react.dev/learn/reusing-logic-with-custom-hooks
- https://react.dev/reference/react-dom/components/input
- https://react.dev/reference/react-dom/components/textarea
- https://react.dev/learn/sharing-state-between-components
- https://react.dev/reference/react/useEffect
- https://vite.dev/guide/build.html
- https://www.w3schools.com/react/react_forms.asp (supplementary beginner reading)
