// Run npm run check:day-two to predict and inspect the dashboard's data operations.
import { assets } from '../data/assets.js';

// Filter first, then map: only available names appear in the resulting array.
const available = assets.filter(asset => asset.status === 'Available');
const availableNames = available.map(asset => asset.name);
console.log('Total:', assets.length, 'Available:', available.length);
console.log('Available names:', availableNames);

// A default function parameter follows the same JavaScript rule as default props.
function labelStatus(status = 'Available') {
  return status;
}
console.log('Missing:', labelStatus(), 'Undefined:', labelStatus(undefined));
console.log('Null:', labelStatus(null));

// Reordering a copied array changes positions, while each item's ID stays fixed.
const reordered = [...assets].reverse();
console.log('Original IDs:', assets.map(asset => asset.id));
console.log('Reordered IDs:', reordered.map(asset => asset.id));

// Practice: derive assigned names and explain why a key should follow the item's ID.
