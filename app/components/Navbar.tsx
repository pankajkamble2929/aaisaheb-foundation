'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  GalleryHorizontal,
  HandHeart,
  Home,
  Info,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'About',
    href: '/about/',
    icon: Info,
  },
  {
    label: 'Our Events',
    href: '/events/',
    icon: CalendarDays,
  },
  {
    label: 'Gallery',
    href: '/gallery/',
    icon: GalleryHorizontal,
  },
  {
    label: 'Contact',
    href: '/contact/',
    icon: Mail,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-900/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setIsOpen(false)}
          aria-label="AaiSaheb Foundation - Home"
        >
          <Image
            src="/aaisaheb-foundation.jpg"
            alt="AaiSaheb Foundation"
            width={180}
            height={60}
            priority
            className="h-auto w-20 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <nav className="flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-indigo-800"
                >
                  <Icon
                    className="size-4 text-indigo-700/70 transition-colors group-hover:text-indigo-800"
                    strokeWidth={1.8}
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Donate Button */}
          <Link
            href="/donate/"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-800 px-5 py-2.5 text-sm font-semibold text-white shadow-md ring-2 ring-indigo-800/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-900 hover:shadow-lg"
          >
            <HandHeart
              className="size-4 transition-transform duration-200 group-hover:scale-110"
              strokeWidth={2}
            />

            <span>Donate</span>

            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-11 items-center justify-center rounded-xl border border-indigo-800/15 text-indigo-800 transition-colors hover:bg-indigo-800/5 md:hidden"
        >
          {isOpen ? (
            <X className="size-5" strokeWidth={2} />
          ) : (
            <Menu className="size-5" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-indigo-800/10 bg-white transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-indigo-800"
                >
                  <Icon className="size-4 text-indigo-700" strokeWidth={1.8} />

                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Mobile Donate Button */}
            <Link
              href="/donate/"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-md ring-2 ring-indigo-800/10 transition-all duration-200 hover:bg-indigo-900"
            >
              <HandHeart className="size-4" strokeWidth={2} />

              <span>Donate & Support Our Cause</span>

              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
