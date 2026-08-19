import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center"
        >
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group relative flex items-center gap-2 px-4 py-3 md:px-5 md:py-3.5 rounded-lg bg-[#7651B9] text-white shadow-[0_10px_30px_rgba(118,81,185,0.4)] hover:bg-black hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-white/20 backdrop-blur-md"
          >
            <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowUp size={13} strokeWidth={2.5} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="font-sans text-xs font-bold tracking-widest uppercase pr-1 hidden sm:inline">
              TOP
            </span>

            {/* Subtle Pulse Glow Halo */}
            <span className="absolute -inset-1 rounded-lg bg-[#7651B9]/30 blur-sm pointer-events-none group-hover:opacity-0 transition-opacity" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
