import Image from 'next/image';
import Container from '@/components/ui/Container';
import { landingContent } from '@/config/landing';
import FadeContent from '@/animations/landing/fadeanim';

export default function HowItWorksSection() {
  const { how } = landingContent;

  return (
    <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>
      <section id="how" className="bg-white pt-24 pb-20 text-center" aria-labelledby="how-title">
        <Container>
          {/* Header Section */}
          <h2
            id="how-title"
            className="text-[clamp(32px,3.8vw,48px)] font-bold mb-3.5 text-ink tracking-tight"
          >
            {how.title}
          </h2>
          <p className="max-w-[580px] mx-auto mb-14 text-ink-muted text-[16px]">
            {how.subtitle}
          </p>

          {/* Asymmetric Bento Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(220px,auto)] items-stretch">
            
            {/* CARD 1: Left Vertical Card */}
            {how.steps[0] && (
              <article className="md:row-span-2 bg-white border border-line/80 rounded-[24px] p-8 text-center shadow-minty-sm flex flex-col items-center justify-between">
                <div className="w-full aspect-[4/3] flex items-center justify-center my-auto">
                  <Image
                    src={how.steps[0].image}
                    alt={how.steps[0].alt}
                    width={240}
                    height={200}
                    className="w-full h-auto max-h-[220px] object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-3 mt-4">
                  <span className="w-9 h-9 rounded-full bg-mint/30 text-teal-deep inline-flex items-center justify-center font-bold text-base">
                    1
                  </span>
                  <h3 className="text-[20px] font-bold text-ink">{how.steps[0].title}</h3>
                  <p className="text-[14.5px] text-ink-muted leading-relaxed max-w-[260px]">
                    {how.steps[0].body}
                  </p>
                </div>
              </article>
            )}

            {/* CARD 2: Middle-Top Horizontal Card */}
            {how.steps[1] && (
              <article className="bg-white border border-line/80 rounded-[24px] p-6 shadow-minty-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                <div className="w-full sm:w-1/2 aspect-[4/3] flex items-center justify-center">
                  <Image
                    src={how.steps[1].image}
                    alt={how.steps[1].alt}
                    width={180}
                    height={140}
                    className="w-full h-auto max-h-[140px] object-contain"
                  />
                </div>
                
                {/* 🛠️ ADDED: 'justify-center h-full' to center the text content vertically */}
                <div className="w-full sm:w-1/2 flex flex-col items-start justify-center gap-2 h-full">
                  <span className="w-8 h-8 rounded-full bg-mint/30 text-teal-deep inline-flex items-center justify-center font-bold text-sm self-center sm:self-center">
                    2
                  </span>
                  <h3 className="text-[18px] font-bold text-ink">{how.steps[1].title}</h3>
                  <p className="text-[14px] text-ink-muted leading-snug">
                    {how.steps[1].body}
                  </p>
                </div>
              </article>
            )}

            {/* CARD 4: Right Vertical Card (Placed 4th in array, positioned 3rd column) */}
            {how.steps[3] && (
              <article className="md:row-span-2 md:col-start-3 md:row-start-1 bg-white border border-line/80 rounded-[24px] p-8 text-center shadow-minty-sm flex flex-col items-center justify-between">
                <div className="w-full aspect-[4/3] flex items-center justify-center my-auto">
                  <Image
                    src={how.steps[3].image}
                    alt={how.steps[3].alt}
                    width={240}
                    height={200}
                    className="w-full h-auto max-h-[220px] object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-3 mt-4">
                  <span className="w-9 h-9 rounded-full bg-mint/30 text-teal-deep inline-flex items-center justify-center font-bold text-base">
                    4
                  </span>
                  <h3 className="text-[20px] font-bold text-ink">{how.steps[3].title}</h3>
                  <p className="text-[14.5px] text-ink-muted leading-relaxed max-w-[260px]">
                    {how.steps[3].body}
                  </p>
                </div>
              </article>
            )}

            {/* CARD 3: Middle-Bottom Horizontal Card */}
            {how.steps[2] && (
              <article className="md:col-start-2 md:row-start-2 bg-white border border-line/80 rounded-[24px] p-6 shadow-minty-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                <div className="w-full sm:w-1/2 aspect-[4/3] flex items-center justify-center">
                  <Image
                    src={how.steps[2].image}
                    alt={how.steps[2].alt}
                    width={180}
                    height={140}
                    className="w-full h-auto max-h-[140px] object-contain"
                  />
                </div>
                
                {/* 🛠️ ADDED: 'justify-center h-full' to center the text content vertically */}
                <div className="w-full sm:w-1/2 flex flex-col items-start justify-center gap-2 h-full">
                  <span className="w-8 h-8 rounded-full bg-mint/30 text-teal-deep inline-flex items-center justify-center font-bold text-sm self-center sm:self-center">
                    3
                  </span>
                  <h3 className="text-[18px] font-bold text-ink">{how.steps[2].title}</h3>
                  <p className="text-[14px] text-ink-muted leading-snug">
                    {how.steps[2].body}
                  </p>
                </div>
              </article>
            )}

          </div>
        </Container>
      </section>
    </FadeContent>
  );
}