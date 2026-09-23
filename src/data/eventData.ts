import { EventCategory, GalleryItem, VideoShowcaseItem } from '../types';

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'weddings',
    title: 'Wedding Night & Sangeet',
    hindiTitle: 'Wedding Night Setup',
    badge: 'ROYAL CELEBRATION',
    description: 'High-end concert sound, dual DEVIL neon truss, and intelligent moving head light show crafted for royal wedding processions, grand receptions, and sangeet nights.',
    posterImage: '/assets/booking/wedding-poster.png',
    highlightFeatures: [
      'High-Power Line Array Sound Rig',
      'Intelligent Moving Head Light Show',
      'Dual DEVIL Neon Signature Truss',
      'Cold Pyro & Sparkler Integration'
    ]
  },
  {
    id: 'birthday',
    title: 'Birthday Bash & VIP Celebration',
    hindiTitle: 'Birthday Bash Setup',
    badge: 'EXCLUSIVE PARTY',
    description: 'Turn resorts, lawns, and outdoor venues into private concert stages with thunderous low frequencies, synchronized beams, and customized party tracks.',
    posterImage: '/assets/booking/birthday-poster.png',
    highlightFeatures: [
      'Heavy Bass Punch for Open Grounds',
      'Moving Head Beams & Strobe Show',
      'Custom Birthday Neon Backdrop',
      'Seamless Genre Transitions'
    ]
  },
  {
    id: 'holi',
    title: 'Holi Party & Color Festival',
    hindiTitle: 'Holi Party Setup',
    badge: 'FESTIVAL OF ENERGY',
    description: 'Massive mobile sound truck with heavy subwoofers engineered to power open-ground crowds through color storms and non-stop celebration drops.',
    posterImage: '/assets/booking/holi-poster.png',
    highlightFeatures: [
      'Heavy Sub-Bass for Open Air Crowds',
      'Weather-Resistant Mobile Sound Rig',
      'High-Decibel Clarity Range',
      'Crowd Procession Coordination'
    ]
  },
  {
    id: 'navratri',
    title: 'Navratri Night & Garba Mahotsav',
    hindiTitle: 'Garba & Live Set',
    badge: 'CULTURAL SPECTACLE',
    description: 'Precision acoustic tuning and sweeping golden beam illuminations tailored for thousands of synchronized garba dancers, traditional rhythms, and midnight drops.',
    posterImage: '/assets/booking/navratri-poster.png',
    highlightFeatures: [
      'Even Sound Dispersion Across Grounds',
      'Warm Golden Beam Illuminations',
      'Live Vocal & Dhol Sound Balancing',
      'Custom Folk-EDM Transition Mastery'
    ]
  },
  {
    id: 'durga-puja',
    title: 'Durga Puja Special Event',
    hindiTitle: 'Durga Puja Special',
    badge: 'DIVINE ENERGY',
    description: 'Majestic festival stage and mobile rig featuring towering speaker columns, atmospheric fog, and skyward beam lights honoring cultural traditions.',
    posterImage: '/assets/booking/durga-puja-poster.png',
    highlightFeatures: [
      'Grand Procession Audio Rigging',
      'Skyward Moving Beams & Lights',
      'Devotional & Festive Sound Curation',
      'Heavy-Duty Mobile Truck Platform'
    ]
  },
  {
    id: 'ganesh-chaturthi',
    title: 'Ganesh Chaturthi Special Live Set',
    hindiTitle: 'Ganesh Utsav Live Set',
    badge: 'FESTIVAL POWER',
    description: 'Chest-thumping bass and laser arrays lighting up road yatras and festival pandals with electrifying beats and unmatched energy.',
    posterImage: '/assets/booking/ganesh-chaturthi-poster.png',
    highlightFeatures: [
      'High-Power Acoustic Bass Bins',
      'Synchronized Laser Beam Projection',
      'Yatra & Pandal Stage Sound Rig',
      'Full-Night Continuous Performance'
    ]
  },
  {
    id: 'mela-night',
    title: 'Mela Night & Community Festival',
    hindiTitle: 'Mela Night Setup',
    badge: 'MASS GATHERING',
    description: 'Extensive sound coverage engineered for large fairgrounds, carnival crowds, and community festivals with crystal-clear vocal and musical projection.',
    posterImage: '/assets/booking/mela-night-poster.png',
    highlightFeatures: [
      'Long-Throw Line Array Dispersion',
      'High-Output Festive Illumination',
      'Durable All-Weather Rigging',
      'Experienced Sound Crew Oversight'
    ]
  },
  {
    id: 'eid',
    title: 'Eid Celebration & Procession',
    hindiTitle: 'Eid Mubarak Special',
    badge: 'CELEBRATION OF JOY',
    description: 'Festive illumination and high-fidelity sound systems for community celebrations, night gatherings, and joyous mobile processions.',
    posterImage: '/assets/booking/eid-celebration-poster.png',
    highlightFeatures: [
      'High-Fidelity Audio Balancing',
      'Golden Ambient Truss Lighting',
      'Mobile Sound Truck Procession',
      '100% Verified Reliable Service'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Barwani Mobile Sound Truck',
    category: 'Mobile DJ Rig',
    image: '/assets/gallery/gallery-truck-eicher-day.png',
    aspect: 'tall',
    caption: 'The signature Devil Sound heavy acoustic truck (Barwani MP.09.GF.1104) fully rigged for festive tours with owner Sandeep Chouhan.'
  },
  {
    id: 'gal-2',
    title: 'Skyward Night Laser Cannon',
    category: 'Festival Lighting',
    image: '/assets/gallery/gallery-lasers-beams-1.png',
    aspect: 'tall',
    caption: 'High-output green and gold laser beams cutting through night skies during a crowded road procession.'
  },
  {
    id: 'gal-3',
    title: 'Crowd In Ecstasy',
    category: 'Live Energy',
    image: '/assets/gallery/gallery-crowd-night-1.png',
    aspect: 'square',
    caption: 'Thousands of attendees cheering and dancing in front of the illuminated DEVIL Sound mobile rig.'
  },
  {
    id: 'gal-4',
    title: 'Dual DEVIL Neon Truss Frontage',
    category: 'Stage Branding',
    image: '/assets/gallery/gallery-devil-neon-garland.png',
    aspect: 'square',
    caption: 'Signature DEVIL neon sign with marigold garland detailing on the concert speaker enclosure.'
  },
  {
    id: 'gal-5',
    title: 'Devil Family Milestone Celebration',
    category: 'Community',
    image: '/assets/gallery/gallery-devil-family-2k.png',
    aspect: 'tall',
    caption: 'Ek Family Ek Trust, Ek Naam Devil. Celebrating regional supporter milestones in Barwani.'
  },
  {
    id: 'gal-6',
    title: 'Intense Beam Array at Night',
    category: 'Laser Show',
    image: '/assets/gallery/gallery-lasers-beams-2.png',
    aspect: 'tall',
    caption: 'Multidirectional DMX moving heads and fog cannons erupting during the peak drop of a festival night.'
  },
  {
    id: 'gal-7',
    title: 'Concert Mainstage Lightshow',
    category: 'Stage Rigging',
    image: '/assets/gallery/gallery-stage-neon.png',
    aspect: 'wide',
    caption: 'Full-scale stage production with golden beam heads, stage monitors, and illuminated trusses.'
  },
  {
    id: 'gal-8',
    title: 'Open Ground Road Tour',
    category: 'Road Procession',
    image: '/assets/gallery/gallery-truck-crowd-day.png',
    aspect: 'wide',
    caption: 'Daytime street procession moving through celebration grounds with heavy acoustic subwoofers.'
  },
  {
    id: 'gal-9',
    title: 'Heavy Structural Rigging Detail',
    category: 'Engineering',
    image: '/assets/gallery/gallery-truck-truss-day.png',
    aspect: 'tall',
    caption: 'Concert-grade aluminum truss structure securing high-SPL speaker arrays on the mobile rig.'
  },
  {
    id: 'gal-10',
    title: 'Sunset Procession March',
    category: 'Procession Tour',
    image: '/assets/gallery/gallery-truck-sunset.png',
    aspect: 'square',
    caption: 'Golden hour setup in Madhya Pradesh ready for the evening musical rally.'
  },
  {
    id: 'gal-11',
    title: 'Sub-Bass Driver Array Detail',
    category: 'Engineering',
    image: '/assets/gallery/gallery-rig-detail-1.png',
    aspect: 'square',
    caption: 'Close-up of the custom high-SPL subwoofer enclosures powering the Devil Sound mobile rig.'
  },
  {
    id: 'gal-12',
    title: 'Custom Acoustic Rig Construction',
    category: 'Engineering',
    image: '/assets/gallery/gallery-rig-detail-2.png',
    aspect: 'square',
    caption: 'Internal engineering shot of the specialized speaker array mounting and cabling work.'
  }
];

export const VIDEO_SHOWCASE: VideoShowcaseItem[] = [
  {
    id: 'vid-1',
    title: 'Concert Atmosphere & Devil Lightshow',
    duration: '0:15',
    category: 'Featured Performance',
    description: 'Experience the electric atmosphere, high-output moving beams, and crowd frenzy at an Original Devil Sound headline event.',
    videoSrc: '/assets/videos/hero-desktop.mp4',
    posterSrc: '/assets/videos/hero-poster.jpg'
  },
  {
    id: 'vid-2',
    title: 'Mobile Rig Road Tour on Eicher Truck',
    duration: '0:18',
    category: 'Sound Truck Tour',
    description: 'Live field recording of the Original Devil Sound heavy mobile truck powering through regional celebrations.',
    videoSrc: '/assets/videos/event-truck-tour.mp4',
    posterSrc: '/assets/gallery/gallery-truck-eicher-day.png'
  },
  {
    id: 'vid-3',
    title: 'Live Stage Mix & Bass Drops',
    duration: '0:12',
    category: 'DJ Performance',
    description: 'Behind the decks: live electronic track mixing with chest-thumping bass bins and crowd reaction.',
    videoSrc: '/assets/videos/dj-live-mixing.mp4',
    posterSrc: '/assets/gallery/gallery-stage-neon.png'
  },
  {
    id: 'vid-4',
    title: 'Night Street Procession with Lasers',
    duration: '0:10',
    category: 'Mobile Rig Live',
    description: 'High-intensity laser arrays piercing the night sky during an energetic street rally.',
    videoSrc: '/assets/videos/laser-truck-reel-1.mp4',
    posterSrc: '/assets/gallery/gallery-lasers-beams-1.png'
  },
  {
    id: 'vid-5',
    title: 'Festival Crowd Celebration',
    duration: '0:12',
    category: 'Live Energy',
    description: 'Pure excitement as thousands of celebration attendees unite under the beam lights.',
    videoSrc: '/assets/videos/laser-truck-reel-2.mp4',
    posterSrc: '/assets/gallery/gallery-crowd-night-1.png'
  },
  {
    id: 'vid-6',
    title: 'Multi-Laser Sky Spectacle',
    duration: '0:15',
    category: 'Laser Performance',
    description: 'Triple laser cannon array piercing the night atmosphere during a peak festival drop.',
    videoSrc: '/assets/videos/laser-truck-reel-3.mp4',
    posterSrc: '/assets/gallery/gallery-lasers-beams-2.png'
  },
  {
    id: 'vid-7',
    title: 'Devil Sound Truck in Motion',
    duration: '0:08',
    category: 'Mobile Rig',
    description: 'The Original Devil Sound mobile truck rolling through a street celebration with full audio.',
    videoSrc: '/assets/videos/laser-truck.mp4',
    posterSrc: '/assets/gallery/gallery-truck-eicher-day.png'
  },
  {
    id: 'vid-8',
    title: 'Live Crowd Energy Peak',
    duration: '0:09',
    category: 'Crowd Reaction',
    description: 'Unfiltered crowd energy captured at the peak drop of a Devil Sound headline performance.',
    videoSrc: '/assets/videos/live-crowd.mp4',
    posterSrc: '/assets/gallery/gallery-crowd-hands.png'
  }
];

export const EXPERIENCE_PILLARS = [
  {
    number: '01',
    title: 'DJ PERFORMANCE',
    subtitle: 'Rhythm & Energy Control',
    description: 'High-octane live mixing spanning Bollywood, EDM, Punjabi, commercial hits, and folk dance anthems that keep the dance floor packed until the final second.'
  },
  {
    number: '02',
    title: 'PREMIUM SOUND RIG',
    subtitle: 'Chest-Thumping Acoustic Power',
    description: 'Custom engineered high-SPL speaker arrays, specialized sub-bass enclosures, and crystal-clear high frequency drivers built to cut through massive crowd noise.'
  },
  {
    number: '03',
    title: 'LIGHTING & LASER SHOW',
    subtitle: 'Architectural & Concert Beams',
    description: 'Synchronized DMX moving heads, high-output laser projectors, strobes, and amber neon fixtures that convert any space into an immersive festival ground.'
  },
  {
    number: '04',
    title: 'MOBILE SOUND TRUCK',
    subtitle: 'Road Procession Dominance',
    description: 'Fully self-contained heavy-duty mobile sound truck engineered specifically for street processions, yatras, festivals, and mobile celebrations.'
  },
  {
    number: '05',
    title: 'STAGE & TRUSS INFRASTRUCTURE',
    subtitle: 'Concert-Grade Structural Rigging',
    description: 'Modular heavy-gauge aluminum trusses, customized neon logo backdrops, LED wall integration, and safe electrical power distribution.'
  },
  {
    number: '06',
    title: 'EVENT ENTERTAINMENT COORDINATION',
    subtitle: 'End-to-End Execution',
    description: 'Seamless event stage timing, crowd engagement, MC hosting support, and technical reliability throughout your high-stakes celebration.'
  }
];

export const AVAILABLE_SERVICES = [
  'DJ Performance',
  'Sound System',
  'Lighting',
  'LED Screen',
  'Stage',
  'MC / Host',
  'Event Management',
  'Other'
];

export const GUEST_COUNT_OPTIONS = [
  'Less than 50',
  '50–100',
  '100–250',
  '250–500',
  '500+'
];
