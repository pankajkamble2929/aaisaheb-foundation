import Link from 'next/link';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] py-20">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 size-72 rounded-full bg-indigo-100/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-80 rounded-full bg-indigo-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute right-[12%] top-16 hidden sm:block"
      >
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800">
          <Heart className="size-4" strokeWidth={1.8} />
          <span>Support Our Work</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-6 max-w-3xl font-(family-name:--font-jakarta) text-4xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-5xl">
          Your support can help us do a little more.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Every contribution helps us continue organising community initiatives,
          supporting children and reaching people who can benefit from a helping
          hand.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-900 hover:shadow-md"
          >
            <Heart className="size-4" fill="currentColor" strokeWidth={1.8} />

            <span>How You Can Help</span>

            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Trust Note */}
        <div className="mt-7 flex items-center justify-center gap-2 text-sm text-slate-500">
          <span className="size-1.5 rounded-full bg-indigo-500" />
          <span>Every contribution is meaningful to us.</span>
        </div>
      </div>
    </section>
  );
}
