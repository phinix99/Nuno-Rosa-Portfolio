import { motion } from 'motion/react';
import { Linkedin, ArrowUpRight, Newspaper, Heart, MessageCircle, Share2, Sparkles, MapPin } from 'lucide-react';

export default function NewsUpdate() {
  return (
    <section className="w-full bg-white text-black py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-black/10 overflow-hidden" id="news">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-black/10 pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
              <Newspaper size={14} /> INDUSTRY DISPATCHES
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase text-black">
              NEWS & LATEST UPDATES
            </h2>
          </div>

          <a 
            href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] text-white hover:bg-[#7651B9] transition-all text-xs font-bold tracking-widest uppercase group w-fit shadow-md"
          >
            <Linkedin size={14} /> Follow on LinkedIn
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Featured LinkedIn Post Feed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Main Post Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-3xl bg-[#FAF9FB] border border-black/10 overflow-hidden shadow-[0_15px_40px_rgba(118,81,185,0.06)] flex flex-col"
          >
            {/* Author Header */}
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-black/5 bg-white/70 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <img 
                  src="https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg" 
                  alt="Nuno Rosa"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#7651B9]"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="font-sans text-base md:text-lg font-bold text-black">Nuno Rosa</h3>
                    <Linkedin size={16} className="text-[#0077B5]" />
                  </div>
                  <span className="font-sans text-xs text-black/60 font-medium">
                    Global Creative Head of Visual Merchandising & Retail Design
                  </span>
                  <span className="font-sans text-[10px] text-black/40 uppercase tracking-wider mt-0.5">
                    Latest Activity • 14,288+ Followers
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline px-3 py-1 rounded-full bg-[#7651B9]/10 text-[#7651B9] font-mono text-xs font-semibold uppercase">
                Featured Post
              </span>
            </div>

            {/* Post Content */}
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <p className="font-sans text-base md:text-lg font-light leading-relaxed text-black/90">
                "Every successful retail store opening hides an invisible story. The 'behind-the-curtain' logistics of spatial choreography, sightline geometry, and human emotion coming together in a physical space."
              </p>

              {/* Post Visual Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-black/10">
                <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative group">
                  <img 
                    src="/brands/YOUSTA.jpg" 
                    alt="Yousta Retail Launch by Nuno Rosa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider">
                    Store Facade Architecture
                  </div>
                </div>
                <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative group">
                  <img 
                    src="https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" 
                    alt="Retail Visual Presentation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider">
                    In-Store Experience
                  </div>
                </div>
              </div>

              {/* Engagement Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-semibold text-black/60">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-1.5 hover:text-[#7651B9] transition-colors cursor-pointer">
                    <Heart size={16} className="text-[#7651B9]" /> 520+ Reactions
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-[#7651B9] transition-colors cursor-pointer">
                    <MessageCircle size={16} /> 64 Comments
                  </span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#7651B9] hover:underline font-bold uppercase tracking-wider text-[11px]"
                >
                  Read full thread <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Side Column: Press & Speaking Dispatches */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/10 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-black/60 uppercase">
                <Sparkles size={14} className="text-[#7651B9]" /> PRESS & KEYNOTE
              </div>
              
              <h4 className="font-sans text-xl font-bold tracking-tight text-black">
                "Copy-paste approach is a big NO for VM"
              </h4>
              <p className="font-sans text-xs md:text-sm font-light text-black/70 leading-relaxed">
                In an exclusive feature with Retail4Growth, Nuno Rosa breaks down the evolution of modern retail merchandising, store psychology, and brand storytelling.
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-black/10">
                <span className="text-[10px] font-mono font-semibold uppercase text-black/40">Retail4Growth Press</span>
                <a 
                  href="/gallery/press-speaker" 
                  className="text-xs font-bold uppercase tracking-wider text-[#7651B9] hover:underline flex items-center gap-1"
                >
                  View Press <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* Speaking Summit Highlight */}
            <div className="p-6 md:p-8 rounded-3xl bg-[#7651B9] text-white flex flex-col gap-4 shadow-[0_15px_30px_rgba(118,81,185,0.25)]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70">
                Host & Keynote Speaker
              </span>
              <h4 className="font-sans text-xl font-bold tracking-tight leading-snug">
                VM Challenge & In-Store Asia Summit
              </h4>
              <p className="font-sans text-xs font-light text-white/80 leading-relaxed">
                4x Guest Host of the VM Challenge and Keynote Speaker at Asian National Retail Summits.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
