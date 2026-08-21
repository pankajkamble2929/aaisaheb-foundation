import type { Metadata } from 'next';

import Hero from './components/Hero';
import EventGallery from './components/EventGallery';

export const metadata: Metadata = {
  title: 'NGO Event Gallery in Mumbai | AaiSaheb Foundation',
  description:
    'View photos from AaiSaheb Foundation events and community initiatives in Mumbai, including education support, blood donation and social welfare programmes.',
};

export default function GalleryPage() {
  return (
    <main>
      <Hero />
      <EventGallery />
    </main>
  );
}
