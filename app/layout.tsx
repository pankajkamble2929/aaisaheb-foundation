import type { Metadata } from 'next';
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const baseUrl = 'https://aaisahebfoundation.org';

export const metadata: Metadata = {
  title: {
    default: 'AaiSaheb Foundation',
    template: '%s | AaiSaheb Foundation',
  },
  description:
    'AaiSaheb Foundation is an NGO working on social welfare initiatives in Mumbai, supporting children, communities and people in need through meaningful community programmes and events.',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'AaiSaheb Foundation',
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${baseUrl}/aaisaheb-foundation.jpg`,
  },
  description:
    'AaiSaheb Foundation is an NGO working on social welfare initiatives in Mumbai, supporting children, communities and people in need through meaningful community programmes and events.',
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '410210',
    addressCountry: 'IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-(family-name:--font-dm-sans) text-slate-800">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
