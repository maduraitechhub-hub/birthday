'use client';
import { useState, useRef, useEffect } from 'react';
import SafeImage from './SafeImage';
import NavigationButton from './NavigationButton';
import { useBurst } from './Burst';
import data from '@/data/birthdayData';

function yt(src) { const m = /(?:v=|youtu\.be\/|embed\/)([\w-]{11})/.exec(src); return m ? m[1] : src; }

function Item({ it }) {
  const [bad, setBad] = useState(false);
  if (it.type === 'message') return <p className="surprise-msg hand">{it.text}</p>;
  if (it.type === 'image' || it.type === 'gif') return <SafeImage src={it.src} alt="A special surprise" className="s-media" fallback="🎁" />;
  if (it.type === 'youtube') return <div className="ratio ratio-16x9 s-media">
    <iframe src={`https://www.youtube-nocookie.com/embed/${yt(it.src)}`} title="Surprise video" allow="encrypted-media; picture-in-picture" allowFullScreen loading="lazy" /></div>;
  if (it.type === 'spotify') return <iframe className="s-media spotify" src={it.src.replace('open.spotify.com/', 'open.spotify.com/embed/')} title="Our song" height="152" allow="encrypted-media" loading="lazy" />;
  if (bad) return null; // missing file: simply skip it
  if (it.type === 'video') return <video className="s-media" src={it.src} controls playsInline preload="metadata" onError={() => setBad(true)} />;
  if (it.type === 'audio') return <audio className="s-media" src={it.src} controls preload="none" onError={() => setBad(true)} />;
  return null;
}

export default function GiftBox() {
  const [stage, setStage] = useState('idle');
  const [node, fire] = useBurst();
  const t = useRef([]);
  useEffect(() => () => t.current.forEach(clearTimeout), []);
  const open = () => {
    if (stage !== 'idle') return;
    setStage('shake');
    t.current.push(setTimeout(() => { setStage('open'); fire('mix'); }, 900));
  };
  const opened = stage === 'open';
  return (
    <section className="gift-wrap">
      {node}
      {opened && <div className="glow" aria-hidden="true" />}
      <div className={`gift ${stage}`} aria-hidden="true"><div className="lid" /><div className="box" /></div>
      {!opened ? (
        <>
          <h1 className="hand">Are You Ready, {data.callName}? 🎁</h1>
          <p>I made something special just for you.</p>
          <button type="button" className="cta heartbeat btn btn-danger" onClick={open} disabled={stage === 'shake'}>OPEN MY SURPRISE 🎁</button>
        </>
      ) : (
        <div className="reveal">
          {data.surprise.map((it, i) => <Item key={i} it={it} />)}
          <h2 className="hand">Made With Love, Only For You ❤️</h2>
          <p>There's Still One More Thing...</p>
          <NavigationButton href="/reasons">Tell Me Why I'm Lucky →</NavigationButton>
        </div>
      )}
    </section>
  );
}
