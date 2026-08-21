import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Heart,
  HandHeart,
  Mail,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

const connectionOptions = [
  {
    icon: CalendarDays,
    title: 'Ask About Our Events',
    description:
      'Want to know about an upcoming event or activity? Get in touch and we will be happy to share the details.',
    href: '/events/',
    linkText: 'View Our Events',
  },
  {
    icon: HandHeart,
    title: 'Support Our Work',
    description:
      'If you would like to support one of our initiatives or explore ways to contribute, we would love to hear from you.',
    href: '/contact/',
    linkText: 'Talk to Us',
  },
  {
    icon: MessageCircle,
    title: 'Simply Say Hello',
    description:
      'You do not always need a specific reason to reach out. If you would like to know more about AaiSaheb Foundation, connect with us.',
    href: 'mailto:info@aaisahebfoundation.org',
    linkText: 'Send an Email',
  },
];

export default function ConnectWithUs() {
  return (
    <section className="relative overflow-hidden bg-indigo-50 py-20 sm:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 size-72 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 size-80 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div aria-hidden="true" className="absolute left-[12%] top-20">
        <Sparkles className="size-7 text-indigo-300/70" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm">
            <Heart className="size-4" fill="currentColor" strokeWidth={1.8} />
            <span>Let&apos;s Connect</span>
          </div>

          <h2 className="mt-5 font-(family-name:--font-jakarta) text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
            There are many ways to start a conversation.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Whether you are curious about our work, interested in an event or
            looking for a way to contribute, feel free to reach out.
          </p>
        </div>

        {/* Connection Options */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {connectionOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="group flex flex-col rounded-[1.75rem] border border-indigo-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-800 transition-colors group-hover:bg-indigo-800 group-hover:text-white">
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950">
                  {option.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {option.description}
                </p>

                <Link
                  href={option.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-800 transition-colors hover:text-indigo-950"
                >
                  <span>{option.linkText}</span>
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-sm text-slate-500">
          <Mail className="size-4 shrink-0 text-indigo-700" strokeWidth={1.8} />
          <span>For general enquiries, please reach out to us by email.</span>
        </div>
      </div>
    </section>
  );
}
