'use client';
import { useState, useCallback, useRef, useEffect } from 'react';

const EMOJI = ['💗', '❤️', '💕', '✨'];

// kind: 'hearts' | 'confetti' | 'mix'
export function useBurst() {
  const [b, setB] = useState(null);
  const t = useRef();
  const fire = useCallback((kind = 'hearts') => {
    clearTimeout(t.current);
    setB({ kind, id: Date.now() });
    t.current = setTimeout(() => setB(null), 1500);
  }, []);
  useEffect(() => () => clearTimeout(t.current), []);
  const node = b ? (
    <div key={b.id} className="burst" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <i key={i}>{b.kind === 'hearts' || (b.kind === 'mix' && i % 2) ? EMOJI[i % 4] : ''}</i>
      ))}
    </div>
  ) : null;
  return [node, fire];
}
