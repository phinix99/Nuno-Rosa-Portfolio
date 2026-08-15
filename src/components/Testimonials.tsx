import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    role: "Global Head of Visual Merchandising, Luxury Brand",
    text: "Nuno is an absolute visionary. His ability to translate brand identity into physical spaces is unparalleled. Our recent flagship launch saw a 40% increase in foot traffic entirely due to his compelling window designs.",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Fashion Retail Group",
    text: "Working with Nuno has completely transformed our brand presentation. He brings a perfect balance of intense creativity and sharp commercial awareness. The return on investment on his spatial architecture has been phenomenal.",
  },
  {
    name: "Michael Chen",
    role: "Director of Brand Experience",
    text: "Nuno doesn't just design stores; he builds immersive worlds. His attention to detail and understanding of consumer flow is masterclass level. An incredible talent to have leading any visual strategy.",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-black/10 relative overflow-hidden" id="testimonials">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7651B9]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase mb-4">
            <MessageSquareQuote size={16} /> Endorsements
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-black">
            Why Brands Love <br className="hidden sm:block"/> Working with Nuno
          </h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center px-4 md:px-12"
            >
              <div className="text-4xl md:text-6xl text-[#7651B9]/40 mb-6 font-serif">"</div>
              <p className="font-sans text-xl md:text-3xl font-light leading-relaxed text-black/90 mb-10 max-w-3xl">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex flex-col items-center gap-1">
                <h4 className="font-sans text-lg font-bold tracking-tight uppercase text-black">
                  {testimonials[currentIndex].name}
                </h4>
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-black/60">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 flex flex-col gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 text-black/50 hover:text-white hover:bg-[#7651B9] hover:border-[#7651B9] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 flex flex-col gap-4">
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 text-black/50 hover:text-white hover:bg-[#7651B9] hover:border-[#7651B9] transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#7651B9] w-6' : 'bg-black/20 hover:bg-black/40'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
