# Day 5 trainer notes

Subha Prasad, TCS Assets Consultant (C3A).
16 October 2026, 10:00–11:00 AM IST, Microsoft Teams.

30 slides, 60 minutes. Use the Product Catalog on the tcs-sme-reactjs/day-five branch. Initial data: 4 products, 2 in stock, 2 out of stock. The local HTTP resource is public/products.json. Demonstrate the custom Hook and validated practice order preview with fictional customer details. Notebook and Bag total ₹580. The final slide lists course IDs 75214 and 62104.

## Slide 1: ReactJS · Day Five

Time: 1 minute.

Introduce the final session in Microsoft Teams. Trainer: TCS Assets Consultant (C3A) and SME. Continue the same four fictional products. Today combines the previous lessons and adds a validated practice order form.

## Slide 2: Today’s learning goals

Time: 1 minute.

Tell learners to use a fictional customer name such as Demo Customer. The preview stays in memory: no server submission, payment or real order. Keep the custom Hook section brief if learners need more time with forms.

## Slide 3: Day 5 topic index

Time: 1 minute.

Show the order of the final session. Keep App.jsx, useProducts.js and OrderForm.jsx open. The final slide includes course IDs 75214 and 62104, supplied by Subha; no course titles have been supplied.

## Slide 4: Our five-day learning path

Time: 2 minutes.

Ask learners to give one example from each previous day. A component is a function; props are inputs; state remembers UI data; Effects synchronize external work. Day 5 builds directly on these foundations.

## Slide 5: The complete user flow

Time: 2 minutes.

Describe the workflow in browser terms before opening code. The cart contains one entry per product, without quantities. The preview captures a snapshot when submitted and stays unchanged until submitted again or reset.

## Slide 6: Component responsibilities

Time: 2 minutes.

Open App and trace the props. The same cart is read by ProductList, CartPanel and OrderForm, so App owns it. The customer name is only used by OrderForm and its preview, so it stays local. Existing PracticeNote is retained for Day 3 revision.

## Slide 7: A custom Hook

Time: 2 minutes.

Explain that this is a project-defined function, not a built-in React Hook. Each call owns independent state: custom Hooks share logic, not automatically shared state. App calls it once and passes data down.

Source: https://react.dev/learn/reusing-logic-with-custom-hooks

## Slide 8: Extract the Day 4 request logic

Time: 2 minutes.

This is a structural excerpt. Open the full Hook to show every declaration and Effect. It calls the existing loadProducts helper, passes AbortController.signal, guards cancelled results and returns cleanup. The extraction makes App shorter without adding dependencies.

Source: https://react.dev/learn/reusing-logic-with-custom-hooks

## Slide 9: Dependencies after extraction

Time: 2 minutes.

Compare with the fixed URL in Day 4. The helper remains imported; the URL is now a reactive input to the Hook. Do not remove dependencies to silence reruns. StrictMode still runs its extra development setup/cleanup cycle.

Source: https://react.dev/learn/reusing-logic-with-custom-hooks

## Slide 10: Hooks and plain helper functions

Time: 1 minute.

Run check:day-five later to demonstrate shared validation functions outside React. Do not call useProducts in a Node lesson or event handler. The use prefix signals Hook rules, not merely code reuse.

Source: https://react.dev/learn/reusing-logic-with-custom-hooks

## Slide 11: Controlled form inputs

Time: 2 minutes.

Recall the Day 3 note form, then explain the extra validation and draft object. Initialize controlled input values as strings; null is used for the absence of a preview, not as an input value.

Source: https://react.dev/reference/react-dom/components/input

## Slide 12: Labels and text input

Time: 2 minutes.

The real component uses a separate label connected by htmlFor and id. Its change handler also clears the old validation message. Ask learners why they should not mutate customerName directly. The required status is communicated with aria-required.

Source: https://react.dev/reference/react-dom/components/input

## Slide 13: Optional delivery note

Time: 1 minute.

Open the labelled delivery-note textarea. Type Gift wrap please. Explain that both input and textarea use value/onChange, while a checkbox uses checked. No address or other real customer detail is required.

## Slide 14: Handle the form submit event

Time: 2 minutes.

The real form uses noValidate so our explicit validation teaches the rules consistently. noValidate skips built-in browser constraint checks; it does not perform validation. The button remains enabled so learners can see friendly empty-cart/name errors.

Source: https://react.dev/reference/react-dom/components/input

## Slide 15: Our practice form rules

Time: 2 minutes.

This simplified excerpt uses shorter error text than the project. Explain trim with spaces-only names and A versus Demo Customer. This is a teaching rule, not a universal rule for human names. Browser checks do not replace server validation in a real order system.

## Slide 16: Show an error and return early

Time: 2 minutes.

Point out the early return. The helper createOrderDraft also validates as a defensive boundary before constructing the object. A previously captured valid snapshot can remain visible if a later attempt fails; it stays labelled as the earlier snapshot.

## Slide 17: Accessible feedback

Time: 1 minute.

Read the actual aria-describedby and aria-invalid props. An empty-cart error does not mark the name invalid; with a nonempty cart, a validation error indicates the name needs correction. Clear the message when the learner edits the name.

## Slide 18: Create the practice draft

Time: 2 minutes.

Open src/data/orderDraft.js. map creates a new array and new item objects; reduce computes the snapshot total. The price does not include delivery charges or taxes. IDs stay stable. No random order number or fake backend status is invented.

## Slide 19: Render the submitted preview

Time: 2 minutes.

The project also shows the submitted name, optional note and selected item list. This is conditional rendering from Day 2. React escapes ordinary text in JSX; do not introduce raw HTML for the customer note.

## Slide 20: Current cart and captured snapshot

Time: 2 minutes.

Demo: preview Notebook+Bag at580; remove Notebook; cart500 but snapshot580. Click Preview again and snapshot becomes500. This deliberate distinction reinforces Day 3 state snapshots. The UI tells users to submit again for changes.

## Slide 21: Reset only the order form

Time: 1 minute.

The Reset order form button uses type=button so it does not submit the form. Reloading the page resets all memory state and starts a new products request. No useEffect is needed to reset on this user action.

## Slide 22: Check the complete workflow

Time: 2 minutes.

Use the guided README steps. Also check optional notes, keyboard submission, out-of-stock disabled buttons, case-insensitive search, no filter matches and Day 4 request recovery. Use a narrow viewport and keyboard focus to inspect controls.

## Slide 23: Build and preview locally

Time: 2 minutes.

Vite copies public/products.json into dist. preview is for checking locally; it is not a production server or hosting service. Deployment configuration depends on the hosting path. Do not deploy during this training task.

Source: https://vite.dev/guide/build.html

## Slide 24: Our final practice order preview

Time: 4 minutes.

Show the actual screenshot, then perform the flow live. Use Demo Customer and Gift wrap please. Trace cart props, local form state, validator, draft helper and conditional preview. The screenshot contains fictional sample data.

## Slide 25: Project file walkthrough

Time: 3 minutes.

Run check:day-five and narrate the580total, trimming and validation cases. The script uses the earlier static dataset for isolated plain-JavaScript examples; the live app still fetches public/products.json. No React Hooks run in Node.

## Slide 26: Add a Delivery city field

Time: 5 minutes.

Give learners 5 minutes. Add city useState, controlled input, validation, helper parameter/object field, render and reset. Update the Node lesson if helper signatures change. Acceptance: a blank city blocks submission, Kolkata appears in the preview, reset clears city, and the cart stays at ₹580. The starter intentionally leaves city for learners to build.

## Slide 27: Common mistakes

Time: 2 minutes.

Show the correct code for each issue. Revisit Hook rules, input value/onChange, validation early return and type=button. The current cart and submitted preview have deliberately different lifetimes. Keep the final project small before adding routing, Context or persistence.

## Slide 28: Final quiz

Time: 3 minutes.

Answers: 1 No, separate calls own independent state. 2 To avoid default browser navigation. 3 The validation message and early return. 4 It copied items and total at submit time; submit again to update it. 5 No, it creates dist locally. Ask learners to demonstrate one answer in the project.

## Slide 29: Your next React practice

Time: 2 minutes.

For maximum price, store input text, treat blank as no limit, validate before Number, and derive the filtered array without an Effect. At 100 INR, Notebook and Pen appear before applying the stock filter. Remind learners that certification follows official assessment requirements; no official syllabus was supplied.

## Slide 30: Thank you · Course IDs

Time: 2 minutes.

These two course IDs were supplied by Subha Prasad and are included exactly as requested. Do not invent course names, learning portal links, deadlines or certification guarantees. Close the five-day series with questions and remind learners to use their internal learning portal for the course details.
