'use client';
import PageTransition from '@/components/PageTransition';
import StoryTimeline from '@/components/StoryTimeline';
import NavigationButton from '@/components/NavigationButton';

export default function Story() {
  return (
    <PageTransition className="top">
      <h1 className="hand">Our Little Story ❤️</h1>
      <p className="soft">Some moments become memories.<br />Some memories become forever.</p>
      <StoryTimeline />
      <p className="soft">Want to see our memories? 📸</p>
      <NavigationButton href="/memories">Open Our Memories ❤️</NavigationButton>
    </PageTransition>
  );
}
