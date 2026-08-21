import Link from 'next/link';
import { ArrowRight, Heart, HandHeart, Mail, Sparkles } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-indigo-50 py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 size-80 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 size-96 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div aria-hidden="true" className="absolute left-[10%] top-20">
        <Sparkles className="size-7 text-indigo-300" strokeWidth={1.4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-24 right-[12%] size-6 rounded-full border border-indigo-300"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-4xl bg-indigo-900 px-6 py-12 text-center shadow-xl shadow-indigo-950/10 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
          {/* Inner Decorations */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-48 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 size-56 rounded-full bg-indigo-800/50"
          />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              <HandHeart className="size-7" strokeWidth={1.7} />
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-7 max-w-2xl font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Want to be a part of what we do?
            </h2>

            {/* Copy */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-indigo-100/75 sm:text-lg sm:leading-8">
              There are many ways to support a good cause. If you would like to
              know more about our work, participate in an upcoming event or
              simply get in touch, we would be happy to hear from you.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-all hover:bg-indigo-50"
              >
                <Mail className="size-4" strokeWidth={1.9} />
                <span>Get in Touch</span>
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>

              <Link
                href="/events/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Heart className="size-4" strokeWidth={1.8} />
                <span>See Our Events</span>
              </Link>
            </div>

            {/* Closing Note */}
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 border-t border-white/10 pt-6 text-sm text-indigo-200/60">
              <Heart className="size-4" fill="currentColor" strokeWidth={1.5} />
              <span>Every helping hand matters.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
