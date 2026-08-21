import AboutIntro from './components/AboutIntro';
import EventsPreview from './components/EventsPreview';
import GetInvolved from './components/GetInvolved';
import Hero from './components/Hero';
import Impact from './components/Impact';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'AaiSaheb Foundation | NGO & Social Welfare Initiatives in Mumbai',
  description:
    'AaiSaheb Foundation is an NGO working on social welfare initiatives in Mumbai, supporting children, communities and people in need through meaningful community programmes and events.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <EventsPreview />
      <Impact />
      <GetInvolved />
    </>
  );
}
