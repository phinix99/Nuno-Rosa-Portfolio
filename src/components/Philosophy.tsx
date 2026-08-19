import { motion } from 'motion/react';
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

const brandLogos = Array.from({ length: 23 }, (_, i) => ({
  id: `brand-${i + 1}`,
  src: `/brands/${i + 1}.jpg`,
  alt: `Global Brand Icon ${i + 1}`
}));

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
  return (
    <section className="w-full bg-white text-black py-20 md:py-28 border-b border-black/10 overflow-hidden" id="about">
      {/* Full-Screen Brands Carousel Section without container box */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pb-16 md:pb-24">
        <h4 className="text-center font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-black/50 mb-8 md:mb-10">
          TRUSTED BY GLOBAL ICONS
        </h4>
        
        <div className="relative w-full flex overflow-hidden py-10 md:py-16">
          {/* Fade Edges for seamless edge fading on full-screen white background */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex items-center py-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            style={{ width: "fit-content" }}
          >
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`} 
                className="flex items-center justify-center shrink-0 w-44 md:w-60 lg:w-68 h-24 md:h-28 mx-6 md:mx-10 group"
              >
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="max-h-16 md:max-h-20 lg:max-h-24 max-w-[180px] md:max-w-[230px] lg:max-w-[260px] w-auto h-auto object-contain filter grayscale contrast-125 mix-blend-multiply opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-115 transform-gpu origin-center"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Global Footprint Timeline */}
        <div className="mt-16 p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[2rem] bg-[#7651B9] text-white relative overflow-hidden shadow-[0_30px_60px_rgba(107,76,154,0.3)] border border-white/10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Metrics */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-black/50 uppercase mb-4">
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
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6 rounded-xl bg-black/[0.05] border border-black/10 hover:bg-black/[0.1] hover:border-black/20 transition-all duration-300 group cursor-default gap-2 sm:gap-6"
                >
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <span className="font-mono text-sm md:text-base font-bold text-white group-hover:text-black transition-colors tabular-nums">
                      {item.year}
                    </span>
                    <span className="font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase text-white/70 group-hover:text-black/70 transition-colors">
                      {item.location}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1 lg:justify-end text-left sm:text-right">
                    <span className="font-sans text-sm md:text-base font-medium tracking-wide text-white group-hover:text-black transition-colors">
                      {item.role}
                    </span>
                    <span className="hidden sm:inline text-white/30">|</span>
                    <span className="font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase text-white/90 group-hover:text-black/90">
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