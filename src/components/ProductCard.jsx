import StockBadge from './StockBadge.jsx';

// Props describe one product and whether its category should appear.
export default function ProductCard({ product, showCategory = true }) {
  return (
    <article className="product-card">
      <span className="product-id">{product.id}</span>
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      {/* && includes the category only when the visibility prop is true. */}
      {showCategory && <p className="category">Category: {product.category}</p>}
      {/* A ternary selects the description from the stock boolean. */}
      <p className="stock-note">{product.inStock ? 'Ready to order' : 'Currently unavailable'}</p>
      <StockBadge inStock={product.inStock} />
    </article>
  );
}
