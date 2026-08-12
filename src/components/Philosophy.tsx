import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { Globe2, Briefcase, Award, TrendingUp, Users, MapPin, Building2, CheckCircle2 } from 'lucide-react';

const timeline = [
  { location: "Bangalore, India", year: "2025", brand: "YOUSTA", role: "Chief of Visual Merchandising" },
  { location: "Bangalore, India", year: "2024", brand: "TRENDS", role: "Vice President of Visual Merchandising F&L" },
  { location: "Mumbai, India", year: "2022", brand: "JACK & JONES Men's and Juniors", role: "Head of VM & E-commerce Styling Manager" },
  { location: "Mumbai, India", year: "2015", brand: "VERO MODA", role: "Head of VM & E-commerce Styling Manager" },
  { location: "GDL, Mexico", year: "2013", brand: "C&A", role: "Department Stores National Head VM & Brand Presentation" },
  { location: "UK & Ireland", year: "2010", brand: "LACOSTE", role: "Visual Merchandising Director & Store Design Manager" },
  { location: "Dubai & GC, UAE", year: "2008", brand: "Chalhoub Group (Waterman, Bell & Ross, S.T.Dupont, Misaki)", role: "Senior Regional VM Manager" },
  { location: "London, UK", year: "2005", brand: "HUGO BOSS", role: "Area Display Merchandiser" },
  { location: "Lisbon, Portugal", year: "1996", brand: "MANGO", role: "Country VM of Franchise Expansion" }
];

const brands = [
  "Mango", "United Colours of Benetton", "Central Models", "Hugo Boss", 
  "Lacoste", "Bicester Village Outlet", "Chalhoub Group", "C&A Group", 
  "Vero Moda", "Jack & Jones", "Trends", "Yousta"
];

const metrics = [
  { icon: Globe2, label: "International Experience", value: "30+ Yrs" },
  { icon: MapPin, label: "Market Takeover", value: "3 Continents" },
  { icon: TrendingUp, label: "Annual VM Budget Savings", value: "+5Cr INR" },
  { icon: Building2, label: "Stores Managed", value: "2,000+" },
  { icon: Users, label: "Professionals Managed", value: "50+" },
  { icon: CheckCircle2, label: "Brand Enhancement", value: "45%+" },
  { icon: Award, label: "National Window Awards", value: "4" },
  { icon: Users, label: "Guest Speaker / Host", value: "10x" }
];

export default function Philosophy() {
  const [isExpanded, setIsExpanded] = useState(false);

  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="w-full bg-[#fdfdfd] text-[#111] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#111]/10" id="about">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Flex Block: About Me and Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-20 border-b border-[#111]/10"
        >
          {/* Left Side: Header & Content */}
          <div className="w-full lg:w-3/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#6B4C9A] rounded-full animate-pulse" />
              <h2 className="font-sans text-xs font-bold tracking-widest uppercase text-[#6B4C9A]">
                About Me
              </h2>
            </div>
            
            <h3 className="font-sans text-3xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15] font-medium tracking-tight mb-10">
              I balance artistic vision with proven business strategy results at any scale.
            </h3>

            <div className="font-sans text-base md:text-lg font-light leading-relaxed text-[#111]/80 pr-4">
              <p className="mb-8">
                With 30+ years of international fashion retail experience spanning the UAE, Mexico, India, Portugal, and the UK, I am a creative, commercial Visual Merchandiser and Designer who balances artistic vision with proven business strategy results at any scale.
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mb-8 text-[#111]/80">
                      I translate high-impact designs into immersive, 360-degree visual storytelling experiences that completely transform retail environments. By combining eye-catching window concepts with intentional brand enhancement, my signature style and work turns ordinary spaces into commercial triumphs.
                    </p>
                    <p className="mb-8 text-[#111] font-medium italic">
                      "This portfolio is my masterpiece."
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a href="#projects" className="bg-[#6B4C9A] text-[#fdfdfd] px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-lg">
                  View Masterpiece
                </a>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase hover:text-[#6B4C9A] transition-all text-[#111]/60 px-4 py-3"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Read Less' : 'Read Full Story'}
                  <motion.span animate={{ rotate: isExpanded ? -180 : 0 }} transition={{ duration: 0.4 }} className="inline-block">↗</motion.span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Portrait/Lifestyle Image */}
          <div className="w-full lg:w-2/5 flex items-center" ref={imageRef}>
            <div className="w-full aspect-[3/4] rounded-[20px] overflow-hidden bg-[#fdfdfd] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#111]/10 group relative">
              <motion.img 
                style={{ y, scale: 1.15 }}
                src="https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg"
                alt="Nuno Rosa - Creative Director"
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-[1.2]"
              />
              <div className="absolute inset-0 bg-neutral-950/10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </div>
        </motion.div>

        {/* Brands Section */}
        <div className="pt-16 pb-10">
          <h4 className="text-center font-sans text-xs font-bold tracking-widest uppercase text-[#111]/40 mb-10">
            Trusted by Global Icons
          </h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12">
            {brands.map((brand) => (
              <span key={brand} className="font-sans text-lg md:text-xl font-medium tracking-tight text-[#111]/70 hover:text-[#6B4C9A] transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Global Footprint Timeline */}
        <div className="mt-16 p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[2rem] bg-[#050505] text-[#fdfdfd] relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6B4C9A]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Metrics */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#6B4C9A] uppercase mb-4">
                <Globe2 size={14} /> Career Highlights
              </div>
              <h4 className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-10">
                GLOBAL <br /> FOOTPRINT
              </h4>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 border-l-2 border-white/10 pl-4">
                    <span className="font-sans text-2xl font-bold tracking-tight text-white">
                      {metric.value}
                    </span>
                    <span className="font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase text-white/50">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group cursor-default gap-2 sm:gap-6"
                >
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <span className="font-mono text-sm md:text-base font-bold text-[#6B4C9A] group-hover:text-[#d3bcfa] transition-colors tabular-nums">
                      {item.year}
                    </span>
                    <span className="font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase text-white/50 group-hover:text-white/80 transition-colors">
                      {item.location}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1 lg:justify-end text-left sm:text-right">
                    <span className="font-sans text-sm md:text-base font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
                      {item.role}
                    </span>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <span className="font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase text-[#6B4C9A]/80">
                      @{item.brand}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}