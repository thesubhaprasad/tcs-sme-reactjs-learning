// Derive the counts from the full collection each time props supply a new value.
export default function ProductSummary({ products }) {
  const inStockCount = products.filter(product => product.inStock).length;
  const outOfStockCount = products.filter(product => !product.inStock).length;
  return (
    <section className="summary" aria-label="Product summary">
      <p><strong>{products.length}</strong> total products</p>
      <p><strong>{inStockCount}</strong> in stock</p>
      <p><strong>{outOfStockCount}</strong> out of stock</p>
    </section>
  );
}
