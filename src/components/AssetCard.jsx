import StatusBadge from './StatusBadge.jsx';

// App controls showLocation. This component reads its inputs without mutating them.
export default function AssetCard({ asset, showLocation = true }) {
  return (
    <article className="asset-card">
      <span className="asset-id">{asset.id}</span>
      <h3>{asset.name}</h3>
      <p>{asset.category}</p>
      {/* && includes this paragraph only when showLocation is true. */}
      {showLocation && <p className="location">Location: {asset.location}</p>}
      {/* A ternary selects one of two complete descriptions. */}
      <p className="allocation-note">
        {asset.status === 'Available' ? 'Ready to allocate' : 'Currently in use'}
      </p>
      <StatusBadge status={asset.status} />
    </article>
  );
}
