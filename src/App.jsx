import PageHeader from './components/PageHeader.jsx';
import Section from './components/Section.jsx';
import AssetSummary from './components/AssetSummary.jsx';
import AssetList from './components/AssetList.jsx';
import { assets } from './data/assets.js';

// App composes small components and supplies their data through props.
export default function App() {
  // Day 2 uses source configuration. State and interactive inputs arrive on Day 3.
  // Try Available, Assigned or All, then save the file and inspect the browser.
  const selectedStatus = 'All';
  const showLocation = true;
  const visibleAssets = selectedStatus === 'All'
    ? assets
    : assets.filter(asset => asset.status === selectedStatus);

  return (
    <main className="page">
      <PageHeader
        title="Reusable components, one dashboard"
        subtitle="Props connect data to components. Conditions choose what appears."
        trainer="Subha Prasad"
        date="13 October 2026"
      />
      <AssetSummary assets={assets} />
      {/* Section receives both paragraphs and AssetList through children. */}
      <Section title="Asset inventory" headingId="inventory-heading">
        <p>Current source filter: <strong>{selectedStatus}</strong></p>
        <AssetList assets={visibleAssets} showLocation={showLocation} />
      </Section>
      <Section title="Empty-list example" headingId="empty-heading">
        <p>The same AssetList displays an alternative when its array has no items.</p>
        <AssetList assets={[]} />
      </Section>
      <aside className="exercise">
        <h2>Your turn</h2>
        <p>Change selectedStatus to Available and showLocation to false in App.jsx.</p>
        <p>The summary uses all assets. The inventory uses the filtered list.</p>
      </aside>
    </main>
  );
}
