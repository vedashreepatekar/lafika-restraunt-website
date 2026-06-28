import { MapPin, Phone, MessageSquare, Instagram, Mail, Compass, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919822700330";
  const whatsappMessage = "Hi La'Fika! I would like to inquire about tables or check availability.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = "https://instagram.com/lafika.amravati"; // Placeholder or real
  const mapDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=La'Fika+Multicuisine+Restaurant+Sharda+Vihar+Amravati";

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden border-t border-gold/10">
      {/* Abstract vectors */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex justify-center items-center space-x-2 mb-3">
            <span className="w-4 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
              GET IN TOUCH
            </span>
            <span className="w-4 h-[1px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-4">
            Visit La'Fika by Raghuvir
          </h2>
          <div className="h-[2px] w-12 bg-gold mx-auto" />
          <p className="text-cream/60 text-sm md:text-base font-light max-w-lg mx-auto mt-4 leading-relaxed">
            Located in the heart of Amravati. Drop in for a premium multicuisine experience or call for catering reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Physical address card details - Bento style */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-[#1a1a1a]/60 p-8 rounded-sm border border-gold/15 shadow-sm space-y-6">
              
              {/* Card Title */}
              <h3 className="text-2xl font-serif font-bold text-white mb-6 pb-4 border-b border-gold/15">
                Contact Coordinates
              </h3>

              {/* Physical Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold/10 text-gold rounded-sm mt-1 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-mono mb-1">Our Location</h4>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    La'Fika Multicuisine Restaurant
                  </p>
                  <p className="text-xs text-cream/70 leading-relaxed font-light">
                    Sharda Vihar, Amravati,<br />
                    Maharashtra &mdash; 444605
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold/10 text-gold rounded-sm mt-1 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-mono mb-1">Dining Hours</h4>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    Monday &ndash; Sunday
                  </p>
                  <p className="text-xs text-cream/70 leading-relaxed font-light">
                    Lunch: 12:30 PM &ndash; 03:30 PM<br />
                    Dinner: 07:00 PM &ndash; 11:30 PM
                  </p>
                </div>
              </div>

              {/* Call support */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold/10 text-gold rounded-sm mt-1 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-mono mb-1">Calling Registry</h4>
                  <a href="tel:+919822700330" className="text-sm font-bold text-white hover:text-gold transition-colors font-mono block">
                    +91 98227 00330
                  </a>
                  <p className="text-[10px] text-cream/40 font-mono">Mobile Hotline &bull; Click to dial</p>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold/10 text-gold rounded-sm mt-1 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gold font-mono mb-1">Digital Correspondence</h4>
                  <a href="mailto:info@lafika.com" className="text-sm font-semibold text-white hover:text-gold transition-colors block">
                    info@lafika.com
                  </a>
                  <p className="text-[10px] text-cream/40 font-mono">Reply within 24 hours</p>
                </div>
              </div>

            </div>

            {/* Quick Interactive Button grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* WhatsApp direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-green-600 hover:bg-green-700 text-white rounded-sm font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-sm transition-transform hover:-translate-y-0.5"
                id="contact-whatsapp-btn"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-sm font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-sm transition-transform hover:-translate-y-0.5"
                id="contact-instagram-btn"
              >
                <Instagram size={14} />
                <span>Instagram</span>
              </a>

              {/* Call Hotline */}
              <a
                href="tel:+919822700330"
                className="p-4 bg-gold hover:bg-gold-light text-charcoal rounded-sm font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-sm col-span-2 transition-all text-center"
                id="contact-phone-btn"
              >
                <Phone size={14} className="text-charcoal" />
                <span>Call Hotline Now</span>
              </a>
            </div>
          </div>

          {/* RIGHT: High-end Google Maps embedding */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#1a1a1a]/60 p-4 rounded-sm border border-gold/15 shadow-sm flex-1 flex flex-col justify-between">
              
              {/* Header with action Directions button */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-2">
                  <Compass size={16} className="text-gold" />
                  <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Interactive Navigation map</span>
                </div>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-gold text-charcoal hover:bg-gold-light font-bold text-[10px] uppercase tracking-widest rounded-sm flex items-center space-x-1.5 transition-all shadow-sm"
                  id="get-directions-btn"
                >
                  <span>Directions</span>
                  <ArrowRight size={10} />
                </a>
              </div>

              {/* Embedded Iframe styled exquisitely with modern borders */}
              <div className="w-full h-[320px] md:h-[420px] bg-charcoal/20 rounded-sm overflow-hidden border border-gold/15 relative">
                {/* Embedded dynamic responsive maps query with accurate Sharda Vihar coordinates */}
                <iframe
                  title="La'Fika Multicuisine Restaurant Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.18567584102!2d77.7533!3d20.9320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4b163af9b4b%3A0xe5a71df542c8e2fb!2sSharda%20Vihar%2C%20Amravati%2C%20Maharashtra%20444605!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.05) saturate(0.95)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  id="google-maps-iframe"
                />
              </div>

              {/* Navigation support line */}
              <p className="text-[10px] text-cream/40 text-center mt-3 font-mono">
                &bull; Gated parking space is fully available behind the primary building for La'Fika dining guests &bull;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
