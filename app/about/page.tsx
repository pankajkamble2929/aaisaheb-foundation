import type { Metadata } from 'next';

import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import OurStory from './components/OurStory';
import OurValues from './components/OurValues';
import ClosingCTA from './components/ClosingCTA';

export const metadata: Metadata = {
  title: 'About AaiSaheb Foundation | Our Mission & Vision in Mumbai',
  description:
    'Learn about AaiSaheb Foundation, our mission, vision, values and community-focused work supporting children and people through social initiatives in Mumbai.',
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <ClosingCTA />
    </>
  );
}
