'use client';
import PageTransition from '@/components/PageTransition';
import GiftBox from '@/components/GiftBox';

export default function Surprise() {
  return <PageTransition className="top"><GiftBox /></PageTransition>;
}
