import Image from 'next/image';
import { Images, Sparkles } from 'lucide-react';

const galleries = [
  {
    id: 'school-supplies-distribution',
    title: 'School Supplies Distribution Programme',
    images: [
      '/events/june-2026/school-supplies-01.jpg',
      '/events/june-2026/school-supplies-02.jpg',
      '/events/june-2026/school-supplies-03.jpg',
      '/events/june-2026/school-supplies-04.jpg',
      '/events/june-2026/school-supplies-05.jpg',
      '/events/june-2026/school-supplies-06.jpg',
      '/events/june-2026/school-supplies-07.jpg',
      '/events/june-2026/school-supplies-08.jpg',
      '/events/june-2026/school-supplies-09.jpg',
      '/events/june-2026/school-supplies-10.jpg',
      '/events/june-2026/school-supplies-11.jpg',
      '/events/june-2026/school-supplies-12.jpg',
      '/events/june-2026/school-supplies-13.jpg',
      '/events/june-2026/school-supplies-14.jpg',
      '/events/june-2026/school-supplies-15.jpg',
      '/events/june-2026/school-supplies-16.jpg',
      '/events/june-2026/school-supplies-17.jpg',
      '/events/june-2026/school-supplies-18.jpg',
      '/events/june-2026/school-supplies-19.jpg',
      '/events/june-2026/school-supplies-20.jpg',
      '/events/june-2026/school-supplies-21.jpg',
      '/events/june-2026/school-supplies-22.jpg',
      '/events/june-2026/school-supplies-23.jpg',
      '/events/june-2026/school-supplies-24.jpg',
    ],
  },
  {
    id: 'blood-donation-camp',
    title: 'Blood Donation Camp',
    images: [
      '/events/may-2026/blood-donation-01.jpg',
      '/events/may-2026/blood-donation-02.jpg',
      '/events/may-2026/blood-donation-03.jpg',
      '/events/may-2026/blood-donation-04.jpg',
    ],
  },
  {
    id: 'sanitary-pad-distribution-kashtakari-nagar',
    title: 'Sanitary Pad Distribution Initiative – Kashtakari Nagar',
    images: [
      '/events/mar-2026/sanitary-pad-kn-01.jpg',
      '/events/mar-2026/sanitary-pad-kn-02.jpg',
      '/events/mar-2026/sanitary-pad-kn-03.jpg',
      '/events/mar-2026/sanitary-pad-kn-04.jpg',
    ],
  },
  {
    id: 'sanitary-pad-distribution-diva',
    title: 'Sanitary Pad Distribution Initiative – Diva',
    images: [
      '/events/mar-2026/sanitary-pad-02.jpg',
      '/events/mar-2026/sanitary-pad-03.jpg',
      '/events/mar-2026/sanitary-pad-04.jpg',
      '/events/mar-2026/sanitary-pad-05.jpg',
      '/events/mar-2026/sanitary-pad-06.jpg',
      '/events/mar-2026/sanitary-pad-07.jpg',
      '/events/mar-2026/sanitary-pad-08.jpg',
      '/events/mar-2026/sanitary-pad-09.jpg',
      '/events/mar-2026/sanitary-pad-10.jpg',
      '/events/mar-2026/sanitary-pad-11.jpg',
      '/events/mar-2026/sanitary-pad-12.jpg',
      '/events/mar-2026/sanitary-pad-13.jpg',
    ],
  },
  {
    id: 'hind-di-chadar',
    title: 'Hind-Di-Chadar',
    images: [
      '/events/feb-2026/hind-di-chadar-01.jpg',
      '/events/feb-2026/hind-di-chadar-02.jpg',
      '/events/feb-2026/hind-di-chadar-03.jpg',
      '/events/feb-2026/hind-di-chadar-04.jpg',
    ],
  },
];

export default function EventGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/4 size-80 rounded-full bg-indigo-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-96 rounded-full bg-indigo-50/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute right-[10%] top-20 text-indigo-200"
      >
        <Sparkles className="size-7" strokeWidth={1.4} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="space-y-16 sm:space-y-20">
          {galleries.map((gallery) => (
            <div key={gallery.id} id={gallery.id} className="scroll-mt-28">
              {/* Event Title */}
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Images className="size-5" strokeWidth={1.8} />
                </div>

                <h2 className="font-(family-name:--font-jakarta) text-xl font-bold text-indigo-950 sm:text-2xl">
                  {gallery.title}
                </h2>
              </div>

              {/* Images */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {gallery.images.map((image, index) => (
                  <div
                    key={image}
                    className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-indigo-50"
                  >
                    <Image
                      src={image}
                      alt={`${gallery.title} - photo ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
