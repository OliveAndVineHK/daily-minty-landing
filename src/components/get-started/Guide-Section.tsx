'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { getStartedContent } from '@/config/get-started';
import { cn } from '@/lib/utils';
import { Clock, VolumeX, Maximize, Minimize } from 'lucide-react';
import FadeContent from '@/animations/landing/fadeanim';

export default function GuidesSection() {
  const { guides } = getStartedContent;

  // Track which guide is currently being viewed/played
  const [activeGuideId, setActiveGuideId] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(4);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const activeCardRef = useRef<HTMLDivElement>(null);
  const activeIframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  // Smooth-scroll to the playing video when a guide is selected
  useEffect(() => {
    if (activeGuideId && activeCardRef.current) {
      setTimeout(() => {
        activeCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [activeGuideId]);

  // Each newly opened video starts muted again.
  useEffect(() => {
    setIsMuted(true);
  }, [activeGuideId]);

  // Closing a guide should never leave us stuck in fullscreen.
  useEffect(() => {
    if (!activeGuideId && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsFullscreen(false);
  }, [activeGuideId]);

  // Keep our state in sync when the user leaves fullscreen via Esc or the
  // browser's own chrome rather than our button.
  useEffect(() => {
    const sync = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', sync);
    return () => document.removeEventListener('fullscreenchange', sync);
  }, []);

  // iOS Safari refuses requestFullscreen on anything but a <video>, so when the
  // real API is unavailable we fall back to a fixed, viewport-filling overlay.
  useEffect(() => {
    if (!isFullscreen || document.fullscreenElement) return;

    // `filter` / `transform` / `will-change` on an ancestor make it the
    // containing block for our fixed overlay, which would then be clipped to
    // the card instead of the viewport. FadeContent sets exactly those, so
    // strip them for the duration (the fade has long since settled at blur(0),
    // so this is visually a no-op) and restore them on exit.
    const patched: Array<[HTMLElement, string, string, string]> = [];
    for (let el = playerRef.current?.parentElement; el; el = el.parentElement) {
      const s = getComputedStyle(el);
      if (s.filter === 'none' && s.transform === 'none' && s.willChange === 'auto') continue;
      patched.push([el, el.style.filter, el.style.transform, el.style.willChange]);
      el.style.filter = 'none';
      el.style.transform = 'none';
      el.style.willChange = 'auto';
    }

    // The fallback has no Esc handling of its own, so wire one up.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      for (const [el, filter, transform, willChange] of patched) {
        el.style.filter = filter;
        el.style.transform = transform;
        el.style.willChange = willChange;
      }
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
      return;
    }

    const el = playerRef.current;
    if (el?.requestFullscreen) {
      // If the browser rejects it (iOS), keep the CSS fallback.
      el.requestFullscreen().catch(() => setIsFullscreen(true));
    }
    setIsFullscreen(true);
  };

  // Build a YouTube embed URL from a guide's videoUrl.
  const buildEmbedUrl = (videoUrl: string) => {
    let embedUrl = videoUrl;
    if (videoUrl.includes('watch?v=')) {
      const videoId = videoUrl.split('watch?v=')[1].split('&')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    const params = new URLSearchParams({
      autoplay: '1',
      // Muted is required or browsers block autoplay outright.
      mute: '1',
      // Hides the progress bar / timeline and the play-pause chrome.
      controls: '0',
      // Suppresses on-video annotation cards.
      iv_load_policy: '3',
      // Keeps end-screen suggestions within this channel.
      rel: '0',
      // Stops iOS from forcing the video into its native fullscreen player.
      playsinline: '1',
      // Required so we can postMessage the unmute command below.
      enablejsapi: '1',
    });

    return `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}${params}`;
  };

  // The player starts muted (see above), so offer an explicit way to turn sound on.
  const unmute = () => {
    activeIframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
      '*'
    );
    setIsMuted(false);
  };

  return (
    <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>
    <section className="bg-white py-10 mb-20 font-sans" id="guide">
      <Container>
        <div className="text-left mb-10">
          <h2 className="text-[#113B4A] text-[28px] md:text-[32px] font-extrabold tracking-tight mb-2">
            {guides.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            {guides.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {guides.items.slice(0, displayCount).map((guide) => {
            const isActive = guide.id === activeGuideId;
            return (
            <div
              key={guide.id}
              ref={isActive ? activeCardRef : null}
              className={cn(
                "bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
                isActive && "md:col-span-2 order-first"
              )}
            >
              <div className="flex justify-between items-center mb-4">
                <span className={cn(
                  "text-xs font-bold px-3 py-1 rounded-full",
                  guide.category === "Petty Cash" ? "bg-[#EBF3FE] text-[#2F80ED]" :
                  guide.category === "Bill Payment" ? "bg-[#FFFBF0] text-[#DCA11D]" : "bg-[#E6FAF7] text-[#00CBB0]"
                )}>
                  {guide.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={14} className="text-gray-400" />  {guide.duration}
                  </span>
                  {isActive && (
                    <button
                      onClick={() => setActiveGuideId(null)}
                      className="w-7 h-7 bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-full flex items-center justify-center transition-all duration-150 text-[11px] font-bold shadow-xs"
                      aria-label="Close video view"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>


              <h3 className="text-[#113B4A] text-lg font-extrabold leading-snug mb-1">
                {guide.title.includes('Xero') ? (
                  <>
                    {guide.title.substring(0, guide.title.indexOf('Xero')).trim()}
                    {' '}
                    <span style={{ color: '#266DD3' }}>Xero</span>
                    {guide.title.substring(guide.title.indexOf('Xero') + 4).trimStart()}
                  </>
                ) : (
                  guide.title
                )}
              </h3>
              <p className="text-gray-400 text-xs italic mb-6">
                {guide.description}
              </p>

              {isActive && guide.videoUrl ? (
                /* Inline video player — expands full width, pushes other cards below */
                <div
                  ref={playerRef}
                  className={cn(
                    "relative overflow-hidden bg-[#EDF3F1]",
                    isFullscreen
                      ? "fixed inset-0 z-50 h-[100dvh] w-screen rounded-none border-0 bg-black"
                      : "aspect-[16/9] w-full rounded-2xl border border-emerald-50/50 shadow-inner"
                  )}
                >
                  <iframe
                    ref={activeIframeRef}
                    width="100%"
                    height="100%"
                    src={buildEmbedUrl(guide.videoUrl)}
                    title={guide.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />

                  {/* Controls are hidden, so surface explicit sound + fullscreen affordances. */}
                  <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                    {isMuted && (
                      <button
                        onClick={unmute}
                        className="flex items-center gap-1.5 rounded-full bg-black/70 px-3.5 py-2 text-[12px] font-bold text-white backdrop-blur-sm transition-colors hover:bg-black/85"
                        aria-label="Turn on sound"
                      >
                        <VolumeX size={14} />
                        Tap for sound
                      </button>
                    )}
                    <button
                      onClick={toggleFullscreen}
                      className="flex items-center justify-center rounded-full bg-black/70 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/85"
                      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                      {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                    </button>
                  </div>
                </div>
              ) : (
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

                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center transition-colors group-hover:bg-black/10">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md backdrop-blur-xs transform transition-transform group-hover:scale-110">
                      <span className="text-[#113B4A] text-xl ml-1">▶</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
            );
          })}
        </div>

        {displayCount < guides.items.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setDisplayCount(displayCount + 4)}
              className="bg-white border border-gray-200 text-[#113B4A] hover:bg-gray-50 font-bold px-6 py-2.5 rounded-full text-[13px] transition-all duration-200 shadow-xs"
            >
              Show more guides
            </button>
          </div>
        )}
      </Container>
    </section>
    </FadeContent>
  );
}