'use client';
import { useEffect, useRef, useState } from 'react';
import SafeImage from './SafeImage';
import NavigationButton from './NavigationButton';
import { useBurst } from './Burst';
import data from '@/data/birthdayData';

const paras = data.loveLetter.split('\n').map(l => l.trim()).join('\n').split(/\n{2,}/).filter(Boolean);

const COUPLE_FALLBACK_SRCS = [
  '/assets/couple/couple-main.png',
  '/assets/couple/couple.jpg',
  '/assets/couple/couple.png',
  '/assets/couple/couple.jpeg',
  '/assets/couple/couple-main.webp',
];

export default function LoveLetter() {
  const [stage, setStage] = useState('closed');
  const [shown, setShown] = useState(0);
  const [node, fire] = useBurst();
  const t = useRef([]);

  useEffect(() => {
    return () => {
      t.current.forEach(clearTimeout);
      clearInterval(t.current.iv);
    };
  }, []);

  const open = () => {
    if (stage !== 'closed') return;
    setStage('opening');
    fire('mix');
    try {
      window.dispatchEvent(new CustomEvent('music:play', { detail: { src: '/assets/music/Neeyum-Naanum-Anbe.mp3' } }));
    } catch (e) {}
    t.current.push(
      setTimeout(() => {
        setStage('letter');
        t.current.iv = setInterval(
          () =>
            setShown(s => {
              if (s >= paras.length) {
                clearInterval(t.current.iv);
                return s;
              }
              return s + 1;
            }),
          1100
        );
      }, 1000)
    );
  };

  return (
    <section className="on-night">
      {node}
      {stage !== 'letter' ? (
        <>
          <div className={`envelope ${stage === 'opening' ? 'open' : ''}`} aria-hidden="true">
            <div className="flap" />
          </div>
          <h1 className="hand">One Last Thing...</h1>
          <button type="button" className="cta heartbeat btn btn-danger" onClick={open} disabled={stage === 'opening'}>
            Open My Letter 💌
          </button>
        </>
      ) : (
        <div className="letter-wrap">
          <article className="letter" aria-label="Love letter">
            {paras.slice(0, shown).map((p, i) => (
              <p key={i} className="lp">
                {p}
              </p>
            ))}
          </article>
          {shown >= paras.length && (
            <div className="reveal">
              {/* Romantic Polaroid Couple Photo Frame */}
              <div className="couple-frame-container">
                <div className="couple-polaroid">
                  {/* Decorative Pin */}
                  <div className="polaroid-pin" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" fill="url(#pinGrad)" />
                      <circle cx="12" cy="12" r="4" fill="#ffffff" fillOpacity="0.8" />
                      <defs>
                        <linearGradient id="pinGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#ff6b8b" />
                          <stop offset="1" stopColor="#b79ced" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <span className="polaroid-sparkle" aria-hidden="true">✨</span>

                  <div className="couple-img-wrapper">
                    <SafeImage
                      src={data.images.couple}
                      fallbackSrcs={COUPLE_FALLBACK_SRCS}
                      alt={`${data.coupleName} together`}
                      className="couple-img"
                      fallback="💑"
                    />
                  </div>

                  <div className="polaroid-caption">
                    <span className="polaroid-title hand">{data.coupleName}</span>
                    <span className="polaroid-sub">Forever & Always ❤️</span>
                  </div>
                </div>
              </div>

              <h2 className="hand">Happy Birthday, {data.birthdayGirlName} ❤️</h2>
              <p className="hand">With Love,<br />{data.myName}</p>
              <p className="hand big">Our Story Continues... ❤️</p>
              <NavigationButton href="/" variant="link" className="replay">
                Replay Our Story ❤️
              </NavigationButton>
            </div>
          )}
        </div>
      )}
    </section>
  );
}


