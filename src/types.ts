export type BookingStatus = 'NEW' | 'CONTACTED' | 'QUOTED' | 'CONFIRMED' | 'CANCELLED';

export interface BookingEnquiry {
  id: string;
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate: string;
  city: string;
  venue: string;
  guestCount: string;
  services: string[];
  message: string;
  status: BookingStatus;
  createdAt: string;
}

export interface EventCategory {
  id: string;
  title: string;
  hindiTitle?: string;
  badge: string;
  description: string;
  posterImage: string;
  highlightFeatures: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
}
