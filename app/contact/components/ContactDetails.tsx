import {
  Clock3,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

export default function ContactDetails() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/4 size-80 rounded-full bg-indigo-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 size-64 rounded-full bg-indigo-50/70 blur-3xl"
      />

      <div aria-hidden="true" className="absolute left-[8%] top-20">
        <Sparkles className="size-7 text-indigo-200" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contact Information */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800">
              <MessageCircle className="size-4" strokeWidth={1.8} />
              <span>Contact Information</span>
            </div>

            <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl">
              Let&apos;s stay connected.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We are based in Navi Mumbai and welcome conversations with
              families, volunteers, supporters and anyone who would like to know
              more about our work.
            </p>

            {/* Details */}
            <div className="mt-9 space-y-3">
              {/* Location */}
              <div className="flex gap-4 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800">
                  <MapPin className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                    Location
                  </p>

                  <p className="mt-1 font-(family-name:--font-jakarta) text-base font-bold text-indigo-950">
                    Kharghar, Navi Mumbai
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Maharashtra – 410210, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800">
                  <Mail className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                    Email
                  </p>

                  <p className="mt-1 font-(family-name:--font-jakarta) text-base font-bold text-indigo-950">
                    info@aaisahebfoundation.org
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    We&apos;ll get back to you as soon as we can.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800">
                  <Clock3 className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                    Availability
                  </p>

                  <p className="mt-1 font-(family-name:--font-jakarta) text-base font-bold text-indigo-950">
                    By prior communication
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Please contact us before planning a visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Note */}
            <div className="mt-6 flex gap-3 rounded-2xl bg-indigo-50 p-5">
              <Heart
                className="mt-0.5 size-5 shrink-0 text-indigo-700"
                fill="currentColor"
                strokeWidth={1.8}
              />

              <p className="text-sm leading-6 text-slate-600">
                For privacy and safety, we do not publish our exact office or
                meeting address online.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-105 overflow-hidden rounded-4xl border border-indigo-100 bg-indigo-50 shadow-sm lg:min-h-155">
            {/* Google Maps Embed */}
            <iframe
              title="AaiSaheb Foundation location in Kharghar, Navi Mumbai"
              src="https://www.google.com/maps?q=Kharghar,Navi+Mumbai,410210&output=embed"
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Label */}
            <div className="pointer-events-none absolute right-5 top-5 max-w-70 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-800 text-white">
                  <MapPin className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-(family-name:--font-jakarta) text-sm font-bold text-indigo-950">
                    AaiSaheb Foundation
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Kharghar, Navi Mumbai
                    <br />
                    Maharashtra – 410210
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="pointer-events-none absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <Sparkles
                  className="size-5 shrink-0 text-indigo-700"
                  strokeWidth={1.7}
                />

                <p className="text-xs leading-5 text-slate-600">
                  The map shows the general Kharghar area rather than an exact
                  office or meeting address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
