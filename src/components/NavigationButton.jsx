'use client';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { useBurst } from './Burst';

export default function NavigationButton({ href, children, effect = 'hearts', variant = 'cta', className = '' }) {
  const router = useRouter();
  const [node, fire] = useBurst();
  const busy = useRef(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  const go = () => {
    if (busy.current) return;
    busy.current = true;
    fire(effect);
    timer.current = setTimeout(() => {
      document.body.classList.add('leaving');
      timer.current = setTimeout(() => router.push(href), 500);
    }, 700);
  };
  return (
    <>
      {node}
      <Button type="button" onClick={go} className={`${variant === 'cta' ? 'cta heartbeat' : 'link-btn'} ${className}`} variant={variant === 'cta' ? 'danger' : 'link'}>
        {children}
      </Button>
    </>
  );
}
