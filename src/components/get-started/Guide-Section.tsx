'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { getStartedContent } from '@/config/get-started';
import { cn } from '@/lib/utils';

export default function GuidesSection() {
  const { guides } = getStartedContent;
  
  // Track which guide is currently being viewed/played
  const [activeGuideId, setActiveGuideId] = useState<number | null>(null);

  // Find active guide data if one is selected
  const activeGuide = guides.items.find((item) => item.id === activeGuideId);

  return (
    <section className="bg-white py-16 font-sans">
      <Container>
        {/* Header Title & Subtitle */}
        <div className="text-left mb-10">
          <h2 className="text-[#113B4A] text-[28px] md:text-[32px] font-extrabold tracking-tight mb-2">
            {guides.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            {guides.subtitle}
          </p>
        </div>

        {/* --- CONDITIONAL VIEW SWITCHER --- */}
        {activeGuide ? (
          /* PLAYBACK VIEW (Matches image_c7e725.png) */
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(17,59,74,0.02)] animate-fadeIn">
            
            {/* Metadata Row + Close Button */}
            <div className="flex justify-between items-center mb-4">
              <span className={cn(
                "text-xs font-bold px-3 py-1 rounded-full",
                activeGuide.category === "Petty Cash" ? "bg-[#EBF3FE] text-[#2F80ED]" :
                activeGuide.category === "Bill Payment" ? "bg-[#FFF9E6] text-[#D4A373]" : "bg-[#E6FAF7] text-[#00CBB0]"
              )}>
                {activeGuide.category}
              </span>
              
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="text-[14px]">🕒</span> {activeGuide.duration}
                </span>
                
                {/* Reset state on click to go back to grid */}
                <button 
                  onClick={() => setActiveGuideId(null)}
                  className="w-7 h-7 bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-full flex items-center justify-center transition-all duration-150 text-[11px] font-bold shadow-xs"
                  aria-label="Close video view"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Guide Title Context */}
            <h3 className="text-[#113B4A] text-xl font-extrabold leading-snug mb-1">
              {activeGuide.title}
            </h3>
            <p className="text-gray-400 text-xs italic mb-6">
              {activeGuide.description}
            </p>

            {/* Embedded Screen / Video Sandbox Player Element */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#EDF3F1] border border-emerald-50/50 flex flex-col items-center justify-center shadow-inner">
              <div className="flex items-center gap-2 text-gray-400 text-[14px] font-semibold tracking-wide selection:bg-transparent">
                <span className="text-[11px] opacity-80">▶</span> Tutorial video coming soon
              </div>
            </div>

          </div>
        ) : (
          /* GRID LISTING VIEW (Matches your existing cards framework) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {guides.items.map((guide) => (
              <div 
                key={guide.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                {/* Top Meta Details Row */}
                <div className="flex justify-between items-center mb-4">
                  <span className={cn(
                    "text-xs font-bold px-3 py-1 rounded-full",
                    guide.category === "Petty Cash" ? "bg-[#EBF3FE] text-[#2F80ED]" :
                    guide.category === "Bill Payment" ? "bg-[#FFFBF0] text-[#DCA11D]" : "bg-[#E6FAF7] text-[#00CBB0]"
                  )}>
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="text-[14px]">🕒</span> {guide.duration}
                  </span>
                </div>

                {/* Title & Description Context */}
                <h3 className="text-[#113B4A] text-lg font-extrabold leading-snug mb-1">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-xs italic mb-6">
                  {guide.description}
                </p>

                {/* Video Thumbnail Wrapper with Click Trigger */}
                <div 
                  onClick={() => setActiveGuideId(guide.id)}
                  className="relative aspect-[1.85/1] w-full rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
                >
                  <Image
                    src={guide.videoThumbnail}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  
                  {/* Upper Right Corner Badge inside video */}
                  {guide.badge && (
                    <span className={cn(
                      "absolute top-3 right-3 text-[11px] font-bold text-white px-2.5 py-1 rounded-sm uppercase tracking-wider",
                      guide.badge === "Petty Cash" ? "bg-[#10485E]" : 
                      guide.badge === "Bill Payment" ? "bg-[#0B5A75]" : "bg-[#113B4A]"
                    )}>
                      {guide.badge}
                    </span>
                  )}

                  {/* Centered Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center transition-colors group-hover:bg-black/10">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md backdrop-blur-xs transform transition-transform group-hover:scale-110">
                      <span className="text-[#113B4A] text-xl ml-1">▶</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}