// Validate the resource before product cards try to read its fields.
// JSON files cannot contain comments; the schema is documented here and in README.
export function validateProducts(data) {
  if (!Array.isArray(data)) throw new Error('Product data must be an array.');
  const ids = new Set();
  for (const product of data) {
    if (!product || typeof product.id !== 'string' || !product.id.trim() ||
        typeof product.name !== 'string' || !product.name.trim() ||
        typeof product.price !== 'number' || !Number.isFinite(product.price) || product.price < 0 ||
        !['Stationery', 'Accessories'].includes(product.category) ||
        typeof product.inStock !== 'boolean') {
      throw new Error('A product has missing or invalid fields.');
    }
    // Stable, unique IDs are required for list keys and cart membership.
    if (ids.has(product.id)) throw new Error('Product IDs must be unique.');
    ids.add(product.id);
  }
  return data; // An empty array is valid and receives its own UI message.
}

// fetch is a browser API. Passing a signal lets the Effect cancel its request.
export async function loadProducts(url, signal) {
  const response = await fetch(url, { signal });
  // fetch does not reject just because the server returns HTTP 404 or 500.
  if (!response.ok) throw new Error(`Request failed (HTTP ${response.status}). Please try again.`);
  const data = await response.json(); // Read and parse the response body asynchronously.
  return validateProducts(data);
}
