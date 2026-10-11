// Props are inputs supplied by the parent component.
// Destructuring reads the asset property from the props object.
export default function AssetCard({ asset }) {
  // The ternary chooses the CSS class from the current status.
  const statusClass = asset.status === 'Available' ? 'available' : 'assigned';

  // JSX braces insert JavaScript values into the displayed markup.
  return (
    <article className="asset-card">
      <span className="asset-id">{asset.id}</span>
      <h3>{asset.name}</h3>
      <p>{asset.category} · {asset.location}</p>
      <span className={`status ${statusClass}`}>{asset.status}</span>
    </article>
  );
}
