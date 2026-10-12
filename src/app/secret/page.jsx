'use client';
import PageTransition from '@/components/PageTransition';
import SecretInput from '@/components/SecretInput';
import data from '@/data/birthdayData';

export default function Secret() {
  return (
    <PageTransition>
      <h1 className="hand">One More Secret 💌</h1>
      <p className="soft">If you really know us...<br />you already know the answer.</p>
      <p className="question hand">{data.secretQuestion}</p>
      <SecretInput answer={data.secretAnswer} placeholder="Enter my another name..." hint={data.secretHint}
        hintLabel="Need a hint? 💌" wrongMsg="Hmmm... think about my another name 😌❤️" next="/surprise"
        idleIcon="🔑" okIcon="🔓" button="Unlock 🔑" okMsg="Click... it's open 💖" />
    </PageTransition>
  );
}
