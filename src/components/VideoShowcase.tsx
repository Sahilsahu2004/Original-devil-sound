import React, { useState, useRef, useEffect } from 'react';
import { VIDEO_SHOWCASE } from '../data/eventData';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, X } from 'lucide-react';
import { VideoShowcaseItem } from '../types';

export const VideoShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem>(VIDEO_SHOWCASE[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxPlaying, setLightboxPlaying] = useState(true);
  const [lightboxMuted, setLightboxMuted] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Pause video when section scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // When switching active video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const openLightbox = (video?: VideoShowcaseItem) => {
    if (video) setActiveVideo(video);
    if (videoRef.current) videoRef.current.pause();
    setIsPlaying(false);
    setIsLightboxOpen(true);
    setLightboxPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section ref={sectionRef} id="videos" className="relative py-24 sm:py-32 bg-[#090a0f] text-white border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC EVENT FOOTAGE</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase">
            FEEL THE ENERGY
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Witness the atmosphere, the laser sky-beams, and the ground-shaking sound truck system that turns every road tour and celebration into a stadium-grade festival.
          </p>
        </div>

        {/* Large Featured Video Player */}
        <div className="relative rounded-sm overflow-hidden border border-zinc-800 bg-black shadow-2xl aspect-[16/9] max-h-[640px] w-full mx-auto group">
          <video
            ref={videoRef}
            src={activeVideo.videoSrc}
            poster={activeVideo.posterSrc}
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
            onClick={togglePlay}
          />

          {/* Dark Overlay Vignette for Video Title readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

          {/* Top Info Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <div className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-sm border border-zinc-700/60 text-xs text-[#f3e5ab] font-bold tracking-wider uppercase">
              {activeVideo.category}
            </div>
            <div className="px-2.5 py-0.5 bg-black/70 backdrop-blur-md rounded-sm text-zinc-300 text-xs font-mono">
              HD EVENT REEL • {activeVideo.duration}
            </div>
          </div>

          {/* Center Play Overlay Button when paused */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 z-20 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Bottom Video Controls and Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl sm:text-4xl text-white tracking-wide">
                {activeVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl font-light mt-1">
                {activeVideo.description}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md p-1.5 rounded-sm border border-zinc-800">
              <button
                onClick={togglePlay}
                className="p-2 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-sm transition-colors cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-sm transition-colors cursor-pointer"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
              </button>

              <button
                onClick={() => openLightbox(activeVideo)}
                className="p-2 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-sm transition-colors cursor-pointer"
                title="Fullscreen Theater Mode"
                aria-label="Enter Fullscreen Theater Mode"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Editorial Collage Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-6">
          {VIDEO_SHOWCASE.map((item) => {
            const isSelected = item.id === activeVideo.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className={`text-left p-3 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141724] border-[#d4af37] shadow-lg shadow-[#d4af37]/15'
                    : 'bg-[#0e1017] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="relative aspect-video w-full rounded overflow-hidden bg-black border border-zinc-800 mb-2.5">
                  <img src={item.posterSrc} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded text-[9px] font-mono text-zinc-300">
                    {item.duration}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-[#d4af37] font-bold tracking-wider uppercase truncate">
                    {item.category}
                  </div>
                  <div className="font-display text-sm sm:text-base text-white truncate tracking-wide mt-0.5">
                    {item.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Theater Lightbox */}
      {isLightboxOpen && (
        <div
          id="video-theater-modal"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 rounded-full bg-zinc-900/90 text-white hover:bg-zinc-800 border border-zinc-700 z-50 cursor-pointer"
            aria-label="Close Theater Player"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded overflow-hidden shadow-2xl border border-zinc-800 flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={lightboxVideoRef}
              src={activeVideo.videoSrc}
              poster={activeVideo.posterSrc}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
