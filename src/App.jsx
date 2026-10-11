import AssetCard from './components/AssetCard.jsx';
import { assets } from './data/assets.js';

// A React function component describes the screen using current data.
export default function App() {
  const trainer = 'Subha Prasad';
  // filter returns a new array containing assets that match this condition.
  const availableAssets = assets.filter(asset => asset.status === 'Available');

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">TCS SME TRAINING · DAY 01</p>
        <h1>Our first React screen</h1>
        <p>JavaScript data becomes a reusable asset dashboard.</p>
        <p className="trainer">Trainer: {trainer} · 12 October 2026</p>
      </header>
      <section className="summary" aria-label="Asset summary">
        {/* Expressions inside braces calculate the displayed counts. */}
        <p><strong>{assets.length}</strong> total assets</p>
        <p><strong>{availableAssets.length}</strong> available</p>
      </section>
      <section aria-labelledby="assets-heading">
        <h2 id="assets-heading">Sample assets</h2>
        <p>All data is fictional. Edit src/data/assets.js and watch this screen update.</p>
        <div className="asset-grid">
          {/* map converts each data object into a component. Stable IDs provide keys. */}
          {assets.map(asset => <AssetCard key={asset.id} asset={asset} />)}
        </div>
      </section>
      <aside className="exercise">
        <h2>Your turn</h2>
        <p>Add an asset with a unique ID, then change its location and status.</p>
        <p>Check the total and available counts. Explain which expression changed each one.</p>
      </aside>
    </main>
  );
}
