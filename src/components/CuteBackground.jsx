'use client';
import { usePathname } from 'next/navigation';
import FloatingHearts from './FloatingHearts';

export default function CuteBackground() {
  const night = usePathname() === '/final';
  return (
    <div className={`bg ${night ? 'night' : ''}`} aria-hidden="true">
      <div className="stars">{Array.from({ length: 10 }, (_, i) => <span key={i}>{night ? '✦' : '⭐'}</span>)}</div>
      <FloatingHearts />
    </div>
  );
}
