import Image from 'next/image';
import Container from '@/components/ui/Container';
import { landingContent } from '@/config/landing';

export default function HelpsYouSection() {
  const { helpsYou } = landingContent;
  return (
    <section className="bg-mint py-20" aria-labelledby="helps-title">
      <Container>
        <div className="text-center mb-16">
          <h2 id="helps-title" className="text-[clamp(30px,3.6vw,42px)] font-extrabold leading-[1.2]">
            {helpsYou.title}
            <span className="text-teal"> {helpsYou.titleAccent}</span>
          </h2>
          <p className="text-ink-muted text-[15px] max-w-[600px] mx-auto mt-4">
            {helpsYou.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {helpsYou.cards.map((card) => (
            <article
              key={card.num}
              className="bg-white rounded-[22px] p-7 text-center shadow-minty-sm hover:shadow-minty-md transition-shadow duration-200"
            >
              <div className="aspect-[4/3] flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={300}
                  height={225}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-mint text-teal-deep font-bold text-base mb-3">
                {card.num}
              </span>
              <h3 className="text-[18px] font-bold text-ink mb-2">{card.title}</h3>
              <p className="text-[15px] text-ink-muted leading-normal">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
