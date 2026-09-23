import React from 'react';
import { BUSINESS_CONTACT } from '../services/bookingService';
import { Instagram, ArrowUpRight } from 'lucide-react';

const REEL_SNAPS = [
  { img: '/assets/booking/wedding.jpg', label: 'Wedding Royal Setup' },
  { img: '/assets/gallery/truck-lasers.jpg', label: 'Laser Truck Yatra' },
  { img: '/assets/booking/holi.jpg', label: 'Holi Blast Live' },
  { img: '/assets/gallery/dj-live.jpg', label: 'Live Mixing Session' },
  { img: '/assets/booking/navratri.jpg', label: 'Garba Mahotsav' },
  { img: '/assets/gallery/truck-day.jpg', label: 'Road Procession Truck' },
];

export const InstagramSocial: React.FC = () => {
  return (
    <section id="social" className="relative py-20 sm:py-24 bg-[#08080b] border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>INSTAGRAM FEED</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide uppercase">
              FOLLOW THE SOUND
            </h2>
          </div>

          <a
            href={BUSINESS_CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gradient-to-r from-purple-900/40 to-pink-900/30 border border-pink-500/30 text-pink-200 text-xs font-bold tracking-wider hover:border-pink-500/60 hover:text-white transition-all group"
          >
            <span>{BUSINESS_CONTACT.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Visual Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {REEL_SNAPS.map((item, idx) => (
            <a
              key={idx}
              href={BUSINESS_CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-sm overflow-hidden bg-black border border-zinc-800 hover:border-[#d4af37]/60 transition-all block"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                <Instagram className="w-5 h-5 text-[#d4af37] mb-1" />
                <span className="text-[10px] font-medium text-white tracking-tight">
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
