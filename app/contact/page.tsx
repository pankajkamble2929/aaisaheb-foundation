import type { Metadata } from 'next';

import ConnectWithUs from './components/ConnectWithUs';
import ContactDetails from './components/ContactDetails';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: 'Contact AaiSaheb Foundation | NGO in Mumbai',
  description:
    'Get in touch with AaiSaheb Foundation in Mumbai to learn more about our social initiatives, community programmes and opportunities to support our work.',
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactDetails />
      <ConnectWithUs />
    </>
  );
}
