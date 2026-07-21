import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
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
    <section className="w-full bg-[#fdfdfd] pt-24 md:pt-32 pb-24 md:pb-32 border-b border-[#111]/10 px-6 md:px-12 lg:px-20" id="projects">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6B4C9A] uppercase">
              PORTFOLIO MENU
            </div>
            <h2 className="font-sans text-[10vw] md:text-[6vw] leading-[0.9] font-medium tracking-tighter uppercase text-[#111]">
              OUR DISCIPLINES
            </h2>
          </div>
          <Link 
            to="/portfolio" 
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#111] hover:text-[#6B4C9A] transition-colors mb-2 md:mb-4 group"
          >
            Explore Portfolio
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories List */}
        <div className="flex flex-col border-t border-[#111]/10">
          {categories.map((cat, idx) => (
            <Link 
              key={idx}
              to={`/portfolio/${cat.slug}`}
              className="group flex flex-col lg:flex-row lg:items-center py-8 lg:py-12 border-b border-[#111]/10 relative overflow-hidden"
            >
              {/* Background fill on hover */}
              <div className="absolute inset-0 bg-[#111] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
              
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 relative z-10 px-4">
                {/* Number */}
                <span className="font-sans text-sm md:text-base font-bold tracking-widest text-[#111]/40 group-hover:text-[#fdfdfd]/50 transition-colors duration-500 w-12">
                  {cat.num}
                </span>

                {/* Title */}
                <h3 className="font-sans text-3xl md:text-5xl lg:text-[4rem] font-medium tracking-tighter uppercase text-[#111] group-hover:text-[#fdfdfd] transition-colors duration-500 lg:w-1/2">
                  {cat.title}
                </h3>

                {/* Subcategories */}
                <div className="flex flex-wrap gap-2 lg:gap-4 lg:w-1/3">
                  {cat.subcategories.map((sub, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider uppercase border border-[#111]/20 rounded-full text-[#111]/70 group-hover:border-[#fdfdfd]/30 group-hover:text-[#fdfdfd] transition-colors duration-500 bg-[#fdfdfd]/50 group-hover:bg-transparent backdrop-blur-sm"
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Hover Image Reveal */}
                <div className="absolute top-1/2 right-12 -translate-y-1/2 w-72 aspect-[4/3] rounded-lg overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[0.16,1,0.3,1] pointer-events-none hidden lg:block shadow-2xl">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
