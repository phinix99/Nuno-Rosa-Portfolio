import { useParams, useNavigate, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Play, Pause, Home, ArrowUpRight } from 'lucide-react';

// Map slugs back to keys in portfolioData
const slugMap: Record<string, string> = {
  "creative-windows": "Creative Windows",
  "in-store-display": "In-store Display",
  "limited-editions": "Limited Editions",
  "e-commerce-styling": "E-Commerce & Styling",
  "conceptual-design": "Conceptual Design",
  "visual-signage": "Visual Signage",
  "trade-shows": "Trade Shows",
  "showroom-curation": "Showroom Curation",
  "luxury-events": "Luxury Events",
  "press-speaker": "Press & Guest Speaker",
  // Aliases for compatibility
  "visual-merchandising": "Creative Windows",
  "concept-signage": "Conceptual Design",
  "events-exhibition": "Trade Shows"
};

const galleryTabs = [
  { name: "Creative Windows", slug: "creative-windows" },
  { name: "In-store Display", slug: "in-store-display" },
  { name: "Limited Editions", slug: "limited-editions" },
  { name: "E-Commerce & Styling", slug: "e-commerce-styling" },
  { name: "Conceptual Design", slug: "conceptual-design" },
  { name: "Visual Signage", slug: "visual-signage" },
  { name: "Trade Shows", slug: "trade-shows" },
  { name: "Showroom Curation", slug: "showroom-curation" },
  { name: "Luxury Events", slug: "luxury-events" },
  { name: "Press & Guest Speaker", slug: "press-speaker" }
];

export default function ProjectGalleryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const categoryKey = category ? slugMap[category] : "";
  const subcategories = categoryKey ? portfolioData[categoryKey] || {} : {};
  const flattenedImages: string[] = (Object.values(subcategories) as any).flat(Infinity).filter(Boolean) as string[];
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
  }, [category]);

  if (!category || !categoryKey) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4 font-sans tracking-widest uppercase">Gallery not found</h1>
        <button onClick={() => navigate('/')} className="px-6 py-3 bg-black text-white hover:bg-[#0B3175] hover:text-white transition-colors rounded-lg text-xs font-bold uppercase tracking-wider">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#0B3175] selection:text-white pb-24">
      {/* Sticky Minimal Navbar */}
      <nav className="sticky top-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-black/5 px-6 md:px-12 py-4 md:py-5 flex justify-between items-center shadow-xs">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 font-bold tracking-widest text-sm md:text-base uppercase hover:text-[#0B3175] transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> NUNO ROSA
          </Link>
          <span className="text-neutral-300 hidden sm:inline">|</span>
          <Link to="/portfolio" className="text-xs uppercase tracking-wider font-semibold text-neutral-500 hover:text-[#0B3175] transition-colors hidden sm:inline">
            ← All Disciplines
          </Link>
        </div>

        <span className="font-mono text-xs md:text-sm text-black/60 tracking-widest uppercase">
          {flattenedImages.length} Curated Visuals
        </span>
      </nav>

      {/* Clean Minimal Header */}
      <header className="max-w-[1500px] mx-auto px-6 md:px-12 pt-6 md:pt-10 pb-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-500 mb-4">
          <Link to="/" className="hover:text-[#0B3175] transition-colors flex items-center gap-1.5 font-medium">
            <Home size={13} /> Home
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <Link to="/portfolio" className="hover:text-[#0B3175] transition-colors">
            Portfolio
          </Link>
          <ChevronRight size={13} className="text-neutral-400" />
          <span className="text-neutral-900 font-bold">{categoryKey}</span>
        </nav>

        {/* Left-Aligned Visible Gallery Switcher Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2 py-2 mb-6">
          {galleryTabs.map((tab) => (
            <Link
              key={tab.slug}
              to={`/gallery/${tab.slug}`}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all border ${
                category === tab.slug
                  ? 'bg-gradient-to-r from-[#0B3175] to-[#601DB3] text-white border-transparent shadow-xs'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border-black/5'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        {/* Gallery Title */}
        <div className="flex items-baseline justify-between gap-4 border-b border-black/10 pb-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase text-black">
              {categoryKey}
            </h1>
            <div className="w-12 h-[2.5px] bg-gradient-to-r from-[#0B3175] to-[#601DB3] mt-2" />
          </div>
          <span className="font-mono text-xs text-black/40 uppercase tracking-widest hidden sm:inline">
            {flattenedImages.length} Visuals
          </span>
        </div>
      </header>

      {/* Gallery Layout */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 mt-4">
        {category === 'press-speaker' && (
          <motion.a 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            href="https://www.retail4growth.com/search/nuno-rosa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-8 p-5 md:p-7 rounded-sm bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-black/10 hover:border-[#601DB3] transition-all group shadow-sm"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#0B3175] to-[#601DB3]">
                Featured Press & Articles
              </span>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-white group-hover:text-[#601DB3] transition-colors leading-snug">
                Latest from the world of retail experience and its eco-system
              </h3>
              <p className="text-xs text-white/70">
                Explore Nuno Rosa's complete collection of published interviews, store analyses, and retail design columns on Retail4Growth.
              </p>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0B3175] to-[#601DB3] text-white text-xs font-bold uppercase tracking-wider rounded-sm shrink-0 group-hover:bg-white group-hover:text-black transition-colors shadow-sm">
              <span>Read on Retail4Growth</span>
              <ArrowUpRight size={14} />
            </div>
          </motion.a>
        )}

        {!hasImages ? (
           <p className="text-black/40 uppercase tracking-widest py-10 font-mono text-sm">No images available for this discipline.</p>
        ) : (
          <div className="flex flex-col gap-12 md:gap-16">
            {Object.entries(subcategories).map(([subcatName, subcatContent], subcatIdx) => {
              if (!subcatContent || (subcatContent as any).length === 0) return null;

              const isRowBased = Array.isArray(subcatContent[0]);
              const rowList: string[][] = isRowBased
                ? (subcatContent as unknown as string[][])
                : [(subcatContent as unknown as string[])];

              // Global offset for lightbox
              let globalOffset = 0;
              Object.values(subcategories).slice(0, subcatIdx).forEach((prev) => {
                globalOffset += (prev as any).flat(Infinity).length;
              });

              let currentCounter = 0;
              const showSubcatHeader = Object.keys(subcategories).length > 1 && subcatName !== 'Gallery' && subcatName.toLowerCase() !== categoryKey.toLowerCase();

              return (
                <section key={subcatName}>
                  {showSubcatHeader && (
                    <div className="sticky top-[60px] md:top-[76px] z-30 bg-white/95 backdrop-blur-md py-3 mb-4 md:mb-6 border-b border-black/10">
                      <h2 className="text-lg md:text-xl font-medium tracking-wide uppercase text-black/90">
                        {subcatName}
                      </h2>
                    </div>
                  )}

                  <div className="flex flex-col gap-4 md:gap-6">
                    {rowList.map((row, rowIdx) => {
                      const rowLen = row.length;
                      let gridClass = "grid-cols-1";
                      let aspectClass = "aspect-[16/10] md:aspect-[21/9] max-h-[580px]";

                      if (rowLen === 2) {
                        gridClass = "grid-cols-1 sm:grid-cols-2";
                        aspectClass = "aspect-[4/3] md:aspect-[16/11] max-h-[500px]";
                      } else if (rowLen === 3) {
                        gridClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
                        aspectClass = "aspect-[1/1] md:aspect-[4/3] max-h-[420px]";
                      } else if (rowLen >= 4) {
                        gridClass = "grid-cols-2 sm:grid-cols-4";
                        aspectClass = "aspect-[3/4] md:aspect-[1/1] max-h-[360px]";
                      }

                      return (
                        <div key={rowIdx} className={`grid ${gridClass} gap-3 md:gap-5`}>
                          {row.map((src) => {
                            const globalIndex = globalOffset + currentCounter;
                            currentCounter++;

                            return (
                              <motion.div
                                key={src + globalIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "50px" }}
                                transition={{ duration: 0.5 }}
                                onClick={() => setSelectedImageIndex(globalIndex)}
                                className={`group relative rounded-sm md:rounded overflow-hidden bg-neutral-100/80 border border-black/10 cursor-pointer shadow-xs hover:shadow-lg hover:border-[#0B3175]/50 transition-all duration-500 flex items-center justify-center ${aspectClass}`}
                              >
                                <img 
                                  src={src} 
                                  alt={`${subcatName} showcase ${globalIndex + 1}`}
                                  className="w-full h-full object-contain p-1 sm:p-2 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3175]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <div className="absolute inset-0 bg-[#0B3175]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                                  <span className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-xs text-[#0B3175] font-mono text-xs uppercase tracking-widest border border-[#0B3175]/20 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 shadow-md">
                                    View Visual
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full py-12 mt-16 border-t border-neutral-200/80 text-center font-sans text-xs tracking-wider uppercase text-neutral-500 bg-[#fafafa] flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-neutral-700">
          <Link 
            to="/#vm-course" 
            className="hover:text-[#0B3175] transition-colors flex items-center gap-1 font-semibold"
          >
            Contact / Inquire <ArrowUpRight size={12} />
          </Link>
          <span className="text-neutral-300 hidden sm:inline">•</span>
          <a 
            href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#0B3175] transition-colors flex items-center gap-1 font-semibold"
          >
            LinkedIn <ArrowUpRight size={12} />
          </a>
          <span className="text-neutral-300 hidden sm:inline">•</span>
          <a 
            href="https://www.instagram.com/nuno.marques.rosa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#0B3175] transition-colors flex items-center gap-1 font-semibold"
          >
            Instagram <ArrowUpRight size={12} />
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} NUNO ROSA SPATIAL DESIGN ARCHIVES. ALL RIGHTS RESERVED.
        </div>
      </footer>

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
                  className="w-12 h-12 flex items-center justify-center rounded-sm bg-black/5 hover:bg-black/10 text-black transition-colors border border-black/10 backdrop-blur-md"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button 
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-12 h-12 flex items-center justify-center rounded-sm bg-black/5 hover:bg-black/10 text-black transition-colors border border-black/10 backdrop-blur-md"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Previous Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-sm bg-white/40 hover:bg-[#0B3175] text-black hover:text-white transition-colors border border-black/10 backdrop-blur-md hidden sm:flex"
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
                    className="max-w-full max-h-full object-contain drop-shadow-[0_20px_60px_rgba(11, 49, 117,0.15)]"
                    onClick={(e) => e.stopPropagation()} // prevent close on image click
                  />
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-sm bg-white/40 hover:bg-[#0B3175] text-black hover:text-white transition-colors border border-black/10 backdrop-blur-md hidden sm:flex"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Progress Bar (if playing) */}
            {isPlaying && (
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#0B3175]"
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
