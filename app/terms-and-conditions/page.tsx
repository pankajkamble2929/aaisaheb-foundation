import Link from 'next/link';
import {
  ArrowRight,
  FileCheck,
  Info,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | AaiSaheb Foundation',
  description:
    'Read the Terms and Conditions governing the use of the AaiSaheb Foundation website.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing and using the AaiSaheb Foundation website, you agree to follow these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the website.',
      'These terms apply to all visitors and users of the website.',
    ],
  },
  {
    title: '2. About the Website',
    content: [
      'This website provides information about AaiSaheb Foundation, its social initiatives, events, activities and community work.',
      'The information published on the website is intended for general informational purposes and may be updated as our activities and initiatives develop.',
    ],
  },
  {
    title: '3. Use of Website Content',
    content: [
      'You may access and use the website for lawful and personal informational purposes.',
      'You must not knowingly use the website in a way that may damage, disrupt or interfere with the website, its services or its availability to other visitors.',
    ],
  },
  {
    title: '4. Intellectual Property',
    content: [
      'Unless otherwise stated, the content published on this website, including text, graphics, photographs, logos, design elements and other materials, belongs to or is used by AaiSaheb Foundation with appropriate permission.',
      'You should not reproduce, modify, distribute or commercially use website content without prior written permission from the Foundation or the relevant rights holder.',
    ],
  },
  {
    title: '5. Event Information',
    content: [
      'We make reasonable efforts to present accurate information about our events and activities. Dates, locations, descriptions, photographs and other event details may change or be updated when required.',
      'Photographs displayed on the website may show participants, volunteers, guests or members of the community attending Foundation activities.',
    ],
  },
  {
    title: '6. External Links',
    content: [
      'The website may contain links to third-party websites or services for additional information or convenience.',
      'AaiSaheb Foundation does not control these external websites and is not responsible for their content, availability, security or privacy practices. Visiting an external website is at your own discretion.',
    ],
  },
  {
    title: '7. Accuracy of Information',
    content: [
      'We aim to keep the information on this website useful and up to date. However, we do not guarantee that every piece of information will always be complete, current or free from errors.',
      'Information may be corrected, changed or removed without prior notice.',
    ],
  },
  {
    title: '8. Website Availability',
    content: [
      'We may update, maintain, suspend or temporarily discontinue parts of the website when necessary.',
      'We cannot guarantee that the website will always be available without interruption or that it will be completely free from technical issues.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    content: [
      'To the extent permitted by applicable law, AaiSaheb Foundation will not be responsible for losses or damages arising from the use of, or inability to use, this website or reliance on information published on it.',
      'Visitors are responsible for using information from the website appropriately and making their own decisions based on their circumstances.',
    ],
  },
  {
    title: '10. Privacy',
    content: [
      'Information submitted through the website is handled in accordance with our Privacy Policy.',
      'By using the website, you acknowledge that you have had the opportunity to review our Privacy Policy.',
    ],
  },
  {
    title: '11. Changes to These Terms',
    content: [
      'AaiSaheb Foundation may update these Terms and Conditions when necessary. Changes will be published on this page and will apply from the date they are posted.',
      'We encourage visitors to review this page periodically for any updates.',
    ],
  },
];

export default function TermsAndConditionsPage() {
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
            <FileCheck className="size-4" strokeWidth={1.8} />
            <span>Terms & Conditions</span>
          </div>

          <h1 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
            Terms for using our website.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            These terms explain the basic guidelines for accessing and using the
            AaiSaheb Foundation website.
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
          {/* Introduction Card */}
          <div className="rounded-4xl border border-indigo-100 bg-indigo-50/60 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                <Info className="size-5" strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950">
                  Please read before using the website
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Our website is created to share information about the work of
                  AaiSaheb Foundation and its community initiatives. By
                  continuing to use the website, you agree to use it responsibly
                  and in accordance with these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* Responsible Use */}
            <section>
              <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                12. Responsible Use
              </h2>

              <ul className="mt-5 space-y-3">
                {[
                  'Use the website only for lawful purposes.',
                  'Do not attempt to gain unauthorised access to website systems or data.',
                  'Do not upload or transmit harmful, misleading or malicious material through the website.',
                  'Do not use information or website content in a way that infringes the rights of others.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                  >
                    <ShieldCheck
                      className="mt-1 size-5 shrink-0 text-indigo-700"
                      strokeWidth={1.8}
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section className="rounded-4xl bg-indigo-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                  <Mail className="size-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                    Questions about these terms?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    If you have questions about these Terms and Conditions,
                    please get in touch with AaiSaheb Foundation.
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
          <div className="mt-12 border-t border-slate-100 pt-6 text-center">
            <p className="text-xs leading-6 text-slate-500">
              These Terms and Conditions are provided for general website use
              and should be reviewed and updated according to the
              Foundation&apos;s actual activities and applicable legal
              requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
