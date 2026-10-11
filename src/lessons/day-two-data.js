// Run npm run check:day-two to inspect the data operations used by the catalog.
import { products } from '../data/products.js';

// filter selects stock matches. map extracts the names of those products.
const inStockProducts = products.filter(product => product.inStock);
console.log('Total:', products.length, 'In stock:', inStockProducts.length);
console.log('In-stock names:', inStockProducts.map(product => product.name));

// JavaScript defaults apply to missing and undefined values, but not false or null.
function defaultStock(inStock = true) {
  return inStock;
}
console.log('Missing:', defaultStock(), 'Undefined:', defaultStock(undefined));
console.log('False:', defaultStock(false), 'Null:', defaultStock(null));

// A copy can be reordered without changing the original array or product IDs.
const reordered = [...products].reverse();
console.log('Original IDs:', products.map(product => product.id));
console.log('Reordered IDs:', reordered.map(product => product.id));

// Practice: derive the names of out-of-stock products without mutating props.
