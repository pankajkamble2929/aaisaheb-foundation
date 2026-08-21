import Link from 'next/link';
import {
  ArrowLeft,
  FileText,
  Info,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | AaiSaheb Foundation',
  description:
    'Read the Privacy Policy of AaiSaheb Foundation and learn how we handle information shared through our website.',
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="size-4" strokeWidth={1.8} />
            <span>Privacy Policy</span>
          </div>

          <h1 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
            Your privacy matters to us.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            This Privacy Policy explains how AaiSaheb Foundation handles
            information shared through this website.
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
          <div className="space-y-10">
            {/* Introduction */}
            <section>
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Info className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                    1. Introduction
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    AaiSaheb Foundation respects your privacy and is committed
                    to handling information shared with us responsibly. This
                    Privacy Policy applies to information collected through our
                    website and explains how such information may be used,
                    stored and protected.
                  </p>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <FileText className="size-5" strokeWidth={1.8} />
                </div>

                <div className="flex-1">
                  <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                    2. Information We May Collect
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    Depending on how you interact with our website, we may
                    receive information such as:
                  </p>

                  <ul className="mt-4 space-y-3">
                    {[
                      'Your name and contact details when you voluntarily share them with us.',
                      'Information included in messages or enquiries sent through the website.',
                      'Basic technical information such as browser type, device information and website usage data.',
                      'Information you voluntarily provide when communicating with the Foundation regarding our activities or initiatives.',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                      >
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-indigo-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                3. How We Use Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Information shared with us may be used to respond to enquiries,
                communicate with you, improve our website and understand how
                visitors use our online services.
              </p>

              <ul className="mt-4 space-y-3">
                {[
                  'Responding to questions, enquiries or requests.',
                  'Communicating information related to AaiSaheb Foundation and its activities.',
                  'Improving the website, its content and user experience.',
                  'Maintaining website security and preventing misuse.',
                  'Meeting applicable legal or administrative requirements.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                  >
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-indigo-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                4. Cookies and Website Technologies
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Our website may use cookies or similar technologies to support
                website functionality, understand website usage and improve the
                visitor experience. You can manage cookie preferences through
                your browser settings.
              </p>
            </section>

            {/* Third Party */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                5. Third-Party Services
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Some website features may rely on third-party services, such as
                hosting, analytics, maps or other technical services. These
                providers may process information according to their own privacy
                policies and applicable terms.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                6. Information Security
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                We take reasonable measures to protect information shared with
                us from unauthorised access, misuse, alteration or disclosure.
                However, no method of transmitting or storing information online
                can be guaranteed to be completely secure.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                7. Sharing of Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                We do not intend to sell or rent personal information to third
                parties. Information may be shared where reasonably necessary to
                provide a requested service, operate the website, protect our
                rights or comply with applicable law.
              </p>
            </section>

            {/* External Links */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                8. External Links
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Our website may contain links to external websites or services.
                AaiSaheb Foundation is not responsible for the privacy
                practices, content or security of websites that are outside our
                control. We encourage visitors to review the privacy policies of
                external websites they choose to visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                9. Children&apos;s Privacy
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Our website is intended to provide information about the
                Foundation and its activities. We do not knowingly seek to
                collect unnecessary personal information from children through
                the website.
              </p>
            </section>

            {/* Policy Changes */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                10. Changes to This Privacy Policy
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                We may update this Privacy Policy from time to time to reflect
                changes to our website, practices or applicable requirements.
                Any updated version will be published on this page along with
                the revised date.
              </p>
            </section>

            {/* Contact */}
            <section className="rounded-4xl bg-indigo-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                  <Mail className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                    11. Contact Us
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    If you have any questions about this Privacy Policy or how
                    information is handled, you can get in touch with AaiSaheb
                    Foundation.
                  </p>

                  <Link
                    href="/contact/"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-900"
                  >
                    Contact AaiSaheb Foundation
                    <ArrowLeft className="size-4 rotate-180" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 border-t border-slate-100 pt-6 text-center">
            <p className="text-xs leading-6 text-slate-500">
              This Privacy Policy is provided for general website use and should
              be reviewed and updated according to the Foundation&apos;s actual
              data practices and applicable legal requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
