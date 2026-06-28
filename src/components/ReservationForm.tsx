import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CalendarDays, 
  Phone, 
  User, 
  Users, 
  FileText, 
  CheckCircle, 
  Smartphone, 
  Printer, 
  ArrowRight, 
  X, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Ticket 
} from "lucide-react";
import { ReservationData } from "../types";

export default function ReservationForm() {
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    phone: "",
    date: "",
    time: "07:30 PM",
    guests: 2,
    specialRequest: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingTicket, setBookingTicket] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Monitor custom events to launch reservation modal from headers, hero, or menus
  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    window.addEventListener("open-booking-modal", handleOpenModal);
    return () => window.removeEventListener("open-booking-modal", handleOpenModal);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Today's date in YYYY-MM-DD for gating the input
  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) || 2 : value
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API response / Database hook
    setTimeout(() => {
      const generatedId = `LF-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingTicket({
        ...formData,
        id: generatedId,
        createdAt: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const generateWhatsAppUrl = (ticket: any) => {
    const messageText = `Hello La'Fika by Raghuvir! *Reservation Request* \n\n*Reference ID:* ${ticket.id}\n*Name:* ${ticket.name}\n*Phone:* ${ticket.phone}\n*Date:* ${ticket.date}\n*Time:* ${ticket.time}\n*Guests:* ${ticket.guests} Pax\n*Special Request:* ${ticket.specialRequest || "None"}\n\nPlease confirm our booking. Thank you!`;
    return `https://wa.me/919822700330?text=${encodeURIComponent(messageText)}`;
  };

  return (
    <section id="reservation" className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative vectors simulating luxury lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown-dark/10 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Booking Guidelines & Ambience Pitch */}
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
                SECURE SEATING
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-6 leading-tight">
              Reserve Your <br />
              <span className="gold-gradient-text">Private Sanctuary</span>
            </h2>

            <p className="text-white/70 font-light text-sm md:text-base leading-relaxed mb-8">
              La'Fika operates with limited table capacities daily to preserve our signature warm atmosphere and ensure absolute culinary excellence. Secure your reservation online today for immediate queue prioritization.
            </p>

            {/* Practical info cards */}
            <div className="space-y-4">
              <div className="p-5 glass-card border border-gold/15 rounded-sm bg-[#1a1a1a]/40">
                <h4 className="font-serif font-bold text-sm text-gold uppercase tracking-wider mb-1">
                  Table Hold Window
                </h4>
                <p className="text-cream/60 text-xs leading-relaxed">
                  Reserved tables are strictly held for a maximum of 15 minutes past the designated booking time. Please notify us if you are running behind.
                </p>
              </div>

              <div className="p-5 glass-card border border-gold/15 rounded-sm bg-[#1a1a1a]/40">
                <h4 className="font-serif font-bold text-sm text-gold uppercase tracking-wider mb-1">
                  Private Celebrations
                </h4>
                <p className="text-cream/60 text-xs leading-relaxed">
                  For groups exceeding 12 guests or complete space buyout bookings, kindly submit custom guidelines or contact Raghuvir directly.
                </p>
              </div>

              <div className="p-5 glass-card border border-gold/15 rounded-sm bg-[#1a1a1a]/40">
                <h4 className="font-serif font-bold text-sm text-gold uppercase tracking-wider mb-1">
                  Dining Hours
                </h4>
                <p className="text-cream/60 text-xs leading-relaxed">
                  Lunch: 12:30 PM &ndash; 03:30 PM | Dinner: 07:00 PM &ndash; 11:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Gorgeous Teaser Card that Launches the Modal */}
          <div className="lg:col-span-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 md:p-12 rounded-sm border border-gold/30 bg-[#1a1a1a]/70 relative overflow-hidden flex flex-col justify-between h-full shadow-2xl"
              id="reservation-teaser-panel"
            >
              {/* Dynamic light glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full filter blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gold/10 text-gold rounded-sm border border-gold/20">
                    <Ticket size={24} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-green-400 font-mono font-bold px-3 py-1 bg-green-950/80 border border-green-500/30 rounded-full animate-pulse">
                    Live Booking Active
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-white font-bold mb-4">
                  Seating Priority Portal
                </h3>

                <p className="text-cream/70 text-sm font-light leading-relaxed mb-8">
                  Launch our digital reservation desk to secure a dedicated wicker lamp booth, select your favorite multicuisine dining times, and receive a printable secure pass instantly.
                </p>

                {/* Micro-specs inside bento box */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-3 bg-black/40 rounded-sm border border-gold/10 flex items-center space-x-2.5">
                    <Clock size={16} className="text-gold" />
                    <div>
                      <span className="text-[9px] text-cream/40 block leading-none font-mono uppercase">Avg Speed</span>
                      <span className="text-xs font-semibold text-white">Instant Confirmation</span>
                    </div>
                  </div>
                  <div className="p-3 bg-black/40 rounded-sm border border-gold/10 flex items-center space-x-2.5">
                    <ShieldCheck size={16} className="text-gold" />
                    <div>
                      <span className="text-[9px] text-cream/40 block leading-none font-mono uppercase">Security</span>
                      <span className="text-xs font-semibold text-white">WhatsApp Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central CTA button with custom hover styles */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4.5 bg-gold hover:bg-gold-light text-charcoal font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex justify-center items-center space-x-3 shadow-xl relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98]"
                id="launch-reservation-modal-btn"
              >
                {/* Button shimmer effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <Sparkles size={14} className="text-charcoal" />
                <span>Open Reservation Desk</span>
                <ArrowRight size={14} className="text-charcoal" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* LUXURIOUS POPUP MODAL FOR RESERVATION & TICKET */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            id="booking-portal-lightbox"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-charcoal border border-gold/30 max-w-xl md:max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl relative my-8"
              id="booking-modal-card"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/60 hover:bg-black text-white hover:text-gold rounded-full transition-colors focus:outline-none border border-gold/15"
                aria-label="Close Reservation Desk"
                id="close-booking-modal-btn"
              >
                <X size={18} />
              </button>

              <AnimatePresence mode="wait">
                {!bookingTicket ? (
                  /* MODAL RESERVATION FORM SCREEN */
                  <motion.div
                    key="booking-modal-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 md:p-12"
                  >
                    <div className="mb-6">
                      <span className="text-[9px] font-mono tracking-[0.25em] text-gold font-bold uppercase block mb-1">SECURE TABLE RESERVATION</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-white font-bold">Priority Reservation Desk</h3>
                      <p className="text-cream/60 text-xs mt-1">Provide your dining details. We will process your request and generate your printable entry ticket instantly.</p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Name field */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-gold font-bold flex items-center space-x-1.5">
                            <User size={12} />
                            <span>Guest Full Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Shruti Patekar"
                            className="w-full px-4 py-3 bg-black/40 border border-gold/15 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder-white/20"
                          />
                        </div>

                        {/* Phone field */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-gold font-bold flex items-center space-x-1.5">
                            <Phone size={12} />
                            <span>Phone Number</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +91 9822700330"
                            className="w-full px-4 py-3 bg-black/40 border border-gold/15 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder-white/20"
                          />
                        </div>

                        {/* Date field */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-gold font-bold flex items-center space-x-1.5">
                            <CalendarDays size={12} />
                            <span>Preferred Date</span>
                          </label>
                          <input
                            type="date"
                            name="date"
                            required
                            min={getTodayDateString()}
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-black/40 border border-gold/15 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder-white/20"
                          />
                        </div>

                        {/* Guests Selector */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-gold font-bold flex items-center space-x-1.5">
                            <Users size={12} />
                            <span>Number of Guests</span>
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-black/40 border border-gold/15 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white/90 select-dark"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests (Couple)</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests (Standard)</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6+ Guests (Family)</option>
                            <option value="12">12+ Guests (Celebration)</option>
                          </select>
                        </div>

                        {/* Preferred Time */}
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-gold font-bold flex items-center space-x-1.5">
                            <CalendarDays size={12} />
                            <span>Dining Time Slot</span>
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-black/40 border border-gold/15 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white/90 select-dark"
                          >
                            <optgroup label="Lunch Slots">
                              <option value="12:30 PM">12:30 PM</option>
                              <option value="01:30 PM">01:30 PM</option>
                              <option value="02:30 PM">02:30 PM</option>
                            </optgroup>
                            <optgroup label="Dinner Slots">
                              <option value="07:00 PM">07:00 PM</option>
                              <option value="07:30 PM">07:30 PM</option>
                              <option value="08:00 PM">08:00 PM</option>
                              <option value="08:30 PM">08:30 PM</option>
                              <option value="09:00 PM">09:00 PM</option>
                              <option value="09:30 PM">09:30 PM</option>
                              <option value="10:00 PM">10:00 PM</option>
                            </optgroup>
                          </select>
                        </div>

                        {/* Special Request */}
                        <div className="flex flex-col space-y-1.5 md:col-span-2">
                          <label className="text-[10px] uppercase tracking-widest font-mono text-gold font-bold flex items-center space-x-1.5">
                            <FileText size={12} />
                            <span>Special Requests & Celebration Notes</span>
                          </label>
                          <textarea
                            name="specialRequest"
                            value={formData.specialRequest}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="e.g. Organizing a surprise anniversary dinner. Requesting a leather sofa booth near the wicker lanterns."
                            className="w-full px-4 py-3 bg-black/40 border border-gold/15 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-white placeholder-white/20"
                          />
                        </div>

                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gold hover:bg-gold-light text-charcoal font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex justify-center items-center space-x-2 cursor-pointer shadow-lg hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden group"
                        id="modal-submit-btn"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-charcoal animate-ping" />
                            <span>VERIFYING CAPACITIES...</span>
                          </div>
                        ) : (
                          <>
                            <span>Request Priority Seating</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  /* RESERVATION SUCCESS SCREEN - PRINTABLE PREMIUM TICKET IN MODAL */
                  <motion.div
                    key="booking-modal-ticket"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 md:p-12 text-left"
                  >
                    <div className="text-center pb-6 border-b border-dashed border-gold/30">
                      <div className="w-12 h-12 bg-green-950/80 text-green-300 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <CheckCircle size={24} />
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.3em] text-gold font-bold uppercase">
                        PRIORITY BOOKING SECURED
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-1">
                        La'Fika Multicuisine
                      </h3>
                      <p className="text-[9px] font-mono tracking-widest text-gold/60 uppercase">
                        by Raghuvir &bull; Sharda Vihar
                      </p>
                    </div>

                    {/* Ticket Details */}
                    <div className="py-6 space-y-4 text-xs text-cream/80">
                      <div className="grid grid-cols-2 gap-y-4">
                        <div>
                          <span className="text-[9px] font-mono text-gold uppercase block leading-none">Booking Ref ID</span>
                          <span className="font-mono text-sm font-bold text-white">{bookingTicket.id}</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gold uppercase block leading-none">Creation Date</span>
                          <span className="font-sans font-semibold text-white">{bookingTicket.createdAt}</span>
                        </div>
                        <div className="col-span-2 h-[1px] bg-gold/15" />
                        <div>
                          <span className="text-[9px] font-mono text-gold uppercase block leading-none">Primary Guest</span>
                          <span className="font-sans font-semibold text-white">{bookingTicket.name}</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gold uppercase block leading-none">Phone Contact</span>
                          <span className="font-mono font-semibold text-white">{bookingTicket.phone}</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gold uppercase block leading-none">Table Seating For</span>
                          <span className="font-sans font-semibold text-white">{bookingTicket.guests} Guests</span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gold uppercase block leading-none">Time Slot</span>
                          <span className="font-mono font-bold text-gold">{bookingTicket.date} &bull; {bookingTicket.time}</span>
                        </div>
                      </div>

                      {bookingTicket.specialRequest && (
                        <div className="bg-black/30 p-4 rounded-sm border border-gold/15 mt-2">
                          <span className="text-[9px] font-mono text-gold uppercase block mb-1">Special Request Memo</span>
                          <p className="text-[11px] text-cream/70 leading-relaxed font-light italic">
                            "{bookingTicket.specialRequest}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Simulated barcode graphic for fine dining realism */}
                    <div className="flex flex-col items-center py-4 border-t border-dashed border-gold/30">
                      <div className="w-full h-8 bg-[repeating-linear-gradient(90deg,#dfb76c,#dfb76c_2px,transparent_2px,transparent_6px)] opacity-80" />
                      <span className="text-[9px] font-mono text-gold mt-1 uppercase tracking-widest">{bookingTicket.id} * SECURE GATEPASS</span>
                    </div>

                    {/* Actions toolbar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <a
                        href={generateWhatsAppUrl(bookingTicket)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-widest rounded-sm flex justify-center items-center space-x-2 shadow hover:scale-[1.01] transition-transform duration-300"
                        id="modal-whatsapp-btn"
                      >
                        <Smartphone size={14} />
                        <span>Confirm via WhatsApp</span>
                      </a>
                      
                      <button
                        onClick={() => window.print()}
                        className="w-full py-3.5 border border-gold/30 hover:border-gold text-gold hover:text-white font-bold text-xs uppercase tracking-widest rounded-sm flex justify-center items-center space-x-2 transition-all focus:outline-none hover:scale-[1.01]"
                        id="modal-print-btn"
                      >
                        <Printer size={14} />
                        <span>Print Pass</span>
                      </button>
                    </div>

                    {/* Reset Booking trigger */}
                    <div className="text-center mt-6">
                      <button
                        onClick={() => setBookingTicket(null)}
                        className="text-[10px] text-white/40 hover:text-gold uppercase tracking-wider font-mono font-bold border-b border-transparent hover:border-gold transition-all"
                        id="modal-reset-btn"
                      >
                        &larr; Reserve Another Table
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
