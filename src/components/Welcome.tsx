import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const brandLogos = Array.from({ length: 23 }, (_, i) => ({
  id: `brand-${i + 1}`,
  src: `/brands/${i + 1}.jpg`,
  alt: `Global Brand Icon ${i + 1}`
}));

export default function Welcome() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="w-full bg-white text-black pt-14 md:pt-20 lg:pt-24 pb-0 border-b border-black/10 overflow-hidden" id="about">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Image 4 (1677031409.png) with Exact Aspect Ratio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-start"
            ref={imageRef}
          >
            <div className="relative w-full aspect-[900/586] rounded-sm overflow-hidden bg-neutral-100 shadow-[0_15px_40px_rgba(11,49,117,0.12)] group border border-black/10">
              <div className="absolute inset-2 border border-[#0B3175]/30 rounded-xs pointer-events-none z-10 transition-all duration-500 group-hover:inset-1.5 group-hover:border-[#0B3175]" />
              
              <img 
                src="/portfolio/Press & Guest Speaker/1677031409.png" 
                alt="Nuno Rosa - Global Retail Visual Merchandising" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Greeting and Philosophy Statement */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-5"
          >
            <div className="text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-[#0B3175]">
              ABOUT ME
            </div>
            
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] text-[#0B3175]">
              Balancing artistic vision with proven commercial results at any scale.
            </h2>
            
            <div className="font-sans text-xs md:text-sm lg:text-base font-light leading-relaxed text-black/80 max-w-2xl flex flex-col gap-3">
              <p>
                With 30+ years of international fashion retail experience spanning the UAE, Mexico, India, Portugal, and the UK, I translate brand identities into immersive, 360-degree visual storytelling environments.
              </p>
              <p>
                By combining eye-catching window concepts with intentional spatial architecture, my signature style turns ordinary retail spaces into commercial triumphs.
              </p>
              <p className="font-medium italic text-black">
                "This portfolio is my masterpiece."
              </p>
            </div>

            {/* Designer Signature Detail - Straight (not italic) */}
            <div className="flex flex-col gap-0.5 mt-1">
              <span className="font-sans not-italic text-2xl md:text-3xl text-[#0B3175] font-bold tracking-tight select-none">
                Nuno Rosa
              </span>
              <span className="font-sans text-[10px] font-semibold tracking-widest uppercase opacity-40">
                Founder & Creative Director
              </span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* ── TRUSTED BY GLOBAL ICONS ── Redesigned Brand Carousel Strip with 1.5X Larger Logos & Zero-Jump CSS Pause ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-14 md:mt-20 bg-[#F4F6FA] border-t border-black/8 pause-on-hover"
      >
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 pt-10 md:pt-12 pb-8 md:pb-10 px-5">
          <span className="flex-1 max-w-[120px] h-px bg-[#0B3175]/20" />
          <p className="font-sans text-xs font-bold tracking-[0.30em] uppercase text-[#0B3175]/70">
            TRUSTED BY GLOBAL ICONS
          </p>
          <span className="flex-1 max-w-[120px] h-px bg-[#0B3175]/20" />
        </div>

        {/* Scrolling Logo Track with Seamless GPU Marquee */}
        <div className="relative w-full flex overflow-hidden pb-10 md:pb-12">

          {/* Left edge fade — matched to bg-[#F4F6FA] */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-[#F4F6FA] via-[#F4F6FA]/90 to-transparent z-10 pointer-events-none" />
          {/* Right edge fade */}
          <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-[#F4F6FA] via-[#F4F6FA]/90 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-smooth items-center">
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="flex items-center justify-center shrink-0 w-44 sm:w-56 md:w-64 lg:w-72 h-24 sm:h-32 md:h-36 mx-2 sm:mx-3 md:mx-4 px-1 group cursor-pointer"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-20 sm:max-h-28 md:max-h-32 lg:max-h-36 max-w-[190px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[310px] w-auto h-auto object-contain
                    mix-blend-multiply opacity-95 group-hover:opacity-100
                    transition-all duration-300 ease-out
                    group-hover:scale-110 origin-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Brand count indicator */}
        <div className="flex items-center justify-center gap-2 pb-8 md:pb-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-black/30">
            23 Global Fashion Brands
          </span>
        </div>
      </motion.div>
    </section>
  );
}
