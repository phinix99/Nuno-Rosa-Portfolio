import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useEffect } from 'react';

interface ProjectGalleryProps {
  categoryKey: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectGallery({ categoryKey, title, isOpen, onClose }: ProjectGalleryProps) {
  // Use exact match or fallback for different casing in keys
  let images = portfolioData[categoryKey];
  if (!images) {
    const foundKey = Object.keys(portfolioData).find(k => k.toUpperCase() === categoryKey.toUpperCase());
    images = foundKey ? portfolioData[foundKey] : [];
  }

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1500px] h-[90vh] bg-[#0a0a0a] rounded-[24px] md:rounded-[32px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-neutral-900 z-10 shrink-0 shadow-sm">
              <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-tight uppercase text-white">
                {title}
              </h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Gallery */}
            <div className="overflow-y-auto p-4 md:p-8 bg-[#050505] flex-1">
              {images.length === 0 ? (
                <div className="text-white/50 py-20 text-center font-sans tracking-widest text-sm uppercase">
                  No images found for this category.
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[220px]">
                  {images.map((src, i) => {
                    // Bento logic for varied sizing
                    let spanClass = "col-span-1 row-span-1";
                    if (i % 7 === 0) spanClass = "col-span-2 row-span-2";
                    else if (i % 5 === 0) spanClass = "col-span-1 row-span-2";
                    else if (i % 11 === 0) spanClass = "col-span-2 row-span-1";

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "50px" }}
                        transition={{ duration: 0.5, delay: (i % 10) * 0.05 }}
                        key={src + i}
                        className={`group relative rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 ${spanClass}`}
                      >
                        <img 
                          src={src} 
                          alt={`${title} project ${i}`}
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <a href={src} target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all border border-white/20">
                            <Maximize2 size={20} />
                          </a>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
