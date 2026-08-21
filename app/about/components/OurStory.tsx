import { ArrowDownRight, Heart, MapPin, Sparkles } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-24 size-72 rounded-full bg-indigo-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-24 size-64 rounded-full bg-indigo-50/70 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[12%] top-20">
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left */}
          <div>
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-800">
                <Heart
                  className="size-4"
                  fill="currentColor"
                  strokeWidth={1.8}
                />
                <span>Our Story</span>
              </div>

              <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
                It started with a simple wish to help.
              </h2>

              <div className="mt-7 flex items-center gap-3 text-sm font-medium text-slate-500">
                <MapPin className="size-4 text-indigo-700" strokeWidth={1.8} />
                <span>Navi Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="max-w-2xl">
            <p className="text-xl font-medium leading-8 text-indigo-950 sm:text-2xl sm:leading-9">
              AaiSaheb Foundation grew from the belief that meaningful change
              does not always have to begin with something big.
            </p>

            <p className="mt-7 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Sometimes, it can begin with giving a child the things they need
              for school. Sometimes, it can be a day of activities, laughter and
              celebration. And sometimes, it can simply mean being there.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We organise events and social initiatives for specially-abled
              children in and around Navi Mumbai. Through these efforts, we want
              to create opportunities for children to participate, enjoy
              themselves and feel part of the wider community.
            </p>

            {/* Highlight */}
            <div className="mt-10 border-l-2 border-indigo-700 pl-6">
              <p className="font-(family-name:--font-jakarta) text-lg font-semibold leading-7 text-indigo-950">
                “For us, the value of an initiative is often found in the
                smiles, conversations and connections it creates.”
              </p>
            </div>

            {/* Story Marker */}
            <div className="mt-12 flex items-center gap-4 rounded-2xl bg-indigo-50 p-5 sm:p-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-800 text-white">
                <ArrowDownRight className="size-5" strokeWidth={1.8} />
              </div>

              <div>
                <p className="font-(family-name:--font-jakarta) text-sm font-bold text-indigo-950">
                  Growing one initiative at a time
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  We are taking things one event, one interaction and one
                  helping hand at a time.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="mt-10 flex items-center gap-2 text-sm font-medium text-indigo-800">
              <Heart className="size-4" fill="currentColor" strokeWidth={1.8} />
              <span>With care. With people. Together.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
