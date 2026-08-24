import {
  BookOpen,
  HeartHandshake,
  HandHeart,
  UsersRound,
  Sparkles,
} from 'lucide-react';

const supportAreas = [
  {
    icon: BookOpen,
    title: 'Education Support',
    description:
      'Help us organise initiatives that provide useful educational materials and encouragement to children who need additional support.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Initiatives',
    description:
      'Your support can help us continue participating in practical community activities where a helping hand can make a difference.',
  },
  {
    icon: UsersRound,
    title: 'People Together',
    description:
      'Community work becomes stronger when individuals, families and local groups come together with a shared intention to help.',
  },
  {
    icon: HandHeart,
    title: 'Every Contribution Counts',
    description:
      'There is no contribution that is too small when it helps us continue creating opportunities to serve the community.',
  },
];

export default function WhySupportMatters() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 size-96 rounded-full bg-indigo-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-80 rounded-full bg-indigo-100/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute right-[12%] top-20 hidden lg:block"
      >
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm ring-1 ring-indigo-100">
            <HandHeart className="size-4" strokeWidth={1.8} />

            <span>Why Your Support Matters?</span>
          </div>

          <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
            Helping us continue the work, one initiative at a time.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our work is built around simple, practical efforts that bring people
            together. Support from well-wishers helps us continue planning and
            participating in initiatives that serve the community.
          </p>
        </div>

        {/* Support Areas */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-4xl border border-indigo-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md sm:p-7"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-800 transition-colors duration-300 group-hover:bg-indigo-800 group-hover:text-white">
                  <Icon className="size-6" strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 font-(family-name:--font-jakarta) text-lg font-bold text-indigo-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex items-center gap-3 rounded-3xl border border-indigo-100 bg-white px-5 py-4 sm:px-6">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
            <HeartHandshake className="size-5" strokeWidth={1.8} />
          </div>

          <p className="text-sm leading-6 text-slate-600">
            Thank you for believing in the value of community and choosing to
            support our efforts.
          </p>
        </div>
      </div>
    </section>
  );
}
