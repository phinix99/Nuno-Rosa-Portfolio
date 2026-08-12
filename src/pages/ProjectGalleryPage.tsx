import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';

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
  const images = categoryKey ? portfolioData[categoryKey] : [];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (selectedImageIndex === null || !isPlaying) return;

    const timer = setInterval(() => {
      setSelectedImageIndex((prev) => prev !== null ? (prev + 1) % images.length : null);
    }, 3500); // 3.5 seconds per slide

    return () => clearInterval(timer);
  }, [selectedImageIndex, isPlaying, images.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  }, [selectedImageIndex, images.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  }, [selectedImageIndex, images.length]);

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
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4 font-sans tracking-widest uppercase">Gallery not found</h1>
        <button onClick={() => navigate('/')} className="px-6 py-3 bg-white text-black hover:bg-[#6B4C9A] hover:text-white transition-colors rounded-full text-xs font-bold uppercase tracking-wider">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#6B4C9A] selection:text-white pb-24">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 p-4 md:px-12 md:py-6 flex justify-between items-center shadow-lg">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 font-bold tracking-widest text-sm md:text-base uppercase hover:text-[#d3bcfa] transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> NUNO ROSA
        </button>
        <span className="font-mono text-xs md:text-sm text-white/50 tracking-widest uppercase hidden sm:block">
          GALLERY / {categoryKey}
        </span>
      </nav>

      {/* Header */}
      <header className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16 md:pt-28 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-white mb-6 leading-none">
            {categoryKey}
          </h1>
          <div className="w-20 h-[2px] bg-[#6B4C9A]" />
          <p className="mt-8 text-white/60 font-light max-w-2xl text-lg md:text-xl leading-relaxed">
            Explore the curated spatial architecture and visual merchandising concepts for {categoryKey}.
          </p>
        </motion.div>
      </header>

      {/* Bento Grid */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-12">
        {images.length === 0 ? (
           <p className="text-white/40 uppercase tracking-widest py-10 font-mono text-sm">No images available for this discipline.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 auto-rows-[200px] md:auto-rows-[320px]">
            {images.map((src, i) => {
              // Bento logic for varied sizing
              let spanClass = "col-span-1 row-span-1";
              if (i % 7 === 0) spanClass = "col-span-2 row-span-2";
              else if (i % 5 === 0) spanClass = "col-span-1 row-span-2";
              else if (i % 11 === 0) spanClass = "col-span-2 row-span-1";

              return (
                <motion.div
                  key={src + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.5, delay: (i % 10) * 0.05 }}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`group relative rounded-xl md:rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-500 ${spanClass}`}
                >
                  <img 
                    src={src} 
                    alt={`${categoryKey} showcase ${i}`}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Button */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white font-mono text-xs uppercase tracking-widest border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View
                    </span>
                  </div>
                </motion.div>
              )
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl"
          >
            
            {/* Top Bar Controls */}
            <div className="absolute top-0 w-full p-6 md:p-8 flex justify-between items-center z-50">
              <span className="text-white/50 font-mono text-xs md:text-sm tracking-widest">
                {selectedImageIndex + 1} / {images.length}
              </span>
              <div className="flex items-center gap-4 md:gap-6">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 backdrop-blur-md"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button 
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 backdrop-blur-md"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Previous Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 text-white transition-colors border border-white/10 backdrop-blur-md hidden sm:flex"
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
                  src={images[selectedImageIndex]}
                  alt={`${categoryKey} showcase ${selectedImageIndex}`}
                  className="max-w-full max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  onClick={(e) => e.stopPropagation()} // prevent close on image click
                />
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 text-white transition-colors border border-white/10 backdrop-blur-md hidden sm:flex"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Progress Bar (if playing) */}
            {isPlaying && (
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#6B4C9A]"
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
