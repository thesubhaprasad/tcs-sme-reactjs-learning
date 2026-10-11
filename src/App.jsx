import { useEffect, useState } from 'react';
import PageHeader from './components/PageHeader.jsx';
import Section from './components/Section.jsx';
import ProductSummary from './components/ProductSummary.jsx';
import ProductList from './components/ProductList.jsx';
import FilterBar from './components/FilterBar.jsx';
import CartPanel from './components/CartPanel.jsx';
import PracticeNote from './components/PracticeNote.jsx';
import { loadProducts } from './data/loadProducts.js';

// App owns state that several child components need to read or change.
export default function App() {
  // Hooks run at the top level on every render, in the same order.
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [cart, setCart] = useState([]);

  // Request state is separate from the filters and cart inherited from Day 3.
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  // Synchronize with an HTTP resource after React commits the component.
  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');
    setError('');

    // An Effect itself must not be async: React expects a cleanup function.
    async function fetchCatalog() {
      try {
        const nextProducts = await loadProducts('/products.json', controller.signal);
        // Also guard continuations if cleanup happens after the request resolves.
        if (controller.signal.aborted) return;
        setProducts(nextProducts);
        setStatus('success');
      } catch (requestError) {
        // A cancelled request is expected during cleanup, not a user-facing error.
        if (controller.signal.aborted) return;
        setError(requestError.message);
        setStatus('error');
      }
    }

    fetchCatalog();
    // Cancel the old request before a retry or when App unmounts.
    return () => controller.abort();
  }, [retryCount]); // Only Retry changes this dependency; typing does not fetch.

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
        title="Product Catalog with data loading"
        subtitle="Load products from JSON, then search, filter and build your cart."
        trainer="Subha Prasad"
        date="15 October 2026"
      />
      {/* Show a distinct UI for each request state before showing the catalog. */}
      {status === 'loading' && <p className="request-state" role="status">Loading products…</p>}
      {status === 'error' && (
        <section className="request-state request-error" aria-labelledby="error-heading">
          <h2 id="error-heading">Could not load products</h2>
          <p role="alert">{error}</p>
          <button onClick={() => setRetryCount(count => count + 1)}>Retry</button>
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
      <Section title="Form practice" headingId="note-heading">
        {/* This component owns local input state because other children do not need it. */}
        <PracticeNote />
      </Section>
        </>
      )}
      <aside className="exercise">
        <h2>Your turn</h2>
        <p>Change a product price in public/products.json, reload and check the new cart total.</p>
        <p>This local JSON request needs no external API. The cart and note reset on reload.</p>
      </aside>
    </main>
  );
}
