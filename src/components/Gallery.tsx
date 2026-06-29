import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GalleryImage } from "../types";
import ImageWithFallback from "./ImageWithFallback";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      id: "gal-1",
      src: "/images/gallery/gallery1.jpeg",
      category: "Ambiance",
      alt: "Warm bamboo ceiling and glowing wicker lamps in La Fika Dining room"
    },
    {
      id: "gal-2",
      src: "/images/gallery/gallery2.jpeg",
      category: "Food",
      alt: "Gourmet platter of fresh Paneer starters cooked in our clay oven"
    },
    {
      id: "gal-3",
      src: "/images/gallery/gallery3.jpeg",
      category: "Interior",
      alt: "Wave design counter bar with suspended bamboo stalk installations"
    },
    {
      id: "gal-4",
      src: "/images/gallery/gallery4.jpeg",
      category: "Food",
      alt: "Fresh woodfired Napoli pizza being sliced"
    },
    {
      id: "gal-5",
      src: "/images/gallery/gallery5.jpeg",
      category: "Interior",
      alt: "Cozy wrap-around leather sofa booth with premium table layouts"
    },
    {
      id: "gal-6",
      src: "/images/gallery/gallery6.jpeg",
      category: "Desserts",
      alt: "Molten hot fudge sizzling chocolate brownie on skillet"
    },
    {
      id: "gal-7",
      src: "/images/gallery/gallery7.jpeg",
      category: "Ambiance",
      alt: "Glow of wicker pendant lamps over warm wooden partitions"
    },
    {
      id: "gal-8",
      src: "/images/gallery/gallery8.jpeg",
      category: "Desserts",
      alt: "Classic tiramisu heavily layered with cocoa"
    },
    {
      id: "gal-9",
      src: "/images/gallery/gallery9.jpeg",
      category: "Chef",
      alt: "Professional chef plating woodfiring gourmet meals with elegance"
    },
    {
      id: "gal-10",
      src: "/images/gallery/gallery10.jpeg",
      category: "Ambiance",
      alt: "Gourmet tables set with elegant crystal glasses under a cozy warm twilight atmosphere"
    },
    {
      id: "gal-11",
      src: "/images/gallery/gallery11.jpeg",
      category: "Drinks",
      alt: "Refreshing passionfruit mocktails and wood-shaved orange cocktails at the bar"
    },
    {
      id: "gal-12",
      src: "/images/gallery/gallery12.jpeg",
      category: "Drinks",
      alt: "Siphon and espresso preparations sourced from organic Coorg coffee beans"
    }
  ];

  const categories = ["all", "Food", "Ambiance", "Interior", "Desserts", "Chef", "Drinks"];

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return images;
    return images.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  // Handle keyboard arrow scrolling inside lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "Escape") {
        setActiveImageIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, filteredImages]);

  const handlePrevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredImages.length - 1 : prev - 1;
    });
  };

  const handleNextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Abstract Background Blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-3">
            <span className="w-4 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
              THE AMBIENCE
            </span>
            <span className="w-4 h-[1px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-4">
            Instagram-Worthy Spaces
          </h2>
          <div className="h-[2px] w-12 bg-gold mx-auto" />
          <p className="text-white/60 text-sm md:text-base font-light max-w-lg mx-auto mt-4 leading-relaxed">
            Take a visual tour through our hand-carved screens, warm wicker suspensions, and gourmet plates.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-[11px] uppercase tracking-widest font-mono font-medium rounded-sm border transition-all duration-300 focus:outline-none ${
                selectedCategory === cat
                  ? "bg-gold border-gold text-charcoal shadow-lg shadow-gold/15"
                  : "bg-white/5 border-gold/15 hover:border-gold/35 text-white/80 hover:text-white"
              }`}
              id={`gallery-filter-${cat.toLowerCase()}`}
            >
              {cat === "all" ? "View All" : cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" id="gallery-masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => {
              // Find index in original images array
              const originalIndex = filteredImages.findIndex((item) => item.id === img.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={img.id}
                  onClick={() => setActiveImageIndex(originalIndex)}
                  className="break-inside-avoid relative rounded-sm overflow-hidden group cursor-pointer border border-gold/15 shadow-lg hover:border-gold/40 transition-all duration-300"
                  id={`gallery-item-${img.id}`}
                >
                  <ImageWithFallback
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover rounded-sm transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  
                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                    <div className="flex justify-end">
                      <div className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 hover:text-gold transition-colors border border-gold/25">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-gold font-bold block mb-1">
                        {img.category}
                      </span>
                      <p className="text-white text-sm font-light leading-tight">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal Slider */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center p-4 select-none"
            id="gallery-lightbox"
          >
            {/* Top Bar controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
              <span className="font-mono text-xs text-white/50 tracking-widest">
                {activeImageIndex + 1} / {filteredImages.length} &bull; {filteredImages[activeImageIndex].category}
              </span>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-2.5 bg-white/5 hover:bg-white/10 hover:text-gold rounded-full text-white/80 transition-colors focus:outline-none"
                aria-label="Close Lightbox"
                id="close-lightbox-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left navigation trigger */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-white/10 hover:text-gold rounded-full text-white/80 transition-colors focus:outline-none z-10"
              aria-label="Previous image"
              id="lightbox-prev-btn"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Active Display Container */}
            <div className="max-w-5xl max-h-[80vh] w-full flex justify-center items-center p-4 relative">
              <motion.div
                key={filteredImages[activeImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[75vh]"
              >
                <ImageWithFallback
                  src={filteredImages[activeImageIndex].src}
                  alt={filteredImages[activeImageIndex].alt}
                  className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border border-white/10"
                />
              </motion.div>
            </div>

            {/* Right navigation trigger */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-white/10 hover:text-gold rounded-full text-white/80 transition-colors focus:outline-none z-10"
              aria-label="Next image"
              id="lightbox-next-btn"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-center max-w-xl mx-auto z-10">
              <motion.p
                key={filteredImages[activeImageIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/80 text-sm font-light leading-relaxed font-sans"
              >
                {filteredImages[activeImageIndex].alt}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
