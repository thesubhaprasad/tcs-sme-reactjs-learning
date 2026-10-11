import ProductCard from './components/ProductCard.jsx';
import { products } from './data/products.js';

// A React component describes the screen from the current JavaScript data.
export default function App() {
  const trainer = 'Subha Prasad';
  // filter selects products whose inStock boolean is true.
  const inStockProducts = products.filter(product => product.inStock);

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">TCS SME TRAINING · DAY 01</p>
        <h1>Our first Product Catalog</h1>
        <p>A small shop example with names, prices and categories.</p>
        <p className="trainer">Trainer: {trainer} · 12 October 2026</p>
      </header>
      <section className="summary" aria-label="Product summary">
        {/* JSX braces evaluate the expressions that produce these counts. */}
        <p><strong>{products.length}</strong> total products</p>
        <p><strong>{inStockProducts.length}</strong> in stock</p>
      </section>
      <section aria-labelledby="products-heading">
        <h2 id="products-heading">Shop products</h2>
        <p>Sample prices in INR. Edit src/data/products.js to update the catalog.</p>
        <div className="product-grid">
          {/* map returns one card per product. Its stable ID becomes React's key. */}
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <aside className="exercise">
        <h2>Your turn</h2>
        <p>Add a Bottle for ₹250 with a unique ID, category and inStock value.</p>
        <p>Check the displayed price and explain how the product count changes.</p>
      </aside>
    </main>
  );
}
