'use client';
import { useEffect } from 'react';
import { useBurst } from './Burst';
import SafeImage from './SafeImage';
import NavigationButton from './NavigationButton';
import data from '@/data/birthdayData';

/* ── Modern SVG Icons ── */
const BalloonSVG = ({ color = '#ff6b8b', size = 38 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="18" rx="14" ry="16" fill={color} opacity="0.92" />
    <ellipse cx="14" cy="12" rx="4" ry="5" fill="white" opacity="0.25" />
    <path d="M20 34 Q18 38 20 42 Q22 46 20 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 34 Q20 36 23 34" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const CakeSVG = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="24" height="12" rx="3" fill="#ffb3c7" />
    <rect x="7" y="12" width="18" height="6" rx="2" fill="#ff8fa8" />
    <rect x="10" y="8" width="12" height="5" rx="2" fill="#ff6b8b" />
    <line x1="16" y1="8" x2="16" y2="4" stroke="#ffb347" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="16" cy="3.5" rx="1.5" ry="2" fill="#ffdd57" opacity="0.9" />
    <circle cx="9" cy="19" r="1.2" fill="white" opacity="0.6" />
    <circle cx="16" cy="22" r="1.2" fill="white" opacity="0.6" />
    <circle cx="23" cy="19" r="1.2" fill="white" opacity="0.6" />
  </svg>
);

const StarSVG = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3 L19.5 12.5 L30 12.5 L21.5 18.5 L24.5 28 L16 22.5 L7.5 28 L10.5 18.5 L2 12.5 L12.5 12.5 Z"
      fill="#ffdd57" stroke="#ffb347" strokeWidth="1" strokeLinejoin="round" />
    <path d="M16 6 L18.5 13 L26 13 L20 17.5 L22.5 24.5 L16 20.5" fill="white" opacity="0.18" />
  </svg>
);

const GiftSVG = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="24" height="14" rx="2" fill="#b79ced" />
    <rect x="3" y="10" width="26" height="6" rx="2" fill="#9b7fd4" />
    <rect x="14" y="10" width="4" height="18" fill="#ff6b8b" />
    <path d="M16 10 C16 10 10 8 10 5 C10 3 12 2 14 4 C15 5 16 7 16 10Z" fill="#ff6b8b" />
    <path d="M16 10 C16 10 22 8 22 5 C22 3 20 2 18 4 C17 5 16 7 16 10Z" fill="#ff8fa8" />
  </svg>
);

const SparkSVG = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2 L15.5 12 L26 14 L15.5 16 L14 26 L12.5 16 L2 14 L12.5 12 Z" fill="#ffe066" stroke="#ffb347" strokeWidth="0.8" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2" fill="white" opacity="0.5" />
  </svg>
);

const HeartSVG = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 27 C16 27 4 19 4 11 C4 7 7 4 11 4 C13 4 15 5.5 16 7 C17 5.5 19 4 21 4 C25 4 28 7 28 11 C28 19 16 27 16 27Z"
      fill="#ff6b8b" stroke="#ff4d7d" strokeWidth="1" />
    <path d="M10 10 C10 8 12 7 13.5 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const BALLOON_COLORS = ['#ff6b8b', '#b79ced', '#ffb347', '#7ec8e3'];

export default function BirthdayHero() {
  const [node, fire] = useBurst();
  useEffect(() => { const t = setTimeout(() => fire('confetti'), 500); return () => clearTimeout(t); }, [fire]);
  return (
    <section className="hero">
      {node}

      {/* Modern SVG Balloons */}
      <div className="balloons svg-balloons" aria-hidden="true">
        {BALLOON_COLORS.map((color, i) => (
          <span key={i} style={{ display: 'inline-block', animationDelay: `${i * 0.4}s` }}>
            <BalloonSVG color={color} size={42} />
          </span>
        ))}
      </div>

      <SafeImage src={data.images.hero} alt="Birthday celebration" className="hero-img" fallback="🎂" />
      <h1 className="hand big">HAPPY BIRTHDAY</h1>
      <h2 className="hand">{data.birthdayGirlName} ❤️</h2>
      <p>May your special day be as bright, beautiful, and amazing as you are!</p>

      {/* Modern SVG Deco Icons */}
      <div className="deco svg-deco" aria-hidden="true">
        <CakeSVG size={34} />
        <StarSVG size={32} />
        <GiftSVG size={34} />
        <SparkSVG size={30} />
        <HeartSVG size={34} />
      </div>

      <button type="button" className="pill-btn" onClick={() => window.dispatchEvent(new Event('music:play'))}>♫ Play Our Song</button>
      <NavigationButton href="/story">I Made Something For You →</NavigationButton>
    </section>
  );
}
