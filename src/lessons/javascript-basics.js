// Run npm run check:lessons and predict each result before reading the output.
import { products } from '../data/products.js';

// const keeps a binding fixed. let allows reassignment.
const trainer = 'Subha Prasad';
let topic = 'JavaScript';
console.log('Trainer:', trainer, 'Topic:', topic);
topic = 'ReactJS';
console.log('Next topic:', topic);

// Strings, numbers and booleans describe ordinary shop products.
const name = 'Notebook';
const price = 80;
const inStock = true;
console.log('Types:', typeof name, typeof price, typeof inStock);

// An object groups facts about one product.
const product = { id: 'P-104', name: 'Bottle', price: 250, inStock: true };
console.log('Object property:', product.name);

// A function accepts input, chooses a branch and returns a result.
function describeProduct(item) {
  if (item.inStock) return `${item.name} is in stock`;
  return `${item.name} is out of stock`;
}
console.log('Function result:', describeProduct(product));

// An arrow function can return a single expression directly.
const getName = item => item.name;
console.log('Arrow result:', getName(product));

// map transforms items. filter selects matching items without changing the array.
console.log('map:', products.map(getName));
console.log('filter:', products.filter(item => item.inStock));

// Destructuring reads a property. Spread creates a new shallow object copy.
const { id } = product;
const unavailableProduct = { ...product, inStock: false };
console.log('Destructured ID:', id);
console.log('Copy:', unavailableProduct, 'Original:', product);

// Practice: print the names and prices of the products that are in stock.
