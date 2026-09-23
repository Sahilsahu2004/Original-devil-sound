import React from 'react';
import { BUSINESS_CONTACT } from '../services/bookingService';
import { Phone, MessageCircle, Instagram, MapPin, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090a0e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#12141c] via-[#0d0f16] to-[#08080b] border border-zinc-800 rounded-sm p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle gold decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-4">
                <span className="w-6 h-px bg-[#d4af37]" />
                <span>DIRECT BOOKINGS & ENQUIRIES</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase leading-none">
                LET&apos;S MAKE YOUR EVENT
                <br />
                <span className="text-[#f3e5ab]">UNFORGETTABLE.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
                Dates fill rapidly for peak wedding seasons, Holi celebrations, and Navratri festivals. Reserve your date early to guarantee full sound truck, lighting truss, and stage availability.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#e8ca6b] to-[#d4af37] text-black font-extrabold text-sm uppercase tracking-widest rounded-sm shadow-xl shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>START BOOKING ENQUIRY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent("Hello Original Devil Sound! I want to check date availability for my upcoming event.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] hover:text-white font-bold text-sm uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Phone Line 1 */}
              <a
                href={`tel:${BUSINESS_CONTACT.phone1Raw}`}
                className="p-4 sm:p-5 bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-[#d4af37]/60 rounded-sm flex items-center gap-4 transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-black border border-zinc-800 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                    Booking Hotline 1
                  </div>
                  <div className="font-display text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                    {BUSINESS_CONTACT.phone1}
                  </div>
                </div>
              </a>

              {/* Phone Line 2 */}
              <a
                href={`tel:${BUSINESS_CONTACT.phone2Raw}`}
                className="p-4 sm:p-5 bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-[#d4af37]/60 rounded-sm flex items-center gap-4 transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-black border border-zinc-800 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                    Booking Hotline 2
                  </div>
                  <div className="font-display text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                    {BUSINESS_CONTACT.phone2}
                  </div>
                </div>
              </a>

              {/* Phone Line 3 */}
              <a
                href={`tel:${BUSINESS_CONTACT.phone3Raw}`}
                className="p-4 sm:p-5 bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-[#d4af37]/60 rounded-sm flex items-center gap-4 transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-black border border-zinc-800 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                    Booking Hotline 3
                  </div>
                  <div className="font-display text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                    {BUSINESS_CONTACT.phone3}
                  </div>
                </div>
              </a>

              {/* Location & Trust Card */}
              <div className="p-5 bg-zinc-900/50 border border-zinc-800/70 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Base: {BUSINESS_CONTACT.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Enquiries answered daily 9:00 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#f3e5ab]">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Tagline: {BUSINESS_CONTACT.tagline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
