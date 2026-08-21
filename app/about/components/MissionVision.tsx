import { Eye, Heart, Sparkles, Target } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-indigo-50 py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 size-80 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-96 rounded-full bg-indigo-200/50 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[10%] top-20">
        <Sparkles className="size-7 text-indigo-300/70" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm">
            <Target className="size-4" strokeWidth={1.8} />
            <span>What Guides Us</span>
          </div>

          <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
            We know where we want to go.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our mission keeps us focused on what we can do today, while our
            vision reminds us of the kind of community we hope to help build.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Mission */}
          <article className="relative overflow-hidden rounded-4xl bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 size-32 rounded-full bg-indigo-50"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-800 text-white">
                  <Target className="size-7" strokeWidth={1.7} />
                </div>

                <span className="font-(family-name:--font-jakarta) text-sm font-bold tracking-[0.2em] text-indigo-200">
                  01
                </span>
              </div>

              <h3 className="mt-8 font-(family-name:--font-jakarta) text-2xl font-bold text-indigo-950 sm:text-3xl">
                Our Mission
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                To organise thoughtful events and social initiatives that give
                specially-abled children opportunities to participate, connect
                with others and enjoy meaningful experiences.
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-indigo-800">
                <Heart
                  className="size-4"
                  fill="currentColor"
                  strokeWidth={1.8}
                />
                <span>Focused on inclusion and participation</span>
              </div>
            </div>
          </article>

          {/* Vision */}
          <article className="relative overflow-hidden rounded-4xl bg-indigo-900 p-8 text-white shadow-sm sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 size-48 rounded-full bg-indigo-800"
            />

            <div
              aria-hidden="true"
              className="absolute right-8 top-8 size-20 rounded-full border border-white/10"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <Eye className="size-7 text-indigo-200" strokeWidth={1.7} />
                </div>

                <span className="font-(family-name:--font-jakarta) text-sm font-bold tracking-[0.2em] text-indigo-300">
                  02
                </span>
              </div>

              <h3 className="mt-8 font-(family-name:--font-jakarta) text-2xl font-bold sm:text-3xl">
                Our Vision
              </h3>

              <p className="mt-5 text-base leading-7 text-indigo-100/75 sm:text-lg sm:leading-8">
                To contribute towards a community where specially-abled children
                are welcomed, respected and given opportunities to take part in
                everyday social and educational experiences.
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-indigo-200">
                <Sparkles className="size-4" strokeWidth={1.7} />
                <span>A community where everyone feels included</span>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-200/70 bg-white/60 px-6 py-6 text-center sm:flex-row sm:text-left">
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            We are still growing, learning and finding new ways to contribute.
            What matters to us is continuing to show up with sincerity.
          </p>

          <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-indigo-800">
            <Heart className="size-4" fill="currentColor" strokeWidth={1.8} />
            <span>One step at a time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
