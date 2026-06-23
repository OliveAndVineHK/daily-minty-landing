import Image from 'next/image';

export default function ContactForm() {
  return (
    <section className="text-center px-4 mb-16">
      <div className="inline-flex items-center gap-2 bg-[#E5F7F3] text-[#00CBB0] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
        <span className="w-2 h-2 rounded-full bg-[#00CBB0]" />
        We're here to help
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#113B4A] mb-6">Talk to Minty.</h1>
      <p className="max-w-[500px] mx-auto text-gray-500 leading-relaxed">
        Real humans, fast answers. Whether you've hit a snag, want a hand setting up, or just have a question about your numbers — drop us a line.
      </p>
      <div className="mt-8 flex justify-center">
        <Image src="/assets/deployed-assets/faq-professor-cat.png" alt="Minty at desk" width={280} height={200} />
      </div>
    </section>
  );
}