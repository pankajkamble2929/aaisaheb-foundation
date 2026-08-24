import Link from 'next/link';
import { ArrowRight, Heart, MessageCircle, Sparkles } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-[12%] top-20 hidden lg:block"
      >
        <Sparkles className="size-6 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-20 right-[12%] hidden lg:block"
      >
        <Heart
          className="size-7 text-indigo-100"
          fill="currentColor"
          strokeWidth={1.4}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl bg-indigo-800 px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Decorative Inner Element */}

          <div className="relative">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
              <Heart className="size-7" fill="currentColor" strokeWidth={1.7} />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Thank you for standing with us.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-indigo-100 sm:text-base sm:leading-8">
              Whether you choose to contribute or simply share our work with
              someone who may want to help, your support means a great deal to
              us. Together, small efforts can become meaningful community work.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-all hover:bg-indigo-50 hover:shadow-md"
              >
                <MessageCircle className="size-4" strokeWidth={1.8} />

                <span>Get in Touch</span>

                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>

              <Link
                href="/events/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15"
              >
                <span>See Our Events</span>

                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </div>

            <p className="mt-7 text-xs text-indigo-200">
              Thank you for being part of the journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
