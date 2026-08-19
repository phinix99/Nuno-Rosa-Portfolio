import { useParams, useNavigate, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Play, Pause, Home } from 'lucide-react';

// Map slugs back to keys
const slugMap: Record<string, string> = {
  "visual-merchandising": "VISUAL MERCHANDISING",
  "e-commerce-styling": "E-COMMERCE & STYLING",
  "concept-signage": "CONCEPT & SIGNAGE",
  "events-exhibition": "EVENTS & Brand Exhibition",
  "press-speaker": "PRESS & GUEST SPEAKER"
};

export default function ProjectGalleryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const categoryKey = category ? slugMap[category] : "";
  const subcategories = categoryKey ? portfolioData[categoryKey] || {} : {};
  const flattenedImages = Object.values(subcategories).flat();
  const hasImages = flattenedImages.length > 0;

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (selectedImageIndex === null || !isPlaying) return;

    const timer = setInterval(() => {
      setSelectedImageIndex((prev) => prev !== null ? (prev + 1) % flattenedImages.length : null);
    }, 3500); // 3.5 seconds per slide

    return () => clearInterval(timer);
  }, [selectedImageIndex, isPlaying, flattenedImages.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % flattenedImages.length);
    }
  }, [selectedImageIndex, flattenedImages.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + flattenedImages.length) % flattenedImages.length);
    }
  }, [selectedImageIndex, flattenedImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  // Handle scroll lock
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!category || !categoryKey) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4 font-sans tracking-widest uppercase">Gallery not found</h1>
        <button onClick={() => navigate('/')} className="px-6 py-3 bg-black text-white hover:bg-[#7651B9] hover:text-white transition-colors rounded-lg text-xs font-bold uppercase tracking-wider">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#7651B9] selection:text-white pb-24">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-black/5 px-6 md:px-12 py-4 md:py-5 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 font-bold tracking-widest text-sm md:text-base uppercase hover:text-[#7651B9] transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> NUNO ROSA
          </Link>
          <span className="text-neutral-300 hidden sm:inline">|</span>
          <Link to="/portfolio" className="text-xs uppercase tracking-wider font-semibold text-neutral-500 hover:text-[#7651B9] transition-colors hidden sm:inline">
            ← All Disciplines
          </Link>
        </div>
        <span className="font-mono text-xs md:text-sm text-black/60 tracking-widest uppercase">
          {flattenedImages.length} Curated Visuals
        </span>
      </nav>

      {/* Header */}
      <header className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-500 mb-8">
          <Link to="/" className="hover:text-[#7651B9] transition-colors flex items-center gap-1.5 font-medium">
            <Home size={13} /> Home
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <Link to="/portfolio" className="hover:text-[#7651B9] transition-colors">
            Portfolio
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <span className="text-neutral-900 font-bold">{categoryKey}</span>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-black mb-6 leading-none">
            {categoryKey}
          </h1>
          <div className="w-20 h-[3px] bg-[#7651B9]" />
          <p className="mt-6 text-black/70 font-light max-w-2xl text-base md:text-xl leading-relaxed">
            Explore the curated spatial architecture and visual merchandising concepts for {categoryKey}.
          </p>
        </motion.div>
      </header>

      {/* Bento Grid */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-12">
        {!hasImages ? (
           <p className="text-black/40 uppercase tracking-widest py-10 font-mono text-sm">No images available for this discipline.</p>
        ) : (
          <div className="flex flex-col gap-16 md:gap-24">
            {Object.entries(subcategories).map(([subcatName, subcatImages], subcatIdx) => {
              if (subcatImages.length === 0) return null;
              
              const globalIndexOffset = Object.values(subcategories).slice(0, subcatIdx).reduce((acc, curr) => acc + curr.length, 0);

              return (
                <section key={subcatName}>
                  {subcatName !== 'Gallery' && (
                    <div className="sticky top-[60px] md:top-[76px] z-30 bg-white/95 backdrop-blur-md py-4 mb-4 md:mb-8 border-b border-black/10">
                      <h2 className="text-xl md:text-2xl font-medium tracking-wide uppercase text-black/90">
                        {subcatName}
                      </h2>
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 auto-rows-[200px] md:auto-rows-[320px]">
                    {subcatImages.map((src, localIdx) => {
                      let spanClass = "col-span-1 row-span-1";
                      if (localIdx % 7 === 0) spanClass = "col-span-2 row-span-2";
                      else if (localIdx % 5 === 0) spanClass = "col-span-1 row-span-2";
                      else if (localIdx % 11 === 0) spanClass = "col-span-2 row-span-1";

                      const globalIndex = globalIndexOffset + localIdx;

                      return (
                        <motion.div
                          key={src + localIdx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "50px" }}
                          transition={{ duration: 0.5, delay: (localIdx % 10) * 0.05 }}
                          onClick={() => setSelectedImageIndex(globalIndex)}
                          className={`group relative rounded-lg md:rounded-xl overflow-hidden bg-white border border-black/10 cursor-pointer shadow-sm hover:shadow-xl hover:border-[#7651B9]/50 transition-all duration-500 ${spanClass}`}
                        >
                          <img 
                            src={src} 
                            alt={`${subcatName} showcase ${localIdx}`}
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#7651B9]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-[#7651B9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-md text-[#7651B9] font-mono text-xs uppercase tracking-widest border border-[#7651B9]/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                              View
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>

      {/* Full Screen Auto-Play Carousel Overlay */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-2xl text-black"
          >
            
            {/* Top Bar Controls */}
            <div className="absolute top-0 w-full p-6 md:p-8 flex justify-between items-center z-50">
              <span className="text-black/50 font-mono text-xs md:text-sm tracking-widest">
                {selectedImageIndex + 1} / {flattenedImages.length}
              </span>
              <div className="flex items-center gap-4 md:gap-6">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-black/5 hover:bg-black/10 text-black transition-colors border border-black/10 backdrop-blur-md"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button 
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-black/5 hover:bg-black/10 text-black transition-colors border border-black/10 backdrop-blur-md"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Previous Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-white/40 hover:bg-[#7651B9] text-black hover:text-white transition-colors border border-black/10 backdrop-blur-md hidden sm:flex"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Image Area */}
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-12 md:p-24 overflow-hidden" onClick={() => setSelectedImageIndex(null)}>
              <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIndex}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    src={flattenedImages[selectedImageIndex]}
                    alt={`${categoryKey} showcase ${selectedImageIndex}`}
                    className="max-w-full max-h-full object-contain drop-shadow-[0_20px_60px_rgba(107,76,154,0.15)]"
                    onClick={(e) => e.stopPropagation()} // prevent close on image click
                  />
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/40 hover:bg-[#7651B9] text-black hover:text-white transition-colors border border-black/10 backdrop-blur-md hidden sm:flex"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Progress Bar (if playing) */}
            {isPlaying && (
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#7651B9]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear", repeat: Infinity, key: selectedImageIndex }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
