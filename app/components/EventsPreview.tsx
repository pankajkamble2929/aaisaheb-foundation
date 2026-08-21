import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Heart,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function EventsPreview() {
  return (
    <section className="relative overflow-hidden bg-indigo-950 py-20 text-white sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 size-96 rounded-full bg-indigo-800/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 size-96 rounded-full bg-indigo-800/30 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[10%] top-20">
        <Sparkles className="size-8 text-indigo-300/40" strokeWidth={1.4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-24 left-[8%] size-5 rounded-full bg-indigo-400/30"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-100">
              <CalendarDays
                className="size-4 text-indigo-300"
                strokeWidth={1.8}
              />
              <span>Our Events</span>
            </div>

            <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Small efforts, meaningful moments.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100/70 sm:text-lg sm:leading-8">
              We organise initiatives that support specially-abled children and
              their families. Here are some of the moments we have shared
              together.
            </p>
          </div>

          <Link
            href="/events/"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-200"
          >
            <span>View all events</span>
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Featured Event */}
        <div className="mt-14 overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm lg:mt-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Event Image */}
            <div className="relative min-h-85 overflow-hidden sm:min-h-110 lg:min-h-125">
              <Image
                src="/home/event.jpeg"
                alt="Distribution of notebooks and school supplies to students at Ratnamala Deaf and Mentally Challenged Vidyamandir, Kalamboli"
                fill
                className="object-contain transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-indigo-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-indigo-950 shadow-lg">
                  <Heart
                    className="size-3.5 text-indigo-700"
                    fill="currentColor"
                    strokeWidth={1.8}
                  />
                  A step towards education
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Featured Event
              </p>

              <h3 className="mt-4 font-(family-name:--font-jakarta) text-2xl font-bold leading-tight sm:text-3xl">
                School Supplies Distribution
              </h3>

              <p className="mt-5 text-sm leading-7 text-indigo-100/70 sm:text-base sm:leading-8">
                On 25 June 2026, we distributed notebooks and essential school
                supplies to students at Ratnamala Deaf and Mentally Challenged
                Vidyamandir in Kalamboli.
              </p>

              <p className="mt-4 text-sm leading-7 text-indigo-100/70">
                The initiative was organised to support students with the
                educational materials they need for their studies. We are
                grateful to everyone who helped make the programme possible.
              </p>

              {/* Event Details */}
              <div className="mt-8 space-y-4 border-y border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <CalendarDays
                      className="size-5 text-indigo-300"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-indigo-200/60">Date</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      25 June 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin
                      className="size-5 text-indigo-300"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-indigo-200/60">Location</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      Kalamboli, Navi Mumbai
                    </p>
                  </div>
                </div>
              </div>

              {/* Supporting Contributors */}
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-indigo-200/50">
                  With support from
                </p>

                <p className="mt-2 text-sm leading-6 text-indigo-100/70">
                  Raju Khaire, Suresh Tupasunder, Vikrant Kamble, Priyanka
                  Ingole and Yogesh Tupasunder.
                </p>

                <p className="mt-3 text-sm text-indigo-100/70">
                  Special thanks to{' '}
                  <span className="font-semibold text-white">
                    Vidya Ramugude
                  </span>{' '}
                  for her support and cooperation.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-7">
                <Link
                  href="/events/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-all hover:bg-indigo-50"
                >
                  <span>Explore Our Events</span>
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-indigo-200/60">
          <Heart className="size-4" fill="currentColor" strokeWidth={1.5} />
          <span>
            We are grateful to everyone who supports these initiatives.
          </span>
        </div>
      </div>
    </section>
  );
}
