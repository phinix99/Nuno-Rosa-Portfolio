import { motion } from 'motion/react';
import { Globe2 } from 'lucide-react';

interface CareerMilestone {
  brand: string;
  country: string;
  highlights: string[];
}

const trajectory: CareerMilestone[] = [
  {
    brand: "YOUSTA",
    country: "India",
    highlights: ["Fixture Development", "VM Manual Rollouts"]
  },
  {
    brand: "TRENDS",
    country: "India",
    highlights: ["Standardised Window Campaigns", "Store Layout Optimisation & VM Audits"]
  },
  {
    brand: "JACK & JONES",
    country: "India",
    highlights: ["Innovated Trade Show Experience", "Upskilling Regional VM Teams"]
  },
  {
    brand: "VERO MODA",
    country: "India",
    highlights: ["Award-Winning Window Concepts", "Redefined Brand Expression & Styling"]
  },
  {
    brand: "C&A",
    country: "Mexico",
    highlights: ["Brand Visual Elevation", "Product Assortment & Zoning", "National Visual Training Development"]
  },
  {
    brand: "LACOSTE",
    country: "UK & Ireland",
    highlights: ["Directed UK Largest European Flagship Opening", "Refurbishment Projects", "SIS Concepts"]
  },
  {
    brand: "Bicester Village",
    country: "UK",
    highlights: ["Elevated Visual Standards Across Multi-Luxury Brands", "Daily Display Compliance"]
  },
  {
    brand: "Chalhoub Group",
    country: "UAE",
    highlights: ["Bespoke Lifestyle & Brand Events", "Gulf Visual Ambassador for Luxury French Brands"]
  },
  {
    brand: "MANGO",
    country: "Portugal",
    highlights: ["National Window Dresser", "VM Expansion"]
  }
];

export default function Philosophy() {
  return (
    <section className="w-full bg-white text-black py-12 md:py-18 border-b border-black/10 overflow-hidden" id="philosophy">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Global Footprint Showcase Card with Rich Moving Blue-to-Purple Gradient */}
        <div className="p-6 md:p-10 rounded-sm md:rounded bg-gradient-to-br from-[#05112E] via-[#160B33] to-[#2E0847] text-white relative overflow-hidden shadow-[0_25px_65px_rgba(22,11,51,0.45)] border border-white/15">
          <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#0052FF]/35 to-[#D946EF]/30 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-10 -left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#7C3AED]/35 to-[#0052FF]/30 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '4s' }} />

          {/* Section Header */}
          <div className="relative z-10 flex flex-col gap-1.5 pb-6 mb-8 border-b border-white/15">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] via-[#A855F7] to-[#FF007F] animate-gradient uppercase">
              <Globe2 size={14} className="text-[#00C6FF]" /> Career Trajectory
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[1.08] text-white">
              GLOBAL FOOTPRINT
            </h2>
          </div>

          {/* 3-Column Elegant Trajectory Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {trajectory.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="p-5 sm:p-6 rounded-sm bg-black/25 hover:bg-black/35 border border-white/15 hover:border-[#A855F7]/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  {/* Top Bar: Brand Name & Country Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white uppercase group-hover:text-white transition-colors">
                      {item.brand}
                    </h3>
                    <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-white/95 px-2.5 py-0.5 rounded-xs bg-gradient-to-r from-[#0052FF]/30 to-[#D946EF]/30 border border-white/20 shrink-0 shadow-xs">
                      {item.country}
                    </span>
                  </div>

                  <div className="w-full h-[1px] bg-white/15 my-3" />

                  {/* Clean Highlights List */}
                  <div className="flex flex-col gap-2 font-sans text-xs md:text-[0.825rem] font-light text-white/85 leading-relaxed">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-white/40 select-none text-[10px] mt-1 shrink-0">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}