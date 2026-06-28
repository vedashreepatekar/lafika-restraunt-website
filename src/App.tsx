import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import ReservationForm from "./components/ReservationForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageSquare, PhoneCall, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [showWidgets, setShowWidgets] = useState(false);

  // Monitor scroll for back-to-top and floating contact triggers
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowWidgets(true);
      } else {
        setShowWidgets(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "919822700330";
  const whatsappMessage = "Hello! I am viewing La'Fika's premium website and would like to ask a question.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="relative min-h-screen bg-charcoal text-white selection:bg-gold selection:text-charcoal" id="app-root">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Fullscreen Hero Section */}
      <Hero />

      {/* Main flow of sections styled with alternating charcoal/cream backdrops to create perfect visual rhythm */}
      <main>
        {/* 3. Luxurious Storytelling Section */}
        <About />

        {/* 4. Why Choose Us Premium Cards Grid */}
        <Features />

        {/* 5. Centralized Interactive Menu Registry */}
        <MenuSection />

        {/* 6. Pinterest-Style Masonry Media Grid */}
        <Gallery />

        {/* 7. Google Testimonials Scorecard and Feedbacks */}
        <Reviews />

        {/* 8. Priority Reservation System Ticket Generator */}
        <ReservationForm />

        {/* 9. Directions and Map Coordinates */}
        <Contact />
      </main>

      {/* 10. Multi-link Footer Segment */}
      <Footer />

      {/* FLOATING ACTION UTILITY WIDGETS */}
      <AnimatePresence>
        {showWidgets && (
          <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end pointer-events-none" id="floating-widgets-bar">
            
            {/* Scroll back to summit */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 bg-white/10 hover:bg-gold hover:text-charcoal text-white rounded-full pointer-events-auto shadow-lg backdrop-blur-md border border-white/10 transition-all focus:outline-none hover:scale-115 active:scale-95"
              title="Return to peak"
              id="floating-scroll-top"
            >
              <ChevronUp size={18} />
            </motion.button>

            {/* Quick Call hotline */}
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.05 }}
              href="tel:+919822700330"
              className="p-3.5 bg-charcoal text-gold hover:bg-gold hover:text-charcoal rounded-full pointer-events-auto shadow-xl border border-gold/30 flex items-center justify-center transition-all hover:scale-115 active:scale-95"
              title="Dial restaurant desk"
              id="floating-dialer"
            >
              <PhoneCall size={18} />
            </motion.a>

            {/* Quick WhatsApp Concierge */}
            <motion.a
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.1 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-green-600 text-white rounded-full pointer-events-auto shadow-2xl flex items-center justify-center transition-all hover:scale-115 active:scale-95 group relative"
              title="Connect on WhatsApp"
              id="floating-whatsapp"
            >
              {/* Pulse ripple ring around green button */}
              <span className="absolute inset-0 rounded-full bg-green-600/30 animate-ping -z-10" />
              
              <MessageSquare size={18} />
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
