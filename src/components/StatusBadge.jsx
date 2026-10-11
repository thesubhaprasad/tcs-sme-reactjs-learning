// A default applies when status is omitted or undefined, but not when it is null.
export default function StatusBadge({ status = 'Available' }) {
  // Choose a class through an expression instead of changing incoming props.
  const statusClass = status === 'Available' ? 'available' : 'assigned';
  return <span className={`status ${statusClass}`}>{status}</span>;
}
