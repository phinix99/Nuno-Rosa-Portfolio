import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight, Linkedin, MapPin, Sparkles, Star } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  country: string;
  avatar?: string;
  text: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Anne-Marie Bodal",
    role: "Brand Strategy & Product Transformation Specialist",
    company: "Global Multi-Product Design Leader",
    country: "France",
    avatar: "/reviews/Anne-Marie Bodal.png",
    text: "Nuno is incredibly process-driven, which means complex, multi-city projects never lost momentum; he has a gift for navigating complexity and driving delivery at scale. A brilliant trainer, generous with knowledge and genuinely invested in building up people around him."
  },
  {
    name: "Hannah Mercer",
    role: "Chief Executive Officer",
    company: "Footasylum",
    country: "UK",
    avatar: "/reviews/Hannah Mercer.jfif",
    text: "Nuno was visionary in his implementation across the array of brands; his attention to detail, flair and execution were exemplary. A true pleasure to work with."
  },
  {
    name: "Peter Coulstock",
    role: "Chief Executive Officer",
    company: "Lacoste UK",
    country: "UK",
    avatar: "/reviews/Peter Coulstock.jfif",
    text: "Working with Nuno was a real pleasure; always professional, highly creative, respectful and a great communicator. Fully responsible for merchandise and budgets, always managing to bring the best out of his team."
  },
  {
    name: "Nisha Pikle",
    role: "Retail & Brand Head",
    company: "Vero Moda | Strategy & P&L",
    country: "India",
    avatar: "/reviews/Nisha Pikle.jfif",
    text: "Nuno has an incredible eye for detail—his in-store display sensibility significantly elevated Vero Moda brand presence. Season after season, his innovative window concepts set us apart and brought collections to life."
  },
  {
    name: "Clare Lecointe",
    role: "Senior Retail Director",
    company: "Bicester Village Shopping Collection",
    country: "UK",
    avatar: "/reviews/Clare Lecointe.jfif",
    text: "I worked with Nuno at Bicester Village across premium luxury fashion brands (Prada, Dior, Gucci). Nuno is a talented Visual Merchandiser, hugely creative and able to adapt to a variety of VM styles."
  },
  {
    name: "Ammar Nagane",
    role: "Head of HR Operations, Compensation & Benefits",
    company: "Bestseller | HR Transformation",
    country: "India",
    avatar: "/reviews/Amar Nagane.jfif",
    text: "Nuno Rosa is one of the most dedicated Visual Merchandising professionals I’ve worked with. A reliable, forward-thinking leader with solid work ethic and an inspiring team player."
  },
  {
    name: "Juan Carlos Gómez García",
    role: "CDMO LATAM",
    company: "L'Oréal",
    country: "Mexico",
    text: "Nuno is always professional; he is very, very creative, inspiring, responsible, respectful and a big and good communicator."
  }
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, startIndex]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length]
  ];

  return (
    <section className="w-full bg-white text-black py-10 md:py-16 px-6 md:px-12 lg:px-20 border-b border-black/10 relative overflow-hidden" id="testimonials">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#5E27BA]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10 border-b border-black/10 pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#5E27BA] uppercase">
              <Linkedin size={13} className="text-[#0077B5]" /> VERIFIED RECOMMENDATIONS
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[1.08] text-black">
              WHAT LEADERS SAY
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#FAF9FB] border border-black/10 text-black hover:bg-[#5E27BA] hover:text-white hover:border-[#5E27BA] transition-all shadow-xs"
              title="Previous Reviews"
            >
              <ChevronLeft size={18} />
            </button>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#FAF9FB] border border-black/10 text-black hover:bg-[#5E27BA] hover:text-white hover:border-[#5E27BA] transition-all shadow-xs"
              title="Next Reviews"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Reviews Displayed Together in Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((t, idx) => (
              <motion.div
                key={`${t.name}-${startIndex + idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="flex flex-col justify-between p-5 md:p-6 rounded-sm md:rounded bg-[#FAF9FB] border border-black/10 hover:border-[#5E27BA]/40 hover:shadow-[0_15px_30px_rgba(94, 39, 186,0.06)] transition-all duration-300 group min-h-[300px]"
              >
                {/* Top: Avatar & Recommender Info */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        {t.avatar ? (
                          <img 
                            src={t.avatar} 
                            alt={t.name}
                            className="w-12 h-12 rounded-sm object-cover border border-[#5E27BA] shadow-xs group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              if (e.currentTarget.nextElementSibling) {
                                e.currentTarget.nextElementSibling.classList.remove('hidden');
                              }
                            }}
                          />
                        ) : null}
                        <div className={`${t.avatar ? 'hidden' : 'flex'} w-12 h-12 rounded-sm bg-[#5E27BA] text-white font-bold items-center justify-center text-sm border border-white shadow-xs`}>
                          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>

                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-xs bg-[#0077B5] text-white flex items-center justify-center border border-white">
                          <Linkedin size={8} />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-sans text-sm md:text-base font-bold tracking-tight text-black group-hover:text-[#5E27BA] transition-colors leading-snug">
                          {t.name}
                        </h3>
                        <span className="font-sans text-[11px] font-semibold text-black/70 line-clamp-1">
                          {t.role}
                        </span>
                        <span className="font-sans text-[10px] text-black/50 line-clamp-1">
                          {t.company}
                        </span>
                      </div>
                    </div>

                    <span className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-xs bg-black/5 text-[9px] font-bold tracking-wider text-black/60 uppercase">
                      <MapPin size={9} className="text-[#5E27BA]" /> {t.country}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-xs font-light leading-relaxed text-black/80">
                    "{t.text}"
                  </p>
                </div>

                {/* Bottom: Verified Endorsement Tag */}
                <div className="pt-3 mt-4 border-t border-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#5E27BA]">
                    <Sparkles size={11} />
                    <span>Verified Endorsement</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Indicator Track */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setStartIndex(idx);
              }}
              title={`Jump to review ${idx + 1}`}
              className={`h-1.5 rounded-xs transition-all duration-300 ${
                idx === startIndex ? 'bg-[#5E27BA] w-6' : 'bg-black/20 hover:bg-black/40 w-1.5'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
