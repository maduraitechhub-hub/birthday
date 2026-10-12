'use client';
import { useEffect } from 'react';

const DEFAULT_SONG = '/assets/music/Neeyum-Naanum-Anbe.mp3';

/**
 * AutoPlayMusic component
 * Automatically triggers background music when mounted on a page.
 * Seamlessly keeps playing between pages (e.g. /reasons -> /final) without restarting.
 */
export default function AutoPlayMusic({ src = DEFAULT_SONG }) {
  useEffect(() => {
    const play = () => {
      try {
        window.dispatchEvent(new CustomEvent('music:play', { detail: { src } }));
      } catch (e) {
        window.dispatchEvent(new Event('music:play'));
      }
    };

    // 1. Attempt immediate playback
    play();

    // 2. Scheduled retry in case of pending page transitions/hydration
    const t1 = setTimeout(play, 150);
    const t2 = setTimeout(play, 500);

    // 3. User interaction fallback to bypass strict browser autoplay policies
    const onUserInteraction = () => {
      play();
    };

    ['click', 'touchstart', 'pointerdown', 'keydown'].forEach((ev) =>
      window.addEventListener(ev, onUserInteraction, { once: true })
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ['click', 'touchstart', 'pointerdown', 'keydown'].forEach((ev) =>
        window.removeEventListener(ev, onUserInteraction)
      );
    };
  }, [src]);

  return null;
}
