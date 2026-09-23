import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Volume2 } from 'lucide-react';
import { BUSINESS_CONTACT } from '../services/bookingService';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'EVENTS', href: '#events' },
    { label: 'ENERGY', href: '#videos' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/90 backdrop-blur-md py-3.5 border-b border-zinc-800/80 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
            id="brand-logo-btn"
          >
            <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#d4af37] via-[#aa820a] to-[#2a2004] p-0.5 flex items-center justify-center shadow-lg shadow-[#d4af37]/10 group-hover:shadow-[#d4af37]/30 transition-all">
              <div className="w-full h-full bg-[#090a0e] flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-wider text-white flex items-center gap-1.5 leading-none">
                ORIGINAL <span className="text-[#d4af37]">DEVIL</span> SOUND
              </span>
              <span className="text-[9px] tracking-[0.25em] text-zinc-400 font-medium uppercase mt-0.5">
                DJ • Events • Entertainment
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-xs font-semibold tracking-widest text-zinc-300 hover:text-[#d4af37] transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_CONTACT.phone1.replace(/\s+/g, '')}`}
              className="text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 font-medium px-3 py-2 rounded border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 transition-all"
              title="Call Direct"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="tracking-wide">8120167078</span>
            </a>

            <button
              onClick={onOpenBooking}
              id="nav-book-event-desktop"
              className="relative group overflow-hidden bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#d4af37] text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="relative z-10">BOOK YOUR EVENT</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 bg-[#d4af37] text-black rounded-sm"
              id="mobile-quick-book-btn"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="hamburger-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#08080b]/98 backdrop-blur-xl flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden animate-fade-in"
        >
          <div className="flex flex-col gap-5 mt-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold border-b border-zinc-800 pb-2">
              Menu Navigation
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-2xl font-display tracking-wider text-zinc-100 hover:text-[#d4af37] transition-colors py-1 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-600" />
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-extrabold text-sm uppercase tracking-widest rounded shadow-xl flex items-center justify-center gap-2"
              id="mobile-drawer-book-cta"
            >
              <span>BOOK YOUR EVENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${BUSINESS_CONTACT.phone1.replace(/\s+/g, '')}`}
                className="py-2.5 px-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center gap-2 text-zinc-300"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call Hotline</span>
              </a>
              <a
                href={BUSINESS_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center gap-2 text-zinc-300"
              >
                <span>@original_devil_sound</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
