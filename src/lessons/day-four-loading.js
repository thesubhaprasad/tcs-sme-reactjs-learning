import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validateProducts } from '../data/loadProducts.js';

// Run this in Node to practise async/await and check the actual catalog schema.
// React Hooks still run inside React, not in this script.
const text = await readFile(new URL('../../public/products.json', import.meta.url), 'utf8');
const products = validateProducts(JSON.parse(text));
console.log('Loaded products:', products.length);
console.log('First product:', products[0]?.name ?? 'Empty catalog');
assert.deepEqual(validateProducts([]), []);
// These examples show why invalid resource data needs an error state.
assert.throws(() => validateProducts({ products }), /array/);
assert.throws(() => validateProducts([{ ...products[0], price: -1 }]), /invalid/);
assert.throws(() => validateProducts([products[0], products[0]]), /unique/);
console.log('Valid, empty, invalid and duplicate-ID examples passed.');
