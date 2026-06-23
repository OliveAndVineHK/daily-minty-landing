import Link from 'next/link';

export default function PricingFAQSupport() {
  return (
    <section className="px-4 pb-20">
      <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-[0_4px_24px_rgba(17,59,74,0.01)] text-center max-w-[650px] mx-auto">
        <h3 className="text-[#113B4A] text-[24px] md:text-[28px] font-extrabold tracking-tight mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-[420px] mx-auto leading-relaxed">
          {"Check our help centre or reach out — we'll match you with the right plan."}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <Link 
            href="/faq"
            className="bg-[#00CBB0] hover:bg-[#00B59D] text-white font-bold px-8 py-3 rounded-full text-[13px] shadow-sm transition-all duration-200"
          >
            Visit FAQ
          </Link>
          <Link 
            href="/contact"
            className="bg-[#113B4A] hover:bg-[#1A4B5D] text-white font-bold px-8 py-3 rounded-full text-[13px] shadow-sm transition-all duration-200"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}