import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, MessageSquarePlus, Sparkles, CheckCircle, X } from "lucide-react";
import reviewsData from "../data/reviews.json";
import { Review } from "../types";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(reviewsData as Review[]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Custom review form states
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [newTag, setNewTag] = useState("Family Dinner");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAddReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const addedReview: Review = {
      id: `custom-${Date.now()}`,
      name: newName,
      rating: newRating,
      date: "Just now",
      comment: newComment,
      avatar: newName.split(" ").map(w => w[0]).join("").toUpperCase().substring(0, 2),
      tag: newTag
    };

    setReviews([addedReview, ...reviews]);
    setFormSubmitted(true);

    // Reset fields
    setTimeout(() => {
      setNewName("");
      setNewRating(5);
      setNewComment("");
      setNewTag("Family Dinner");
      setFormSubmitted(false);
      setIsFormOpen(false);
    }, 1800);
  };

  const renderStars = (count: number, size = 15) => {
    return (
      <div className="flex items-center space-x-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < count ? "fill-current text-gold" : "text-white/10"}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden border-t border-gold/10">
      {/* Decorative background blobs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-3">
            <span className="w-4 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
              GUEST JOURNAL
            </span>
            <span className="w-4 h-[1px] bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-4">
            Testimonials of Delight
          </h2>
          <div className="h-[2px] w-12 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Google Rating Scorecard Widget - Bento block */}
          <div className="lg:col-span-4 sticky top-28 bg-[#1a1a1a]/60 border border-gold/20 p-8 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {/* Google Logo Icon */}
                <div className="w-10 h-10 bg-gold text-charcoal rounded-full flex items-center justify-center font-bold text-lg font-serif">
                  G
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider leading-none">Google Reviews</h3>
                  <span className="text-[10px] text-gold uppercase tracking-widest font-mono">LA'FIKA RAGHUVIR</span>
                </div>
              </div>

              {/* Total score */}
              <div className="flex items-baseline space-x-2 my-4">
                <span className="text-5xl font-serif font-bold text-white leading-none">4.9</span>
                <span className="text-gold text-sm font-mono">/ 5.0</span>
              </div>

              {renderStars(5, 20)}

              <p className="text-cream/60 text-xs mt-3 leading-relaxed">
                Based on **1,284 verified local reviews** from Amravati. Ranked **#1 Fine Dining** in Sharda Vihar region.
              </p>

              {/* Star analysis bar list */}
              <div className="space-y-2 mt-8 border-t border-gold/15 pt-6">
                {[
                  { star: 5, pct: 94 },
                  { star: 4, pct: 4 },
                  { star: 3, pct: 2 },
                  { star: 2, pct: 0 },
                  { star: 1, pct: 0 }
                ].map((item) => (
                  <div key={item.star} className="flex items-center text-xs text-cream/60">
                    <span className="w-3 font-mono">{item.star}</span>
                    <Star size={10} className="fill-current text-gold ml-1 mr-3" />
                    <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden">
                      <div className="bg-gold h-full rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                    <span className="w-8 text-right font-mono text-[10px] pl-2">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-8 w-full py-3 bg-gold text-charcoal hover:bg-gold-light transition-all duration-300 font-bold text-xs uppercase tracking-widest rounded-sm flex justify-center items-center space-x-2 focus:outline-none"
              id="write-review-btn"
            >
              <Quote size={13} className="transform rotate-180" />
              <span>Write a Review</span>
            </button>
          </div>

          {/* RIGHT: Testimonial Cards list */}
          <div className="lg:col-span-8 space-y-6" id="reviews-list">
            {reviews.map((rev) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={rev.id}
                className="bg-[#1a1a1a]/60 p-8 rounded-sm border border-gold/15 shadow-sm flex flex-col sm:flex-row items-start sm:space-x-6 relative group hover:border-gold/30 transition-all duration-300"
                id={`review-card-${rev.id}`}
              >
                {/* Avatar Badge with customer profile initials */}
                <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center font-bold text-sm text-gold font-serif mb-4 sm:mb-0 shrink-0 relative">
                  {rev.avatar}
                  {/* Embedded Google Logo Icon badge on bottom-right of avatar for believability */}
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-gray-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.62-.62-1.02-1.37-1.02-2.19c0-.28.02-.56.07-.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-serif font-bold text-base text-white leading-tight">
                          {rev.name}
                        </h4>
                        <span className="text-[9px] px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/50 font-mono rounded-sm flex items-center space-x-1">
                          <span>Local Guide</span>
                        </span>
                      </div>
                      <span className="text-[10px] text-gold uppercase font-mono tracking-widest block mt-0.5">
                        {rev.date}
                      </span>
                    </div>

                    {/* Tag label */}
                    {rev.tag && (
                      <span className="self-start sm:self-center px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] uppercase font-mono font-medium rounded-full">
                        {rev.tag}
                      </span>
                    )}
                  </div>

                  {renderStars(rev.rating)}

                  <p className="text-cream/80 text-sm font-light leading-relaxed mt-4 italic">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Aesthetic Quote graphic */}
                <Quote size={32} className="absolute right-6 bottom-6 text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Review Writing Drawer overlay */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            id="write-review-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-charcoal border border-gold/30 max-w-md w-full rounded-sm overflow-hidden shadow-2xl p-8 relative text-cream"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors focus:outline-none"
                aria-label="Close form"
                id="close-review-modal"
              >
                <X size={18} />
              </button>

              <h4 className="text-2xl font-serif font-bold mb-2 flex items-center space-x-2">
                <Sparkles size={18} className="text-gold" />
                <span>Add Your Voice</span>
              </h4>
              <p className="text-xs text-cream/60 leading-relaxed mb-6">
                Your authentic reviews inspire us. Your review will immediately display in our list for testing.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-12 h-12 bg-green-950/80 text-green-300 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={24} />
                  </div>
                  <h5 className="font-serif font-bold text-lg mb-1 text-white">Feedback Added Successfully!</h5>
                  <p className="text-xs text-cream/50">Your review has been rendered in our list.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  {/* Name field */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-mono font-bold text-gold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Shruti Patekar"
                      className="w-full px-4 py-2.5 bg-black/40 border border-gold/20 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold text-white placeholder-white/20"
                    />
                  </div>

                  {/* Rating star selectors */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-mono font-bold text-gold">
                      Rating
                    </label>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setNewRating(i + 1)}
                          className="focus:outline-none hover:scale-110 transition-transform"
                        >
                          <Star
                            size={22}
                            className={i < newRating ? "fill-current text-gold" : "text-white/20"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tag category field */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-mono font-bold text-gold">
                      Dining Type Tag
                    </label>
                    <select
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      className="w-full px-4 py-2.5 bg-black/40 border border-gold/20 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold text-white select-dark"
                    >
                      <option value="Family Dinner">Family Dinner</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Romantic Night">Romantic Night</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Coffee & Dessert">Coffee & Dessert</option>
                    </select>
                  </div>

                  {/* Comment field */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-mono font-bold text-gold">
                      Your Review Comment
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Beautiful cozy vibe under bamboo reed, amazing paneer butter masala..."
                      className="w-full px-4 py-2.5 bg-black/40 border border-gold/20 focus:border-gold rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold text-white placeholder-white/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 bg-gold text-charcoal hover:bg-gold-light transition-colors font-bold text-xs uppercase tracking-widest rounded-sm"
                    id="submit-review-form"
                  >
                    Post Testimonial
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
