import assert from 'node:assert/strict';
import { createOrderDraft, validateOrder } from '../data/orderDraft.js';
import { products } from '../data/products.js';

// These plain functions run in Node; React Hooks still run inside React.
const cart = products.filter(product => product.inStock);
assert.match(validateOrder([], 'Demo Customer'), /Add/);
assert.match(validateOrder(cart, '   '), /name/);
assert.match(validateOrder(cart, 'A'), /name/);
const draft = createOrderDraft(cart, '  Demo Customer  ', '  Gift wrap please  ');
assert.equal(draft.customerName, 'Demo Customer');
assert.equal(draft.note, 'Gift wrap please');
assert.equal(draft.total, 580);
// Mutating a later cart object must not alter the captured preview.
const changedCart = cart.map(product => ({ ...product, price: 999 }));
assert.equal(draft.items[0].price, 80);
assert.notEqual(createOrderDraft(changedCart, 'Demo Customer', '').total, draft.total);
assert.throws(() => createOrderDraft([], 'Demo Customer', ''), /Add/);
console.log('Draft:', draft);
console.log('Passed empty-cart/name validation, trimming, total and independent snapshot examples.');
