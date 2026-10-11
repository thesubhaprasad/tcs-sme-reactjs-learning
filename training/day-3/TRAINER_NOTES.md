# Day 3 trainer notes

Subha Prasad, TCS Assets Consultant (C3A).
14 October 2026, 10:00–11:00 AM IST, Microsoft Teams.

30 slides, 60 minutes. Use the Product Catalog on the tcs-sme-reactjs/day-three branch. Initial data: 4 products, 2 in stock, 2 out of stock. The demo cart uses Notebook and Bag: 2 items, ₹580.

## Slide 1: ReactJS · Day Three

Time: 1 minute.

Welcome learners. Ask who changed a prop in Day 2. Today users change the screen through browser controls.

## Slide 2: Today’s learning outcomes

Time: 1 minute.

Use the same fictional shop: Notebook ₹80, Pen ₹20, Bag ₹500 and Bottle ₹250. Notebook and Bag are in stock. One entry per product keeps the cart example small.

## Slide 3: Today’s topic index

Time: 1 minute.

Keep extra discussion of state snapshots for revision if learners need more input practice. There is no separate schedule slide.

## Slide 4: Day 2 inputs become interactive

Time: 1 minute.

Recall ProductList and StockBadge. Preview the checkbox, without explaining all its code yet.

Source: https://react.dev/learn/state-a-components-memory

## Slide 5: Event handlers

Time: 2 minutes.

This is an excerpt from a component. setSearch comes from useState, introduced next. Ask learners to identify the function definition and its JSX reference.

Source: https://react.dev/learn/responding-to-events

## Slide 6: A function reference in JSX

Time: 1 minute.

Discuss why the second form can cause repeated renders when the function sets state. Keep the teaching example as an excerpt rather than applying the broken version to the project.

Source: https://react.dev/learn/responding-to-events

## Slide 7: A handler with an argument

Time: 1 minute.

Point to ProductCard.jsx. The outer callback has no arguments. It calls the parent handler with this product.

Source: https://react.dev/learn/responding-to-events

## Slide 8: A changing value needs state

Time: 1 minute.

Explain the difference between a changing JavaScript variable and the component remembering data. Do not turn this broken excerpt into a learner copy-and-paste task.

Source: https://react.dev/learn/state-a-components-memory

## Slide 9: useState returns a value and setter

Time: 2 minutes.

Array destructuring gives the two returned values names. The example only introduces state syntax. The full app also reads search while filtering its products.

Source: https://react.dev/learn/state-a-components-memory

## Slide 10: Rules of Hooks

Time: 1 minute.

Do not call useState inside an if, a loop or an event handler. Hooks can also run inside custom Hooks, which are outside today’s core lesson.

Source: https://react.dev/reference/rules/rules-of-hooks

## Slide 11: State belongs to a render snapshot

Time: 1 minute.

This is an excerpt from a counter click handler. Ask learners to predict the console output. Avoid the vague claim that state is always immediately available after the setter.

Source: https://react.dev/learn/state-as-a-snapshot

## Slide 12: An update from the previous value

Time: 2 minutes.

React can queue updates and may call updaters twice in development StrictMode to check purity. Return data from the updater. Avoid side effects such as sending requests or showing alerts inside it.

Source: https://react.dev/learn/queueing-a-series-of-state-updates

## Slide 13: Controlled search input

Time: 2 minutes.

The actual input has a visible label and type=search. event.target.value is a string. Keep the initial value an empty string rather than undefined.

Source: https://react.dev/reference/react-dom/components/input

## Slide 14: Category selection

Time: 1 minute.

Show FilterBar.jsx. category starts as All. React controls the select using value on the select element.

Source: https://react.dev/reference/react-dom/components/select

## Slide 15: A checkbox stores a boolean

Time: 1 minute.

A checkbox needs checked rather than a text value for its state. The actual input has the visible label In stock only.

Source: https://react.dev/reference/react-dom/components/input

## Slide 16: Visible products are derived data

Time: 2 minutes.

The deck uses p and text as short names. App.jsx expands the same conditions into named booleans for beginners. An empty search matches every product name. Explain each condition independently before combining them.

Source: https://react.dev/learn/choosing-the-state-structure

## Slide 17: State shared by several children

Time: 2 minutes.

The outline is a component hierarchy, not JavaScript. Shared state lives in App. PracticeNote owns draft and saved values because no sibling needs them.

Source: https://react.dev/learn/sharing-state-between-components

## Slide 18: Callback props request an update

Time: 1 minute.

Trace the callback through FilterBar. onSearchChange is our custom prop name. onChange is the browser input’s React event prop.

Source: https://react.dev/learn/sharing-state-between-components

## Slide 19: Adding a product to the cart

Time: 2 minutes.

App also rejects out-of-stock products before the updater. some returns a boolean. The duplicate guard retains the same array when the product already exists. The disabled button makes the rule visible to the user.

Source: https://react.dev/learn/updating-arrays-in-state

## Slide 20: Removing a product from the cart

Time: 1 minute.

Notebook plus Bag costs ₹580. Removing Notebook leaves one item costing ₹500. The original array is never changed with splice.

Source: https://react.dev/learn/updating-arrays-in-state

## Slide 21: The total comes from the cart

Time: 1 minute.

Introduce reduce as a running sum. Ask learners to calculate 0, then 80, then 580. Keep cartTotal as a derived value rather than another state variable.

Source: https://react.dev/learn/choosing-the-state-structure

## Slide 22: Form submission

Time: 2 minutes.

This optional form uses PracticeNote local state. The input value is the draft. savedNote stores the last submitted value. No network request or real order is created. Keep this as a quick demo if search needs more practice.

Source: https://react.dev/learn/responding-to-events

## Slide 23: Resetting selected state

Time: 1 minute.

Ask whether cart should disappear when resetting search. This app keeps the cart. Reloading the page resets all local state because this lesson has no persistence.

Source: https://react.dev/learn/state-a-components-memory

## Slide 24: Our interactive Product Catalog

Time: 2 minutes.

Show the actual app. The screenshot contains Notebook and Bag in the cart, 2 items and ₹580. The full catalog summary remains 4 total, 2 in stock, 2 out of stock.

## Slide 25: The files behind one click

Time: 5 minutes.

5-minute guided reading. Start the app and run check:day-three. Open App, FilterBar, ProductCard and CartPanel in that order. Ask learners to locate both the sender and receiver of each callback.

## Slide 26: Search, filter and cart experiments

Time: 7 minutes.

7-minute demo: search 1 min, combined filters and no matches 2 min, add/remove/clear 3 min, note submit 1 min. Filters preserve the cart. Pen and Bottle are disabled. Submit the note with Enter and confirm the page does not reload.

## Slide 27: A category visibility checkbox

Time: 8 minutes.

8-minute exercise: explain 1 min, learner work 5 min, check 2 min. ProductList already forwards showCategory. Add the checkbox in App for the shortest solution, or extend FilterBar with showCategory/onShowCategoryChange. Use checked and event.target.checked. A worked checklist is in the README, without adding the completed exercise to the starter.

## Slide 28: Common Day 3 mistakes

Time: 2 minutes.

2-minute repair discussion. A controlled field can appear frozen if value never changes. Keep state setters in events and Hook declarations at the top level. Use browser errors to locate the component.

Source: https://react.dev/reference/react-dom/components/input

## Slide 29: Day 3 knowledge check

Time: 4 minutes.

4-minute Teams chat quiz. Answers: after a click, current value and setter, event.target.checked, to update without mutating state, closest shared parent App, prevents the browser’s default form navigation. Ask one learner to trace Notebook from a button click to cartTotal.

## Slide 30: Recap and learning references

Time: 1 minute.

1-minute close. For the price exercise store the input text, validate it before converting with Number, and treat an empty value as no price limit. Core references are in the README. Day 4 adds effects and loading states. Certification follows the official TCS E1 syllabus and assessment rules.

Source: https://react.dev/learn/choosing-the-state-structure
