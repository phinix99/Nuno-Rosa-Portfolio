import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    num: "01",
    title: "VISUAL MERCHANDISING",
    subcategories: ["Creative Windows", "In-Store Displays", "Limited Editions"],
    image: "https://static.wixstatic.com/media/9e4437_b1d6e14a69774452990aa064af82b819~mv2.jpg/v1/crop/x_0,y_151,w_2978,h_3558/fill/w_660,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20220509_111042.jpg",
    slug: "visual-merchandising"
  },
  {
    num: "02",
    title: "E-COMMERCE & STYLING",
    subcategories: ["Fashion Editorial Styling"],
    image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg",
    slug: "e-commerce-styling"
  },
  {
    num: "03",
    title: "CONCEPT & SIGNAGE",
    subcategories: ["Conceptual Design", "Visual Signage"],
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405554/1_217_r3tuuz.jpg",
    slug: "concept-signage"
  },
  {
    num: "04",
    title: "EVENTS & BRAND EXHIBITION",
    subcategories: ["Trade Shows", "Press Showroom Curation", "Luxury Events"],
    image: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg",
    slug: "events-exhibition"
  },
  {
    num: "05",
    title: "PRESS & GUEST SPEAKER",
    subcategories: ["Keynote Speaking", "Workshops"],
    image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg",
    slug: "press-speaker"
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

        {/* Visual Discipline Cards Grid - Images Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to={`/portfolio/${cat.slug}`}
                className="group flex flex-col gap-5 h-full rounded-2xl p-4 bg-neutral-50/60 hover:bg-white border border-neutral-200/80 hover:border-[#6B4C9A]/40 hover:shadow-[0_20px_40px_rgba(107,76,154,0.1)] transition-all duration-500"
              >
                {/* Visual Image Showcase (Visible Before Hover) */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 border border-neutral-200/80">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-3 left-3 bg-[#111]/85 backdrop-blur-md px-3 py-1 rounded-full text-white font-sans text-xs font-mono font-bold tracking-widest shadow-md">
                    {cat.num}
                  </div>

                  {/* Floating Arrow Badge */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111] group-hover:bg-[#6B4C9A] group-hover:text-white transition-all shadow-md">
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content Details */}
                <div className="flex flex-col gap-3 px-1 pb-1 flex-1">
                  <h3 className="font-sans text-xl md:text-2xl font-medium tracking-tight uppercase text-[#111] group-hover:text-[#6B4C9A] transition-colors leading-snug">
                    {cat.title}
                  </h3>

                  {/* Subcategories Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {cat.subcategories.map((sub, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase border border-neutral-200 rounded-full text-neutral-600 group-hover:border-[#6B4C9A]/30 group-hover:text-[#6B4C9A] bg-white transition-colors"
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

