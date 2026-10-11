// The default applies to omitted or undefined props. Explicit false stays false.
export default function StockBadge({ inStock = true }) {
  const stockClass = inStock ? 'in-stock' : 'out-of-stock';
  return <span className={`status ${stockClass}`}>{inStock ? 'In stock' : 'Out of stock'}</span>;
}
