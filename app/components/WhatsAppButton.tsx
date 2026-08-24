import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918879161958"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AaiSaheb Foundation on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] p-2.5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <Image
        src="/whatsapp.webp"
        alt="WhatsApp"
        width={56}
        height={56}
        className="size-full object-contain"
      />
    </a>
  );
}
