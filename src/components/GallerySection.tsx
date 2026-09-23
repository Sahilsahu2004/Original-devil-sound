import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/eventData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedItemIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
  }, [selectedItemIndex]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [selectedItemIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handleCloseLightbox, handleNext, handlePrev]);

  const currentItem: GalleryItem | null = selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#08080b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 border-b border-zinc-800 pb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-2">
              <span className="w-6 h-px bg-[#d4af37]" />
              <span>VISUAL SHOWCASE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase">
              THE DEVIL GALLERY
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-light">
            Real snapshots from actual event stages, mobile sound truck rallies, and celebrations powered by Original Devil Sound.
          </p>
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-auto">
          {GALLERY_ITEMS.map((item, idx) => {
            const isWide = item.aspect === 'wide';
            const isTall = item.aspect === 'tall';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className={`group relative rounded-sm overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-[#d4af37]/70 cursor-pointer shadow-xl transition-all duration-300 ${
                  isWide ? 'sm:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    isWide
                      ? 'aspect-[16/9]'
                      : isTall
                      ? 'aspect-[3/4] sm:aspect-[4/5]'
                      : 'aspect-square'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-[#d4af37]" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-light line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 z-50 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 z-50 transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 z-50 transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-zinc-800"
            />
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
                {currentItem.category} • {selectedItemIndex! + 1} of {GALLERY_ITEMS.length}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mt-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
