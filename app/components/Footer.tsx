import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  CalendarDays,
  Heart,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Our Events', href: '/events/' },
  { label: 'Contact', href: '/contact/' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
];

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block"
              aria-label="AaiSaheb Foundation - Home"
            >
              <Image
                src="/aaisaheb-foundation.jpg"
                alt="AaiSaheb Foundation"
                width={180}
                height={60}
                className="h-auto w-30 rounded-md bg-white p-2 object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-indigo-100/75">
              Creating meaningful experiences, spreading joy and building
              inclusive communities for specially-abled children in Navi Mumbai.
            </p>

            <Link
              href="/contact/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-200"
            >
              <Heart className="size-4" fill="currentColor" strokeWidth={2} />
              <span>Support Our Cause</span>
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-(family-name:--font-jakarta) text-sm font-bold tracking-wide text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-indigo-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-(family-name:--font-jakarta) text-sm font-bold tracking-wide text-white">
              Get Involved
            </h3>

            <ul className="mt-5 space-y-3.5">
              <li>
                <Link
                  href="/events/"
                  className="flex items-center gap-2 text-sm text-indigo-100/70 transition-colors hover:text-white"
                >
                  <CalendarDays
                    className="size-4 text-indigo-300"
                    strokeWidth={1.8}
                  />
                  <span>Our Events</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact/"
                  className="flex items-center gap-2 text-sm text-indigo-100/70 transition-colors hover:text-white"
                >
                  <Heart className="size-4 text-indigo-300" strokeWidth={1.8} />
                  <span>Support Our Cause</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-(family-name:--font-jakarta) text-sm font-bold tracking-wide text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-indigo-300"
                  strokeWidth={1.8}
                />

                <p className="text-sm leading-6 text-indigo-100/70">
                  Navi Mumbai,
                  <br />
                  Maharashtra, India
                </p>
              </div>

              <a
                href="tel:+918976091721"
                className="flex items-center gap-3 text-sm text-indigo-100/70 transition-colors hover:text-white"
              >
                <Phone
                  className="size-4 shrink-0 text-indigo-300"
                  strokeWidth={1.8}
                />
                <span>+91 89760 91721</span>
              </a>

              <a
                href="mailto:info@aaisahebfoundation.org"
                className="flex items-center gap-3 break-all text-sm text-indigo-100/70 transition-colors hover:text-white"
              >
                <Mail
                  className="size-4 shrink-0 text-indigo-300"
                  strokeWidth={1.8}
                />
                <span>info@aaisahebfoundation.org</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs leading-5 text-indigo-100/55">
            © {new Date().getFullYear()} AaiSaheb Foundation. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-indigo-100/55 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
