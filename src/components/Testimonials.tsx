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
    text: "Nuno is incredibly process-driven, which means complex, multi-city projects never lost momentum; he has a gift for navigating complexity and still driving transformation and delivery at scale. He's also a brilliant trainer, generous with his knowledge and genuinely invested in building up the people around him. And beyond the talent and the rigor, Nuno’s a great company: collaborative, quick-witted, and funny in a way that made long work days and tight deadlines feel lighter."
  },
  {
    name: "Hannah Mercer",
    role: "Chief Executive Officer",
    company: "Footasylum",
    country: "UK",
    avatar: "/reviews/Hannah Mercer.jfif",
    text: "Nuno was visionary in his implementation across the array of brands; his attention to detail, flair and execution were exemplary. A pleasure to work with."
  },
  {
    name: "Peter Coulstock",
    role: "Chief Executive Officer",
    company: "Lacoste UK",
    country: "UK",
    avatar: "/reviews/Peter Coulstock.jfif",
    text: "Working with Nuno was a real pleasure; always professional, he is very creative, inspiring, respectful and a good communicator. Nuno was fully responsible for the merchandise department, including the budgets. Nuno was well respected by his team, always managing to bring the best out of them."
  },
  {
    name: "Nisha Pikle",
    role: "Retail & Brand Head",
    company: "Vero Moda | Strategy & P&L",
    country: "India",
    avatar: "/reviews/Nisha Pikle.jfif",
    text: "Nuno has an incredible eye for detail—his in-store display sensibility significantly elevated Vero Moda brand presence and delivered a premium experience for our customers. Season after season, his innovative window concepts set us apart and brought our collections to life in fresh, compelling ways. He is an outstanding VM leader and a huge asset to any brand."
  },
  {
    name: "Clare Lecointe",
    role: "Senior Retail Director",
    company: "Bicester Village Shopping Collection",
    country: "UK",
    avatar: "/reviews/Clare Lecointe.jfif",
    text: "I worked with Nuno at Bicester Village, where we both worked with premium fashion brands such as Prada, Dior, Gucci, etc. Nuno is a talented Visual Merchandiser, hugely creative and able to adapt to a variety of VM styles. He was also great fun to work with!"
  },
  {
    name: "Ammar Nagane",
    role: "Head of HR Operations, Compensation & Benefits",
    company: "Bestseller | HR Transformation",
    country: "India",
    avatar: "/reviews/Amar Nagane.jfif",
    text: "Nuno Rosa is one of the most dedicated Visual Merchandising professionals I’ve worked with. He is willing to go the extra mile to get the work done under any circumstances. He consistently demonstrated a solid work ethic at Bestseller. He is not only a reliable and forward-thinking leader but also an inspiring team player."
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

  // Auto-play logic
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

  // Get 3 visible testimonials wrapping around the array
  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length]
  ];

  return (
    <section className="w-full bg-white text-black py-20 md:py-32 px-6 md:px-12 lg:px-20 border-b border-black/10 relative overflow-hidden" id="testimonials">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7651B9]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-black/10 pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
              <Linkedin size={14} className="text-[#0077B5]" /> VERIFIED LINKEDIN RECOMMENDATIONS
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase text-black leading-none">
              WHAT LEADERS SAY
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FAF9FB] border border-black/10 text-black hover:bg-[#7651B9] hover:text-white hover:border-[#7651B9] transition-all shadow-xs"
              title="Previous Reviews"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FAF9FB] border border-black/10 text-black hover:bg-[#7651B9] hover:text-white hover:border-[#7651B9] transition-all shadow-xs"
              title="Next Reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3 Reviews Displayed Together in Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((t, idx) => (
              <motion.div
                key={`${t.name}-${startIndex + idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-[#FAF9FB] border border-black/10 hover:border-[#7651B9]/40 hover:shadow-[0_20px_40px_rgba(118,81,185,0.08)] transition-all duration-300 group min-h-[420px]"
              >
                {/* Top: Avatar & Recommender Info */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative shrink-0">
                        {t.avatar ? (
                          <img 
                            src={t.avatar} 
                            alt={t.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#7651B9] shadow-sm group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // Fallback to initials avatar if image error
                              e.currentTarget.style.display = 'none';
                              if (e.currentTarget.nextElementSibling) {
                                e.currentTarget.nextElementSibling.classList.remove('hidden');
                              }
                            }}
                          />
                        ) : null}
                        <div className={`${t.avatar ? 'hidden' : 'flex'} w-14 h-14 rounded-full bg-[#7651B9] text-white font-bold items-center justify-center text-base border-2 border-white shadow-sm`}>
                          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>

                        {/* LinkedIn Mini Badge */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0077B5] text-white flex items-center justify-center border-2 border-white">
                          <Linkedin size={10} />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-sans text-base md:text-lg font-bold tracking-tight text-black group-hover:text-[#7651B9] transition-colors leading-snug">
                          {t.name}
                        </h3>
                        <span className="font-sans text-xs font-semibold text-black/70 line-clamp-1">
                          {t.role}
                        </span>
                        <span className="font-sans text-[11px] text-black/50 line-clamp-1">
                          {t.company}
                        </span>
                      </div>
                    </div>

                    <span className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/5 text-[10px] font-bold tracking-wider text-black/60 uppercase">
                      <MapPin size={10} className="text-[#7651B9]" /> {t.country}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="relative">
                    <p className="font-sans text-xs md:text-sm font-light leading-relaxed text-black/80">
                      "{t.text}"
                    </p>
                  </div>
                </div>

                {/* Bottom: Verified LinkedIn Endorsement Badge */}
                <div className="pt-5 mt-6 border-t border-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#7651B9]">
                    <Sparkles size={12} />
                    <span>Verified Recommendation</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Indicator Track */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setStartIndex(idx);
              }}
              title={`Jump to review ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === startIndex ? 'bg-[#7651B9] w-8' : 'bg-black/20 hover:bg-black/40 w-2'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
