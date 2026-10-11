import AssetCard from './AssetCard.jsx';

// An empty-array default makes omitting the assets prop a valid empty list.
export default function AssetList({ assets = [], showLocation = true }) {
  // Early return displays an alternative UI before the mapping logic.
  if (assets.length === 0) {
    return <p className="empty-state">No assets to display.</p>;
  }

  return (
    <div className="asset-grid">
      {/* The direct siblings returned by map need stable keys from the data. */}
      {/* key is special to React. asset.id reaches AssetCard inside the asset prop. */}
      {assets.map(asset => (
        <AssetCard key={asset.id} asset={asset} showLocation={showLocation} />
      ))}
    </div>
  );
}
