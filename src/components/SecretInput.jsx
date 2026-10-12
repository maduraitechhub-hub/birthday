'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useBurst } from './Burst';

const norm = s => String(s || '').trim().toLowerCase().replace(/\s+/g, '');

/* ── Lock SVG Icons ── */
const LockClosedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none">
    <rect x="8" y="26" width="40" height="24" rx="8" fill="url(#lg1)" opacity="0.95" />
    <path d="M18 26V20a10 10 0 0 1 20 0v6" stroke="#ff6b8b" strokeWidth="3" strokeLinecap="round" />
    <circle cx="28" cy="38" r="4" fill="white" opacity="0.85" />
    <rect x="26.5" y="38" width="3" height="5" rx="1.5" fill="#ff8fa8" />
    <defs>
      <linearGradient id="lg1" x1="8" y1="26" x2="48" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff6b8b" />
        <stop offset="1" stopColor="#ffb3c7" />
      </linearGradient>
    </defs>
  </svg>
);

const LockOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none">
    <rect x="8" y="26" width="40" height="24" rx="8" fill="url(#lg2)" opacity="0.95" />
    <path d="M18 26V20a10 10 0 0 1 20 0" stroke="#b79ced" strokeWidth="3" strokeLinecap="round" />
    <circle cx="28" cy="38" r="4" fill="white" opacity="0.85" />
    <rect x="26.5" y="38" width="3" height="5" rx="1.5" fill="#b79ced" />
    <defs>
      <linearGradient id="lg2" x1="8" y1="26" x2="48" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#b79ced" />
        <stop offset="1" stopColor="#d4baff" />
      </linearGradient>
    </defs>
  </svg>
);

export default function SecretInput({ answer, placeholder, hint, hintLabel, wrongMsg, next, button = 'Unlock 💗', okMsg = 'It opens... 💖', playMusicOnUnlock = true }) {
  const router = useRouter();
  const [val, setVal] = useState('');
  const [state, setState] = useState('idle');
  const [hintOn, setHintOn] = useState(false);
  const [wrongShown, setWrongShown] = useState(false);
  const [node, fire] = useBurst();
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (f, ms) => timers.current.push(setTimeout(f, ms));

  const submit = e => {
    e.preventDefault();
    if (state === 'ok') return;
    if (norm(val) === norm(answer)) {
      setState('ok');
      fire('mix');
      // Auto play song immediately upon unlock!
      if (playMusicOnUnlock) {
        try {
          window.dispatchEvent(
            new CustomEvent('music:play', { detail: { src: '/assets/music/Neeyum-Naanum-Anbe.mp3' } })
          );
        } catch (err) {
          window.dispatchEvent(new Event('music:play'));
        }
      }
      later(() => document.body.classList.add('leaving'), 1200);
      later(() => router.push(next), 1700);
    } else {
      setState('wrong');
      later(() => setState('idle'), 650);
      setWrongShown(true);
    }
  };

  return (
    <div className="si-wrap">
      {node}

      {/* Floating lock icon with glow ring */}
      <div className={`si-lock-ring ${state}`} aria-hidden="true">
        <div className="si-lock-icon">
          {state === 'ok' ? <LockOpenIcon /> : <LockClosedIcon />}
        </div>
      </div>

      {/* Glassmorphism card */}
      <div className={`si-card ${state}`}>
        <form onSubmit={submit} noValidate className="si-form">
          {/* Custom styled input */}
          <div className={`si-input-wrap ${state}`}>
            <span className="si-input-icon" aria-hidden="true">
              {state === 'ok' ? '✓' : state === 'wrong' ? '✗' : '✦'}
            </span>
            <input
              className="si-input"
              value={val}
              onChange={e => setVal(e.target.value)}
              placeholder={placeholder}
              aria-label={placeholder}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
              enterKeyHint="go"
            />
          </div>

          {/* Shimmer unlock button */}
          <button type="submit" className={`si-btn ${state}`}>
            <span className="si-btn-shimmer" />
            <span className="si-btn-text">{state === 'ok' ? okMsg : button}</span>
          </button>
        </form>

        {/* Status message */}
        {(state === 'ok' || wrongShown) && (
          <p className={`si-msg ${state}`} role="status" aria-live="polite">
            {state === 'ok' ? '💖 ' + okMsg : wrongShown ? '🥺 ' + wrongMsg : ''}
          </p>
        )}

        {/* Hint toggle */}
        <button
          type="button"
          className="si-hint-btn"
          onClick={() => setHintOn(v => !v)}
          aria-expanded={hintOn}
        >
          {hintOn ? '🌸 Hide hint' : hintLabel}
        </button>

        {hintOn && (
          <div className="si-hint-box">
            <span className="si-hint-star">✦</span>
            <p className="si-hint-text">{hint}</p>
          </div>
        )}
      </div>
    </div>
  );
}
