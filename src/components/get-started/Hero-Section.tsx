'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getStartedContent } from '@/config/get-started';


export default function HeroSection() {
  const { hero, benefits } = getStartedContent;

  return (
    <div className="min-h-screen flex flex-col bg-white">
  <main className="flex-grow pt-6 md:pt-10 pb-24 font-sans">
    <Container>
      
      {/* CHANGED: Changed mb-20 to mb-10 on mobile (md:mb-20) 
        CHANGED: Changed overflow-visible to overflow-hidden on mobile (lg:overflow-visible)
      */}
      <section className="relative bg-[#00CBB0] rounded-[32px] px-6 py-10 md:p-16 text-white overflow-hidden lg:overflow-visible mb-10 md:mb-20 shadow-sm">
        
        {/* NEW WRAPPER GRID: Seamlessly stacks on mobile, splits into two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 max-w-[550px]">
            <h1 className="text-[32px] md:text-[48px] font-extrabold tracking-tight leading-tight mb-4 flex items-center flex-wrap gap-x-3">
              {hero.title}
              <Image 
                src="/assets/minty-logo.png" 
                alt="Minty" 
                width={100} 
                height={60} 
                className="h-[40px] md:h-[60px] w-auto inline-block brightness-0 invert" 
              />
            </h1>

            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-[480px]">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button className="bg-white text-[#113B4A] hover:bg-white/90 font-bold px-6 py-3 rounded-full text-[14px] shadow-sm transition-all duration-200">
                {hero.primaryBtn}
              </Button>
              <Button className="bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10 font-bold px-6 py-2.5 rounded-full text-[14px] transition-all duration-200">
                {hero.secondaryBtn}
              </Button>
            </div>
          </div>

          {/* Mascot Column 
            CHANGED: Uses normal block flow on mobile/tablet (centered below the text), 
            and safely transitions to the absolute floating placement ONLY on large desktop screens.
          */}
            <div className="lg:col-span-5 flex justify-center md:justify-end md:pr-8 lg:pr-0 lg:absolute lg:right-10 lg:bottom-[-50px] w-full max-w-[220px] md:max-w-[260px] lg:w-[340px] mx-auto lg:mx-0 pointer-events-none z-20">
                <Image
                    src={hero.mascotSrc}
                    alt="Minty Mascot"
                    width={340}
                    height={340}
                    priority
                    className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
                />
            </div>

        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="text-center">
        <h2 className="text-[#113B4A] text-[24px] md:text-[28px] font-extrabold tracking-tight mb-10">
          {benefits.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl p-8 text-left border border-gray-100 shadow-[0_8px_24px_rgba(17,59,74,0.04)] hover:shadow-[0_12px_32px_rgba(17,59,74,0.06)] transition-shadow duration-200 flex flex-col gap-4"
            >
              <div className="w-10 h-8 bg-[#E6FAF7] text-[#00CBB0] font-bold text-xs flex items-center justify-center rounded-md">
                {item.id}
              </div>
              <p className="text-[#113B4A] font-bold text-[15px] leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      
    </Container>
  </main>
</div>
  );
}