import PageHeader from './components/PageHeader.jsx';
import Section from './components/Section.jsx';
import ProductSummary from './components/ProductSummary.jsx';
import ProductList from './components/ProductList.jsx';
import { products } from './data/products.js';

// App composes the catalog and passes input values to its children.
export default function App() {
  // Day 2 edits these source values. Interactive state comes on Day 3.
  // Try All, In stock or Out of stock, then save and observe the browser.
  const selectedStock = 'All';
  const showCategory = true;
  const visibleProducts = selectedStock === 'All'
    ? products
    : products.filter(product => selectedStock === 'In stock' ? product.inStock : !product.inStock);

  return (
    <main className="page">
      <PageHeader
        title="Reusable components, one Product Catalog"
        subtitle="A small shop example with props, conditions and lists."
        trainer="Subha Prasad"
        date="13 October 2026"
      />
      <ProductSummary products={products} />
      {/* Nested JSX reaches Section through its children prop. */}
      <Section title="Shop products" headingId="catalog-heading">
        <p>Current source filter: <strong>{selectedStock}</strong></p>
        <ProductList products={visibleProducts} showCategory={showCategory} />
      </Section>
      <Section title="Empty-list example" headingId="empty-heading">
        <p>The same list component accepts an empty product array.</p>
        <ProductList products={[]} />
      </Section>
      <aside className="exercise">
        <h2>Your turn</h2>
        <p>Change selectedStock to In stock and showCategory to false in App.jsx.</p>
        <p>The summary uses all products. The catalog uses the filtered list.</p>
      </aside>
    </main>
  );
}
