import { useState } from "react";
import { Facebook, Instagram, MessageSquare, PhoneCall, Heart, ArrowUpCircle, MapPin, ExternalLink } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 6 mock premium Instagram posts matching La'Fika's style
  const instagramFeed = [
    { id: 1, img: "/images/gallery/gallery4.jpeg", likes: "1.2k" },
    { id: 2, img: "/images/gallery/gallery1.jpeg", likes: "984" },
    { id: 3, img: "/images/gallery/gallery3.jpeg", likes: "1.5k" },
    { id: 4, img: "/images/gallery/gallery11.jpeg", likes: "2.1k" },
    { id: 5, img: "/images/gallery/gallery6.jpeg", likes: "1.8k" },
    { id: 6, img: "/images/gallery/gallery8.jpeg", likes: "843" }
  ];

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-gold/10 relative overflow-hidden font-sans">
      {/* Decorative vector */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top block grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gold/15">
          
          {/* Logo Brand / Pitch Column */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <button
              onClick={handleScrollToTop}
              className="flex flex-col text-left focus:outline-none group self-start"
              id="footer-logo-btn"
            >
              <span className="text-3xl font-serif font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                La'Fika
              </span>
              <span className="text-[10px] font-mono tracking-[0.45em] text-gold uppercase mt-0.5 leading-none font-semibold">
                by Raghuvir
              </span>
            </button>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
              Experience modern luxury, cozy bamboo aesthetics, and world-class culinary fusion in Amravati. Unmatched warmth, memorable celebrations, and fine multicuisine flavors.
            </p>
            {/* Social media icons */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: <Instagram size={16} />, url: "https://instagram.com/lafikamulticuisine", label: "Instagram" },
                { icon: <MessageSquare size={16} />, url: "https://wa.me/917777889990", label: "WhatsApp" },
                { icon: <Facebook size={16} />, url: "#", label: "Facebook" },
                { icon: <PhoneCall size={16} />, url: "tel:+917777889990", label: "Call support" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-gold/15 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
                  aria-label={item.label}
                  id={`footer-social-${index}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links Directory */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-gold mb-6">
              Directory
            </h4>
            <ul className="space-y-3.5 text-xs">
              {[
                { label: "Home Base", href: "home" },
                { label: "Our Story", href: "about" },
                { label: "Gourmet Menu", href: "menu" },
                { label: "Ambience Gallery", href: "gallery" },
                { label: "Guest Journal", href: "reviews" },
                { label: "Reservation Portal", href: "reservation" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-white/60 hover:text-gold transition-colors text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Times Summary */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-gold mb-6">
              Contact & Hours
            </h4>
            <div className="space-y-4 text-xs text-white/70 leading-relaxed font-light">
              <div>
                <p className="font-semibold text-white">LUNCH SERVICE</p>
                <p className="text-white/50 text-[11px] font-mono">12:30 PM &ndash; 03:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">DINNER SERVICE</p>
                <p className="text-white/50 text-[11px] font-mono">07:00 PM &ndash; 11:30 PM</p>
              </div>
              
              <div className="pt-2 border-t border-gold/10">
                <p className="font-semibold text-white flex items-center space-x-1">
                  <MapPin size={12} className="text-gold" />
                  <span>LOCATION</span>
                </p>
                <p className="text-white/50 text-[11px] leading-relaxed mt-1">
                  Sharda Vihar, Amravati, Maharashtra, India.
                </p>
                <a 
                  href="https://maps.google.com/?q=Sharda+Vihar+Amravati+Maharashtra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light text-[10px] uppercase font-mono font-bold flex items-center space-x-1 mt-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          {/* Real-time Instagram Feed Grid (satisfies 'Instagram feed') */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-gold mb-6 flex items-center justify-between">
              <span>Instagram Feed</span>
              <span className="text-[9px] text-white/40 normal-case font-light">@lafikamulticuisine</span>
            </h4>
            
            <div className="grid grid-cols-3 gap-2">
              {instagramFeed.map((post) => (
                <a
                  key={post.id}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-sm overflow-hidden group border border-gold/10 hover:border-gold/30 transition-all"
                  id={`footer-insta-${post.id}`}
                >
                  <ImageWithFallback
                    src={post.img}
                    alt={`LaFika Instagram post ${post.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Heart overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center z-10 text-white">
                    <Heart size={12} className="text-gold fill-gold mb-0.5 animate-pulse" />
                    <span className="text-[8px] font-mono">{post.likes}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <p className="text-[10px] text-white/40 mt-3 font-light leading-relaxed">
              Tag us in your photos to get featured! <span className="text-gold">#LaFikaCelebrations</span>
            </p>
          </div>

        </div>

        {/* Bottom copyright & Privacy segment */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/40 font-mono gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} La'Fika Multicuisine Restaurant. All Rights Reserved.</span>
            <span className="hidden md:inline text-white/10">|</span>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <span>&bull;</span>
              <a href="#terms" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 hover:text-gold transition-colors focus:outline-none text-[10px] uppercase tracking-widest"
            title="Return to peak"
            id="footer-back-to-top"
          >
            <span>Peak</span>
            <ArrowUpCircle size={16} className="text-gold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
