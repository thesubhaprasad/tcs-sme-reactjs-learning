import { useState } from 'react';
import PageHeader from './components/PageHeader.jsx';
import Section from './components/Section.jsx';
import ProductSummary from './components/ProductSummary.jsx';
import ProductList from './components/ProductList.jsx';
import FilterBar from './components/FilterBar.jsx';
import CartPanel from './components/CartPanel.jsx';
import PracticeNote from './components/PracticeNote.jsx';
import { products } from './data/products.js';

// App owns state that several child components need to read or change.
export default function App() {
  // Hooks run at the top level on every render, in the same order.
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [cart, setCart] = useState([]);

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
        title="Product Catalog with a cart"
        subtitle="Search for a product, choose a category and add in-stock items."
        trainer="Subha Prasad"
        date="14 October 2026"
      />
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
      <aside className="exercise">
        <h2>Your turn</h2>
        <p>Add a Show categories checkbox and use it to hide category text on product cards.</p>
        <p>This practice cart and note reset when you reload the page.</p>
      </aside>
    </main>
  );
}
