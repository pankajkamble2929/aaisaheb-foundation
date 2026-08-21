import {
  Heart,
  HandHeart,
  ShieldCheck,
  UsersRound,
  Sparkles,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'We approach every child and family with kindness, patience and genuine care.',
  },
  {
    icon: UsersRound,
    title: 'Inclusion',
    description:
      'We want every child to have the opportunity to participate, connect and feel welcome.',
  },
  {
    icon: HandHeart,
    title: 'Community',
    description:
      'We believe good work becomes stronger when people come together and contribute.',
  },
  {
    icon: ShieldCheck,
    title: 'Respect',
    description:
      'Every child, family member, volunteer and supporter deserves to be treated with dignity.',
  },
];

export default function OurValues() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 size-72 -translate-y-1/2 rounded-full bg-indigo-50/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-20 size-64 rounded-full bg-indigo-50 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[10%] top-24">
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
              What We Stand For
            </p>

            <h2 className="mt-4 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
              The values behind our work.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            These are simple principles, but they matter in everything we do.
            From planning an event to working with children, families and
            supporters, we try to keep them at the heart of our approach.
          </p>
        </div>

        {/* Values */}
        <div className="mt-14 grid gap-x-8 gap-y-0 border-y border-indigo-100 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className={`relative py-8 sm:py-9 ${
                  index < values.length - 1
                    ? 'border-b border-indigo-100 md:nth-[2]:border-b-0 lg:border-b-0 lg:border-r'
                    : ''
                } ${index === 1 ? 'lg:border-r' : ''} ${
                  index === 2 ? 'lg:border-r' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800">
                    <Icon
                      className="size-5"
                      strokeWidth={1.8}
                      fill={
                        value.title === 'Compassion' ? 'currentColor' : 'none'
                      }
                    />
                  </div>

                  <span className="font-(family-name:--font-jakarta) text-xs font-bold tracking-[0.15em] text-indigo-200">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-(family-name:--font-jakarta) text-lg font-bold text-indigo-950">
                  {value.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Closing Note */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <Heart
            className="size-4 text-indigo-700"
            fill="currentColor"
            strokeWidth={1.8}
          />

          <span>We try to carry these values with us in every initiative.</span>
        </div>
      </div>
    </section>
  );
}
