'use client';
import { usePathname } from 'next/navigation';

const STEPS = [
  ['/', '🔐', 'Unlock'], ['/birthday', '🎂', 'Birthday'], ['/story', '💕', 'Our story'], ['/memories', '📸', 'Memories'],
  ['/secret', '🔑', 'Secret'], ['/surprise', '🎁', 'Surprise'], ['/reasons', '💗', 'Reasons'], ['/final', '💌', 'Letter'],
];

export default function ProgressIndicator() {
  const current = STEPS.findIndex(([p]) => p === usePathname());
  return (
    <nav className="progress-pill" aria-label="Story progress">
      <ol>
        {STEPS.map(([p, icon, label], i) => (
          <li key={p} className={i === current ? 'now' : i < current ? 'done' : ''} aria-current={i === current ? 'step' : undefined}>
            <span aria-hidden="true">{icon}</span><span className="visually-hidden">{label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
