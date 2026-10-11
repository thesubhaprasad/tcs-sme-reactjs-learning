import assert from 'node:assert/strict';
import { products } from '../data/products.js';

// These plain JavaScript examples explain the expressions used in React state updates.
// They run in Node. useState itself belongs inside a React component in the browser.
const search = '  NOTE  ';
const normalizedSearch = search.trim().toLowerCase();
const matchingProducts = products.filter(product => product.name.toLowerCase().includes(normalizedSearch));
assert.deepEqual(matchingProducts.map(product => product.name), ['Notebook']);
console.log('Normalized search:', normalizedSearch, 'Matches:', matchingProducts.map(product => product.name));

// The category and stock conditions combine with &&, so every condition must match.
const category = 'Accessories';
const visibleProducts = products.filter(product => product.category === category && product.inStock);
assert.deepEqual(visibleProducts.map(product => product.name), ['Bag']);
console.log('Accessories in stock:', visibleProducts.map(product => product.name));

// Spread creates a new cart array. The original empty cart stays unchanged.
const emptyCart = [];
const cart = [...emptyCart, products[0], products[2]];
assert.equal(emptyCart.length, 0);
assert.equal(cart.length, 2);
const total = cart.reduce((sum, product) => sum + product.price, 0);
assert.equal(total, 580);
console.log('Cart:', cart.map(product => product.name), 'Total INR:', total);

// filter removes an item by stable ID without changing the existing array.
const remaining = cart.filter(product => product.id !== 'P-101');
assert.equal(cart.length, 2);
assert.deepEqual(remaining.map(product => product.name), ['Bag']);
console.log('After removing Notebook:', remaining.map(product => product.name));

// some produces a boolean that controls the Add to cart button.
assert.equal(cart.some(product => product.id === 'P-101'), true);
assert.equal(cart.some(product => product.id === 'P-102'), false);
console.log('Day 3 data examples passed. Use the browser to observe React state updates.');
