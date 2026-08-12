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

const brands = [
  { name: "Mango", domain: "mango.com" },
  { name: "United Colours of Benetton", domain: "benetton.com" },
  { name: "Central Models", domain: "centralmodels.pt" },
  { name: "Hugo Boss", domain: "hugoboss.com" },
  { name: "Lacoste", domain: "lacoste.com" },
  { name: "Bicester Village", domain: "thebicestercollection.com" },
  { name: "Chalhoub Group", domain: "chalhoubgroup.com" },
  { name: "C&A", domain: "c-and-a.com" },
  { name: "Vero Moda", domain: "veromoda.com" },
  { name: "Jack & Jones", domain: "jackjones.com" },
  { name: "Trends", domain: "reliancetrends.com" },
  { name: "Yousta", domain: "relianceretail.com" }
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
  return (
    <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-black/10" id="about">
      <div className="max-w-[1400px] mx-auto">
        


        {/* Brands Carousel Section */}
        <div className="my-16 py-12 md:py-16 rounded-[2rem] bg-[#FAF9FB] border border-[#6B4C9A]/10 overflow-hidden w-full relative shadow-[inset_0_0_40px_rgba(107,76,154,0.02)]">
          <h4 className="text-center font-sans text-xs md:text-sm font-bold tracking-widest uppercase text-[#6B4C9A]/60 mb-12">
            Trusted by Global Icons
          </h4>
          
          <div className="relative w-full flex overflow-hidden">
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#FAF9FB] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#FAF9FB] to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              style={{ width: "fit-content" }}
            >
              {[...brands, ...brands].map((brand, idx) => (
                <div key={`${brand.name}-${idx}`} className="flex flex-col items-center justify-center shrink-0 w-40 md:w-56 lg:w-64 mx-6 md:mx-12 group">
                  <img 
                    src={`https://logos.hunter.io/${brand.domain}`} 
                    alt={brand.name}
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain filter grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 drop-shadow-sm"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden font-sans text-xl md:text-2xl font-medium tracking-tight text-black/60 group-hover:text-[#6B4C9A] transition-colors cursor-default text-center">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Global Footprint Timeline */}
        <div className="mt-16 p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[2rem] bg-[#6B4C9A] text-white relative overflow-hidden shadow-[0_30px_60px_rgba(107,76,154,0.3)] border border-white/10">
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