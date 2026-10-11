// This child displays App's cart and reports user actions through callback props.
export default function CartPanel({ cart, total, onRemove, onClear }) {
  return (
    <div className="cart-panel">
      <p className="cart-summary" role="status"><strong>{cart.length}</strong> items · Total: <strong>₹{total}</strong></p>
      {cart.length === 0 ? <p className="empty-state">Your cart is empty.</p> : (
        <ul className="cart-list">
          {cart.map(product => (
            <li key={product.id}>
              <span>{product.name} · ₹{product.price}</span>
              {/* Passing the ID lets App remove just the requested item. */}
              <button type="button" className="secondary-button" aria-label={`Remove ${product.name}`} onClick={() => onRemove(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button type="button" className="secondary-button" disabled={cart.length === 0} onClick={onClear}>Clear cart</button>
    </div>
  );
}
