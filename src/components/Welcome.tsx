import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';

const brandLogos = Array.from({ length: 23 }, (_, i) => ({
  id: `brand-${i + 1}`,
  src: `/brands/${i + 1}.jpg`,
  alt: `Global Brand Icon ${i + 1}`
}));

const achievements = [
  { value: "30", suffix: "+", text: "Years of International Experience" },
  { value: "3", suffix: "", text: "Continents of Market Expansion" },
  { value: "50", suffix: "+", text: "Led High-Performing Professionals" },
  { value: "2,000", suffix: "+", text: "Stores Transformed" },
  { value: "€0.5", suffix: "M", text: "Annual Budget Optimisation" }
];

export default function Welcome() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="w-full bg-white text-black pt-12 md:pt-16 pb-10 md:pb-14 border-b border-black/10 overflow-hidden" id="about">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        
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
            <div className="relative w-full aspect-[900/586] rounded-sm overflow-hidden bg-neutral-100 shadow-[0_15px_40px_rgba(11, 49, 117,0.12)] group border border-black/10">
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
            
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] font-medium tracking-tight leading-[1.15] text-[#0B3175]">
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

        {/* Retail Achievements Strip - Top to Bottom Number & Text */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full border-t border-neutral-200/80 pt-6 mt-10 md:mt-12"
        >
          <div className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#0B3175] uppercase mb-6">
            RETAIL ACHIEVEMENTS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 border-r border-[#111]/10 pr-4 last:border-r-0">
                <div className="flex items-baseline gap-0.5 text-neutral-900">
                  <span className="font-sans text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-none">
                    {item.value}
                  </span>
                  {item.suffix && (
                    <span className="font-sans text-2xl lg:text-3xl font-bold text-[#0B3175]">
                      {item.suffix}
                    </span>
                  )}
                </div>
                <span className="font-sans text-xs md:text-sm font-medium text-black/75 leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Brands Carousel Section directly under About Me */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-8 md:pt-10">
        <h4 className="text-center font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-black/50 mb-4 md:mb-6">
          TRUSTED BY GLOBAL ICONS
        </h4>
        
        <div className="relative w-full flex overflow-hidden py-4 md:py-6">
          <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex items-center py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            style={{ width: "fit-content" }}
          >
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`} 
                className="flex items-center justify-center shrink-0 w-44 md:w-56 lg:w-64 h-20 md:h-24 lg:h-28 mx-2 md:mx-3 group"
              >
                <div className="w-full h-full flex items-center justify-center p-1">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="max-h-16 md:max-h-20 lg:max-h-24 max-w-[180px] md:max-w-[230px] lg:max-w-[260px] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105 transform-gpu origin-center"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
