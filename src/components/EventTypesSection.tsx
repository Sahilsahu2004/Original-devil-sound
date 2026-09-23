import React from 'react';
import { EVENT_CATEGORIES } from '../data/eventData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EventCategory } from '../types';

interface EventTypesSectionProps {
  onSelectEvent: (event: EventCategory) => void;
}

export const EventTypesSection: React.FC<EventTypesSectionProps> = ({ onSelectEvent }) => {
  return (
    <section id="events" className="relative py-24 sm:py-32 bg-[#08080b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <span className="w-6 h-px bg-[#d4af37]" />
            <span>SPECIALIZED EVENT PRODUCTIONS</span>
            <span className="w-6 h-px bg-[#d4af37]" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase">
            BUILT FOR EVERY CELEBRATION
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            From regal wedding processions and open-air festival color explosions to electric Dandiya nights and private VIP celebrations — every event receives custom acoustic and visual staging.
          </p>
        </div>

        {/* 8 Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {EVENT_CATEGORIES.map((event) => (
            <div
              key={event.id}
              className="group bg-[#0e1017] border border-zinc-800/80 hover:border-[#d4af37]/70 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10"
            >
              {/* Event Poster Image container with hover zoom */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                <img
                  src={event.posterImage}
                  alt={event.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/40" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f3e5ab] text-[10px] font-bold tracking-widest uppercase rounded-sm">
                    {event.badge}
                  </span>
                </div>

                {event.hindiTitle && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 bg-zinc-900/90 text-zinc-200 text-[10px] font-medium tracking-wide rounded-sm border border-zinc-700/60">
                      {event.hindiTitle}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-2xl text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors leading-tight">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Highlight Checklist */}
                  <div className="mt-3.5 pt-3 border-t border-zinc-800/80 space-y-1.5">
                    {event.highlightFeatures.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3 h-3 text-[#d4af37] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="mt-5 pt-3 border-t border-zinc-800/80">
                  <button
                    onClick={() => onSelectEvent(event)}
                    className="w-full py-2.5 px-3 bg-zinc-900 hover:bg-[#d4af37] text-zinc-100 hover:text-black font-bold text-xs uppercase tracking-widest border border-zinc-700 hover:border-[#d4af37] rounded-sm transition-all flex items-center justify-center gap-1.5 group-hover:shadow-lg group-hover:shadow-[#d4af37]/10 cursor-pointer"
                  >
                    <span>ENQUIRE FOR THIS EVENT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
