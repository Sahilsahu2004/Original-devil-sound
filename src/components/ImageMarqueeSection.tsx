import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface StreamItem {
  img: string;
  title: string;
  location: string;
}

const STREAM_ROW_1: StreamItem[] = [
  {
    img: '/assets/gallery/gallery-truck-eicher-day.png',
    title: 'Original Devil Sound Eicher Rig',
    location: 'Barwani, MP'
  },
  {
    img: '/assets/gallery/gallery-lasers-beams-1.png',
    title: 'Night Sky Laser Cannon Show',
    location: 'Festival Procession'
  },
  {
    img: '/assets/gallery/gallery-crowd-night-1.png',
    title: 'Live Energy with the Crowd',
    location: 'Headline Tour'
  },
  {
    img: '/assets/gallery/gallery-devil-neon-garland.png',
    title: 'Signature DEVIL Neon Signage',
    location: 'Stage Frontage'
  },
  {
    img: '/assets/gallery/gallery-devil-family-2k.png',
    title: 'Ek Family Ek Trust • 2K Supporters',
    location: 'Devil Family'
  },
  {
    img: '/assets/gallery/gallery-stage-neon.png',
    title: 'Concert Lighting Truss Rig',
    location: 'Mainstage Setup'
  },
  {
    img: '/assets/gallery/gallery-truck-crowd-day.png',
    title: 'Massive Daytime Street Yatra',
    location: 'Festival Rally'
  }
];

const STREAM_ROW_2: StreamItem[] = [
  {
    img: '/assets/gallery/gallery-lasers-beams-2.png',
    title: 'Moving Heads & Fog Spectacle',
    location: 'Night Performance'
  },
  {
    img: '/assets/gallery/gallery-truck-sunset.png',
    title: 'Sunset Procession Sound Tour',
    location: 'Madhya Pradesh'
  },
  {
    img: '/assets/gallery/gallery-crowd-hands.png',
    title: 'Crowd Cheers & Celebration',
    location: 'Live Arena'
  },
  {
    img: '/assets/gallery/gallery-truck-truss-day.png',
    title: 'Heavy Aluminum Acoustic Rig',
    location: 'Engineering Detail'
  },
  {
    img: '/assets/gallery/gallery-procession-day.png',
    title: 'Street Procession in Action',
    location: 'Celebration Tour'
  },
  {
    img: '/assets/gallery/gallery-crowd-night-2.png',
    title: 'Peak Midnight Beat Drops',
    location: 'Open Ground'
  },
  {
    img: '/assets/gallery/gallery-rig-detail-1.png',
    title: 'Sub-Bass Driver Array Rig',
    location: 'Devil Acoustic Rig'
  }
];

export const ImageMarqueeSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#07080b] text-white overflow-hidden border-t border-b border-zinc-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EK FAMILY EK TRUST • EK NAAM DEVIL</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase">
          MOMENTS FROM THE DEVIL FAMILY
        </h2>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          From street processions in Barwani to packed open-ground celebrations across Madhya Pradesh — authentic moments captured live on tour.
        </p>
      </div>

      {/* Marquee Streams Container */}
      <div className="marquee-wrapper relative w-full space-y-4 sm:space-y-6">
        {/* Left & Right Gradient Shadows for seamless edge fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#07080b] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#07080b] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward Infinite Stream */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex gap-4 sm:gap-6">
            {/* First Sequence */}
            {STREAM_ROW_1.map((item, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="group relative w-60 sm:w-80 aspect-[16/11] rounded-sm overflow-hidden bg-zinc-950 border border-zinc-850 hover:border-[#d4af37]/70 transition-all duration-300 shrink-0 shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-[#d4af37] tracking-wider uppercase block">
                    {item.location}
                  </span>
                  <p className="font-display text-base sm:text-lg text-white tracking-wide truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicated Sequence for True Seamless Loop */}
            {STREAM_ROW_1.map((item, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="group relative w-60 sm:w-80 aspect-[16/11] rounded-sm overflow-hidden bg-zinc-950 border border-zinc-850 hover:border-[#d4af37]/70 transition-all duration-300 shrink-0 shadow-lg"
                aria-hidden="true"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-[#d4af37] tracking-wider uppercase block">
                    {item.location}
                  </span>
                  <p className="font-display text-base sm:text-lg text-white tracking-wide truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Stream */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex gap-4 sm:gap-6">
            {/* First Sequence */}
            {STREAM_ROW_2.map((item, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="group relative w-60 sm:w-80 aspect-[16/11] rounded-sm overflow-hidden bg-zinc-950 border border-zinc-850 hover:border-[#d4af37]/70 transition-all duration-300 shrink-0 shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-[#d4af37] tracking-wider uppercase block">
                    {item.location}
                  </span>
                  <p className="font-display text-base sm:text-lg text-white tracking-wide truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicated Sequence for True Seamless Loop */}
            {STREAM_ROW_2.map((item, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="group relative w-60 sm:w-80 aspect-[16/11] rounded-sm overflow-hidden bg-zinc-950 border border-zinc-850 hover:border-[#d4af37]/70 transition-all duration-300 shrink-0 shadow-lg"
                aria-hidden="true"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-[#d4af37] tracking-wider uppercase block">
                    {item.location}
                  </span>
                  <p className="font-display text-base sm:text-lg text-white tracking-wide truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
