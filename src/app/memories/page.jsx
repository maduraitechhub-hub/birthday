'use client';
import PageTransition from '@/components/PageTransition';
import MemoryGallery from '@/components/MemoryGallery';
import NavigationButton from '@/components/NavigationButton';

export default function Memories() {
  return (
    <PageTransition className="top">
      <h1 className="hand">Little Pieces Of Us 📸</h1>
      <p className="soft">Every picture has a story.</p>
      <MemoryGallery />
      <p className="soft">But... I kept one more secret for you. 🔐</p>
      <NavigationButton href="/secret">Find The Secret →</NavigationButton>
    </PageTransition>
  );
}
