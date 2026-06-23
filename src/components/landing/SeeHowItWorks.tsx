'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { landingContent } from '@/config/landing';

export default function SeeHowItWorksSection() {
  const { seeHowItWorks } = landingContent;

  return (
    <section className="bg-[#00CBB0] pt-20 pb-20 text-center flex flex-col items-center">
      <Container className="flex flex-col items-center mb-0">
        
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-6 tracking-tight">
          {seeHowItWorks.title}
        </h2>

        <Button
          className="bg-white text-[#113B4A] hover:bg-white/90 font-bold px-6 py-3 rounded-full text-[14px] shadow-sm transition-all duration-200 mb-12"
        >
          {seeHowItWorks.buttonText}
        </Button>

        <div 
          className="w-full max-w-[500px] aspect-[1.8/1] bg-white rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]" 
        />
      </Container>
    </section>
  );
}