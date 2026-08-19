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
    <section className="w-full bg-white text-black py-16 md:py-20 border-b border-black/10 overflow-hidden" id="philosophy">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Compact, High-Impact Global Footprint Card */}
        <div className="p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-[2rem] bg-[#7651B9] text-white relative overflow-hidden shadow-[0_25px_50px_rgba(118,81,185,0.25)] border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Top Bar: Section Title + Horizontal Metrics Strip */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 md:pb-10 border-b border-white/15">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/70 uppercase">
                <Globe2 size={14} /> Career Trajectory
              </div>
              <h3 className="font-sans text-3xl md:text-5xl font-medium tracking-tight text-white uppercase leading-none">
                GLOBAL FOOTPRINT
              </h3>
            </div>

            {/* Streamlined Horizontal Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 font-sans">
              {metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col border-l border-white/20 pl-3.5">
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                    {m.value}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-medium tracking-wider uppercase text-white/70 mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Column Compact Timeline Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pt-8 md:pt-10">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-black/[0.08] hover:bg-black/[0.16] border border-white/10 hover:border-white/25 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <span className="font-mono text-xs md:text-sm font-bold text-white/90 group-hover:text-white tabular-nums shrink-0 px-2 py-1 rounded bg-white/10">
                    {item.year}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-sans text-xs md:text-sm font-semibold text-white tracking-tight truncate">
                      {item.role}
                    </span>
                    <span className="font-sans text-[10px] text-white/60 uppercase tracking-wider truncate">
                      {item.location}
                    </span>
                  </div>
                </div>

                <span className="font-sans text-[10px] md:text-xs font-bold tracking-wider uppercase text-white/90 shrink-0 px-2.5 py-1 rounded-full bg-white/15 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
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