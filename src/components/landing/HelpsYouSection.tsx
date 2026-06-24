import Image from 'next/image';
import Container from '@/components/ui/Container';
import { landingContent } from '@/config/landing';
import { CheckCircle, RefreshCw, CreditCard, LucideIcon } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  CheckCircle: CheckCircle,
  RefreshCw: RefreshCw,
  CreditCard: CreditCard,
};

export default function HelpsYouSection() {
  const { helpsYou } = landingContent;
  return (
    <section className="bg-[#EBF7F4] py-20" aria-labelledby="helps-title">
      <Container>
        <div className="text-center mb-16 flex flex-col items-center justify-center">
          <span className="text-[32px] font-extrabold text-[#113B4A] tracking-tight">
            {helpsYou.title}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {helpsYou.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon];

            return (
              <article
                key={index}
                className="bg-white rounded-[20px] p-8 text-center flex flex-col items-center justify-center min-h-[200px] shadow-sm"
              >
                <div className="w-14 h-14 flex items-center justify-center mb-5 bg-[#EBF7F4] rounded-full text-[#00A884]">
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </div>
                
                <p className="text-[16px] text-[#4A5E65] leading-relaxed font-medium px-2">
                  {card.body.includes('Xero') ? (
                    <>
                      Trust your daily numbers and sync them directly to{' '}
                      <span className="text-[#00A884] font-bold">Xero.</span>
                    </>
                  ) : (
                    card.body
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}