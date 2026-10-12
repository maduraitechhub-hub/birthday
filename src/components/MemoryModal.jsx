'use client';
import { useEffect, useRef } from 'react';
import SafeImage from './SafeImage';

export default function MemoryModal({ items, index, onClose, onIndex }) {
  const n = items.length;
  const closeRef = useRef(null);
  const x0 = useRef(null);
  const go = d => onIndex((index + d + n) % n);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.classList.add('no-scroll');
    const key = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener('keydown', key); document.body.classList.remove('no-scroll'); };
  });

  const m = items[index];
  return (
    <div className="modal-lite" role="dialog" aria-modal="true" aria-label={m.title} onClick={onClose}
      onTouchStart={e => { x0.current = e.touches[0].clientX; }}
      onTouchEnd={e => { if (x0.current == null) return; const dx = e.changedTouches[0].clientX - x0.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); x0.current = null; }}>
      <figure onClick={e => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="x" onClick={onClose} aria-label="Close">✕</button>
        <SafeImage src={m.image} alt={m.title} className="big-img" />
        <figcaption><h3 className="hand">{m.title}</h3><p>{m.caption}</p></figcaption>
        <div className="m-nav">
          <button type="button" onClick={() => go(-1)} aria-label="Previous memory">‹</button>
          <span>{index + 1} / {n}</span>
          <button type="button" onClick={() => go(1)} aria-label="Next memory">›</button>
        </div>
      </figure>
    </div>
  );
}
