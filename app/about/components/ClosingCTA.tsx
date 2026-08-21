import Link from 'next/link';
import { ArrowRight, CalendarDays, Heart, Mail, Sparkles } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-indigo-50 py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 size-80 -translate-x-1/2 rounded-full bg-indigo-50 blur-3xl"
      />

      <div aria-hidden="true" className="absolute left-[12%] top-20">
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-16 right-[10%] size-8 rounded-full border border-indigo-200"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-indigo-100 bg-white px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-20 lg:py-16">
          {/* Icon */}
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-800 text-white shadow-sm">
            <Heart className="size-7" fill="currentColor" strokeWidth={1.7} />
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-6 max-w-2xl font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
            There is always room to do a little more.
          </h2>

          {/* Copy */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Whether you want to learn more about our work, attend one of our
            events or simply reach out to us, we would be glad to hear from you.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/events/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-900 hover:shadow-md"
            >
              <CalendarDays className="size-4" strokeWidth={1.9} />
              <span>Explore Our Events</span>
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>

            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-all hover:border-indigo-300 hover:bg-indigo-100"
            >
              <Mail className="size-4" strokeWidth={1.9} />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Closing Line */}
          <div className="mt-9 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Heart
              className="size-4 text-indigo-700"
              fill="currentColor"
              strokeWidth={1.6}
            />
            <span>Thank you for taking the time to know us.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
