// Run this lesson with npm run check:lessons, or read it before the React demo.
import { assets } from '../data/assets.js';

// const keeps this binding fixed. let supports reassignment.
const trainer = 'Subha Prasad';
let topic = 'JavaScript';
console.log('Trainer:', trainer, 'Topic:', topic);
topic = 'ReactJS';
console.log('Next topic:', topic);

// Primitive values include strings, numbers and booleans.
const name = 'Laptop';
const cost = 50000;
const available = true;
console.log('Types:', typeof name, typeof cost, typeof available);

// Objects group related values. Dot notation reads a property.
const asset = { id: 'A-104', name: 'Mouse', status: 'Available' };
console.log('Object property:', asset.name);

// Functions return a result. This condition chooses the status label.
function describeAsset(item) {
  if (item.status === 'Available') return `${item.name} is available`;
  return `${item.name} is assigned`;
}
console.log('Function result:', describeAsset(asset));

// An arrow function is another way to write a function.
const getName = item => item.name;
console.log('Arrow result:', getName(asset));

// map transforms every item. filter keeps only matching items.
console.log('map:', assets.map(getName));
console.log('filter:', assets.filter(item => item.status === 'Available'));

// Destructuring extracts properties. Spread makes a new shallow copy.
const { id } = asset;
const assignedAsset = { ...asset, status: 'Assigned' };
console.log('Destructured ID:', id);
console.log('Copy:', assignedAsset, 'Original:', asset);

// Practice: add a location property and print the names of available assets.
