import { useState } from 'react';

// Local state is enough: the cart and catalog do not need this practice note.
export default function PracticeNote() {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');
  function handleSubmit(event) {
    // Keep the browser on this page and handle the submit event with React.
    event.preventDefault();
    setSavedNote(note.trim());
  }
  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label htmlFor="practice-note">Practice note
        <input id="practice-note" value={note} onChange={event => setNote(event.target.value)} placeholder="Try Gift wrap please" />
      </label>
      <button type="submit" disabled={note.trim().length === 0}>Save note</button>
      {/* Saving creates a separate submitted value while the draft remains editable. */}
      {savedNote && <p role="status">Saved note: {savedNote}</p>}
      <p className="stock-note">The note stays on this page until you reload.</p>
    </form>
  );
}
