import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-navbar py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo Brand with typography pairings */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("#home");
            }}
            className="flex flex-col group cursor-pointer"
            id="nav-logo"
          >
            <span className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
              La'Fika
            </span>
            <span className="text-[9px] font-mono tracking-[0.45em] text-gold uppercase mt-0.5 leading-none font-medium">
              by Raghuvir
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.href);
                }}
                className="relative text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white transition-colors duration-300 py-2 group"
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call Action & Toggle Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+919822700330"
              className="hidden sm:flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-white/90 hover:text-gold transition-colors"
              title="Call us now"
            >
              <PhoneCall size={14} className="text-gold" />
              <span className="font-mono text-[11px]">+91 98227 00330</span>
            </a>

            <button
              onClick={() => handleScrollToSection("#reservation")}
              className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-gold hover:bg-gold-dark text-charcoal font-sans font-bold text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              id="desktop-book-btn"
            >
              <Calendar size={14} />
              <span>Book a Table</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-gold transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/98 flex flex-col justify-center items-center px-6 pt-24"
            id="mobile-drawer"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brown-dark/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center space-y-6 w-full max-w-sm z-10">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.href);
                  }}
                  className="text-lg uppercase tracking-[0.25em] font-serif font-medium text-white/90 hover:text-gold transition-colors"
                  id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="h-[1px] w-1/2 bg-white/10 my-4" />

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="tel:+919822700330"
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-gold font-mono font-bold"
              >
                <PhoneCall size={14} />
                <span>+91 98227 00330</span>
              </motion.a>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 }}
                onClick={() => handleScrollToSection("#reservation")}
                className="w-full py-3.5 bg-gold text-charcoal font-bold text-sm uppercase tracking-[0.18em] rounded-sm flex justify-center items-center space-x-2"
                id="mobile-book-btn"
              >
                <Calendar size={16} />
                <span>Book a Table</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
