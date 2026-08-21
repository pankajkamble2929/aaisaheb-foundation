import Link from 'next/link';
import {
  AlertCircle,
  ArrowRight,
  FileWarning,
  Info,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'Disclaimer | AaiSaheb Foundation',
  description:
    'Read the disclaimer for the AaiSaheb Foundation website and understand the nature and use of information published on this website.',
};

const points = [
  {
    title: 'General Information',
    content:
      'The information published on this website is provided for general informational purposes. It is intended to help visitors understand AaiSaheb Foundation, our activities, events and community initiatives.',
  },
  {
    title: 'Accuracy of Information',
    content:
      'We make reasonable efforts to keep the information on our website accurate and useful. However, information may change over time, and we do not guarantee that every detail will always be complete, current or free from errors.',
  },
  {
    title: 'Event Information',
    content:
      'Event dates, locations, descriptions, photographs and other details may be updated, changed or corrected when necessary. Photographs are shared to document activities and may include participants, volunteers, guests and members of the community.',
  },
  {
    title: 'Photographs and Media',
    content:
      'Images displayed on this website are intended to document Foundation activities and events. If you have a genuine concern regarding a photograph or other media published on the website, please contact us so that we can review the matter.',
  },
  {
    title: 'External Websites',
    content:
      'Our website may contain links to third-party websites for additional information or convenience. AaiSaheb Foundation does not control or endorse every external website and is not responsible for its content, availability, security or privacy practices.',
  },
  {
    title: 'No Professional Advice',
    content:
      'The content on this website should not be treated as professional, legal, medical, financial or other specialised advice. Visitors should seek appropriate professional guidance whenever such advice is required.',
  },
  {
    title: 'Website Availability',
    content:
      'We may update, maintain, suspend or modify the website or any part of it from time to time. We do not guarantee uninterrupted access or that the website will always be free from technical problems.',
  },
  {
    title: 'Limitation of Responsibility',
    content:
      'To the extent permitted by applicable law, AaiSaheb Foundation shall not be responsible for losses or damages arising from reliance on information published on this website or from the use or inability to use the website.',
  },
];

export default function DisclaimerPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-indigo-50 py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-10 size-64 rounded-full bg-white/70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 size-72 rounded-full bg-indigo-100 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute right-[12%] top-12 text-indigo-200"
        >
          <Sparkles className="size-8" strokeWidth={1.4} />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm">
            <FileWarning className="size-4" strokeWidth={1.8} />
            <span>Disclaimer</span>
          </div>

          <h1 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
            A note about the information on our website.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Please read this disclaimer to understand how information,
            photographs and other content on the AaiSaheb Foundation website
            should be used.
          </p>

          <p className="mt-5 text-sm font-medium text-indigo-700">
            Last updated: August, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-32 top-1/3 size-80 rounded-full bg-indigo-50/70 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="rounded-4xl border border-indigo-100 bg-indigo-50/60 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                <Info className="size-5" strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                  Please keep this in mind
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  AaiSaheb Foundation shares information about its work and
                  community activities through this website. While we try to
                  present information carefully, some details may change as our
                  activities continue.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Points */}
          <div className="mt-12 space-y-10">
            {points.map((point, index) => (
              <section key={point.title}>
                <div className="flex items-start gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-800">
                    {index + 1}
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                      {point.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {point.content}
                    </p>
                  </div>
                </div>
              </section>
            ))}

            {/* Important Notice */}
            <section className="rounded-4xl border border-indigo-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <AlertCircle className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                    Important Notice
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    By using this website, you acknowledge that information
                    available here is provided in good faith for general
                    informational purposes. You should verify important
                    information directly with AaiSaheb Foundation before relying
                    on it for any specific purpose.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-4xl bg-indigo-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                  <Mail className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                    Have a question about our website?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    If you believe any information, photograph or other content
                    requires clarification, please contact AaiSaheb Foundation
                    and we will review your concern.
                  </p>

                  <Link
                    href="/contact/"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-900"
                  >
                    Contact Us
                    <ArrowRight className="size-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 flex items-start justify-center gap-2 border-t border-slate-100 pt-6 text-center">
            <ShieldCheck
              className="mt-0.5 size-4 shrink-0 text-indigo-700"
              strokeWidth={1.8}
            />

            <p className="text-xs leading-6 text-slate-500">
              This disclaimer may be updated from time to time to reflect
              changes to our website, activities or applicable requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
