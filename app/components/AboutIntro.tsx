import Link from 'next/link';
import { ArrowRight, Heart, Sparkles, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'We Care',
    description:
      'We want every child to feel welcomed, valued and included when they are with us.',
  },
  {
    icon: Users,
    title: 'We Come Together',
    description:
      'Our events bring children, families, volunteers and well-wishers together.',
  },
  {
    icon: Sparkles,
    title: 'We Create Joy',
    description:
      'Sometimes a celebration, a smile or a shared moment can become a beautiful memory.',
  },
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 size-64 rounded-full bg-indigo-50"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 size-72 -translate-y-1/2 rounded-full bg-indigo-50/70 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[8%] top-20">
        <Sparkles className="size-8 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800">
              <Heart className="size-4" fill="currentColor" strokeWidth={1.8} />
              <span>A little about us</span>
            </div>

            <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
              We are here to bring people together.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              At AaiSaheb Foundation, we believe that everyone deserves a chance
              to feel included, cared for and celebrated. That belief is what
              brings us together.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We organise events for specially-abled children in Navi Mumbai,
              creating days where children can have fun, families can connect
              and everyone can share a little happiness together.
            </p>

            <Link
              href="/about/"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-indigo-800 transition-colors hover:text-indigo-950"
            >
              <span>Know more about us</span>
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 sm:p-7"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800 transition-colors group-hover:bg-indigo-800 group-hover:text-white">
                  <Icon
                    className="size-5"
                    strokeWidth={1.8}
                    fill={value.title === 'We Care' ? 'currentColor' : 'none'}
                  />
                </div>

                <h3 className="mt-5 font-(family-name:--font-jakarta) text-lg font-bold text-indigo-950">
                  {value.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Simple Closing Note */}
        <div className="mt-6 rounded-2xl bg-indigo-50 px-6 py-7 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-indigo-800 shadow-sm">
                <Heart
                  className="size-4"
                  fill="currentColor"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="font-(family-name:--font-jakarta) text-sm font-bold text-indigo-950">
                  It does not take much to make someone&apos;s day better.
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  For us, it starts with showing up, spending time together and
                  sharing a smile.
                </p>
              </div>
            </div>

            <Link
              href="/about/"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-indigo-800 transition-colors hover:text-indigo-950"
            >
              <span>Our story</span>
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
