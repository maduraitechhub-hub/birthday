'use client';
import { useState } from 'react';
import SafeImage from './SafeImage';
import MemoryModal from './MemoryModal';
import { useBurst } from './Burst';
import data from '@/data/birthdayData';

export default function MemoryGallery() {
  const [open, setOpen] = useState(null);
  const [node, fire] = useBurst();
  return (
    <>
      {node}
      <div className="gallery">
        {data.memories.map((m, i) => (
          <button key={i} type="button" className={`memo r${i % 4}`} onClick={() => { fire('hearts'); setOpen(i); }} aria-label={`Open memory: ${m.title}`}>
            <SafeImage src={m.image} alt={m.title} className="thumb" />
            <span className="hand">{m.title}</span>
          </button>
        ))}
      </div>
      {open !== null && <MemoryModal items={data.memories} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </>
  );
}
