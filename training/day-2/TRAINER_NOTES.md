# Day 2 trainer notes

13 October 2026, 10:00–11:00 AM IST.

Total allocated time: 60 minutes.

## Slide 1: ReactJS · Day Two

Time: 1 minute.

Welcome learners. This session builds on Day 1. The project uses fictional product data.

## Slide 2: Today’s learning outcomes

Time: 1 minute.

Ask learners to recall the ProductCard from Day 1. The goal is to explain the data flow and change source configuration.

## Slide 3: Today’s topic index

Time: 1 minute.

Use the topic index. Delivery timing lives in trainer notes and README, without a separate schedule slide.

## Slide 4: Day 1 in one example

Time: 2 minutes.

Ask what the function receives and returns. Today explains the props argument in detail. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 5: A component has a clear job

Time: 2 minutes.

Read this as a text outline, not executable code. Avoid creating a component for every line of markup. Source: https://react.dev/learn/thinking-in-react

## Slide 6: Component extraction

Time: 2 minutes.

Demonstrate the fixed title before introducing a prop. Explain that definitions should not be nested inside App. Source: https://react.dev/learn/your-first-component

## Slide 7: Default and named imports

Time: 1 minute.

Code is a module syntax excerpt. Explain braces around a named import. Source: https://react.dev/learn/importing-and-exporting-components

## Slide 8: Props are component inputs

Time: 2 minutes.

Relate a prop to a function parameter. Props can change when the parent renders with new values. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 9: Destructuring the props object

Time: 1 minute.

Explain ({ name }) slowly. Do not confuse it with an ordinary positional parameter. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 10: Passing different value types

Time: 1 minute.

Ask learners why showCategory="false" would still be truthy. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 11: Default values

Time: 1 minute.

Run check:day-two to compare undefined and null. Keep the null explanation for revision if the group needs more time. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 12: Props are read-only inputs

Time: 2 minutes.

Avoid modifying incoming product.inStock. State updates arrive on Day 3. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 13: Nested content becomes children

Time: 2 minutes.

Show Section.jsx and point to {children}. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 14: The same wrapper, different content

Time: 1 minute.

Excerpt omits headingId for brevity. The full project supplies unique heading IDs for accessibility. Source: https://react.dev/learn/passing-props-to-a-component

## Slide 15: An early return chooses another UI

Time: 2 minutes.

This excerpt focuses on control flow. The actual component maps cards in the second branch. Source: https://react.dev/learn/conditional-rendering

## Slide 16: A ternary selects between two values

Time: 1 minute.

Ask learners which branch In stock selects. Source: https://react.dev/learn/conditional-rendering

## Slide 17: && includes optional content

Time: 1 minute.

Show the actual ProductCard and change showCategory in App later. Source: https://react.dev/learn/conditional-rendering

## Slide 18: The zero rendering pitfall

Time: 1 minute.

Ask learners to predict both outputs when count is zero. Source: https://react.dev/learn/conditional-rendering

## Slide 19: map returns one element per product

Time: 1 minute.

Revisit map from Day 1 and show its JSX return value. Source: https://react.dev/learn/rendering-lists

## Slide 20: Keys follow the item’s identity

Time: 1 minute.

Use npm run check:day-two to show ID order. React uses keys to match items across updates. Source: https://react.dev/learn/rendering-lists

## Slide 21: key and regular props

Time: 1 minute.

Explain that key is special and not forwarded as a regular prop. Source: https://react.dev/learn/rendering-lists

## Slide 22: Filtering before rendering

Time: 1 minute.

Source configuration is intentional for Day 2. State and inputs arrive on Day 3. Source: https://react.dev/learn/rendering-lists

## Slide 23: Styling reusable components

Time: 1 minute.

This snippet belongs inside StockBadge. Text also conveys status, so meaning does not rely on colour alone. Source: https://react.dev/learn

## Slide 24: Our composed Product Catalog

Time: 2 minutes.

Walk through the actual UI for 2 minutes. Original counts: 4 total, 2 in stock, 2 out of stock.

## Slide 25: Tracing parent and child props

Time: 6 minutes.

6-minute demo. Open each file and ask learners to identify the receiving parameter. Point out showCategory forwarding and headingId in Section.

## Slide 26: Changing the component inputs

Time: 7 minutes.

7-minute demo: filtering 2 min, category 2 min, empty list 2 min, restore 1 min. Changes happen in source files, not UI controls.

## Slide 27: A brand on every card

Time: 10 minutes.

10-minute learner exercise. First 2 min explain, next 6 min work, last 2 min inspect results. ProductCard accepts showBrand=true as a default. ProductList forwards it. App supplies it.

## Slide 28: Day 2 knowledge check

Time: 3 minutes.

3-minute Teams chat quiz. Answers: props, no, children, stable sibling item identity, to avoid rendering numeric zero, no. Discuss the answer learners most often miss.

## Slide 29: Components describe UI from inputs

Time: 1 minute.

1-minute recap. Ask a learner to explain the path from App to StockBadge. Next session adds events, state and controlled forms.

## Slide 30: Practice and learning references

Time: 1 minute.

1-minute close. Sources: https://react.dev/learn/passing-props-to-a-component https://react.dev/learn/conditional-rendering https://react.dev/learn/rendering-lists. Keep the project running before Day 3. Certification coverage follows the official TCS E1 syllabus.

## Product Catalog delivery cues

Prices are fictional INR values. Notebook costs ₹80, Pen ₹20 and Bag ₹500. The stock flag is a boolean named `inStock`. Use `product.inStock` to filter in-stock products and `!product.inStock` for out-of-stock products. Keep the printed price visible while hiding the category.

The initial catalog has 4 products: 2 in stock and 2 out of stock. Set `selectedStock` to `In stock`: expect 2 cards while the summary remains 4/2/2. Set `showCategory` to false: hide category paragraphs but retain prices. Pass an empty array: expect the fallback message. The brand exercise uses `brand` and `showBrand`.

Bottle is out of stock in the Day 2 dataset. This differs from the Day 1 add-product exercise and makes the Day 2 summary 4/2/2.
