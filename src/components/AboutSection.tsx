import React from 'react';
import { BUSINESS_CONTACT } from '../services/bookingService';
import { ShieldCheck, MapPin, Sparkles, CheckCircle2, Phone, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#090a0e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              <img
                src="/assets/gallery/hero-stage.jpg"
                alt="Original Devil Sound Stage Production"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Verified Badge on Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/80 backdrop-blur-md rounded-sm border border-[#d4af37]/40">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#d4af37] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>ORIGINAL DEVIL SOUND BARWANI</span>
                </div>
                <div className="font-display text-xl text-white tracking-wider">
                  EK FAMILY EK TRUST • EK NAAM DEVIL
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Headquartered in Barwani, MP • Available Pan-Region</span>
                </div>
              </div>
            </div>

            {/* Accent Border Frame */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>THE STORY & REPUTATION</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase leading-none">
              BUILT ON TRUST.
              <br />
              <span className="text-[#f3e5ab]">POWERED BY PURE PASSION.</span>
            </h2>

            <p className="text-base text-zinc-300 font-light leading-relaxed">
              Originated in Barwani, Madhya Pradesh, <strong className="text-white font-semibold">Original Devil Sound</strong> has earned a regional reputation as the definitive powerhouse for high-energy celebrations, wedding nights, Holi festivals, and Navratri Garba gatherings.
            </p>

            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              We believe a great sound system is not just about raw decibels; it is about chest-thumping bass clarity, synchronized lighting artistry, and an electric atmosphere where families and crowds unite to celebrate life.
            </p>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Punctual & Robust Rigging</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Heavy aluminum trusses and safe electrical distribution installed hours ahead of schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Custom Sound Truck Engineering</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Specialized vehicle setups tailored for moving road processions and high-attendance open grounds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Dynamic Genre Curation</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">From traditional devotional and Garba beats to Bollywood drops and international EDM mixes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Direct Owner Supervision</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Personal oversight for every client booking, maintaining our motto: Ek Family Ek Trust.</p>
                </div>
              </div>
            </div>

            {/* Direct Connect Row */}
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-extrabold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all cursor-pointer"
              >
                <span>REQUEST AVAILABILITY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_CONTACT.phone1.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-sm text-xs font-semibold text-zinc-200 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {BUSINESS_CONTACT.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
