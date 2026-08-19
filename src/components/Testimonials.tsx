import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight, Linkedin, MapPin, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Anne-Marie Bodal",
    role: "Brand Strategy & Product Transformation Specialist | Global Multi-Product Design Leader",
    country: "France",
    text: "Nuno is incredibly process-driven, which means complex, multi-city projects never lost momentum; he has a gift for navigating complexity and still driving transformation and delivery at scale. He's also a brilliant trainer, generous with his knowledge and genuinely invested in building up the people around him. And beyond the talent and the rigor, Nuno’s a great company: collaborative, quick-witted, and funny in a way that made long work days and tight deadlines feel lighter."
  },
  {
    name: "Hannah Mercer",
    role: "CEO, Footasylum",
    country: "UK",
    text: "Nuno was visionary in his implementation across the array of brands; his attention to detail, flair and execution were exemplary. A pleasure to work with."
  },
  {
    name: "Peter Coulstock",
    role: "CEO, Lacoste",
    country: "UK",
    text: "Working with Nuno was a real pleasure; always professional, he is very creative, inspiring, respectful and a good communicator. Nuno was fully responsible for the merchandise department, including the budgets. Nuno was well respected by his team, always managing to bring the best out of them."
  },
  {
    name: "Nisha Pikle",
    role: "Retail & Brand Head | Strategy & P&L",
    country: "India",
    text: "Nuno has an incredible eye for detail—his in-store display sensibility significantly elevated Vero Moda brand presence and delivered a premium experience for our customers. Season after season, his innovative window concepts set us apart and brought our collections to life in fresh, compelling ways. He is an outstanding VM leader and a huge asset to any brand."
  },
  {
    name: "Clare Lecointe",
    role: "Senior Retail Director, Bicester Village Shopping Collection",
    country: "UK",
    text: "I worked with Nuno at Bicester Village, where we both worked with premium fashion brands such as Prada, Dior, Gucci, etc. Nuno is a talented Visual Merchandiser, hugely creative and able to adapt to a variety of VM styles. He was also great fun to work with!"
  },
  {
    name: "Ammar Nagane",
    role: "Head of HR Operations, Compensation & Benefits | HR Transformation & Operational Efficiency",
    country: "India",
    text: "Nuno Rosa is one of the most dedicated Visual Merchandising professionals I’ve worked with. He is willing to go the extra mile to get the work done under any circumstances. He consistently demonstrated a solid work ethic at Bestseller. He is not only a reliable and forward-thinking leader but also an inspiring team player."
  },
  {
    name: "Juan Carlos Gómez García",
    role: "CDMO LATAM, L'Oréal",
    country: "Mexico",
    text: "Nuno is always professional; he is very, very creative, inspiring, responsible, respectful and a big and good communicator."
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
    }, 7000);
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
    <section className="w-full bg-white text-black py-20 md:py-32 px-6 md:px-12 lg:px-20 border-b border-black/10 relative overflow-hidden" id="testimonials">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7651B9]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-18">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase mb-4">
            <Linkedin size={14} /> Verified LinkedIn Endorsements
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-black max-w-3xl leading-[1.1]">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="font-sans text-sm md:text-base font-light text-neutral-500 max-w-xl mt-3">
            Read firsthand recommendations from retail CEOs, brand directors, and global colleagues.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[340px] flex items-center justify-center p-6 md:p-12 rounded-3xl bg-[#FAF9FB] border border-[#7651B9]/15 shadow-[0_20px_50px_rgba(118,81,185,0.06)]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center w-full"
            >
              <div className="w-10 h-10 rounded-full bg-[#7651B9]/10 text-[#7651B9] flex items-center justify-center mb-6">
                <MessageSquareQuote size={20} />
              </div>

              <p className="font-sans text-lg md:text-2xl font-light leading-relaxed text-black/90 mb-8 max-w-3xl">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex flex-col items-center gap-1.5 pt-4 border-t border-black/10 w-full max-w-md">
                <div className="flex items-center gap-2">
                  <h4 className="font-sans text-base md:text-lg font-bold tracking-tight text-black">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/5 text-[10px] font-semibold tracking-wider text-black/60 uppercase">
                    <MapPin size={10} className="text-[#7651B9]" /> {testimonials[currentIndex].country}
                  </span>
                </div>
                <span className="font-sans text-xs md:text-sm font-medium text-black/60 text-center leading-snug">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-6 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full bg-white border border-black/10 text-black/70 hover:text-white hover:bg-[#7651B9] hover:border-[#7651B9] transition-all shadow-md"
            title="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-6 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full bg-white border border-black/10 text-black/70 hover:text-white hover:bg-[#7651B9] hover:border-[#7651B9] transition-all shadow-md"
            title="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>

        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              title={t.name}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-[#7651B9] w-8' : 'bg-black/20 hover:bg-black/40 w-2'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
