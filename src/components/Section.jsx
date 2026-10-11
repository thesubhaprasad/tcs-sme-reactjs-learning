// Nested JSX reaches this reusable wrapper through the children prop.
// headingId connects the section to its heading for assistive technology.
export default function Section({ title, headingId, children }) {
  return (
    <section className="content-section" aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      {children}
    </section>
  );
}
