import { useState } from 'react';
import PageHeader from './components/PageHeader.jsx';
import Section from './components/Section.jsx';
import ProductSummary from './components/ProductSummary.jsx';
import ProductList from './components/ProductList.jsx';
import FilterBar from './components/FilterBar.jsx';
import CartPanel from './components/CartPanel.jsx';
import PracticeNote from './components/PracticeNote.jsx';
import { useProducts } from './hooks/useProducts.js';
import OrderForm from './components/OrderForm.jsx';

// App owns state that several child components need to read or change.
export default function App() {
  // Hooks run at the top level on every render, in the same order.
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [cart, setCart] = useState([]);

  // Custom Hooks package stateful logic; App still owns shared cart and filters.
  const { products, status, error, retry } = useProducts('/products.json');

  // Derived values follow the latest state; they do not need extra useState calls.
  const normalizedSearch = search.trim().toLowerCase();
  const visibleProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(normalizedSearch);
    const matchesCategory = category === 'All' || product.category === category;
    const matchesStock = !onlyInStock || product.inStock;
    return matchesName && matchesCategory && matchesStock;
  });
  const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);

  // The updater receives the pending cart. Return a new array to change state.
  function handleAddToCart(product) {
    if (!product.inStock) return;
    setCart(currentCart => {
      // This beginner cart contains one entry per product, without quantities.
      if (currentCart.some(item => item.id === product.id)) return currentCart;
      return [...currentCart, product];
    });
  }

  // filter returns a new array while preserving the original state array.
  function handleRemoveFromCart(productId) {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  }

  // Reset only the catalog filters. Cart selections stay in App's state.
  function handleResetFilters() {
    setSearch('');
    setCategory('All');
    setOnlyInStock(false);
  }

  return (
    <main className="page">
      <PageHeader
        title="Product Catalog final mini-project"
        subtitle="Load, filter and select products, then preview a practice order."
        trainer="Subha Prasad"
        date="16 October 2026"
      />
      {/* Show a distinct UI for each request state before showing the catalog. */}
      {status === 'loading' && <p className="request-state" role="status">Loading products…</p>}
      {status === 'error' && (
        <section className="request-state request-error" aria-labelledby="error-heading">
          <h2 id="error-heading">Could not load products</h2>
          <p role="alert">{error}</p>
          <button onClick={retry}>Retry</button>
        </section>
      )}
      {status === 'success' && products.length === 0 && (
        <p className="request-state" role="status">No products are available yet.</p>
      )}
      {status === 'success' && products.length > 0 && (
        <>
          <ProductSummary products={products} />
          <Section title="Shop products" headingId="catalog-heading">
            {/* Values travel down as props. Callbacks let children request changes. */}
            <FilterBar
              search={search} onSearchChange={setSearch}
              category={category} onCategoryChange={setCategory}
              onlyInStock={onlyInStock} onStockChange={setOnlyInStock}
              onReset={handleResetFilters}
            />
            <p className="result-count" role="status">Showing {visibleProducts.length} of {products.length} products</p>
            <ProductList products={visibleProducts} cart={cart} onAddToCart={handleAddToCart} />
          </Section>
          <Section title="Your cart" headingId="cart-heading">
            <CartPanel cart={cart} total={cartTotal} onRemove={handleRemoveFromCart} onClear={() => setCart([])} />
          </Section>
          <Section title="Practice order" headingId="order-heading">
            {/* The child owns form state and receives the current cart through props. */}
            <OrderForm cart={cart} />
          </Section>
          <Section title="Form practice" headingId="note-heading">
            {/* This component owns local input state because other children do not need it. */}
            <PracticeNote />
          </Section>
        </>
      )}
      <aside className="exercise">
        <h2>Your turn</h2>
        <p>Add a required Delivery city field to the practice order form.</p>
        <p>The preview is a local snapshot. No order is placed; everything resets on reload.</p>
      </aside>
    </main>
  );
}
