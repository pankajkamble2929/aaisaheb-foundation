import Link from 'next/link';
import { ArrowRight, BookOpen, Heart, HandHeart, Sparkles } from 'lucide-react';

const impactPoints = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Supporting Education',
    description:
      'We help students with useful educational materials and small things that can make their learning journey a little easier.',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Creating Happy Moments',
    description:
      'Our events give children an opportunity to participate, enjoy activities and spend a memorable day with others.',
  },
  {
    icon: HandHeart,
    number: '03',
    title: 'Bringing People Together',
    description:
      'Every initiative becomes possible because of the people, families and supporters who choose to be part of it.',
  },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 size-80 rounded-full bg-indigo-50/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 size-72 rounded-full bg-indigo-50/60 blur-3xl"
      />

      <div aria-hidden="true" className="absolute left-[12%] top-24">
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800">
            <Heart className="size-4" fill="currentColor" strokeWidth={1.8} />
            <span>Why our work matters</span>
          </div>

          <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
            It is the little things that can make a difference.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We may not be able to change everything at once. But by coming
            together and helping where we can, we hope to make each initiative
            count.
          </p>
        </div>

        {/* Impact Content */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-8">
          {/* Statement Panel */}
          <div className="relative overflow-hidden rounded-4xl bg-indigo-800 p-8 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-40 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 size-48 rounded-full bg-indigo-700"
            />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <HandHeart className="size-6" strokeWidth={1.7} />
                </div>

                <h3 className="mt-7 font-(family-name:--font-jakarta) text-2xl font-bold leading-tight text-white sm:text-3xl">
                  We believe support can take many forms.
                </h3>

                <p className="mt-5 text-sm leading-7 text-indigo-100/75 sm:text-base sm:leading-8">
                  Sometimes it is a notebook given to a student. Sometimes it is
                  an afternoon spent together. And sometimes it is simply
                  showing up and saying, “we are here.”
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-sm font-medium text-indigo-100">
                  <Sparkles className="size-4" strokeWidth={1.6} />
                  <span>One initiative at a time.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Points */}
          <div className="divide-y divide-indigo-100 rounded-4xl border border-indigo-100 bg-white">
            {impactPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="group flex gap-5 p-6 sm:p-8">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800 transition-colors group-hover:bg-indigo-800 group-hover:text-white">
                    <Icon
                      className="size-5"
                      strokeWidth={1.8}
                      fill={item.number === '02' ? 'currentColor' : 'none'}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-(family-name:--font-jakarta) text-lg font-bold text-indigo-950">
                        {item.title}
                      </h3>

                      <span className="text-xs font-bold tracking-wider text-indigo-300">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 px-6 py-3.5 text-sm font-semibold text-indigo-900 transition-all hover:border-indigo-300 hover:bg-indigo-50"
          >
            <span>Learn More About Our Work</span>
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
