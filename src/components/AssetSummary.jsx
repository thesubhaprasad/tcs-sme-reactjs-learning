// Derive summary values from props each time this component renders.
export default function AssetSummary({ assets }) {
  const availableCount = assets.filter(asset => asset.status === 'Available').length;
  const assignedCount = assets.filter(asset => asset.status === 'Assigned').length;

  return (
    <section className="summary" aria-label="Asset summary">
      <p><strong>{assets.length}</strong> total assets</p>
      <p><strong>{availableCount}</strong> available</p>
      <p><strong>{assignedCount}</strong> assigned</p>
    </section>
  );
}
