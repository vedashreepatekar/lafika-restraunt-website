import { motion } from "motion/react";
import { Leaf, Sparkles, ChefHat, Users } from "lucide-react";

export default function Features() {
  const cards = [
    {
      icon: <Leaf className="w-8 h-8 text-gold" />,
      title: "Fresh Ingredients",
      description: "We source our vegetables, aromatic herbs, and cottage cheese daily. Every single sauce, marinade, and stock is made in-house under strict quality standards.",
      tag: "100% Organic Sourcing"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: "Elegant Ambience",
      description: "Our signature dark stained wooden beams, wicker lanterns, and warm under-counter waves generate a highly cozy, Instagram-worthy fine dining atmosphere.",
      tag: "Premium Intimate Decor"
    },
    {
      icon: <ChefHat className="w-8 h-8 text-gold" />,
      title: "Multi Cuisine Mastery",
      description: "Experience the ultimate fusion. Enjoy clay-oven starters, authentic slow-cooked Indian main courses, sizzling Chinese, and premium woodfired sourdough pizzas.",
      tag: "7 Global Categories"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Perfect for Family & Friends",
      description: "Designed with generous spacing. Features large curved leather sofa booths and private partition screens, ideal for birthdays, anniversaries, and corporate Dinners.",
      tag: "Up to 150 Guests capacity"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brown-dark/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex justify-center items-center space-x-2 mb-3">
            <span className="w-4 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
              WHY LA'FIKA
            </span>
            <span className="w-4 h-[1px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-4">
            A Crafted Dining Experience
          </h2>
          <div className="h-[2px] w-12 bg-gold mx-auto" />
          <p className="text-white/60 text-sm md:text-base font-light max-w-lg mx-auto mt-4 leading-relaxed">
            Every corner is thoughtfully engineered, and every dish is cooked with love to present the ultimate hospitality in Maharashtra.
          </p>
        </div>

        {/* Feature Cards Grid - Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="features-grid"
        >
          {/* Card 1: Fresh Ingredients (Wide) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card p-8 rounded-sm flex flex-col justify-between border border-gold/20 hover:border-gold/55 transition-all duration-300 relative group cursor-default lg:col-span-2 bg-[#1a1a1a]/40"
            id="feature-card-0"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 border border-gold/20 rounded-sm flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                  <Leaf className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-mono font-medium px-2.5 py-1 bg-gold/10 rounded-full">
                  100% Organic Sourcing
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                Fresh Ingredients
              </h3>

              <p className="text-cream/70 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
                We source our vegetables, aromatic herbs, and cottage cheese daily. Every single sauce, marinade, and stock is made in-house under strict quality standards. This ensures that every bite captures authentic, rich, and raw farm flavors.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
          </motion.div>

          {/* Card 2: Elegant Ambience (Standard) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card p-8 rounded-sm flex flex-col justify-between border border-gold/20 hover:border-gold/55 transition-all duration-300 relative group cursor-default bg-[#1a1a1a]/40"
            id="feature-card-1"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 border border-gold/20 rounded-sm flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-mono font-medium px-2.5 py-1 bg-gold/10 rounded-full">
                  Premium Decor
                </span>
              </div>

              <h3 className="text-xl font-serif text-white font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                Elegant Ambience
              </h3>

              <p className="text-cream/70 text-xs md:text-sm font-light leading-relaxed">
                Our signature dark stained wooden beams, wicker lanterns, and warm under-counter waves generate a highly cozy, Instagram-worthy fine dining atmosphere.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
          </motion.div>

          {/* Card 3: Multi Cuisine Mastery (Standard) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card p-8 rounded-sm flex flex-col justify-between border border-gold/20 hover:border-gold/55 transition-all duration-300 relative group cursor-default bg-[#1a1a1a]/40"
            id="feature-card-2"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 border border-gold/20 rounded-sm flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                  <ChefHat className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-mono font-medium px-2.5 py-1 bg-gold/10 rounded-full">
                  7 Categories
                </span>
              </div>

              <h3 className="text-xl font-serif text-white font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                Multi Cuisine Mastery
              </h3>

              <p className="text-cream/70 text-xs md:text-sm font-light leading-relaxed">
                Experience the ultimate culinary fusion. Enjoy clay-oven tandoor, authentic slow-cooked Indian main courses, sizzling Chinese, and premium woodfired sourdough Napoli pizzas.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
          </motion.div>

          {/* Card 4: Perfect for Family & Friends (Wide) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card p-8 rounded-sm flex flex-col justify-between border border-gold/20 hover:border-gold/55 transition-all duration-300 relative group cursor-default lg:col-span-2 bg-[#1a1a1a]/40"
            id="feature-card-3"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 border border-gold/20 rounded-sm flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-mono font-medium px-2.5 py-1 bg-gold/10 rounded-full">
                  150+ Guests Capacity
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                Perfect for Family & Friends
              </h3>

              <p className="text-cream/70 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
                Designed with generous spacing. Features large curved leather sofa booths and private partition screens, ideal for celebrating milestones, warm birthdays, family gatherings, anniversaries, and corporate dinners with seamless ease.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
