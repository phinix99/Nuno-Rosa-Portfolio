import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioHighlights() {
  return (
    <section className="w-full bg-white pt-20 md:pt-28 pb-24 md:pb-32 border-b border-black/10 px-6 md:px-12 lg:px-20" id="projects">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12 border-b border-black/10 pb-16">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
            <Sparkles size={14} /> PORTFOLIO
          </div>
          <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase text-black max-w-2xl">
            CREATIVE DISCIPLINE ARCHIVES
          </h2>
          <p className="font-sans text-lg font-light text-black/70 max-w-xl leading-relaxed mt-2">
            A comprehensive curation of retail window displays, editorial styling, spatial exhibition architectures, and keynote speaking engagements worldwide.
          </p>
        </div>

        <Link 
          to="/portfolio" 
          className="group relative flex items-center justify-center w-full md:w-auto px-10 py-5 rounded-full border border-black/20 hover:border-[#7651B9] bg-white hover:bg-[#7651B9] transition-all duration-500 overflow-hidden"
        >
          <div className="relative z-10 flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-black group-hover:text-white transition-colors">
            Explore Full Portfolio
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </Link>
        
      </div>
    </section>
  );
}
