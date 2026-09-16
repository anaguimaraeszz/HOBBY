'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function YesPage() {
  const [noPosition, setNoPosition] = useState({ top: '62%', left: '62%' });

  function dodgeNo() {
    setNoPosition({
      top: `${18 + Math.random() * 64}%`,
      left: `${10 + Math.random() * 80}%`,
    });
  }

  return (
    <main className="container">
      <div className="card message-card marriage-card">
        <h1>Te amo, quer casar?</h1>
        <div className="marriage-options">
          <Link href="/gordinha" className="button button-success">Sim</Link>
          <button
            type="button"
            className="button button-danger runaway-button"
            style={noPosition}
            onMouseEnter={dodgeNo}
            onFocus={dodgeNo}
            onTouchStart={dodgeNo}
            onClick={dodgeNo}
          >
            Não
          </button>
        </div>
      </div>
    </main>
  );
}
