'use client';
import PageTransition from '@/components/PageTransition';
import BirthdayHero from '@/components/BirthdayHero';
import AutoPlayMusic from '@/components/AutoPlayMusic';

export default function Birthday() {
  return (
    <PageTransition>
      <AutoPlayMusic src="/assets/music/Neeyum-Naanum-Anbe.mp3" />
      <BirthdayHero />
    </PageTransition>
  );
}

