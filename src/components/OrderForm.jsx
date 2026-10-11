import { useState } from 'react';
import { createOrderDraft, validateOrder } from '../data/orderDraft.js';

// Form state stays local; the parent supplies the cart selected elsewhere.
export default function OrderForm({ cart }) {
  const [customerName, setCustomerName] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [draft, setDraft] = useState(null);

  function handleSubmit(event) {
    event.preventDefault(); // React handles this form without navigating away.
    const message = validateOrder(cart, customerName);
    setError(message);
    if (message) return; // Never create a draft with an empty cart or invalid name.
    setDraft(createOrderDraft(cart, customerName, note));
  }

  function handleReset() {
    setCustomerName('');
    setNote('');
    setError('');
    setDraft(null); // Clearing this form does not clear App's cart.
  }

  return (
    <div className="order-practice">
      <p>Practice only: use a fictional name. Nothing is sent or purchased.</p>
      {/* Custom validation below explains trimming and early returns. */}
      <form className="note-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="customer-name">Customer name</label>
        <input id="customer-name" value={customerName} aria-required="true"
            aria-invalid={Boolean(error && cart.length > 0)}
            aria-describedby={error ? 'order-error' : undefined}
            onChange={event => { setCustomerName(event.target.value); setError(''); }}
            placeholder="Try Demo Customer" />
        <label htmlFor="delivery-note">Delivery note (optional)</label>
        <textarea id="delivery-note" rows="2" value={note}
            onChange={event => setNote(event.target.value)} placeholder="Try Gift wrap please" />
        {error && <p id="order-error" role="alert">{error}</p>}
        <div className="form-actions">
          <button type="submit">Preview practice order</button>
          <button type="button" className="secondary-button" onClick={handleReset}>Reset order form</button>
        </div>
      </form>
      {/* This submitted snapshot is distinct from the current editable form/cart. */}
      {draft && (
        <section className="order-preview" aria-labelledby="preview-heading">
          <h3 id="preview-heading">Practice order preview</h3>
          <p role="status">Preview ready for {draft.customerName}. No order has been placed.</p>
          <ul>{draft.items.map(item => <li key={item.id}>{item.name} · ₹{item.price}</li>)}</ul>
          <p className="draft-total">Snapshot total: ₹{draft.total}</p>
          <p>Delivery note: {draft.note || 'None'}</p>
          <p className="stock-note">Snapshot at preview time. Submit again to include later cart or form changes.</p>
        </section>
      )}
    </div>
  );
}
