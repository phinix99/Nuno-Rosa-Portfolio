import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

export default function PortfolioHighlights() {
  const getImageUrl = (category: string, subcategory?: string) => {
    if (subcategory && portfolioData[category]?.[subcategory]) {
      return portfolioData[category][subcategory][0];
    }
    const subcats = Object.values(portfolioData[category] || {});
    return subcats[0]?.[0] || '';
  };

  return (
    <section className="w-full bg-white pt-20 md:pt-28 pb-24 md:pb-32 border-b border-black/10 px-6 md:px-12 lg:px-20" id="projects">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
              <Sparkles size={14} /> PORTFOLIO MENU
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase text-black">
              MY DISCIPLINES
            </h2>
          </div>
          <Link 
            to="/portfolio" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 hover:border-[#7651B9] hover:bg-[#7651B9] hover:text-white transition-all text-xs font-bold tracking-widest uppercase text-black group w-fit"
          >
            Explore Full Portfolio
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col gap-20">
          
          {/* Category A: Visual Merchandising */}
          <div className="flex flex-col gap-8">
            <Link to="/gallery/visual-merchandising" className="group w-fit">
              <h3 className="font-sans text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-black group-hover:text-[#7651B9] transition-colors uppercase">
                VISUAL <br /> MERCHANDISING
              </h3>
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Creative Windows", img: getImageUrl("VISUAL MERCHANDISING", "Creative Windows") },
                { name: "In - Store Display", img: getImageUrl("VISUAL MERCHANDISING", "In-Store Displays") },
                { name: "Limited Editions", img: getImageUrl("VISUAL MERCHANDISING", "Limited Editions") }
              ].map((sub, i) => (
                <Link to={`/gallery/visual-merchandising`} key={i} className="relative aspect-[4/3] md:aspect-auto md:h-[300px] lg:h-[400px] overflow-hidden group">
                  <img 
                    src={sub.img || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800'} 
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/95 text-black px-6 md:px-8 py-2 md:py-3 rounded-full border border-black/80 font-sans text-sm font-medium tracking-wide shadow-lg group-hover:bg-[#7651B9] group-hover:text-white group-hover:border-[#7651B9] transition-all duration-300">
                      {sub.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Category B: E-Commerce & Styling */}
          <Link to="/gallery/e-commerce-styling" className="block w-full border-[10px] md:border-[16px] border-black p-8 md:p-16 lg:p-24 hover:border-[#7651B9] transition-colors duration-500 group relative overflow-hidden bg-white">
            <div className="relative z-10">
              <h3 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-black group-hover:text-[#7651B9] transition-colors uppercase">
                E-COMMERCE <br /> & STYLING
              </h3>
            </div>
            {/* Subtle background reveal on hover */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </Link>

          {/* Category C: Concept & Signage */}
          <div className="flex flex-col gap-8">
            <Link to="/gallery/concept-signage" className="group w-fit">
              <h3 className="font-sans text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-black group-hover:text-[#7651B9] transition-colors uppercase">
                CONCEPT <br /> & SIGNAGE
              </h3>
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { name: "Conceptual Design", img: getImageUrl("CONCEPT & SIGNAGE", "Conceptual Design") },
                { name: "Signage", img: getImageUrl("CONCEPT & SIGNAGE", "Visual Signage") }
              ].map((sub, i) => (
                <Link to={`/gallery/concept-signage`} key={i} className="relative aspect-[16/9] overflow-hidden group">
                  <img 
                    src={sub.img || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800'} 
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/95 text-black px-6 md:px-8 py-2 md:py-3 rounded-full border border-black/80 font-sans text-sm font-medium tracking-wide shadow-lg group-hover:bg-[#7651B9] group-hover:text-white group-hover:border-[#7651B9] transition-all duration-300">
                      {sub.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Category D: Events & Brand Exhibition */}
          <Link to="/gallery/events-exhibition" className="block w-full border-[10px] md:border-[16px] border-black p-8 md:p-16 lg:p-24 hover:border-[#7651B9] transition-colors duration-500 group relative overflow-hidden bg-white">
            <div className="relative z-10">
              <h3 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-black group-hover:text-[#7651B9] transition-colors uppercase">
                EVENTS & <br /> BRAND EXHIBITION
              </h3>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </Link>

          {/* Category E: Press & Guest Speaker */}
          <div className="flex flex-col gap-8">
            <Link to="/gallery/press-speaker" className="group w-fit">
              <h3 className="font-sans text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-black group-hover:text-[#7651B9] transition-colors uppercase">
                PRESS & <br /> GUEST SPEAKER
              </h3>
            </Link>
            
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              <Link to={`/gallery/press-speaker`} className="relative aspect-[21/9] md:h-[400px] overflow-hidden group">
                <img 
                  src={getImageUrl("PRESS & GUEST SPEAKER") || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800'} 
                  alt="Press and Guest Speaker"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/95 text-black px-6 md:px-8 py-2 md:py-3 rounded-full border border-black/80 font-sans text-sm font-medium tracking-wide shadow-lg group-hover:bg-[#7651B9] group-hover:text-white group-hover:border-[#7651B9] transition-all duration-300">
                    Press & Events
                  </span>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
