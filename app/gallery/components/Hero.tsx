import { Images, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-indigo-50 py-16 sm:py-20 lg:py-24">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 size-64 rounded-full bg-white/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 size-72 rounded-full bg-indigo-100 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute right-[12%] top-12 text-indigo-200"
      >
        <Sparkles className="size-8" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm">
          <Images className="size-4" strokeWidth={1.8} />
          <span>Event Gallery</span>
        </div>

        <h1 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
          Moments from our journey.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Browse photographs from our events, community initiatives and the
          people who have been part of them.
        </p>
      </div>
    </section>
  );
}
