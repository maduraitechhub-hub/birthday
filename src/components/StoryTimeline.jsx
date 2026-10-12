'use client';
import { useEffect, useRef, useState } from 'react';
import SafeImage from './SafeImage';
import data from '@/data/birthdayData';

function Item({ it, i }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const media = it.gif || it.image;
  return (
    <li ref={ref} className={`tl-item ${i % 2 ? 'right' : 'left'} ${seen ? 'in' : ''}`}>
      <span className="tl-dot" aria-hidden="true">💗</span>
      <div className="soft-card">
        <small>{it.date}</small>
        <h3 className="hand">{it.title}</h3>
        <p>{it.description}</p>
        {media && <SafeImage src={media} alt={it.title} className="tl-img" />}
      </div>
    </li>
  );
}

export default function StoryTimeline() {
  return <ol className="tl">{data.story.map((it, i) => <Item key={i} it={it} i={i} />)}</ol>;
}
