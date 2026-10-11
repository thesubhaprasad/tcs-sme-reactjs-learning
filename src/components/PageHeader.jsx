// Named props let the same header display different session details.
export default function PageHeader({ title, subtitle, trainer, date }) {
  return (
    <header className="hero">
      <p className="eyebrow">TCS SME TRAINING · DAY 04</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p className="trainer">Trainer: {trainer} · {date}</p>
    </header>
  );
}
