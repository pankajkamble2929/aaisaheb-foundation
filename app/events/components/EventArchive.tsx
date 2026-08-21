'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Heart,
  Images,
  MapPin,
  Sparkles,
  UsersRound,
} from 'lucide-react';

const events = [
  {
    id: 3,
    month: 'June',
    date: '25 June 2026',
    title: 'School Supplies Distribution Programme',
    category: 'Education & Student Support',
    location: 'Ratnamala Karnabadhir Va Matimand Vidyamandir, Kalamboli',
    galleryHref: '/gallery/#school-supplies-distribution',
    description:
      'AaiSaheb Foundation organised a school supplies distribution programme for students at Ratnamala Karnabadhir Va Matimand Vidyamandir, Kalamboli. The initiative focused on providing useful educational materials to students who needed additional support.',
    highlights: [
      'Notebooks and essential school supplies were distributed to students.',
      'The initiative supported students with some of the basic materials required for their studies.',
      'The programme was intended to encourage students and support their educational journey.',
      'The activity was made possible with the support and cooperation of people who came forward to help.',
    ],
    contribution:
      'The programme was attended by Raju Khaire, Suresh Tupasundar, Vikrant Kamble, Priyanka Ingole and Yogesh Tupasundar. We sincerely thank Vidya Ramugude for her valuable support and cooperation.',
    photos: [
      '/events/june-2026/school-supplies-01.jpg',
      '/events/june-2026/school-supplies-02.jpg',
      '/events/june-2026/school-supplies-03.jpg',
      '/events/june-2026/school-supplies-04.jpg',
    ],
  },
  {
    id: 2,
    month: 'May',
    date: '1 May 2026',
    title: 'Blood Donation Camp',
    category: 'Community Health Initiative',
    location: 'Shanti Sadan, Transit Camp, Ramabai Colony, Ghatkopar West',
    galleryHref: '/gallery/#blood-donation-camp',
    description:
      'On Maharashtra Day and Labour Day, AaiSaheb Foundation organised a blood donation camp at Shanti Sadan, Transit Camp, Ramabai Colony, Ghatkopar West. The programme encouraged community members to come forward and contribute towards a cause that can help people in need.',
    highlights: [
      'The blood donation camp was organised on 1 May 2026.',
      'Community members were encouraged to participate through voluntary blood donation.',
      'The programme brought people together around an important social cause.',
      'The initiative provided an opportunity for individuals to make a practical contribution to the community.',
    ],
    contribution:
      'The camp provided an opportunity for community members to participate in a meaningful social initiative and contribute towards the wider need for blood availability.',
    photos: [
      '/events/may-2026/blood-donation-01.jpg',
      '/events/may-2026/blood-donation-02.jpg',
      '/events/may-2026/blood-donation-03.jpg',
      '/events/may-2026/blood-donation-04.jpg',
    ],
  },
  {
    id: 1,
    month: 'February',
    date: '27–28 February 2026',
    title: 'Hind-Di-Chadar',
    category: 'Community Service',
    location: 'Kharghar, Navi Mumbai',
    galleryHref: '/gallery/#hind-di-chadar',
    description:
      'A two-day public programme titled “Hind-Di-Chadar” was organised in Kharghar, Navi Mumbai, on 27 and 28 February 2026 to mark the 350th martyrdom anniversary of Sikh spiritual leader Guru Tegh Bahadur.',
    highlights: [
      'The programme was held over two days in Kharghar, Navi Mumbai.',
      'The event was organised through the Panvel Municipal Corporation and the Government of Maharashtra.',
      'Various organisations and community groups participated in the public programme.',
      'Several dignitaries and guests were present during the two-day programme.',
      'AaiSaheb Foundation participated as part of the community service efforts.',
      'Our team operated a stall on both days and distributed drinking water to devotees, visitors and guests.',
    ],
    contribution:
      'Our contribution focused on providing drinking water to people attending the programme. The two-day effort allowed us to support visitors in a simple and practical way.',
    photos: [
      '/events/feb-2026/hind-di-chadar-01.jpg',
      '/events/feb-2026/hind-di-chadar-02.jpg',
      '/events/feb-2026/hind-di-chadar-03.jpg',
      '/events/feb-2026/hind-di-chadar-04.jpg',
    ],
  },
];

export default function EventArchive() {
  const [openEvent, setOpenEvent] = useState<number | null>(3);

  const toggleEvent = (id: number) => {
    setOpenEvent((current) => (current === id ? null : id));
  };

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/4 size-80 rounded-full bg-indigo-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-96 rounded-full bg-indigo-50/70 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[10%] top-20">
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800">
            <CalendarDays className="size-4" strokeWidth={1.8} />

            <span>Our Events</span>
          </div>

          <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
            Events that bring people together.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Take a look at the initiatives we have organised and the people who
            came together to make them possible.
          </p>
        </div>

        {/* Year Heading */}
        <div className="mt-14 flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-800 font-(family-name:--font-jakarta) text-lg font-bold text-white shadow-sm">
            2026
          </div>

          <div>
            <h3 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950">
              Events in 2026
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Three initiatives organised so far
            </p>
          </div>
        </div>

        {/* Event Accordion */}
        <div className="mt-8 space-y-5">
          {events.map((event) => {
            const isOpen = openEvent === event.id;

            return (
              <article
                key={event.id}
                className={`overflow-hidden rounded-4xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-indigo-200 bg-white shadow-md'
                    : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-sm'
                }`}
              >
                {/* Clickable Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleEvent(event.id)}
                  aria-expanded={isOpen}
                  aria-controls={`event-content-${event.id}`}
                  className="flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  {/* Date Icon */}
                  <span className="flex size-12 shrink-0 flex-col items-center justify-center rounded-xl bg-indigo-50 text-indigo-800 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {event.month}
                    </span>

                    <CalendarDays className="mt-0.5 size-4" strokeWidth={1.8} />
                  </span>

                  {/* Event Information */}
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                        {event.date}
                      </span>

                      <span className="hidden size-1 rounded-full bg-slate-300 sm:block" />

                      <span className="text-xs font-medium text-slate-400">
                        {event.category}
                      </span>
                    </span>

                    <span className="mt-1 block font-(family-name:--font-jakarta) text-lg font-bold text-indigo-950 sm:text-xl">
                      {event.title}
                    </span>
                  </span>

                  {/* Accordion Arrow */}
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-800 transition-all duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="size-5" strokeWidth={1.8} />
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  id={`event-content-${event.id}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-indigo-100 px-5 pb-8 pt-7 sm:px-7">
                      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                        {/* Event Information */}
                        <div>
                          {/* Location */}
                          <div className="flex items-start gap-3">
                            <MapPin
                              className="mt-0.5 size-5 shrink-0 text-indigo-700"
                              strokeWidth={1.8}
                            />

                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                                Location
                              </p>

                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {event.location}
                              </p>
                            </div>
                          </div>

                          {/* About */}
                          <div className="mt-7">
                            <h4 className="font-(family-name:--font-jakarta) text-lg font-bold text-indigo-950">
                              About the Event
                            </h4>

                            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                              {event.description}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="mt-6">
                            <h4 className="font-(family-name:--font-jakarta) text-base font-bold text-indigo-950">
                              Highlights
                            </h4>

                            <ul className="mt-3 space-y-3">
                              {event.highlights.map((highlight) => (
                                <li
                                  key={highlight}
                                  className="flex gap-3 text-sm leading-6 text-slate-600"
                                >
                                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-700" />

                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Our Contribution */}
                          <div className="mt-6 rounded-2xl bg-indigo-50 p-5 sm:p-6">
                            <div className="flex gap-3">
                              <UsersRound
                                className="mt-0.5 size-5 shrink-0 text-indigo-700"
                                strokeWidth={1.8}
                              />

                              <div>
                                <h4 className="font-(family-name:--font-jakarta) text-sm font-bold text-indigo-950">
                                  Our Contribution
                                </h4>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                  {event.contribution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Event Photos */}
                        <div>
                          <div className="mb-4 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <Images
                                className="size-5 text-indigo-700"
                                strokeWidth={1.8}
                              />

                              <h4 className="font-(family-name:--font-jakarta) text-base font-bold text-indigo-950">
                                Moments From The Event
                              </h4>
                            </div>

                            <span className="text-xs font-medium text-slate-400">
                              Featured photos
                            </span>
                          </div>

                          {/* Featured Gallery */}
                          <div className="grid grid-cols-2 gap-3">
                            {event.photos.map((photo, index) => (
                              <Link
                                key={photo}
                                href={event.galleryHref}
                                className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-2xl bg-indigo-100"
                                aria-label={`View ${event.title} gallery`}
                              >
                                <Image
                                  src={photo}
                                  alt={`${event.title} - photo ${index + 1}`}
                                  fill
                                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-indigo-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-indigo-950 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                                  {index + 1}
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* Gallery CTA */}
                          <Link
                            href={event.galleryHref}
                            className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-800 transition-all hover:border-indigo-300 hover:bg-indigo-50"
                          >
                            <Images className="size-4" strokeWidth={1.8} />

                            <span>View Full Gallery</span>

                            <ArrowRight className="size-4" strokeWidth={2} />
                          </Link>
                        </div>
                      </div>

                      {/* Event Footer */}
                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-indigo-100 pt-5">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Heart
                            className="size-4 shrink-0 text-indigo-700"
                            fill="currentColor"
                            strokeWidth={1.7}
                          />

                          <span>
                            Thank you to everyone who made this initiative
                            possible.
                          </span>
                        </div>

                        <Link
                          href={event.galleryHref}
                          className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-indigo-800 transition-colors hover:text-indigo-950"
                        >
                          <span>See all event photos</span>

                          <ArrowRight className="size-4" strokeWidth={2} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Archive Note */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <Sparkles
            className="size-4 shrink-0 text-indigo-700"
            strokeWidth={1.7}
          />

          <span>
            More events and memories will be added here as our work continues.
          </span>
        </div>
      </div>
    </section>
  );
}
