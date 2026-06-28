import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Compass, ShieldCheck, Heart, Sparkles, BookOpen } from "lucide-react";

type AboutTab = "story" | "started" | "philosophy";

export default function About() {
  const [activeTab, setActiveTab] = useState<AboutTab>("story");

  const tabContents = {
    story: {
      subtitle: "THE LEGACY OF TASTE",
      title: "Our Story",
      content: "Envisioned and created by Raghuvir, La'Fika was born to bring a brand new era of modern luxury dining to Amravati. We set out to design a space where the warmth of local raw woods, hand-strung bamboo lattices, and the aromatic charm of authentic multicuisine masteries merge into one cohesive soul.",
      points: [
        "Crafting tandoor, pizza, and stir-fries together.",
        "A space designed for true premium intimacy.",
        "Curating a menu suited for families and connoisseurs alike."
      ]
    },
    started: {
      subtitle: "ESTABLISHED IN 2024",
      title: "When We Started",
      content: "Our journey began in late 2024 with a simple dream: to challenge the standard dining experience. We wanted people to step away from repetitive visual defaults and step into a cozy, sensory-rich escape. What started as a small wood-oven kitchen in Sharda Vihar quickly blossomed into Amravati's #1 multicuisine restaurant.",
      points: [
        "Pioneered authentic woodfired sourdough Napoli crusts in town.",
        "Slow-smoked clay oven recipes that became instant favorites.",
        "Over 50,000 satisfied local guests in under two years."
      ]
    },
    philosophy: {
      subtitle: "CRAFTED WITH INTENT",
      title: "Our Philosophy",
      content: "At La'Fika, we believe that 'Every Meal is a Celebration'. We do not cook to feed; we cook to inspire. Our raw materials are acquired daily. We avoid pre-packaged stocks or colorings. Our culinary philosophy centers on clean, organic presentation, extreme texture contrasts, and flawless hospitality.",
      points: [
        "100% organic, raw farm sourcing for vegetables.",
        "ZERO artificial stabilizers, colors, or heavy preservatives.",
        "Absolute kitchen hygiene and service with a gentle smile."
      ]
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden border-t border-gold/10">
      {/* Decorative background circle */}
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Storytelling with interactive luxury tabs */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
                THE SOUL OF LA'FIKA
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-8 leading-tight">
              A Symphony of <span className="text-gold italic">Stories & Flavors</span>
            </h2>

            {/* Interactive Tab Buttons Bar */}
            <div className="flex space-x-2 bg-black/40 border border-gold/15 p-1 rounded-sm mb-8 max-w-md">
              {(Object.keys(tabContents) as AboutTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 text-[10px] uppercase tracking-widest font-mono font-bold rounded-sm transition-all duration-300 focus:outline-none ${
                    activeTab === tab
                      ? "bg-gold text-charcoal shadow-md font-extrabold"
                      : "text-white/60 hover:text-white"
                  }`}
                  id={`about-tab-${tab}`}
                >
                  {tab === "started" ? "Our Journey" : tab === "philosophy" ? "Our Philosophy" : "Our Story"}
                </button>
              ))}
            </div>

            {/* Tab content area with animations */}
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[10px] font-mono tracking-widest text-gold font-bold block mb-2">
                    {tabContents[activeTab].subtitle}
                  </span>
                  
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    {tabContents[activeTab].title}
                  </h3>

                  <p className="text-cream/70 leading-relaxed font-light text-sm md:text-base mb-6">
                    {tabContents[activeTab].content}
                  </p>

                  <ul className="space-y-3.5 border-t border-gold/10 pt-5">
                    {tabContents[activeTab].points.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3 text-xs text-cream/80">
                        <span className="p-1 bg-gold/15 text-gold rounded-full mt-0.5">
                          <Sparkles size={10} className="fill-current" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: Luxurious 50% Image Collage */}
          <div className="relative h-[450px] sm:h-[550px] w-full mt-8 lg:mt-0">
            {/* Background Accent Square */}
            <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border-2 border-gold/20 rounded-sm pointer-events-none z-0" />
            
            {/* Image 1: Beautiful Ceiling/Main Ambiance (Large) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="absolute top-0 left-0 w-[65%] h-[65%] rounded-sm overflow-hidden shadow-2xl z-20 border-[4px] border-gold/20"
              id="collage-img-1"
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=700"
                alt="La Fika Warm Wooden Interior & Bamboo Ceiling vibe"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-charcoal/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-mono rounded-sm backdrop-blur-sm border border-gold/20">
                Warm Bamboo Lighting
              </div>
            </motion.div>

            {/* Image 2: Beautiful Plated Multicuisine (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-4 right-0 w-[55%] h-[55%] rounded-sm overflow-hidden shadow-2xl z-30 border-[4px] border-gold/20"
              id="collage-img-2"
            >
              <img
                src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=700"
                alt="La Fika Fine Plated Dish"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 bg-gold text-charcoal text-[10px] uppercase tracking-widest font-mono font-bold px-3 py-1 rounded-sm shadow-md">
                Gourmet Selection
              </div>
            </motion.div>

            {/* Image 3: Cozy counter/drinks setup (Top Right Small) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="absolute top-6 right-[5%] w-[35%] h-[35%] rounded-sm overflow-hidden shadow-xl z-10 border-[3px] border-gold/20"
              id="collage-img-3"
            >
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=500"
                alt="La Fika Stylish Wave Bar Counter"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
