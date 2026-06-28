import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Immersive Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 15, 17, 0.75), rgba(14, 15, 17, 0.85)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600')`,
            backgroundAttachment: "fixed"
          }}
        />
        {/* Dynamic Warm Ambient Lights - Simulating Wicker Lamp Glows */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gold/10 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#C89B3C]/10 rounded-full filter blur-[120px] animate-pulse" />
      </div>

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60 z-0" />

      {/* Floating Graphic Assets inspired by the wicker lighting in images */}
      <div className="absolute top-[12%] left-[10%] hidden lg:block z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="glass-panel px-4 py-2 rounded-full border border-gold/20 flex items-center space-x-2 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-mono font-medium">Warm Bamboo Vibe</span>
        </motion.div>
      </div>

      <div className="absolute bottom-[20%] right-[10%] hidden lg:block z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass-panel px-4 py-2.5 rounded-full border border-gold/20 flex items-center space-x-2 shadow-lg"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/90 font-sans font-medium">Multicuisine Selection</span>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col justify-center items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          {/* Subtitle Accent */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[1px] w-8 bg-gold/60" />
            <p className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm font-semibold font-mono">
              LA'FIKA MULTICUISINE RESTAURANT
            </p>
            <div className="h-[1px] w-8 bg-gold/60" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white font-bold leading-[1.15] tracking-tight mb-8">
            Where Great Food <br />
            Meets <span className="gold-gradient-text">Great Memories</span>
          </h1>

          {/* Tagline */}
          <p className="text-white/70 max-w-xl text-base md:text-lg font-light tracking-wide leading-relaxed mb-12">
            Experience premium dining by Raghuvir in Sharda Vihar, Amravati. Savor traditional clay-oven tandoor, hand-stretched woodfired Napoletana pizza, and world-class multicuisine creations under a cozy canopy of warm bamboo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-booking-modal"));
              }}
              className="w-full sm:w-auto px-10 py-4.5 bg-gold text-charcoal font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm shadow-xl hover:bg-gold-light transition-all duration-300 relative overflow-hidden group"
              id="hero-book-btn"
            >
              {/* Button shimmer effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" />
              Book a Table
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("menu")}
              className="w-full sm:w-auto px-10 py-4.5 border border-white/20 hover:border-gold text-white font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm flex items-center justify-center space-x-2 transition-all duration-300"
              id="hero-explore-btn"
            >
              <span>Explore Menu</span>
              <ArrowRight size={14} className="text-gold" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center focus:outline-none"
          title="Scroll down"
          id="hero-scroll-indicator"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 font-mono">Scroll</span>
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
