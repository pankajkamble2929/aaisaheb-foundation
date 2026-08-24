import Image from 'next/image';
import {
  BadgeCheck,
  Building2,
  Copy,
  Heart,
  Landmark,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

export default function DonationDetails() {
  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 size-96 rounded-full bg-indigo-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 size-80 rounded-full bg-indigo-50/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-[8%] top-24 hidden lg:block"
      >
        <Heart
          className="size-6 text-indigo-100"
          fill="currentColor"
          strokeWidth={1.5}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800">
            <Landmark className="size-4" strokeWidth={1.8} />
            <span>Make a Contribution</span>
          </div>

          <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
            A simple contribution can support meaningful work.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            If you would like to support AaiSaheb Foundation, you can make a
            contribution directly through the bank details provided below.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Cheque Image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-indigo-50/70" />

            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src="/donation-cheque.jpg"
                  alt="AaiSaheb Foundation donation bank details"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-md sm:-right-5">
              <div className="flex size-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-800">
                <BadgeCheck className="size-5" strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-xs font-semibold text-indigo-950">
                  Official Details
                </p>

                <p className="text-[11px] text-slate-500">
                  Please verify before transferring
                </p>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div>
            <div className="rounded-4xl border border-indigo-100 bg-[#f8f9ff] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-800 text-white shadow-sm">
                  <Building2 className="size-6" strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                    Bank Transfer
                  </p>

                  <h3 className="mt-1 font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950">
                    AaiSaheb Foundation
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="mt-7 divide-y divide-indigo-100">
                <div className="py-4 first:pt-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Account Name
                  </p>

                  <p className="mt-1 text-base font-semibold text-indigo-950">
                    AAISAHEB FOUNDATION
                  </p>
                </div>

                <div className="py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Bank
                  </p>

                  <p className="mt-1 text-base font-semibold text-indigo-950">
                    Kotak Mahindra Bank Ltd
                  </p>
                </div>

                <div className="py-4">
                  <div className="flex items-start gap-2">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-indigo-700"
                      strokeWidth={1.8}
                    />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Branch
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Palm Beach Galleria Mall, Sector 19D,
                        <br />
                        Mumbai – 400705, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-4 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    IFSC Code
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4 rounded-xl border border-indigo-100 bg-white px-4 py-3">
                    <span className="font-mono text-base font-bold tracking-wide text-indigo-950">
                      KKBK0001244
                    </span>

                    <Copy
                      className="size-4 text-indigo-500"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-5 flex gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <ShieldCheck
                className="mt-0.5 size-5 shrink-0 text-indigo-700"
                strokeWidth={1.8}
              />

              <div>
                <h4 className="text-sm font-bold text-indigo-950">
                  Before making a transfer
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Please carefully verify the account name, bank details and
                  IFSC code before completing your contribution.
                </p>
              </div>
            </div>

            {/* Closing Note */}
            <div className="mt-6 flex items-start gap-3">
              <Heart
                className="mt-1 size-5 shrink-0 text-indigo-700"
                fill="currentColor"
                strokeWidth={1.7}
              />

              <p className="text-sm leading-6 text-slate-600">
                Every contribution, big or small, helps us continue working on
                community-focused initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
