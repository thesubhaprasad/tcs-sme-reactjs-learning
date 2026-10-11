import StockBadge from './StockBadge.jsx';

// Props supply data and an event callback. App keeps ownership of the cart.
export default function ProductCard({ product, showCategory = true, isInCart = false, onAddToCart }) {
  const buttonDisabled = !product.inStock || isInCart;
  const buttonText = !product.inStock ? 'Out of stock' : isInCart ? 'Added to cart' : 'Add to cart';
  return (
    <article className="product-card">
      <span className="product-id">{product.id}</span>
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      {showCategory && <p className="category">Category: {product.category}</p>}
      <StockBadge inStock={product.inStock} />
      {/* The arrow function supplies this product only after a click. */}
      <button type="button" className="add-button" disabled={buttonDisabled} onClick={() => onAddToCart(product)}>{buttonText}</button>
    </article>
  );
}
