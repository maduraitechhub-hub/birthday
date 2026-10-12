'use client';
import PageTransition from '@/components/PageTransition';
import ReasonsCarousel from '@/components/ReasonsCarousel';
import AutoPlayMusic from '@/components/AutoPlayMusic';

export default function Reasons() {
  return (
    <PageTransition>
      <AutoPlayMusic src="/assets/music/Neeyum-Naanum-Anbe.mp3" />
      <h1 className="hand">10 Reasons Why You're Special To Me ❤️</h1>
      <ReasonsCarousel />
    </PageTransition>
  );
}

