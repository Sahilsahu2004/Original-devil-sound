import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Play, Sparkles, MapPin, PhoneCall } from 'lucide-react';
import { BUSINESS_CONTACT } from '../services/bookingService';

interface HeroProps {
  onOpenBooking: () => void;
  onWatchExperience: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onWatchExperience }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQueryMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQueryMotion.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQueryMotion.addEventListener('change', handleMotionChange);

    // Detect mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    // IntersectionObserver to pause video when hero is not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && !mediaQueryMotion.matches) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const heroEl = document.getElementById('hero');
    if (heroEl) observer.observe(heroEl);

    return () => {
      mediaQueryMotion.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
      if (heroEl) observer.unobserve(heroEl);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. Dedicated Absolute Video Background Layer (Never affects content flow) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {!prefersReducedMotion ? (
          <video
            ref={videoRef}
            key={isMobile ? 'mobile-hero' : 'desktop-hero'}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/videos/hero-poster.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-85 scale-100' : 'opacity-40 scale-105'
            }`}
          >
            {isMobile ? (
              <source src="/assets/videos/hero-mobile.mp4" type="video/mp4" />
            ) : (
              <source src="/assets/videos/hero-desktop.mp4" type="video/mp4" />
            )}
            <source src="/assets/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/assets/videos/hero-poster.jpg"
            alt="Original Devil Sound Stage"
            className="w-full h-full object-cover opacity-75"
          />
        )}
      </div>

      {/* 2. Dark Cinematic Overlay with Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/55 to-black/75 z-10 pointer-events-none" />

      {/* 3. Subtle Warm Gold and Stage Fog Ambient Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08080a] to-transparent z-10 pointer-events-none" />

      {/* 4. Foreground Content (Strictly centered, high contrast, readable) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 flex flex-col items-center text-center">
        {/* Top Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-gradient-badge text-[#f3e5ab] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
          <span>DJ • EVENTS • ENTERTAINMENT</span>
        </div>

        {/* Brand Pre-title */}
        <p className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-zinc-300 mb-2">
          ORIGINAL <span className="text-[#d4af37]">DEVIL</span> SOUND
        </p>

        {/* Main Display Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-normal tracking-wide leading-[0.9] text-center drop-shadow-2xl">
          YOUR EVENT.
          <br />
          <span className="gold-gradient-text block mt-1 sm:mt-2">
            OUR ENERGY.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed tracking-wide text-center">
          Creating unforgettable moments through thunderous sound, synchronized laser lighting, and electrifying event entertainment.
        </p>

        {/* Verified Location & Tagline Pill */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Barwani, Madhya Pradesh & Regional Tours</span>
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="text-zinc-300 font-medium">
            EK FAMILY EK TRUST • EK NAAM DEVIL
          </span>
        </div>

        {/* Primary and Secondary Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            id="hero-book-cta-btn"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#e8ca6b] to-[#d4af37] text-black font-extrabold text-sm sm:text-base uppercase tracking-widest rounded-sm shadow-2xl shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>BOOK YOUR EVENT</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onWatchExperience}
            id="hero-watch-experience-btn"
            className="w-full sm:w-auto px-7 py-4 bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-700/80 hover:border-[#d4af37]/60 text-white font-semibold text-sm sm:text-base uppercase tracking-wider rounded-sm backdrop-blur-md transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>WATCH THE EXPERIENCE</span>
          </button>
        </div>

        {/* Quick Phone Connect */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Booking Lines:</span>
          </span>
          <a
            href={`tel:${BUSINESS_CONTACT.phone1Raw}`}
            className="text-zinc-200 hover:text-[#d4af37] font-semibold underline decoration-zinc-700 underline-offset-4 transition-colors"
          >
            {BUSINESS_CONTACT.phone1}
          </a>
          <span className="text-zinc-600">•</span>
          <a
            href={`tel:${BUSINESS_CONTACT.phone2Raw}`}
            className="text-zinc-200 hover:text-[#d4af37] font-semibold underline decoration-zinc-700 underline-offset-4 transition-colors"
          >
            {BUSINESS_CONTACT.phone2}
          </a>
          <span className="text-zinc-600">•</span>
          <a
            href={`tel:${BUSINESS_CONTACT.phone3Raw}`}
            className="text-zinc-200 hover:text-[#d4af37] font-semibold underline decoration-zinc-700 underline-offset-4 transition-colors"
          >
            {BUSINESS_CONTACT.phone3}
          </a>
        </div>
      </div>
    </section>
  );
};
