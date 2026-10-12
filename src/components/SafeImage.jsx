'use client';
import { useState, useEffect } from 'react';

export default function SafeImage({ src, fallbackSrcs = [], alt, className = '', fallback = '🧸' }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [err, setErr] = useState(false);

  const sources = [src, ...(Array.isArray(fallbackSrcs) ? fallbackSrcs : [])].filter(Boolean);

  useEffect(() => {
    setCurrIndex(0);
    setErr(false);
  }, [src]);

  const currentSrc = sources[currIndex];

  const handleError = () => {
    if (currIndex + 1 < sources.length) {
      setCurrIndex(c => c + 1);
    } else {
      setErr(true);
    }
  };

  if (!currentSrc || err) {
    return <div className={`ph ${className}`} role="img" aria-label={alt}><span>{fallback}</span></div>;
  }
  return <img src={currentSrc} alt={alt} className={className} loading="lazy" onError={handleError} />;
}

