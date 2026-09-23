import { BookingEnquiry } from '../types';

const STORAGE_KEY = 'original_devil_sound_enquiries';

// Verified business contact constants from official banners
export const BUSINESS_CONTACT = {
  name: 'Original Devil Sound',
  phone1: '+91 8120167078',
  phone2: '+91 7024215327',
  phone3: '+91 7509071668',
  phone1Raw: '8120167078',
  phone2Raw: '7024215327',
  phone3Raw: '7509071668',
  whatsappRaw: '918120167078',
  whatsappRaw2: '917024215327',
  whatsappRaw3: '917509071668',
  allPhones: [
    { label: 'Primary Contact', number: '+91 8120167078', raw: '8120167078', waRaw: '918120167078' },
    { label: 'Booking Line 2', number: '+91 7024215327', raw: '7024215327', waRaw: '917024215327' },
    { label: 'Booking Line 3', number: '+91 7509071668', raw: '7509071668', waRaw: '917509071668' },
  ],
  instagramHandle: '@original_devil_sound',
  instagramUrl: 'https://instagram.com/original_devil_sound',
  email: 'bookings@originaldevilsound.com',
  location: 'Barwani, Madhya Pradesh',
  tagline: 'EK FAMILY EK TRUST • EK NAAM DEVIL'
};

class BookingService {
  /**
   * Save an enquiry to local storage layer
   */
  async submitEnquiry(data: Omit<BookingEnquiry, 'id' | 'status' | 'createdAt'>): Promise<{ success: boolean; enquiry: BookingEnquiry }> {
    // Simulate slight network delay
    await new Promise((resolve) => setTimeout(resolve, 400));

    const newEnquiry: BookingEnquiry = {
      ...data,
      id: 'ODS-' + Date.now().toString().slice(-6) + '-' + Math.floor(Math.random() * 1000),
      status: 'NEW',
      createdAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const list: BookingEnquiry[] = stored ? JSON.parse(stored) : [];
      list.unshift(newEnquiry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // Storage fallback
    }

    return {
      success: true,
      enquiry: newEnquiry
    };
  }

  /**
   * Generates formatted WhatsApp click-to-chat URL with prefilled enquiry details
   */
  generateWhatsAppLink(enquiry: BookingEnquiry, targetWaRaw: string = BUSINESS_CONTACT.whatsappRaw): string {
    const lines = [
      'Hi Original Devil Sound,',
      '',
      'I would like to enquire about booking your DJ/event services.',
      '',
      `Event: ${enquiry.eventType}`,
      `Date: ${enquiry.eventDate}`,
      `Location: ${enquiry.city}${enquiry.venue ? ` (${enquiry.venue})` : ''}`,
      `Guests: ${enquiry.guestCount}`,
      '',
      'Services required:',
      ...(enquiry.services.length > 0 ? enquiry.services.map((s) => `• ${s}`) : ['• Complete Sound & Light Setup']),
      '',
      `Name: ${enquiry.name}`,
      `Phone: ${enquiry.phone}${enquiry.whatsapp && enquiry.whatsapp !== enquiry.phone ? ` (WhatsApp: ${enquiry.whatsapp})` : ''}`,
      ...(enquiry.email ? [`Email: ${enquiry.email}`] : []),
      ...(enquiry.message ? ['', `Additional Details: ${enquiry.message}`] : []),
      '',
      'Please let me know the availability and quotation.'
    ];

    const text = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${targetWaRaw}?text=${text}`;
  }

  /**
   * Get all local enquiries
   */
  getStoredEnquiries(): BookingEnquiry[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }
}

export const bookingService = new BookingService();
