import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Heart,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo-50">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 -z-10 size-72 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-indigo-300/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute right-[8%] top-16 -z-10 size-16 rounded-full border border-indigo-300/40"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-20 left-[7%] -z-10 size-8 rounded-full bg-indigo-300/40"
      />

      <div aria-hidden="true" className="absolute right-[20%] top-32 -z-10">
        <Sparkles className="size-7 text-indigo-400/50" strokeWidth={1.5} />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Content */}
        <div className="max-w-2xl">
          {/* Location */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm backdrop-blur-sm">
            <MapPin className="size-4 text-indigo-700" strokeWidth={1.8} />
            <span>Navi Mumbai, Maharashtra</span>
          </div>

          {/* Heading */}
          <h1 className="font-(family-name:--font-jakarta) text-4xl font-extrabold leading-[1.1] tracking-tight text-indigo-950 sm:text-5xl">
            Together, We Can Make
            <span className="mt-2 block text-indigo-800">
              Every Moment Count
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            At AaiSaheb Foundation, we believe every child deserves to feel
            included, valued and celebrated. We organise events and bring people
            together to create happy moments for specially-abled children across
            Navi Mumbai.
          </p>

          {/* Trust Points */}
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
              <CheckCircle2
                className="size-5 shrink-0 text-indigo-700"
                strokeWidth={1.8}
              />
              <span>Events planned with children and families in mind</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
              <CheckCircle2
                className="size-5 shrink-0 text-indigo-700"
                strokeWidth={1.8}
              />
              <span>Focused on inclusion, happiness and togetherness</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/events/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-900 hover:shadow-md"
            >
              <CalendarDays className="size-4" strokeWidth={2} />
              <span>See Our Events</span>
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>

            <Link
              href="/about/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-all hover:border-indigo-300 hover:bg-indigo-50"
            >
              <Heart className="size-4" strokeWidth={1.8} />
              <span>About Our Foundation</span>
            </Link>
          </div>

          {/* Community Note */}
          <div className="mt-8 flex items-center gap-3 border-t border-indigo-200/70 pt-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
              <Users className="size-5 text-indigo-800" strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-semibold text-indigo-950">
                It starts with coming together
              </p>

              <p className="text-xs leading-5 text-slate-500">
                We believe small efforts can create memories that stay with us
                for a long time.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Decorative Circle */}
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 size-24 rounded-full border-2 border-dashed border-indigo-300/60"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 size-20 rounded-full bg-indigo-200/50"
          />

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-4xl border-8 border-white bg-white shadow-xl shadow-indigo-950/10">
            <div className="relative aspect-4/4.5 overflow-hidden">
              <Image
                src="/home/hero.jpeg"
                alt="AaiSaheb Foundation community event for specially-abled children in Navi Mumbai"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-indigo-950/60 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart
                    className="size-5"
                    fill="currentColor"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm font-semibold">
                    A little joy can mean a lot.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Card */}
          <div className="absolute -top-7 -left-3 rounded-2xl border border-indigo-100 bg-white p-4 shadow-lg shadow-indigo-950/10 sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-100">
                <CalendarDays
                  className="size-5 text-indigo-800"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  Our Community Events
                </p>

                <p className="mt-0.5 text-sm font-bold text-indigo-950">
                  Coming Together
                </p>
              </div>
            </div>
          </div>

          {/* Heart Decoration */}
          <div className="absolute bottom-24 -right-3 flex size-12 items-center justify-center rounded-full bg-indigo-800 text-white shadow-lg shadow-indigo-950/20 sm:-right-6">
            <Heart className="size-5" fill="currentColor" strokeWidth={1.8} />
          </div>
        </div>
      </div>
    </section>
  );
}
