import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Globe2, MapPin } from 'lucide-react';

const locations = [
  { 
    city: "LONDON", 
    country: "United Kingdom", 
    timezone: "Europe/London", 
    coords: "51.5074° N, 0.1278° W",
    desc: "Global design strategy headquarters, creative oversight, and luxury European window schemes."
  },
  { 
    city: "DUBAI", 
    country: "UAE", 
    timezone: "Asia/Dubai", 
    coords: "25.2048° N, 55.2708° E",
    desc: "Middle Eastern flagship architecture, luxury experiential activations, and elite client relations."
  },
  { 
    city: "MUMBAI", 
    country: "India", 
    timezone: "Asia/Kolkata", 
    coords: "19.0760° N, 72.8777° E",
    desc: "Large-scale retail production, VM leadership summits, and regional rollouts across Asia."
  },
  { 
    city: "MEXICO CITY", 
    country: "Mexico", 
    timezone: "America/Mexico_City", 
    coords: "19.4326° N, 99.1332° W",
    desc: "Latin American retail rollouts, boutique space optimization, and cultural narrative integration."
  },
  { 
    city: "LISBON", 
    country: "Portugal", 
    timezone: "Europe/Lisbon", 
    coords: "38.7223° N, 9.1393° W",
    desc: "Traditional fine craftsmanship liaison, heritage brand setups, and southern European curation."
  }
];

export default function Philosophy() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [time, setTime] = useState(new Date());

  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Update clocks every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getCityTime = (tz: string) => {
    try {
      return time.toLocaleTimeString('en-GB', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    } catch (e) {
      return "--:--:--";
    }
  };

  return (
    <section className="w-full bg-[#fdfdfd] text-[#111] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#111]/10" id="about">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Flex Block: Who We Are and Image */}
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
              <span className="w-2 h-2 bg-[#fdfdfd] rounded-full" />
              <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-[#111]/60">
                Who We Are
              </h2>
            </div>
            
            <h3 className="font-sans text-3xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15] font-medium tracking-tight mb-10">
              We architect spatial narratives that command attention.
            </h3>

            <div className="font-sans text-base md:text-lg font-light leading-relaxed text-[#111]/80 pr-4">
              <p className="mb-8">
                For over 30 years, we have engineered physical retail experiences that transcend borders, transforming bold brand concepts into immersive, high-conversion environments globally.
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
                      We deconstruct brand identity and physical space to build comprehensive 360-degree environments—from conceptual window displays to intricate in-store flow architectures.
                    </p>
                    <p className="mb-8 text-[#111]/80">
                      We do not merely decorate; we architect the tension between objects and space, executing flawless rollouts across global retail networks.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-6 mt-12">
                <a href="#projects" className="bg-[#fdfdfd] text-[#111] px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors">
                  Our Work
                </a>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase hover:opacity-50 transition-all text-[#111]/60"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Read Less' : 'Our Approach'}
                  <motion.span
                    animate={{ rotate: isExpanded ? -180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block"
                  >
                    ↗
                  </motion.span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Lifestyle Image */}
          <div className="w-full lg:w-2/5 flex items-center" ref={imageRef}>
            <div className="w-full aspect-[3/2] rounded-[20px] overflow-hidden bg-[#fdfdfd] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-[#111]/10 group relative">
              <motion.img 
                style={{ y, scale: 1.15 }}
                src="https://static.wixstatic.com/media/9e4437_23f54bb89f8a4b8bba3f476b18271c3e~mv2.jpg/v1/crop/x_4,y_123,w_2996,h_1491/fill/w_1463,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3_Life%20Style_1180mm%20X%20635mm_edited.jpg"
                alt="Lifestyle Campaign Showcase"
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-[1.2]"
              />
              <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none group-hover:bg-[#fdfdfd]/10 transition-colors duration-700 mix-blend-overlay" />
            </div>
          </div>
        </motion.div>

        {/* Global Locations Highlight Block */}
        <div className="mt-16 md:mt-24 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-[#050505] text-[#fdfdfd] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/10">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#6B4C9A]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-4 mb-6 md:mb-8">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#6B4C9A] uppercase">
                <Globe2 size={14} /> Global Footprint
              </div>
              <h4 className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white">
                ACTIVE CO-ORDINATES
              </h4>
            </div>
            <p className="font-sans text-xs md:text-sm font-light text-white/60 max-w-xs md:text-right leading-relaxed">
              We manage spatial and visual campaigns globally across timezones.
            </p>
          </div>

          {/* Locations List - Compact Rows Layout */}
          <div className="relative z-10 w-full flex flex-col gap-2.5">
            {locations.map((loc, index) => (
              <motion.div 
                key={loc.city}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between py-3.5 px-5 lg:py-4 lg:px-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 group relative overflow-hidden cursor-default gap-3 sm:gap-6"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B4C9A]/0 via-[#6B4C9A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* 1. Status & Country + City */}
                <div className="flex items-center gap-3.5 min-w-[200px] relative z-10">
                  <div className="relative flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <h5 className="font-sans text-lg md:text-xl font-medium tracking-tight uppercase text-white/90 group-hover:text-white transition-colors">
                      {loc.city}
                    </h5>
                    <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-white/40 group-hover:text-white/70 transition-colors">
                      {loc.country}
                    </span>
                  </div>
                </div>

                {/* 2. Coords & Short Desc */}
                <div className="hidden lg:flex items-center gap-3 relative z-10 flex-1 max-w-md px-4">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-sans text-[10px] tracking-widest font-mono text-white/60 shrink-0 group-hover:bg-[#6B4C9A]/20 group-hover:border-[#6B4C9A]/30 group-hover:text-[#d3bcfa] transition-all">
                    {loc.coords}
                  </span>
                  <p className="font-sans text-xs font-light truncate text-white/50 group-hover:text-white/75 transition-colors">
                    {loc.desc}
                  </p>
                </div>

                {/* 3. Time */}
                <div className="flex items-center gap-2 shrink-0 ml-auto relative z-10">
                  <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-white/40">
                    LOCAL
                  </span>
                  <span className="font-sans text-lg md:text-xl font-medium tabular-nums font-mono text-white/90 group-hover:text-white transition-colors">
                    {getCityTime(loc.timezone)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}