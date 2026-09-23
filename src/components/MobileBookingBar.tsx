import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONTACT } from '../services/bookingService';

interface MobileBookingBarProps {
  onOpenBooking: () => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-fixed-booking-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08080c]/95 backdrop-blur-lg border-t border-zinc-800/90 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl transition-all"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* WhatsApp Action Button */}
        <a
          href={`https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent("Hello Original Devil Sound! I would like to enquire about booking an event.")}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-black font-extrabold text-xs uppercase tracking-wider rounded-sm shadow-lg transition-transform"
          aria-label="Chat with Original Devil Sound on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>WHATSAPP</span>
        </a>

        {/* Primary Booking CTA */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#d4af37] active:scale-[0.98] text-black font-extrabold text-xs uppercase tracking-wider rounded-sm shadow-lg shadow-[#d4af37]/20 transition-transform cursor-pointer"
          aria-label="Book Your Event with Original Devil Sound"
        >
          <span>BOOK YOUR EVENT</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
};
