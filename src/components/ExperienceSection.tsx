import React from 'react';
import { EXPERIENCE_PILLARS } from '../data/eventData';
import { Disc3, Speaker, Sparkles, Truck, ShieldCheck, Zap } from 'lucide-react';

const ICONS = [Disc3, Speaker, Sparkles, Truck, ShieldCheck, Zap];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#090a0e] text-white overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#aa820a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
              <span className="w-6 h-px bg-[#d4af37]" />
              <span>THE EXPERIENCE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none">
              MORE THAN MUSIC.
              <br />
              <span className="text-[#f3e5ab]">IT&apos;S AN ATMOSPHERE.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Every celebration demands a singular sonic presence. We unite high-impact audio engineering, custom stage trussing, and crowd leadership for moments that stay with you forever.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-16">
          {EXPERIENCE_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={pillar.title}
                className="group relative bg-[#0e1017]/80 hover:bg-[#131620] border border-zinc-800/90 hover:border-[#d4af37]/50 rounded-sm p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl sm:text-4xl text-zinc-600 group-hover:text-[#d4af37] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase mt-1 mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span className="tracking-wider uppercase">Original Devil Sound Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
