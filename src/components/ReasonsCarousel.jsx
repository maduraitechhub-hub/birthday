'use client';
import { useState } from 'react';
import { useBurst } from './Burst';
import NavigationButton from './NavigationButton';
import data from '@/data/birthdayData';

export default function ReasonsCarousel() {
  const list = data.reasons;
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const [node, fire] = useBurst();
  const next = () => { fire('hearts'); i + 1 < list.length ? setI(i + 1) : setDone(true); };

  if (done) {
    return (
      <div className="reveal">
        <p className="hand big">And honestly...<br />I could keep going forever. ❤️</p>
        <NavigationButton href="/final" effect="mix">One Last Thing... 💌</NavigationButton>
      </div>
    );
  }
  return (
    <div className="reasons">
      {node}
      <div key={i} className="reason soft-card" aria-live="polite">
        <span className="num hand">{String(i + 1).padStart(2, '0')}</span>
        <p className="hand">{list[i]}</p>
      </div>
      <div className="dots" aria-hidden="true">{list.map((_, k) => <span key={k} className={k <= i ? 'on' : ''} />)}</div>
      <button type="button" className="cta heartbeat btn btn-danger" onClick={next}>Next ❤️</button>
    </div>
  );
}
