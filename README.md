# ReactJS SME training — Day 1

Trainer: **Subha Prasad**, TCS Assets Consultant (C3A), SME trainer.
Session: **12 October 2026, 10:00–11:00 AM IST**, Microsoft Teams.
Audience: JavaScript and React beginners.

## Learning outcomes

Read variables, objects, arrays and functions, explain `map` and `filter`, and render JavaScript data through a React component. Props and keys appear in the guided demo and receive deeper treatment on Day 2. No state, event handlers or API requests are required on Day 1.

## Setup

Use an organisation-approved compatible Node.js version (Vite 7 requires Node 20.19+ or 22.12+). Clone the Day 1 branch, then install and run:

```sh
git clone --branch tcs-sme-reactjs/day-one git@github.com:thesubhaprasad/tcs-sme-reactjs-learning.git
cd tcs-sme-reactjs-learning
```

From this repository:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. `npm ci` uses the committed lockfile. Stop the server with Ctrl+C.

## JavaScript lesson

```sh
npm run check:lessons
```

Read `src/lessons/javascript-basics.js` while comparing its console output. Predict each result before executing it.

## Session plan

| Time (IST) | Activity |
| --- | --- |
| 10:00–10:05 | Trainer introduction, topic index, learning outcomes |
| 10:05–10:25 | JavaScript fundamentals with examples |
| 10:25–10:45 | React concepts, project structure and JSX demo |
| 10:45–10:55 | Guided hands-on |
| 10:55–11:00 | Quiz and recap |

Detailed slides are a teaching reference. Move optional syntax explanations into post-class revision when learners need more time.

## Files to explore

- `index.html`: root HTML element.
- `src/main.jsx`: React entry and StrictMode.
- `src/App.jsx`: page composition, array expressions and list rendering.
- `src/components/ProductCard.jsx`: reusable component with a data prop.
- `src/data/products.js`: fictional product objects.
- `src/lessons/javascript-basics.js`: commented runnable JavaScript examples.
- `src/styles.css`: commented styling.
- `vite.config.js`: React JSX transform and Fast Refresh configuration.
- `training/`: Day 1 PowerPoint and trainer notes.

## Guided hands-on

1. Run the JavaScript lesson and explain the `map` result.
2. Open `src/data/products.js` and add a fourth product with a unique ID.
3. Change its name, price, category and inStock.
4. Verify the total count increases to 4.
5. Verify the in stock count matches the number of In stock products.
6. Change the heading in `src/App.jsx`.
7. Check the browser console for errors.

Expected result: the new card appears, counts match the dataset, and the page updates without editing the ProductCard component.

## Try at home (20–30 minutes)

Add a `brand` field to each product and display it in ProductCard. Add an `Out of stock` count using `filter`. Explain the original and copied objects in the JavaScript lesson.

## Quiz answers

1. Reassign a variable: `let`.
2. Transform every array item: `map`.
3. Select matching items: `filter`.
4. JSX braces contain a JavaScript expression.
5. Component names begin with a capital letter.

## Verification

```sh
npm run check:lessons
npm run build
npm run preview
```

Preview serves the production build locally. This demo stores fictional data in source files and has no backend or persistence.

## Certification scope and references

This is foundation training. It does not define TCS E1 eligibility, official syllabus or assessment rules.

- https://react.dev/learn
- https://react.dev/learn/your-first-component
- https://react.dev/learn/writing-markup-with-jsx
- https://react.dev/learn/rendering-lists
- https://vite.dev/guide/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Product Catalog data

Each product has `id`, `name`, `price` (INR), `category` and a boolean `inStock`. The sample shop sells Notebook (₹80), Pen (₹20), Bag (₹500). All example data and prices are fictional.

Live exercise: add Bottle with ID `P-104`, price `250`, category `Accessories` and `inStock: true`. Expect **4 total products and 3 in stock**. Try at home: add a `brand` property and display it; derive the out-of-stock count with `products.filter(product => !product.inStock).length`.
