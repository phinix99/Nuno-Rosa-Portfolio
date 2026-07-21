import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    num: "01",
    titleLine1: "VISUAL",
    titleLine2: "MERCHANDISING",
    subcategories: ["Creative Windows", "In-Store Displays", "Limited Editions"],
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784662099/1_78_tfobxr.avif",
    slug: "visual-merchandising",
    bentoClass: "lg:col-span-2 lg:row-span-2 min-h-[420px] lg:min-h-[600px]"
  },
  {
    num: "02",
    titleLine1: "E-COMMERCE",
    titleLine2: "& STYLING",
    subcategories: ["Fashion Editorial Styling"],
    image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg",
    slug: "e-commerce-styling",
    bentoClass: "lg:col-span-1 lg:row-span-1 min-h-[290px]"
  },
  {
    num: "03",
    titleLine1: "CONCEPT",
    titleLine2: "& SIGNAGE",
    subcategories: ["Conceptual Design", "Visual Signage"],
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg",
    slug: "concept-signage",
    bentoClass: "lg:col-span-1 lg:row-span-1 min-h-[290px]"
  },
  {
    num: "04",
    titleLine1: "EVENTS &",
    titleLine2: "BRAND EXHIBITION",
    subcategories: ["Trade Shows", "Press Showrooms", "Luxury Events"],
    image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg",
    slug: "events-exhibition",
    bentoClass: "lg:col-span-2 lg:row-span-1 min-h-[300px]"
  },
  {
    num: "05",
    titleLine1: "PRESS &",
    titleLine2: "GUEST SPEAKER",
    subcategories: ["Keynote Speaking", "Workshops"],
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg",
    slug: "press-speaker",
    bentoClass: "lg:col-span-1 lg:row-span-1 min-h-[300px]"
  }
];

export default function PortfolioHighlights() {
  return (
    <section className="w-full bg-[#fdfdfd] pt-20 md:pt-28 pb-24 md:pb-32 border-b border-[#111]/10 px-6 md:px-12 lg:px-20" id="projects">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111]/10 pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#6B4C9A] uppercase">
              <Sparkles size={14} /> PORTFOLIO MENU
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase text-[#111]">
              OUR DISCIPLINES
            </h2>
          </div>
          <Link 
            to="/portfolio" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#111]/20 hover:border-[#6B4C9A] hover:bg-[#6B4C9A] hover:text-white transition-all text-xs font-bold tracking-widest uppercase text-[#111] group w-fit"
          >
            Explore Full Portfolio
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Dynamic Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cat.bentoClass}
            >
              <Link 
                to={`/portfolio/${cat.slug}`}
                className="group relative flex flex-col justify-between w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-[#6B4C9A]/50 hover:shadow-[0_25px_50px_rgba(107,76,154,0.14)] transition-all duration-700 p-6 md:p-8 bg-neutral-900"
              >
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={`${cat.titleLine1} ${cat.titleLine2}`} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 group-hover:from-black/90 group-hover:via-black/45 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-[#6B4C9A]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                </div>

                {/* Top Bar: Number & Arrow CTA */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="font-sans text-xs md:text-sm font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20 shadow-sm">
                    {cat.num}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#6B4C9A] group-hover:border-[#6B4C9A] transition-all shadow-md">
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Content: Title & Subcategory Badges */}
                <div className="relative z-10 flex flex-col gap-3 mt-auto pt-12">
                  <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight uppercase text-white group-hover:text-[#d3bcfa] transition-colors leading-[1.08]">
                    {cat.titleLine1} <br /> {cat.titleLine2}
                  </h3>

                  {/* Subcategories Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.subcategories.map((sub, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider uppercase border border-white/20 rounded-full text-white/80 bg-white/10 backdrop-blur-md group-hover:border-white/40 group-hover:text-white transition-colors"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


