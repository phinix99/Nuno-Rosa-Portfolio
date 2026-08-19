import { motion } from 'motion/react';
import { Globe2, Sparkles, TrendingUp, Building2, Award } from 'lucide-react';

const timeline = [
  { location: "Bangalore, India", year: "2025", brand: "YOUSTA", role: "Chief of Visual Merchandising" },
  { location: "Bangalore, India", year: "2024", brand: "TRENDS", role: "VP of Visual Merchandising F&L" },
  { location: "Mumbai, India", year: "2022", brand: "JACK & JONES", role: "Head of VM & Styling" },
  { location: "Mumbai, India", year: "2015", brand: "VERO MODA", role: "Head of VM & Styling" },
  { location: "GDL, Mexico", year: "2013", brand: "C&A", role: "National Head of VM" },
  { location: "UK & Ireland", year: "2010", brand: "LACOSTE", role: "VM & Store Design Director" },
  { location: "Dubai, UAE", year: "2008", brand: "CHALHOUB GROUP", role: "Senior Regional VM Manager" },
  { location: "London, UK", year: "2005", brand: "HUGO BOSS", role: "Area Display Merchandiser" },
  { location: "Lisbon, Portugal", year: "1996", brand: "MANGO", role: "Country VM Lead" }
];

const metrics = [
  { icon: Globe2, label: "Experience", value: "30+ Yrs" },
  { icon: Sparkles, label: "Market Reach", value: "3 Continents" },
  { icon: Building2, label: "Stores Managed", value: "2,000+" },
  { icon: TrendingUp, label: "Annual VM Savings", value: "+5Cr INR" },
  { icon: Award, label: "Window Awards", value: "4 National" }
];

export default function Philosophy() {
  return (
    <section className="w-full bg-white text-black py-10 md:py-14 border-b border-black/10 overflow-hidden" id="philosophy">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Compact, Single-Screen Global Footprint Card */}
        <div className="p-5 md:p-8 rounded-sm md:rounded bg-[#5E27BA] text-white relative overflow-hidden shadow-[0_20px_45px_rgba(94, 39, 186,0.22)] border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-black/10 blur-[90px] rounded-full pointer-events-none" />

          {/* Top Bar: Section Title + Horizontal Metrics Strip */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-5 md:pb-6 border-b border-white/15">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                <Globe2 size={13} /> Career Trajectory
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase leading-[1.08] text-white">
                GLOBAL FOOTPRINT
              </h2>
            </div>

            {/* Streamlined Horizontal Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 font-sans">
              {metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col border-l border-white/20 pl-3">
                  <span className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
                    {m.value}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-medium tracking-wider uppercase text-white/70 mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Column Compact Timeline Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3 pt-5 md:pt-6">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-sm bg-black/[0.08] hover:bg-black/[0.16] border border-white/10 hover:border-white/25 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span className="font-mono text-[11px] md:text-xs font-bold text-white/90 group-hover:text-white tabular-nums shrink-0 px-1.5 py-0.5 rounded-xs bg-white/10">
                    {item.year}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-sans text-xs font-semibold text-white tracking-tight truncate">
                      {item.role}
                    </span>
                    <span className="font-sans text-[9px] text-white/60 uppercase tracking-wider truncate">
                      {item.location}
                    </span>
                  </div>
                </div>

                <span className="font-sans text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-white/90 shrink-0 px-2 py-0.5 rounded-xs bg-white/15 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                  @{item.brand}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}