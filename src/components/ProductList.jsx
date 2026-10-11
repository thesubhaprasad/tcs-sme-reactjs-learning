import ProductCard from './ProductCard.jsx';

// The parent supplies a filtered array. The list only decides how to render it.
export default function ProductList({ products = [], cart = [], showCategory = true, onAddToCart }) {
  if (products.length === 0) return <p className="empty-state">No products match your filters.</p>;
  return (
    <div className="product-grid">
      {/* some answers whether each product is already selected in the cart. */}
      {products.map(product => (
        <ProductCard
          key={product.id} product={product} showCategory={showCategory}
          isInCart={cart.some(item => item.id === product.id)}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
