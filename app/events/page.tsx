import type { Metadata } from 'next';

import EventArchive from './components/EventArchive';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: 'NGO Events in Mumbai | AaiSaheb Foundation',
  description:
    'Explore AaiSaheb Foundation events and social initiatives in Mumbai, including education support, blood donation drives and community service programmes.',
};

export default function EventsPage() {
  return (
    <>
      <Hero />
      <EventArchive />
    </>
  );
}
