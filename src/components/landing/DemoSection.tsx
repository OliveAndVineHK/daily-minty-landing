'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { landingContent } from '@/config/landing';

export default function DemoSection() {
  const { demo } = landingContent;
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <section className="bg-teal py-20" aria-labelledby="demo-title">
        <Container>
          <div className="w-full aspect-video max-w-4xl mx-auto rounded-[22px] overflow-hidden shadow-minty-lg bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`${demo.videoUrl}?autoplay=1`}
              title="Minty Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-teal py-32" aria-labelledby="demo-title">
      <Container className="flex flex-col items-center text-center">
        <h2 id="demo-title" className="text-[clamp(32px,4vw,48px)] font-extrabold text-white mb-8">
          {demo.title}
        </h2>
        <Button
          onClick={() => setIsPlaying(true)}
          variant="white"
          className="mb-12"
        >
          Open the demo →
        </Button>
        <div className="w-full max-w-xs">
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full aspect-square rounded-[28px] overflow-hidden shadow-minty-lg hover:shadow-minty-xl transition-shadow duration-300 bg-white"
            aria-label="Open demo video"
          >
            <Image
              src="/assets/deployed-assets/demo-cat.png"
              alt="Minty demo mascot"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </Container>
    </section>
  );
}
