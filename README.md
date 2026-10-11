# ReactJS SME training — Day 4

**Subha Prasad**, TCS Assets Consultant (C3A), SME trainer.

**15 October 2026, 10:00–11:00 AM IST**, Microsoft Teams.

For beginners who have completed Days 1–3: JavaScript foundations, components, props, events and state. Today the same Product Catalog loads its products from a local JSON resource over HTTP.

## Learning outcomes

Understand Promises, `async`/`await`, `fetch`, `response.ok` and JSON parsing. Use `useEffect` with dependencies and cleanup, show loading/error/success states, distinguish empty data from no filter matches, and retry a failed request. Keep Day 3 search, filters, cart and local note form working.

## Setup

Use an organisation-approved Node.js version compatible with the existing Vite 7 project (Node 20.19+ or 22.12+).

```sh
git clone --branch tcs-sme-reactjs/day-four git@github.com:thesubhaprasad/tcs-sme-reactjs-learning.git
cd tcs-sme-reactjs-learning
npm ci
npm run dev
```

For an existing clean checkout, switch to `tcs-sme-reactjs/day-four`, run `npm ci`, then `npm run dev`. Open the URL printed by Vite. Use the dev server rather than opening HTML directly. Stop it with Ctrl+C.

## One-hour delivery plan

| Time (IST) | Activity |
| --- | --- |
| 10:00–10:04 | Introduction, index and Day 3 recall |
| 10:04–10:14 | JSON, local URL, Promises, async/await and HTTP checks |
| 10:14–10:22 | Effects, dependencies and request state |
| 10:22–10:38 | Loading, success, error, empty data, Retry and cleanup |
| 10:38–10:48 | Live project walkthrough and request experiments |
| 10:48–10:53 | Learner JSON exercise |
| 10:53–11:00 | Common mistakes, quiz and recap |

The editable PPT has 30 slides with speaker notes totalling 60 minutes. `training/day-4/TRAINER_NOTES.md` contains teaching cues and answers. Explain JSON and await slowly; keep the validation helper and StrictMode details brief when learners need more time.

## Data and project files

- `public/products.json`: the active data resource. Vite serves it as `/products.json`. JSON cannot contain comments; its schema is documented below and in the loader.
- `src/data/loadProducts.js`: commented HTTP loader and data validation. `fetch` can resolve for an HTTP failure, so the loader checks `response.ok` before parsing the body.
- `src/App.jsx`: owns loaded products, `status`, `error` and `retryCount`, plus Day 3 filters and cart. Its Effect creates a controller, loads data, sets state and returns cleanup.
- `src/components/`: reused components for cards, summary, filters, cart and a local note form.
- `src/data/products.js`: retained Day 2/3 static dataset for older runnable lessons; App now uses JSON instead.
- `src/lessons/day-four-loading.js`: async file-reading and validation examples in Node. It does not run React Hooks.
- `training/day-4/`: PPT, trainer notes and real browser screenshots. Earlier day folders remain available.

A product has a nonblank string `id`, nonblank string `name`, finite nonnegative numeric `price`, category `Stationery` or `Accessories`, and boolean `inStock`. IDs must be unique. An empty array is valid. Do not add single quotes, comments or trailing commas to JSON.

| Product | Price (INR) | Category | In stock |
| --- | ---: | --- | --- |
| Notebook | 80 | Stationery | true |
| Pen | 20 | Stationery | false |
| Bag | 500 | Accessories | true |
| Bottle | 250 | Accessories | false |

All data is fictional. Initial counts are **4 total, 2 in stock, 2 out of stock**. Notebook + Bag gives **2 items, ₹580**. Only in-stock products can be added, once each. Filters preserve the cart. Cart and note reset on page reload; there is no payment, storage or backend.

## How the Effect works

1. The first render shows `Loading products…`.
2. Setup creates an `AbortController` and clears the previous error.
3. An inner async function calls `loadProducts('/products.json', controller.signal)`.
4. The helper checks the HTTP status, parses JSON and validates its shape.
5. Successful data is saved in state; `status` becomes `success`.
6. Failure sets the error message and `status` becomes `error`.
7. Retry increments `retryCount`, so React cleans up the old attempt and starts another.
8. Cleanup aborts old work before an Effect rerun or App unmount. Signal guards prevent cancelled continuations from updating state or displaying errors.

`[retryCount]` is the fixed catalog's request trigger. Typing, filtering and cart actions do not change it or refetch products. Search results and cart total remain derived during rendering. If you introduce a reactive URL, include it in the dependencies.

Do not make the Effect callback `async`: it must return cleanup rather than a Promise. StrictMode intentionally performs an extra setup/cleanup cycle in development. You may see one cancelled request plus an active request in the Network panel; keep StrictMode enabled. A larger app may use a framework loader or data library for caching and request deduplication.

## Guided hands-on

1. Run the app and open Network tools. Find `products.json`, inspect its response and compare it with the file.
2. Trace the Effect and loader in the files above. Explain both awaits: waiting for the Response, then reading/parsing its body.
3. Apply network throttling with cache disabled and reload. Observe loading before the four cards. Remove throttling after the demo.
4. Search `  NOTE  `: only Notebook appears. Choose Accessories at the same time: no filter matches. Reset filters.
5. Add Notebook and Bag: ₹580. Search/filter changes should preserve the cart and make no new products request.
6. Remove Notebook: ₹500. Clear cart: ₹0. Submit a local note with Enter; the page should not reload.
7. Rename `public/products.json` to `products-backup.json`, then reload. Observe the error screen. Vite can return an HTML fallback for a missing path, causing a JSON parsing error instead of HTTP 404.
8. Restore the filename, then click Retry without reloading. Expect loading followed by the catalog.
9. Temporarily replace the resource with `[]` and reload. Expect **No products are available yet.** This is success, not an error. Restore the original array.
10. Optional: use browser request blocking to simulate a network failure. Remove the block, then Retry.

Do not leave the resource renamed or empty after the exercise. Request error messages can vary by browser.

## Your turn

Change Notebook's price from 80 to 100 in JSON. Reload and add Notebook and Bag: expect **₹600**. Try an empty array, explain the message, then restore the original data and ₹80 price.

Optional: show the successful product count in a small text message derived from `products.length`; it does not need another Effect.

## Try at home

Add a fifth item: P-105, Pencil, price 10, Stationery, inStock true. Reload: **5 total, 3 in stock, 2 out of stock**. Notebook + Bag + Pencil totals **₹590**. Use a unique ID and the documented fields. Explain what happens with malformed JSON, an HTTP failure and valid empty data.

## Quiz answers

1. `fetch` returns a Promise for a Response, not the product array. `response.json()` reads/parses the body.
2. HTTP 404 does not automatically reject fetch. Check `response.ok`.
3. Retry increments `retryCount`, the Effect dependency.
4. Cleanup cancels obsolete work; guards prevent old continuations from updating state.
5. An empty array is valid success with a separate empty message.

## Checks

```sh
npm run check:lessons
npm run check:day-two
npm run check:day-three
npm run check:day-four
npm run build
npm run preview
```

The Day 4 script reads the actual JSON resource and checks valid, empty, invalid and duplicate-ID examples. Browser interactions follow the steps above. `preview` serves the production build, including `/products.json`. This root-relative URL assumes deployment at the site root; adapt it for a subpath deployment.

## References

- https://react.dev/reference/react/useEffect
- https://react.dev/learn/synchronizing-with-effects
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://developer.mozilla.org/en-US/docs/Web/API/AbortController
- https://vite.dev/guide/assets.html#the-public-directory
- https://www.w3schools.com/react/react_useeffect.asp (supplementary beginner reading)

TCS E1 certification follows the official syllabus and assessment rules. This material supports preparation; an official syllabus has not been supplied.
