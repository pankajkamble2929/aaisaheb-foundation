import Link from 'next/link';
import {
  ArrowDown,
  CalendarDays,
  Heart,
  Sparkles,
  UsersRound,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo-50">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-28 -top-28 -z-10 size-80 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-indigo-200/50 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[13%] top-20">
        <Sparkles className="size-8 text-indigo-300/60" strokeWidth={1.4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-20 left-[9%] size-7 rounded-full border border-indigo-300/50"
      />

      <div aria-hidden="true" className="absolute left-[18%] top-28">
        <Heart
          className="size-5 text-indigo-300/50"
          fill="currentColor"
          strokeWidth={1.5}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm backdrop-blur-sm">
              <CalendarDays
                className="size-4 text-indigo-700"
                strokeWidth={1.8}
              />
              <span>Our Events</span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-(family-name:--font-jakarta) text-4xl font-extrabold leading-[1.1] tracking-tight text-indigo-950 sm:text-5xl">
              Moments that bring
              <span className="mt-2 block text-indigo-800">
                people together.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From educational support to celebrations and community activities,
              our events are planned to give specially-abled children meaningful
              experiences and moments to remember.
            </p>

            {/* Highlights */}
            <div className="mt-9 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
                <UsersRound
                  className="size-4 text-indigo-700"
                  strokeWidth={1.8}
                />
                <span>Children-focused initiatives</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
                <Heart
                  className="size-4 text-indigo-700"
                  fill="currentColor"
                  strokeWidth={1.8}
                />
                <span>Community participation</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 size-20 rounded-full border border-indigo-300/50"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 size-16 rounded-full bg-indigo-200/50"
            />

            <div className="relative overflow-hidden rounded-4xl bg-indigo-900 p-8 text-white shadow-xl shadow-indigo-950/10 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 size-40 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 size-48 rounded-full bg-indigo-800/50"
              />

              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <CalendarDays
                    className="size-7 text-white"
                    strokeWidth={1.7}
                  />
                </div>

                <p className="mt-8 font-(family-name:--font-jakarta) text-2xl font-bold leading-tight sm:text-3xl">
                  Every event has a reason behind it.
                </p>

                <p className="mt-5 text-sm leading-7 text-indigo-100/75 sm:text-base sm:leading-8">
                  We organise our initiatives with the needs of the children and
                  the community in mind, keeping each gathering thoughtful and
                  purposeful.
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                      <Heart
                        className="size-5 text-indigo-200"
                        fill="currentColor"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Events in Navi Mumbai
                      </p>

                      <p className="mt-0.5 text-xs text-indigo-200/60">
                        Creating moments of connection
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="#events"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition-colors hover:text-white"
                >
                  <span>Explore our events</span>
                  <ArrowDown className="size-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
