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
              We architect spatial narratives that command attention, translating bold brand concepts into immersive, high-conversion retail environments.
            </h3>

            <div className="font-sans text-base md:text-lg font-light leading-relaxed text-[#111]/80 pr-4">
              <p className="mb-8">
                Spanning London, the UAE, India, Mexico, and Portugal, our work bridges diverse global markets. True visual merchandising acts as the silent architecture of desire. For over 30 years, we have engineered physical retail experiences that transcend borders and demographic expectations.
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
                      Our methodology blends structural precision with commercial empathy. By deconstructing both the brand identity and the physical space, we build comprehensive 360-degree environments—from conceptual window displays to intricate in-store flow architectures.
                    </p>
                    <p className="mb-8 text-[#111]/80">
                      We do not merely decorate; we architect the tension between objects and space. This involves meticulous space optimization, bespoke fixture design, and leading cross-functional teams to execute flawless rollouts across global retail networks.
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
        <div className="mt-20 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B4C9A] uppercase">
                <Globe2 size={14} /> Global Footprint
              </div>
              <h4 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#111]">
                ACTIVE CO-ORDINATES
              </h4>
            </div>
            <p className="font-sans text-xs md:text-sm font-light text-[#111]/50 max-w-sm md:text-right leading-relaxed">
              We manage spatial and visual campaigns globally, coordinating seamless creative direction across timezones.
            </p>
          </div>

          {/* Locations List - Premium Architectural Layout */}
          <div className="w-full flex flex-col border-t border-[#111]/10 mt-8">
            {locations.map((loc) => (
              <div 
                key={loc.city} 
                className="w-full flex flex-col lg:flex-row lg:items-center py-6 lg:py-8 border-b border-[#111]/10 group hover:bg-[#111] transition-colors duration-500 px-4 md:px-8 relative overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B4C9A]/0 via-[#6B4C9A]/10 to-[#6B4C9A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* 1. Country & Status */}
                <div className="w-full lg:w-1/5 flex items-center gap-3 mb-4 lg:mb-0 relative z-10">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                  <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#111]/60 group-hover:text-[#fdfdfd]/70 transition-colors">
                    {loc.country}
                  </span>
                </div>
                
                {/* 2. City Name */}
                <div className="w-full lg:w-1/4 mb-3 lg:mb-0 relative z-10">
                  <h5 className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase text-[#111] group-hover:text-[#fdfdfd] group-hover:translate-x-4 transition-all duration-500">
                    {loc.city}
                  </h5>
                </div>

                {/* 3. Description & Coords */}
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0 pr-4 lg:pr-8 relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[10px] tracking-widest font-mono text-[#6B4C9A] group-hover:text-[#6B4C9A] transition-colors">
                      {loc.coords}
                    </span>
                    <p className="font-sans text-xs md:text-sm font-light leading-relaxed text-[#111]/60 group-hover:text-[#fdfdfd]/70 transition-colors line-clamp-2 lg:line-clamp-none">
                      {loc.desc}
                    </p>
                  </div>
                </div>

                {/* 4. Time */}
                <div className="w-full lg:w-auto ml-auto text-left lg:text-right relative z-10">
                  <div className="flex flex-col items-start lg:items-end gap-1">
                    <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-[#111]/40 group-hover:text-[#fdfdfd]/40 transition-colors">
                      Local Time
                    </span>
                    <span className="font-sans text-xl md:text-2xl font-light tabular-nums font-mono text-[#111] group-hover:text-[#fdfdfd] transition-colors">
                      {getCityTime(loc.timezone)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}