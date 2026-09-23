import React from 'react';
import { BUSINESS_CONTACT } from '../services/bookingService';
import { Phone, Instagram, MapPin, ArrowUp, Volume2 } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-zinc-900 text-zinc-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#d4af37] to-[#aa820a] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
                </div>
              </div>
              <span className="font-display text-2xl text-white tracking-wider">
                ORIGINAL <span className="text-[#d4af37]">DEVIL</span> SOUND
              </span>
            </div>

            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
              Creating unforgettable celebration atmospheres with heavy sound truck systems, concert-grade aluminum trusses, intelligent laser lighting, and dynamic live DJ performance.
            </p>

            <div className="text-[11px] font-semibold text-[#f3e5ab] tracking-wider uppercase">
              {BUSINESS_CONTACT.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white tracking-widest uppercase text-xs">
              Explore
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-[#d4af37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#d4af37] transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#d4af37] transition-colors">
                  Event Types
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-[#d4af37] transition-colors">
                  Live Video Reels
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div className="space-y-3">
            <div className="font-bold text-white tracking-widest uppercase text-xs">
              Celebrations
            </div>
            <ul className="space-y-2">
              <li>Wedding Sangeet & Reception</li>
              <li>Holi Festival Celebrations</li>
              <li>Navratri & Garba Nights</li>
              <li>VIP Birthday Bashes</li>
              <li>Road Processions & Yatras</li>
              <li>Open Air Concerts</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="font-bold text-white tracking-widest uppercase text-xs">
              Direct Contact
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${BUSINESS_CONTACT.phone1Raw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{BUSINESS_CONTACT.phone1}</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONTACT.phone2Raw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{BUSINESS_CONTACT.phone2}</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONTACT.phone3Raw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{BUSINESS_CONTACT.phone3}</span>
              </a>
              <a
                href={BUSINESS_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{BUSINESS_CONTACT.instagramHandle}</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{BUSINESS_CONTACT.location}</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-3 w-full py-2 px-3 bg-zinc-900 hover:bg-[#d4af37] text-white hover:text-black font-bold uppercase tracking-wider text-[11px] rounded-sm transition-colors border border-zinc-800 hover:border-[#d4af37] cursor-pointer"
            >
              Book Event Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Original Devil Sound. All rights reserved. Barwani, Madhya Pradesh.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
