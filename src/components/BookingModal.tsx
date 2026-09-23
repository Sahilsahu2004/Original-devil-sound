import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Send, MessageCircle, Calendar, MapPin, Users, Music2, User, Sparkles, CheckCircle2 } from 'lucide-react';
import { AVAILABLE_SERVICES, GUEST_COUNT_OPTIONS } from '../data/eventData';
import { bookingService, BUSINESS_CONTACT } from '../services/bookingService';
import { BookingEnquiry, EventCategory } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEvent?: EventCategory | null;
}

const EVENT_TYPE_OPTIONS = [
  'Wedding',
  'Birthday',
  'Private Party',
  'College Event',
  'Corporate Event',
  'Night Event',
  'Live Event',
  'Other'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedEvent
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<BookingEnquiry | null>(null);
  const [showCallMenu, setShowCallMenu] = useState(false);

  // Form State
  const [eventType, setEventType] = useState(preselectedEvent?.title || EVENT_TYPE_OPTIONS[0]);
  const [eventDate, setEventDate] = useState('');
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');
  const [guestCount, setGuestCount] = useState(GUEST_COUNT_OPTIONS[2]);
  const [services, setServices] = useState<string[]>([AVAILABLE_SERVICES[0], AVAILABLE_SERVICES[1]]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  // Update event type if preselectedEvent changes
  useEffect(() => {
    if (preselectedEvent) {
      setEventType(preselectedEvent.title);
    }
  }, [preselectedEvent]);

  // Sync WhatsApp with phone if checked
  useEffect(() => {
    if (sameAsPhone) {
      setWhatsapp(phone);
    }
  }, [phone, sameAsPhone]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      if (services.length > 1) {
        setServices(services.filter((s) => s !== srv));
      }
    } else {
      setServices([...services, srv]);
    }
  };

  const handleNextStep = () => {
    setValidationError('');

    // Step validations
    if (step === 1 && !eventType) {
      setValidationError('Please select an event type.');
      return;
    }
    if (step === 2 && !eventDate) {
      setValidationError('Please select your tentative event date.');
      return;
    }
    if (step === 3 && !city.trim()) {
      setValidationError('Please enter the event city or town.');
      return;
    }
    if (step === 5 && services.length === 0) {
      setValidationError('Please select at least one required service.');
      return;
    }
    if (step === 6) {
      if (!name.trim()) {
        setValidationError('Please enter your full name.');
        return;
      }
      if (!phone.trim() || phone.trim().length < 8) {
        setValidationError('Please enter a valid contact phone number.');
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, 8));
  };

  const handlePrevStep = () => {
    setValidationError('');
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationError('');

    try {
      const res = await bookingService.submitEnquiry({
        name,
        phone,
        whatsapp: sameAsPhone ? phone : whatsapp,
        email,
        eventType,
        eventDate,
        city,
        venue,
        guestCount,
        services,
        message
      });

      if (res.success) {
        setSubmittedEnquiry(res.enquiry);
      }
    } catch {
      setValidationError('Could not record enquiry. Please contact us via phone or WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setSubmittedEnquiry(null);
    setShowCallMenu(false);
    onClose();
  };

  // Get today date formatted as YYYY-MM-DD for date min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e1017] border border-zinc-800 rounded-sm shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-zinc-800/80 flex items-center justify-between">
          <div>
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ORIGINAL DEVIL SOUND BOOKING</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mt-1">
              {submittedEnquiry ? 'ENQUIRY CONFIRMATION' : 'RESERVE YOUR EVENT DATE'}
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submittedEnquiry ? (
            /* ================= Confirmation Screen ================= */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <div className="inline-block px-3 py-1 bg-zinc-900 border border-[#d4af37]/40 rounded text-xs font-mono text-[#f3e5ab] tracking-wider mb-2">
                  STATUS: ENQUIRY RECEIVED • {submittedEnquiry.id}
                </div>
                <h4 className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                  YOUR ENQUIRY IS IN.
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 font-light max-w-md mx-auto leading-relaxed">
                  Thank you for choosing <strong className="text-white">Original Devil Sound</strong>. We will review your event date ({submittedEnquiry.eventDate}) and venue requirements in {submittedEnquiry.city}.
                </p>
              </div>

              {/* Enquiry Summary Pill Box */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-zinc-400">Client:</span>
                  <span className="text-white font-medium">{submittedEnquiry.name}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-zinc-400">Event:</span>
                  <span className="text-white font-medium">{submittedEnquiry.eventType}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-white font-medium">{submittedEnquiry.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Services:</span>
                  <span className="text-[#f3e5ab] font-medium">{submittedEnquiry.services.length} Selected</span>
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-xs text-amber-200/90 max-w-md mx-auto">
                Note: Dates are secured upon mutual scheduling confirmation with our team.
              </div>

              {/* Confirmation Action Buttons: CHAT ON WHATSAPP | CALL NOW | BACK TO WEBSITE */}
              <div className="flex flex-col gap-3 pt-2 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={bookingService.generateWhatsAppLink(submittedEnquiry)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:flex-1 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>

                  <button
                    onClick={() => setShowCallMenu(!showCallMenu)}
                    className="w-full sm:flex-1 px-5 py-3.5 bg-[#d4af37] hover:bg-[#e5c158] text-black font-extrabold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
                  >
                    <span>CALL NOW</span>
                  </button>
                </div>

                {/* Dropdown/Expanded Call Numbers */}
                {showCallMenu && (
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-sm space-y-2 animate-fade-in text-left">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1 text-center">
                      Choose Booking Line to Call:
                    </span>
                    {BUSINESS_CONTACT.allPhones.map((ph) => (
                      <a
                        key={ph.raw}
                        href={`tel:${ph.raw}`}
                        className="flex items-center justify-between px-3 py-2 bg-zinc-950 hover:bg-[#d4af37]/20 border border-zinc-800 hover:border-[#d4af37] rounded-sm text-xs text-zinc-200 hover:text-white transition-colors"
                      >
                        <span className="font-medium">{ph.label}</span>
                        <span className="font-mono text-[#d4af37] font-semibold">{ph.number}</span>
                      </a>
                    ))}
                  </div>
                )}

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs uppercase tracking-wider rounded-sm border border-zinc-800 transition-colors"
                >
                  BACK TO WEBSITE
                </button>
              </div>
            </div>
          ) : (
            /* ================= Step-by-Step Form ================= */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                  <span>Step {step} of 8</span>
                  <span className="text-[#d4af37]">
                    {step === 1 && 'Event Type'}
                    {step === 2 && 'Event Date'}
                    {step === 3 && 'Location & Venue'}
                    {step === 4 && 'Guest Attendance'}
                    {step === 5 && 'Services Required'}
                    {step === 6 && 'Your Contact Info'}
                    {step === 7 && 'Special Notes'}
                    {step === 8 && 'Review & Send'}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#d4af37] transition-all duration-300 ease-out"
                    style={{ width: `${(step / 8) * 100}%` }}
                  />
                </div>
              </div>

              {validationError && (
                <div className="p-3 bg-red-950/60 border border-red-800/80 rounded text-red-200 text-xs">
                  {validationError}
                </div>
              )}

              {/* STEP 1: Event Type */}
              {step === 1 && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300">
                    What type of event are you hosting?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {EVENT_TYPE_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setEventType(opt)}
                        className={`p-3 text-left rounded-sm border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          eventType === opt
                            ? 'bg-[#1a1d29] border-[#d4af37] text-white'
                            : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span>{opt}</span>
                        {eventType === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Date Picker */}
              {step === 2 && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300">
                    When is your event taking place?
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3.5 px-4 text-white text-sm focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <p className="text-xs text-zinc-400 font-light">
                    Tentative dates are fine. We will cross-check with our sound truck and DJ schedule.
                  </p>
                </div>
              )}

              {/* STEP 3: Location & Venue */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                      City / Town / District *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Barwani, Indore, Sendhwa, Khargone..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3 px-4 text-white text-sm focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                      Venue Name or Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Royal Palace Garden, Main Market Ground"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3 px-4 text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Guest Attendance */}
              {step === 4 && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300">
                    Estimated Crowd / Guest Size
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {GUEST_COUNT_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setGuestCount(opt)}
                        className={`p-3.5 text-left rounded-sm border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          guestCount === opt
                            ? 'bg-[#1a1d29] border-[#d4af37] text-white'
                            : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#d4af37]" />
                          <span>{opt} People</span>
                        </div>
                        {guestCount === opt && <Check className="w-4 h-4 text-[#d4af37]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Services Required */}
              {step === 5 && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300">
                    Select Required Services (Multi-select)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {AVAILABLE_SERVICES.map((srv) => {
                      const isSelected = services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-3 text-left rounded-sm border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#1a1d29] border-[#d4af37] text-white'
                              : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                          }`}
                        >
                          <span>{srv}</span>
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isSelected ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'border-zinc-700'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: Client Contact Info */}
              {step === 6 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3 px-4 text-white text-sm focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3 px-4 text-white text-sm focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold tracking-wider uppercase text-zinc-300">
                        WhatsApp Number
                      </label>
                      <label className="text-xs text-zinc-400 flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sameAsPhone}
                          onChange={(e) => setSameAsPhone(e.target.checked)}
                          className="accent-[#d4af37]"
                        />
                        <span>Same as phone</span>
                      </label>
                    </div>
                    {!sameAsPhone && (
                      <input
                        type="tel"
                        placeholder="WhatsApp contact"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3 px-4 text-white text-sm focus:outline-none"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3 px-4 text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 7: Special Notes */}
              {step === 7 && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold tracking-wider uppercase text-zinc-300">
                    Additional Requirements or Special Song Lists
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the celebration timing, specific artist tracks, procession route, or any custom setup instructions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#d4af37] rounded-sm py-3 px-4 text-white text-sm focus:outline-none resize-none"
                  />
                  <p className="text-xs text-zinc-400 font-light">
                    Our sound engineers review all logistics to deliver the optimal power rig and truss dimensions.
                  </p>
                </div>
              )}

              {/* STEP 8: Review & Send */}
              {step === 8 && (
                <div className="space-y-4">
                  <div className="bg-zinc-900/90 border border-zinc-800 rounded-sm p-4 text-xs space-y-2.5">
                    <div className="font-display text-lg text-white tracking-wide border-b border-zinc-800 pb-2 flex items-center justify-between">
                      <span>ENQUIRY SUMMARY</span>
                      <span className="text-[#d4af37] text-xs font-mono">DRAFT</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-zinc-500 block">Event Type:</span>
                        <span className="text-white font-medium">{eventType}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Event Date:</span>
                        <span className="text-white font-medium">{eventDate}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Location:</span>
                        <span className="text-white font-medium">{city} {venue ? `(${venue})` : ''}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Expected Crowd:</span>
                        <span className="text-white font-medium">{guestCount}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Client:</span>
                        <span className="text-white font-medium">{name}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Phone:</span>
                        <span className="text-white font-medium">{phone}</span>
                      </div>
                    </div>

                    <div className="border-t border-zinc-800 pt-2">
                      <span className="text-zinc-500 block mb-1">Services:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {services.map((s) => (
                          <span key={s} className="px-2 py-0.5 bg-zinc-800 text-zinc-200 rounded text-[11px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {message && (
                      <div className="border-t border-zinc-800 pt-2">
                        <span className="text-zinc-500 block">Notes:</span>
                        <span className="text-zinc-300 italic">{message}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider rounded-sm border border-zinc-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 8 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#e5c158] text-black text-xs font-extrabold uppercase tracking-wider rounded-sm flex items-center gap-1.5 transition-all shadow-md shadow-[#d4af37]/20 cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#d4af37] text-black text-xs font-extrabold uppercase tracking-widest rounded-sm flex items-center gap-2 transition-all shadow-xl shadow-[#d4af37]/30 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'SUBMITTING...' : 'SEND BOOKING ENQUIRY'}</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
