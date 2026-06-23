import Image from 'next/image';

export default function FAQHero() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto my-8 px-4">
      {/* Container: Stacked on mobile, side-by-side on desktop */}
      <div className="relative w-full bg-gradient-to-r from-[#00cbb0] to-[#6ae2d4] rounded-[24px] p-6 md:p-12 overflow-hidden min-h-[220px] flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="z-10 w-full md:w-3/5 text-center md:text-left mb-6 md:mb-0">
          <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wider mb-2 opacity-90">
            Petty Cash & Bill Payment
          </p>
          <h1 className="text-white text-[28px] md:text-5xl font-extrabold tracking-tight leading-tight">
            Frequently asked questions
          </h1>
        </div>

        {/* Mascot & Speech Bubble Container */}
        {/* On mobile: centered below text. On desktop: absolute right edge */}
        {/* Mascot & Speech Bubble Container */}
        <div className="relative flex-shrink-0 flex items-end justify-center z-20">
        
        {/* Speech Bubble: Now relative to this container */}
        <div className="absolute -top-14 md:-top-6 bg-white text-[#113B4A] font-bold text-[10px] md:text-xs px-4 py-2 rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] whitespace-nowrap">
            Need help? No worries!
            {/* Small downward pointer triangle */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45" />
        </div>

        {/* Mascot Image */}
        <Image
            src="/assets/deployed-assets/faq-professor-cat.png"
            alt="Minty Teacher Mascot"
            width={240}
            height={240}
            className="w-[140px] md:w-[240px] h-auto object-contain"
        />
        </div>
      </div>
    </section>
  );
}