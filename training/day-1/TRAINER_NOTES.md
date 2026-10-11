## Slide 1: ReactJS · Day One

Welcome learners and introduce the small shop Product Catalog example.

## Slide 2: Meet your trainer

Introduce yourself without inventing credentials. Ask learners to type their name and JavaScript experience in Teams chat.

## Slide 3: Today’s topic index

Use this index to establish the learning path. Advanced syntax slides can be revisited after the session.

## Slide 4: HTML, CSS and JavaScript

Use a building analogy briefly: structure, appearance, behaviour. Explain that JSX looks like HTML but is JavaScript syntax.

## Slide 5: What React does

Source: https://react.dev/learn/your-first-component and https://react.dev/learn/render-and-commit

## Slide 6: Values and data types

Open src/lessons/javascript-basics.js. Ask which value describes a yes/no condition.

## Slide 7: const and let

Explain that const does not freeze object properties. Use const by default and let when reassignment is required.

## Slide 8: An object describes one product

Ask learners to add category: Stationery. Objects can contain many types of values.

## Slide 9: An array stores a collection

Relate this to the products array in src/data/products.js.

## Slide 10: Functions turn inputs into results

Identify definition and call separately. Without return this function would return undefined.

## Slide 11: Conditions choose an outcome

Use true/false examples. Explain ? and : slowly.

## Slide 12: Arrow function syntax

Explain arrow as function syntax before using map. Differences in this binding are outside today’s core scope.

## Slide 13: map transforms every item

Show the input items and the returned names one at a time. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Slide 14: filter selects matching items

Use ready.length to connect the example to the dashboard count.

## Slide 15: Destructuring and spread

Optional deeper explanation after class if learners need more time on functions. Nested objects still share references in a shallow copy.

## Slide 16: import and export

Explain named exports and matching braces. App uses a default export for its main component.

## Slide 17: The prepared training project

Clone the tcs-sme-reactjs/day-one branch using the README command, then run these commands. Use an organisation-approved compatible Node version. Source: https://vite.dev/guide/

## Slide 18: Where each piece belongs

Open the files in this order during the demo. Explain the root div in index.html.

## Slide 19: Your first function component

Source: https://react.dev/learn/your-first-component

## Slide 20: JSX rules with an example

Source: https://react.dev/learn/writing-markup-with-jsx

## Slide 21: JavaScript values inside JSX

Source: https://react.dev/learn/javascript-in-jsx-with-curly-braces

## Slide 22: One component, different data

Introduce props only enough to understand the guided project. Day 2 covers props in depth. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 23: Product data becomes a list

key is a special React attribute, not a normal prop. Source: https://react.dev/learn/rendering-lists

## Slide 24: The Product Catalog demo

Use npm run check:lessons. Show how count, name, price, category and inStock come from data. Keep this walkthrough inside the 20-minute React/demo block.

## Slide 25: A fourth product on the screen

10 minutes. First 2 min demonstrate the file, next 6 min learner work, final 2 min verify. Keep IDs unique.

## Slide 26: Common Day 1 mistakes

Show one console error and its file location. If setup fails, learners can edit the JavaScript lesson and predict the expected output.

## Slide 27: Five questions before we finish

Ask learners to respond in Teams chat before revealing answers. Answers: let, map, filter, a JavaScript expression, a capital letter.

## Slide 28: What you can now explain

Ask a learner to explain the route from products.js to the browser. Try at home: brand and Out of stock count. Day 2: deeper props, conditions and component reuse.

## Slide 29: Practice and learning references

20–30 minutes practice. Official TCS E1 syllabus and assessment rules govern certification coverage. Sources: https://react.dev/learn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide https://vite.dev/guide/

## Product Catalog delivery cues

Prices are fictional INR values. Notebook costs ₹80, Pen ₹20 and Bag ₹500. The stock flag is a boolean named `inStock`. Use `product.inStock` to filter in-stock products and `!product.inStock` for out-of-stock products. Keep the printed price visible while hiding the category.

The initial catalog has 3 products and 2 in stock. Add Bottle at ₹250 with `inStock: true`: expect 4 total and 3 in stock.
