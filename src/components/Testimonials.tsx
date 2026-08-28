import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight, Linkedin, MapPin } from 'lucide-react';

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
    role: "Vice President – Clothing, Footwear, Accessories & Beauty",
    company: "Yousta",
    country: "India",
    avatar: "/reviews/Anne-Marie Bodal.png",
    text: "Nuno is incredibly process-driven, which means complex, multi-city projects never lost momentum; he has a gift for navigating complexity and driving delivery at scale. A brilliant trainer, generous with knowledge and genuinely invested in building up people around him."
  },
  {
    name: "Hannah Mercer",
    role: "Senior Director",
    company: "Bicester Village Value Retail",
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
    role: "Brand Head",
    company: "Vero Moda",
    country: "India",
    avatar: "/reviews/Nisha Pikle.jfif",
    text: "Nuno has an incredible eye for detail—his in-store display sensibility significantly elevated Vero Moda brand presence. Season after season, his innovative window concepts set us apart and brought collections to life."
  },
  {
    name: "Clare Lecointe",
    role: "Senior Retail Manager",
    company: "Bicester Village Value Retail",
    country: "UK",
    avatar: "/reviews/Clare Lecointe.jfif",
    text: "I worked with Nuno at Bicester Village across premium luxury fashion brands (Prada, Dior, Gucci). Nuno is a talented Visual Merchandiser, hugely creative and able to adapt to a variety of VM styles."
  },
  {
    name: "Ammar Nagane",
    role: "Head of Compensation Benefits",
    company: "Bestseller",
    country: "India",
    avatar: "/reviews/Amar Nagane.jfif",
    text: "Nuno Rosa is one of the most dedicated Visual Merchandising professionals I’ve worked with. A reliable, forward-thinking leader with solid work ethic and an inspiring team player."
  },
  {
    name: "Juan Carlos Gómez García",
    role: "Marketing Director",
    company: "C&A",
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
    <section className="w-full bg-white text-black py-14 md:py-20 lg:py-24 px-5 md:px-10 lg:px-16 border-b border-black/10 relative overflow-hidden" id="testimonials">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#0B3175]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-14 border-b border-black/10 pb-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.22em] text-[#0B3175] uppercase">
              <Linkedin size={14} className="text-[#0077B5]" /> PROFESSIONAL VALIDATION
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[1.08] text-black">
              WHAT LEADERS SAY
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#FAF9FB] border border-black/10 text-black hover:bg-[#0B3175] hover:text-white hover:border-[#0B3175] transition-all shadow-xs"
              title="Previous Reviews"
            >
              <ChevronLeft size={18} />
            </button>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#FAF9FB] border border-black/10 text-black hover:bg-[#0B3175] hover:text-white hover:border-[#0B3175] transition-all shadow-xs"
              title="Next Reviews"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Elevated Reviews Displayed in Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 pt-4">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((t, idx) => (
              <motion.div
                key={`${t.name}-${startIndex + idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative pt-7 flex flex-col justify-between group"
              >
                <div className="w-full h-full p-6 md:p-7 rounded-sm md:rounded bg-[#FAF9FB] border border-black/10 hover:border-[#0B3175]/40 hover:shadow-[0_20px_40px_rgba(11,49,117,0.08)] transition-all duration-300 flex flex-col justify-between relative shadow-xs">
                  
                  {/* Floating Circular Avatar on Top Border */}
                  <div className="absolute -top-7 left-6 flex items-center">
                    <div className="relative">
                      {t.avatar ? (
                        <img 
                          src={t.avatar} 
                          alt={t.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.nextElementSibling) {
                              e.currentTarget.nextElementSibling.classList.remove('hidden');
                            }
                          }}
                        />
                      ) : null}
                      <div className={`${t.avatar ? 'hidden' : 'flex'} w-14 h-14 rounded-full bg-[#0B3175] text-white font-bold items-center justify-center text-sm border-2 border-white shadow-md`}>
                        {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>

                      <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#0077B5] text-white flex items-center justify-center border border-white shadow-xs">
                        <Linkedin size={9} />
                      </div>
                    </div>
                  </div>

                  {/* Top Right: Prominent Country Badge in Elegant Royal Blue */}
                  <div className="flex justify-end items-center mb-5">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0B3175]/10 border border-[#0B3175]/25 text-[10px] md:text-[11px] font-bold tracking-wider text-[#0B3175] uppercase shadow-2xs">
                      <MapPin size={11} className="text-[#0B3175]" /> {t.country}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <div className="flex flex-col gap-3 my-auto">
                    <MessageSquareQuote size={22} className="text-[#0B3175]/30 group-hover:text-[#0B3175]/60 transition-colors" />
                    <p className="font-sans text-xs md:text-sm font-light leading-relaxed text-black/85 italic">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Bottom: Recommender Details */}
                  <div className="pt-4 mt-6 border-t border-black/10 flex flex-col gap-0.5">
                    <h3 className="font-sans text-sm md:text-base font-bold tracking-tight text-black group-hover:text-[#0B3175] transition-colors">
                      {t.name}
                    </h3>
                    <span className="font-sans text-xs font-semibold text-black/75 line-clamp-1">
                      {t.role}
                    </span>
                    <span className="font-sans text-xs font-medium text-black/50 line-clamp-1">
                      {t.company}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Indicator Track */}
        <div className="flex justify-center items-center gap-1.5 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setStartIndex(idx);
              }}
              title={`Jump to review ${idx + 1}`}
              className={`h-1.5 rounded-xs transition-all duration-300 ${
                idx === startIndex ? 'bg-[#0B3175] w-6' : 'bg-black/20 hover:bg-black/40 w-1.5'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
