'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Ein Fehler ist aufgetreten:', error);
  }, [error]);

  return (
    <div style={{ padding: '1rem', color: 'red' }}>
      <h2>Etwas ist schief gelaufen.</h2>
      <p>{error?.message}</p>
      <button onClick={() => reset()}>Erneut versuchen</button>
    </div>
  );
}