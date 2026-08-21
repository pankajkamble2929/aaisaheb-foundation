import Link from 'next/link';
import { ArrowRight, Heart, Sparkles, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo-50">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 -z-10 size-80 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-indigo-200/50 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[12%] top-20">
        <Sparkles className="size-8 text-indigo-300/60" strokeWidth={1.4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-20 left-[10%] size-7 rounded-full border border-indigo-300/50"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm">
            <Heart
              className="size-4 text-indigo-700"
              fill="currentColor"
              strokeWidth={1.8}
            />
            <span>About AaiSaheb Foundation</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-(family-name:--font-jakarta) text-4xl font-extrabold leading-[1.1] tracking-tight text-indigo-950 sm:text-5xl">
            A foundation built around
            <span className="mt-2 block text-indigo-800">
              care, inclusion and togetherness.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            AaiSaheb Foundation is a community initiative in Navi Mumbai. We
            organise events and social activities for specially-abled children,
            with the simple aim of bringing people together and creating moments
            of happiness.
          </p>

          {/* Trust Points */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Users className="size-5 text-indigo-700" strokeWidth={1.8} />
              <span>Community focused</span>
            </div>

            <div className="hidden size-1.5 rounded-full bg-indigo-300 sm:block" />

            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Heart
                className="size-5 text-indigo-700"
                fill="currentColor"
                strokeWidth={1.8}
              />
              <span>Child focused</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9">
            <Link
              href="/events/"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-900 hover:shadow-md"
            >
              <span>See What We Do</span>
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-4 sm:mt-20">
          <div className="h-px flex-1 bg-indigo-200" />

          <div className="flex size-9 items-center justify-center rounded-full bg-white text-indigo-700 shadow-sm">
            <Heart className="size-4" fill="currentColor" strokeWidth={1.8} />
          </div>

          <div className="h-px flex-1 bg-indigo-200" />
        </div>
      </div>
    </section>
  );
}
