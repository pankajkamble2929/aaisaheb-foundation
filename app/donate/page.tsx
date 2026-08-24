import type { Metadata } from 'next';
import ClosingCTA from './components/ClosingCTA';
import DonationDetails from './components/DonationDetails';
import Hero from './components/Hero';
import WhySupportMatters from './components/WhySupportMatters';

export const metadata: Metadata = {
  title: 'Donate to AaiSaheb Foundation | Support Community Initiatives',
  description:
    'Support AaiSaheb Foundation through a donation and help us organise meaningful community initiatives, educational support and social welfare activities in Mumbai.',
};

export default function DonatePage() {
  return (
    <>
      <Hero />
      <DonationDetails />
      <WhySupportMatters />
      <ClosingCTA />
    </>
  );
}
