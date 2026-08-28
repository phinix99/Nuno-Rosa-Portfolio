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
    <section className="w-full bg-white text-black py-14 md:py-20 lg:py-24 border-b border-black/10 overflow-hidden" id="philosophy">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">

        {/* Global Footprint Showcase Card in Elegant Royal Blue */}
        <div className="p-6 md:p-10 rounded-sm md:rounded bg-[#0B3175] text-white relative overflow-hidden shadow-[0_20px_45px_rgba(11,49,117,0.25)] border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 flex flex-col gap-1.5 pb-6 mb-8 border-b border-white/15">
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.22em] text-white/80 uppercase">
              <Globe2 size={14} /> Career Trajectory
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
                className="p-5 sm:p-6 rounded-sm bg-black/15 hover:bg-black/25 border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  {/* Top Bar: Brand Name & Country Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white uppercase group-hover:text-white transition-colors">
                      {item.brand}
                    </h3>
                    <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-white/90 px-2.5 py-0.5 rounded-xs bg-white/15 border border-white/10 shrink-0">
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