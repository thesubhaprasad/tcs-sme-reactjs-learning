import ProductCard from './ProductCard.jsx';

// Each ProductList can display any supplied array, including an empty one.
export default function ProductList({ products = [], showCategory = true }) {
  // An early return chooses the fallback UI for an empty collection.
  if (products.length === 0) return <p className="empty-state">No products to display.</p>;

  return (
    <div className="product-grid">
      {/* key identifies each sibling. ProductCard reads the explicit product prop. */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} showCategory={showCategory} />
      ))}
    </div>
  );
}
