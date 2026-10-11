# Day 4 trainer notes

Subha Prasad, TCS Assets Consultant (C3A).
15 October 2026, 10:00–11:00 AM IST, Microsoft Teams.

30 slides, 60 minutes. Use the Product Catalog on the tcs-sme-reactjs/day-four branch. Initial data: 4 products, 2 in stock, 2 out of stock. The local HTTP resource is public/products.json. Demonstrate loading, error, Retry and an empty resource; the successful cart uses Notebook and Bag: 2 items, ₹580.

## Slide 1: ReactJS · Day Four

Time: 1 minute.

Introduce yourself as TCS Assets Consultant (C3A) and SME trainer. Continue the same small Product Catalog used on Days 2 and 3. Delivery is via Microsoft Teams. This session supports beginner learning; official E1 assessment rules determine certification.

## Slide 2: Today’s learning goals

Time: 1 minute.

Ask learners whether a page always receives its data immediately. Explain that they will keep all Day 3 interactions while changing the source of product data.

## Slide 3: Day 4 topic index

Time: 1 minute.

Orient learners to the five parts. Keep the browser and App.jsx ready to share; source code and detailed notes remain available after the session.

## Slide 4: Day 3 state and derived values

Time: 1 minute.

Recall: props carry values, callbacks request changes, and state triggers rendering. matchesFilter is an illustrative predicate; the complete project combines name, category and stock checks inline. Initial products is an empty array while status is loading.

## Slide 5: JSON product data

Time: 1 minute.

Open public/products.json. Contrast JSON with the earlier JavaScript module: no export statement, single quotes or comments. The example on screen is one object inside the full array. Prices are fictional INR. JSON comments are explained in README and loadProducts.js.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 6: The local resource URL

Time: 1 minute.

Open http://127.0.0.1:5184/products.json during your prepared demo; learners use their own Vite URL. Do not fetch /public/products.json. Use the dev server rather than double-clicking index.html. Root-relative URLs assume this training app is hosted at the root; adjust for a deployment subpath.

Source: https://vite.dev/guide/assets.html#the-public-directory

## Slide 7: A Promise represents a future result

Time: 1 minute.

Explain with ordering: start a request, keep running, then receive a response later. Avoid calling a Promise a thread. A fulfilled fetch Promise supplies a Response; the body still needs to be read.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 8: async and await

Time: 2 minutes.

Read each await aloud. This introductory function omits HTTP checks, validation and cancellation; the complete loadProducts helper adds those. Do not describe await as making the request synchronous globally.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 9: try and catch

Time: 2 minutes.

This excerpt belongs inside an async function. Demonstrate that catch handles rejected fetch or rejected body parsing. A server HTTP error needs an explicit check before it becomes a thrown error.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 10: HTTP status and response.ok

Time: 2 minutes.

Explain 404 as missing resource and 500 as server failure. Network failure rejects fetch; HTTP 404 usually resolves with a Response. Code is an excerpt of loadProducts, with shorter teaching error text.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 11: Checking the loaded data

Time: 1 minute.

Open validateProducts in src/data/loadProducts.js. It checks nonblank unique IDs, nonblank names, finite nonnegative numeric prices, allowed categories and boolean stock. An empty array is valid. Do not spend the whole session on every condition; learners first understand the boundary between parsing and validation.

## Slide 12: Render, event and Effect

Time: 2 minutes.

Ask learners to classify search filtering, Add to cart, and fetching. Rendering should stay pure. This is a small teaching app; larger apps often use framework loaders or a data library instead of hand-writing every request Effect.

Source: https://react.dev/reference/react/useEffect

## Slide 13: useEffect structure

Time: 2 minutes.

Explain setup, cleanup and dependency list separately. Effects are tied to committed renders, not a guarantee that they always run after browser paint. The empty example illustrates syntax rather than fetching.

Source: https://react.dev/reference/react/useEffect

## Slide 14: Dependency lists

Time: 2 minutes.

Mention the development StrictMode extra setup/cleanup cycle even for []. React compares dependency values using Object.is. In this project the URL is fixed, the loader is imported, setters are stable, and retryCount is deliberately the request trigger. Do not present dependencies as an arbitrary scheduling trick.

Source: https://react.dev/reference/react/useEffect

## Slide 15: Avoid accidental request loops

Time: 2 minutes.

fetchCatalog is defined inside the real Effect. This is a conceptual incorrect example, not code to paste. The fetched array changes identity and triggers another run if used as the dependency. Explain that a dynamic resource URL must itself be included when used.

Source: https://react.dev/reference/react/useEffect

## Slide 16: Loading, error and success

Time: 2 minutes.

Explain why products=[] cannot distinguish waiting from a successful empty catalog. The project uses one status string to avoid contradictory isLoading and hasError booleans. The cart and filters retain their separate Day 3 state.

## Slide 17: Starting the request

Time: 2 minutes.

Open App.jsx and trace the first three lines of setup. This partial excerpt omits request and cleanup shown next. There is no artificial delay in app code; use browser Network throttling for a visible loading demonstration.

Source: https://react.dev/reference/react/useEffect

## Slide 18: Receiving successful data

Time: 2 minutes.

This is the try branch inside async fetchCatalog, not a standalone Effect. The loaded array flows through ProductSummary and ProductList; derived filters recompute using state. The guard prevents an old continuation from writing results after cleanup.

Source: https://react.dev/reference/react/useEffect

## Slide 19: Displaying request states

Time: 2 minutes.

The slide shows JSX excerpts; the actual error section also includes a heading and Retry button. Show that summary/cards are hidden during loading and error. Success with zero products receives its own message; success with products shows the full Day 3 interface.

## Slide 20: Empty data and no filter matches

Time: 2 minutes.

Temporarily put [] in public/products.json and reload, then restore it. Afterwards search for Laptop in the normal dataset to show the different no-filter-matches message. A successful JSON request can contain no items.

## Slide 21: Retry after a failed request

Time: 2 minutes.

For live practice rename products.json to products-backup.json, reload to cause failure, restore the filename, then click Retry. Vite may return HTML fallback for a missing JSON path; this becomes a parsing error rather than necessarily a 404. The project shows the actual error message. Retry is manual, not an endless automatic loop.

Source: https://react.dev/reference/react/useEffect

## Slide 22: AbortController and cleanup

Time: 2 minutes.

Setup creates a new controller for each request. Cleanup runs before setup repeats and when App unmounts. The signal check also guards continuations after response parsing. Explain cancellation as stopping obsolete work; do not call it a guaranteed rollback of server actions.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 23: async work inside an Effect

Time: 2 minutes.

The excerpt omits controller construction shown on slide 17. Open the full Effect in App.jsx so every fragment connects. StrictMode runs an extra setup/cleanup cycle during development; one cancelled request can appear in Network. Keep StrictMode enabled and write correct cleanup.

Source: https://react.dev/reference/react/useEffect

## Slide 24: Our loaded Product Catalog

Time: 4 minutes.

Show the actual screenshot, then share the live browser. Network → products.json demonstrates the HTTP response. Compare App products state with public/products.json. Add Notebook and Bag to reach ₹580. Point out that state remains in memory: there is no checkout or payment.

## Slide 25: Trace the request in the project

Time: 3 minutes.

Open these three files in order. Run npm run check:day-four to show async file loading in Node; explain that it does not execute React Hooks. Run the Vite app. Ask one learner to narrate request → body → validation → setProducts → render. Leave earlier Day 1–3 lesson files for revision.

## Slide 26: Loading and error experiments

Time: 3 minutes.

Use browser Network Slow 3G or equivalent, with cache disabled. In development StrictMode can show a cancelled request plus the active request. For error rename the JSON file, reload, then restore and Retry; missing-path HTML can trigger JSON parsing failure. Close throttling after the demo. Show that filters do not request products again.

## Slide 27: Change the JSON and empty state

Time: 5 minutes.

Give learners 5 minutes. Keep JSON valid: double quotes, no comments, no trailing commas. Expected totals: Notebook100+Bag500=600. Empty JSON array displays No products are available yet. Restore80 and all4products before continuing. Optional exercise: add a success message showing the loaded count, without adding an Effect.

## Slide 28: Common mistakes

Time: 2 minutes.

Ask learners to point to the matching correct code. Dependency arrays include reactive resource URLs when present. This project intentionally uses a fixed root-relative URL. Mention that derived search/cart totals need no Effect. Production data-loading tools can add caching and request deduplication.

Source: https://react.dev/reference/react/useEffect

## Slide 29: Quick quiz

Time: 3 minutes.

Answers: 1 No, it is a Response reached through a Promise; read response.json. 2 No, check response.ok. 3 retryCount changes. 4 It cancels obsolete requests and prevents old continuations from updating this component. 5 No, successful empty data is valid. Have learners answer aloud before revealing the explanations.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 30: Day 4 recap and next practice

Time: 2 minutes.

Homework: add P-105 Pencil price10 Stationery inStocktrue to public/products.json. Reload and expect5total,3in stock,2out of stock; addingNotebook+Bag+Pencil gives590. Keep unique IDs and known categories. Day5 can consolidate components, forms and the final mini-project. Reference React useEffect, MDN Using Fetch, Vite public directory; W3Schools React useEffect can be supplementary reading, not the technical authority.

Source: https://react.dev/reference/react/useEffect
