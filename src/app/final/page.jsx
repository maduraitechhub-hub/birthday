'use client';
import PageTransition from '@/components/PageTransition';
import LoveLetter from '@/components/LoveLetter';
import AutoPlayMusic from '@/components/AutoPlayMusic';

export default function Final() {
  return (
    <PageTransition className="top">
      <AutoPlayMusic src="/assets/music/Neeyum-Naanum-Anbe.mp3" />
      <LoveLetter />
    </PageTransition>
  );
}

