// The parent supplies one product through a prop. Day 2 explains props in depth.
export default function ProductCard({ product }) {
  // A ternary chooses a CSS class from the product's stock boolean.
  const stockClass = product.inStock ? 'in-stock' : 'out-of-stock';

  return (
    <article className="product-card">
      <span className="product-id">{product.id}</span>
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <p>{product.category}</p>
      {/* Text communicates availability even when the colour is not visible. */}
      <span className={`status ${stockClass}`}>
        {product.inStock ? 'In stock' : 'Out of stock'}
      </span>
    </article>
  );
}
