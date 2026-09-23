import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { EventTypesSection } from './components/EventTypesSection';
import { VideoShowcase } from './components/VideoShowcase';
import { ImageMarqueeSection } from './components/ImageMarqueeSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { InstagramSocial } from './components/InstagramSocial';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileBookingBar } from './components/MobileBookingBar';
import { EventCategory } from './types';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONTACT } from './services/bookingService';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventCategory | null>(null);

  const handleOpenBooking = (event?: EventCategory) => {
    setSelectedEvent(event || null);
    setIsBookingOpen(true);
  };

  const handleWatchExperience = () => {
    const el = document.getElementById('videos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* 1. Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section — Fullscreen Background Video */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onWatchExperience={handleWatchExperience}
        />

        {/* Experience Pillars */}
        <ExperienceSection />

        {/* Event Types — 8 Real Event Posters */}
        <EventTypesSection onSelectEvent={(ev) => handleOpenBooking(ev)} />

        {/* Cinematic Video Experience — Multiple Real Videos */}
        <VideoShowcase />

        {/* Continuous Real-Image Stream Marquee */}
        <ImageMarqueeSection />

        {/* About Original Devil Sound — Barwani, MP Roots */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Editorial Masonry Gallery with Lightbox */}
        <GallerySection />

        {/* Instagram Social Feed */}
        <InstagramSocial />

        {/* Contact Section — 3 Phone Numbers & WhatsApp */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedEvent={selectedEvent}
      />

      {/* Desktop Floating Quick Connect Bar (hidden on mobile — MobileBookingBar handles mobile) */}
      <div className="hidden sm:flex fixed bottom-4 right-4 z-40 items-center gap-2">
        <a
          href={`https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent("Hello Original Devil Sound! I want to check availability for an event.")}`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-black shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 px-4 py-3 bg-[#d4af37] text-black font-extrabold text-xs uppercase tracking-wider rounded-full shadow-2xl hover:bg-[#e5c158] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Book Event</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Fixed Bottom Booking Bar (visible ONLY on mobile < md) */}
      <MobileBookingBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
