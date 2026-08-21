import AboutIntro from './components/AboutIntro';
import EventsPreview from './components/EventsPreview';
import GetInvolved from './components/GetInvolved';
import Hero from './components/Hero';
import Impact from './components/Impact';

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