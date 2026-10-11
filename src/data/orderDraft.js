// Pure validation can be used by both the form and a runnable JavaScript lesson.
// The cart contains one entry per in-stock product, as taught on Day 3.
export function validateOrder(cart, customerName) {
  if (cart.length === 0) return 'Add an in-stock product before previewing.';
  if (customerName.trim().length < 2) return 'Enter a customer name with at least 2 characters.';
  return '';
}

// Capture a separate snapshot so later cart edits do not rewrite an earlier preview.
// This creates a practice draft in memory; it does not contact a server.
export function createOrderDraft(cart, customerName, note) {
  const error = validateOrder(cart, customerName);
  if (error) throw new Error(error);
  return {
    customerName: customerName.trim(),
    note: note.trim(),
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price })),
    total: cart.reduce((sum, product) => sum + product.price, 0),
  };
}
