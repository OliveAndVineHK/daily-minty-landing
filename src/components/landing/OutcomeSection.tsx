import Image from 'next/image';
import Container from '@/components/ui/Container';
import { landingContent } from '@/config/landing';

export default function OutcomeSection() {
  const { outcome } = landingContent;

  // Mock configuration structure to map image_b9572b.png 
  // Make sure your config file matches these property hooks!
  const cardThemeStyles = [
    {
      bgClass: "bg-[#00cbb2]", // Vibrant Teal Card
      iconSrc: "/icons/cash.svg"
    },
    {
      bgClass: "bg-[#0f2d37]", // Deep Slate/Navy Card
      iconSrc: "/icons/bill.svg"
    }
  ];

  return (
    <section className="bg-[#dcf3ec] py-20" aria-labelledby="outcome-title">
      <Container className="max-w-5xl mx-auto">
        
        {/* Top Solution Badge & Bubble Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="bg-[#bfeae0] text-[#00a896] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full uppercase mb-4">
            The Solution
          </span>
          <div className="bg-white px-8 py-4 rounded-full shadow-sm max-w-xl">
            <h2 id="outcome-title" className="text-[20px] md:text-[24px] font-extrabold text-[#1a202c] leading-tight">
              {outcome.title}{' '}
              <span className="text-[#00cbb2]">{outcome.titleAccent}</span>{' '}
              again.
            </h2>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {outcome.cards.map((card, index) => {
            const theme = cardThemeStyles[index] || cardThemeStyles[0];

            return (
              <div
                key={card.key}
                className={`${theme.bgClass} rounded-[24px] p-6 pb-0 flex flex-col justify-between shadow-md overflow-hidden aspect-[4/3]`}
              >
                {/* Card Header Layer */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[24px] font-bold text-white tracking-wide">
                    {card.title}
                  </h3>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {/* Using a placeholder circle icon like image_b9572b.png */}
                    <span className="material-symbols-outlined text-xs text-emerald-500 font-bold">
                      {index === 0 ? "payments" : "menu"}
                    </span>
                  </div>
                </div>

                {/* Bottom Section: Your Clean White Container Layer for the Image */}
                <div className="bg-white rounded-t-[16px] flex-grow flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full min-h-[140px]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      /* FIXED: Changed to object-cover to stretch and fill the space completely */
                      className="object-cover rounded-t-[16px]"
                      priority={index < 2}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}