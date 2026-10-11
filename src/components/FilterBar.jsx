// Controlled inputs receive a current value and a callback from App.
export default function FilterBar({ search, onSearchChange, category, onCategoryChange, onlyInStock, onStockChange, onReset }) {
  return (
    <div className="filter-bar">
      <label htmlFor="product-search">Search products
        {/* A text input reads the new string through event.target.value. */}
        <input id="product-search" type="search" placeholder="Try Notebook" value={search} onChange={event => onSearchChange(event.target.value)} />
      </label>
      <label htmlFor="product-category">Category
        <select id="product-category" value={category} onChange={event => onCategoryChange(event.target.value)}>
          <option value="All">All</option>
          <option value="Stationery">Stationery</option>
          <option value="Accessories">Accessories</option>
        </select>
      </label>
      <label className="checkbox-label" htmlFor="stock-only">
        {/* A checkbox reads a boolean through checked, rather than value. */}
        <input id="stock-only" type="checkbox" checked={onlyInStock} onChange={event => onStockChange(event.target.checked)} />
        In stock only
      </label>
      <button type="button" className="secondary-button" onClick={onReset}>Reset filters</button>
    </div>
  );
}
