import Image from 'next/image';
import Link from 'next/link';

export default function FAQSupportSection() {
  return (
    <section className="bg-[#FAF6F0] py-16 px-4">
      <div className="bg-white rounded-[24px] max-w-[1000px] mx-auto p-8 md:p-12 shadow-[0_4px_24px_rgba(17,59,74,0.02)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        
        <div className="flex-1 text-center md:text-left max-w-[520px] z-10">
          <h2 className="text-[#113B4A] text-2xl md:text-[28px] font-extrabold tracking-tight mb-3">
            Still need a hand?
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
            Can&apos;t find the answer here? The Minty team replies within one business day, 
            and we&apos;re real people who actually run the numbers.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <Link 
              href="/contact"
              className="bg-[#00CBB0] hover:bg-[#00b59d] text-white font-bold text-xs md:text-sm px-6 py-3 rounded-full shadow-md transition-all duration-150"
            >
              Contact Support
            </Link>
            <Link 
              href="/pricing"
              className="bg-white hover:bg-gray-50 text-[#113B4A] border border-gray-200 font-bold text-xs md:text-sm px-6 py-3 rounded-full transition-all duration-150"
            >
              See pricing plans
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 z-10 w-[160px] md:w-[220px]">
          <Image
            src="/assets/deployed-assets/minty-mascot-chat.png"
            alt="Minty Waving Mascot"
            width={220}
            height={220}
            className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
          />
        </div>

      </div>
    </section>
  );
}