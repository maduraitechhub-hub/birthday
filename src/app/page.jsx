'use client';
import PageTransition from '@/components/PageTransition';
import SecretInput from '@/components/SecretInput';
import SafeImage from '@/components/SafeImage';
import data from '@/data/birthdayData';

export default function Unlock() {
  return (
    <PageTransition>
      <SafeImage src={data.images.unlock} alt="Cute couple cartoon" className="hero-img" fallback="🧸" />
      <h1 className="hand">Only {data.callName} Can Enter 💗</h1>
      <p className="soft">Before I show you everything...<br />you have to prove you're really my {data.callName}.</p>
      <SecretInput answer={data.secretKeyword} placeholder="Enter our secret word..." hint={data.unlockHint}
        hintLabel="Need a hint? 💌" wrongMsg="Oops... that's not our secret 🥺" next="/birthday" />
    </PageTransition>
  );
}
