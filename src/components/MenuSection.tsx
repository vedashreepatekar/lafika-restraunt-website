import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Flame, CircleDot, Sparkles, X, ArrowRight, Eye, Heart } from "lucide-react";
import menuData from "../data/menu.json";
import { MenuItem } from "../types";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("" );
  const [vegetarianOnly, setVegetarianOnly] = useState<boolean>(false);
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Load favorites from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("lafika_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem("lafika_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Stop click from triggering item modal
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = ["All", "Signature Dish", "Starter", "Small Plates", "Dimsum", "Rice", "Main Course", "Thin Crust Pizza", "Pasta"];

  const filteredMenu = useMemo(() => {
    return (menuData as MenuItem[]).filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !vegetarianOnly || item.isVegetarian;
      const matchesFav = !favoritesOnly || favorites.includes(item.id);

      return matchesCategory && matchesSearch && matchesVeg && matchesFav;
    });
  }, [selectedCategory, searchQuery, vegetarianOnly, favoritesOnly, favorites]);

  const spicyFlames = (level?: number) => {
    if (!level) return null;
    return (
      <div className="flex items-center space-x-0.5 text-red-500" title={`Spicy level: ${level}/3`}>
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} size={13} className="fill-current" />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden border-t border-gold/10">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-brown-dark/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-3">
            <span className="w-4 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
              FEATURED MENU
            </span>
            <span className="w-4 h-[1px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-4">
            Our Featured Menu
          </h2>
          <div className="h-[2px] w-12 bg-gold mx-auto" />
          <p className="text-cream/60 text-sm md:text-base font-light max-w-lg mx-auto mt-4 leading-relaxed">
            Savor the ultimate selection of signature chef specials, smoke-kissed tandoor, authentic hand-stretched sourdough pizzas, and luxurious pastas.
          </p>
        </div>

        {/* Filter Toolbar Box - Bento panel */}
        <div className="glass-card p-6 rounded-sm mb-12 border border-gold/20 flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between shadow-md bg-[#1a1a1a]/50">
          {/* Search bar */}
          <div className="relative flex-1 max-w-sm">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-black/40 border border-gold/20 rounded-sm text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-white placeholder-white/30"
              id="menu-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filters switches container */}
          <div className="flex flex-wrap gap-6 items-center">
            {/* Veg Only Toggle */}
            <div className="flex items-center space-x-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-white/80 flex items-center space-x-1.5 font-mono">
                <CircleDot size={14} className="text-green-500 fill-current" />
                <span>Veg Only</span>
              </span>
              <button
                onClick={() => setVegetarianOnly(!vegetarianOnly)}
                className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                  vegetarianOnly ? "bg-green-600" : "bg-white/10"
                }`}
                aria-label="Filter vegetarian only"
                id="menu-veg-toggle"
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    vegetarianOnly ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Favorite Only Toggle */}
            <div className="flex items-center space-x-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-white/80 flex items-center space-x-1.5 font-mono">
                <Heart size={14} className="text-gold fill-current" />
                <span>Favorites ({favorites.length})</span>
              </span>
              <button
                onClick={() => setFavoritesOnly(!favoritesOnly)}
                className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                  favoritesOnly ? "bg-gold" : "bg-white/10"
                }`}
                aria-label="Filter favorites only"
                id="menu-favorites-toggle"
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    favoritesOnly ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs Scroll Wrapper */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none space-x-3 -mx-6 px-6 lg:mx-0 lg:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-mono font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none ${
                selectedCategory === cat
                  ? "bg-gold text-charcoal shadow-lg shadow-gold/25 font-bold"
                  : "bg-white/5 border border-gold/15 hover:border-gold/40 text-white/70 hover:text-white"
              }`}
              id={`category-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid Content */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="menu-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  key={item.id}
                  className="bg-[#1a1a1a]/60 rounded-sm overflow-hidden shadow-sm border border-gold/15 hover:border-gold/45 transition-all duration-300 flex flex-col justify-between group"
                  id={`menu-card-${item.id}`}
                >
                  {/* Image & Badges Banner */}
                  <div className="relative aspect-[4/3] bg-charcoal/30 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating labels */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {item.isVegetarian && (
                        <span className="bg-charcoal/90 backdrop-blur-sm border border-green-500 px-2.5 py-1 rounded-sm text-[9px] uppercase font-bold text-green-400 tracking-wider flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                          <span>Vegetarian</span>
                        </span>
                      )}
                      {item.isPopular && (
                        <span className="bg-gold text-charcoal px-2.5 py-1 rounded-sm text-[9px] uppercase font-bold tracking-widest flex items-center space-x-1 shadow-sm">
                          <Sparkles size={10} className="fill-current animate-spin" />
                          <span>Chef's Recommendation</span>
                        </span>
                      )}
                    </div>

                    {/* Interactive Heart (Favorite Toggle) with micro-animation */}
                    <button
                      onClick={(e) => toggleFavorite(item.id, e)}
                      className="absolute top-4 right-4 p-2 bg-charcoal/80 backdrop-blur-md rounded-full border border-gold/25 text-white/80 hover:text-gold hover:scale-110 active:scale-95 transition-all focus:outline-none z-10"
                      title={isFav ? "Remove bookmark" : "Bookmark this dish"}
                      id={`favorite-btn-${item.id}`}
                    >
                      <Heart 
                        size={16} 
                        className={`heart-pop transition-all ${
                          isFav ? "text-gold fill-gold" : "text-white/60 hover:text-white"
                        }`} 
                      />
                    </button>

                    {/* Price overlay on image corner */}
                    <div className="absolute bottom-4 right-4 bg-charcoal/90 border border-gold/20 text-gold font-mono font-bold text-sm px-3.5 py-1.5 rounded-sm shadow-md">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-serif font-bold text-white tracking-wide leading-tight group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        {spicyFlames(item.spicyLevel)}
                      </div>
                      
                      <p className="text-cream/60 text-xs md:text-sm font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gold font-semibold">
                        {item.category}
                      </span>
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="text-[10px] uppercase tracking-widest font-bold text-white hover:text-gold flex items-center space-x-1.5 group/btn transition-colors focus:outline-none"
                        id={`inspect-btn-${item.id}`}
                      >
                        <Eye size={12} className="text-gold" />
                        <span>Details</span>
                        <ArrowRight size={10} className="transform group-hover/btn:translate-x-1 transition-transform text-gold" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result feedback */}
        {filteredMenu.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-[#1a1a1a]/40 border border-dashed border-gold/25 rounded-sm"
          >
            <p className="text-cream/50 text-base font-light font-mono">No dishes found matching your selection.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setVegetarianOnly(false);
                setFavoritesOnly(false);
              }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-gold border-b border-gold pb-0.5"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Footer button for custom request */}
        <div className="text-center mt-16">
          <p className="text-cream/50 text-xs font-light tracking-wide mb-3">Looking for something specific or customized catering?</p>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest text-white font-bold border-b border-gold pb-0.5 hover:text-gold transition-colors"
          >
            Contact our culinary coordinator &rarr;
          </a>
        </div>
      </div>

      {/* Item Inspection Lightbox/Drawer Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            id="item-details-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-charcoal border border-gold/30 max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white hover:text-gold rounded-full transition-colors focus:outline-none border border-gold/10"
                aria-label="Close details dialog"
                id="close-details-modal"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side Image */}
                <div className="relative h-64 md:h-full min-h-[240px] bg-charcoal">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-gold block mb-1">
                      {selectedItem.category}
                    </span>
                    <h4 className="text-xl font-serif font-bold leading-tight">
                      {selectedItem.name}
                    </h4>
                  </div>
                </div>

                {/* Right side specifications */}
                <div className="p-8 text-cream flex flex-col justify-between bg-[#1a1a1a]">
                  <div>
                    {/* Badge headers */}
                    <div className="flex items-center space-x-2 mb-4">
                      {selectedItem.isVegetarian && (
                        <span className="bg-green-950/80 border border-green-600 text-green-300 text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm tracking-wide">
                          Pure Vegetarian
                        </span>
                      )}
                      {selectedItem.isPopular && (
                        <span className="bg-gold/10 border border-gold/40 text-gold text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm tracking-wide">
                          Chef's Recommendation
                        </span>
                      )}
                    </div>

                    <p className="text-cream/70 text-sm font-light leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>

                    <div className="space-y-3.5 text-xs text-cream/60 border-t border-gold/10 pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-white">Dietary Profile:</span>
                        <span>{selectedItem.isVegetarian ? "Pure Veg / Lacto-Vegetarian" : "Non-Vegetarian"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-white">Spice Level:</span>
                        <span className="flex items-center space-x-1">
                          {selectedItem.spicyLevel ? `${selectedItem.spicyLevel}/3 Hot` : "Mild / Gentle"}
                          {spicyFlames(selectedItem.spicyLevel)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-white">Estimated prep time:</span>
                        <span>12–15 Minutes</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gold/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-cream/40 uppercase tracking-widest block font-mono leading-none">Price per portion</span>
                      <span className="text-2xl font-mono font-bold text-gold">₹{selectedItem.price}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        window.dispatchEvent(new CustomEvent("open-booking-modal"));
                      }}
                      className="px-6 py-2.5 bg-gold text-charcoal font-sans font-bold text-xs uppercase tracking-widest rounded-sm shadow hover:bg-gold-light transition-all"
                    >
                      Pre-order Table
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
