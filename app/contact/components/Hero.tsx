import { ArrowDown, Heart, Mail, MessageCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo-50">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-28 -top-28 -z-10 size-80 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-indigo-200/50 blur-3xl"
      />

      <div aria-hidden="true" className="absolute right-[12%] top-20">
        <Sparkles className="size-8 text-indigo-300/60" strokeWidth={1.4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-20 left-[9%] size-7 rounded-full border border-indigo-300/50"
      />

      <div aria-hidden="true" className="absolute left-[18%] top-32">
        <Heart
          className="size-5 text-indigo-300/50"
          fill="currentColor"
          strokeWidth={1.5}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm backdrop-blur-sm">
              <MessageCircle
                className="size-4 text-indigo-700"
                strokeWidth={1.8}
              />
              <span>Get in Touch</span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-(family-name:--font-jakarta) text-4xl font-extrabold leading-[1.1] tracking-tight text-indigo-950 sm:text-5xl">
              We would be happy
              <span className="mt-2 block text-indigo-800">
                to hear from you.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Have a question about our foundation, want to know about an
              upcoming event or simply want to connect with us? Reach out.
              We&apos;d be glad to hear what you have to say.
            </p>

            {/* Contact Highlights */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white text-indigo-800 shadow-sm">
                  <Mail className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">Email us</p>
                  <p className="mt-0.5 text-sm font-semibold text-indigo-950">
                    We&apos;re here to listen
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-indigo-200 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white text-indigo-800 shadow-sm">
                  <Heart
                    className="size-5"
                    fill="currentColor"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Our approach
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-indigo-950">
                    Open and welcoming
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Message Card */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 size-20 rounded-full border border-indigo-300/50"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 size-16 rounded-full bg-indigo-200/50"
            />

            <div className="relative overflow-hidden rounded-4xl bg-indigo-900 p-8 text-white shadow-xl shadow-indigo-950/10 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 size-40 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 size-48 rounded-full bg-indigo-800/50"
              />

              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <Heart
                    className="size-7 text-white"
                    fill="currentColor"
                    strokeWidth={1.7}
                  />
                </div>

                <p className="mt-8 font-(family-name:--font-jakarta) text-2xl font-bold leading-tight sm:text-3xl">
                  Every conversation starts somewhere.
                </p>

                <p className="mt-5 text-sm leading-7 text-indigo-100/75 sm:text-base sm:leading-8">
                  Whether you are a parent, volunteer, supporter or simply
                  someone who wants to learn more about what we do, you are
                  welcome to reach out.
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                      <MessageCircle
                        className="size-5 text-indigo-200"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Let&apos;s connect
                      </p>

                      <p className="mt-0.5 text-xs text-indigo-200/60">
                        Navi Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-indigo-200">
                  <ArrowDown className="size-4" strokeWidth={1.8} />
                  <span>Contact details below</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
