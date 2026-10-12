'use client';
import { useEffect } from 'react';

export default function PageTransition({ children, className = '' }) {
  useEffect(() => { document.body.classList.remove('leaving'); window.scrollTo(0, 0); }, []);
  return (
    <main className={`page ${className}`}>
      <div className="page-in">{children}</div>
    </main>
  );
}
