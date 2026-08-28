import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const brandLogos = Array.from({ length: 23 }, (_, i) => ({
  id: `brand-${i + 1}`,
  src: `/brands/${i + 1}.jpg`,
  alt: `Global Brand Icon ${i + 1}`
}));

export default function Welcome() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageParallaxY = useTransform(sectionScroll, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(sectionScroll, [0, 0.5, 1], [0.97, 1.01, 0.98]);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white text-black pt-12 md:pt-16 pb-10 md:pb-14 border-b border-black/10 overflow-hidden" 
      id="about"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Image with Smooth Scroll Parallax */}
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-start"
            ref={imageContainerRef}
          >
            <div className="relative w-full aspect-[900/586] rounded-sm overflow-hidden bg-neutral-100 shadow-[0_20px_45px_rgba(11,49,117,0.12)] group border border-black/10">
              <div className="absolute inset-2 border border-[#0B3175]/30 rounded-xs pointer-events-none z-10 transition-all duration-500 group-hover:inset-1.5 group-hover:border-[#0B3175]" />
              
              <motion.img 
                style={{ y: imageParallaxY, scale: imageScale }}
                src="/portfolio/Press & Guest Speaker/1677031409.png" 
                alt="Nuno Rosa - Global Retail Visual Merchandising" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Greeting and Philosophy Statement with Staggered Scroll Triggers */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-5"
          >
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-[#0B3175]"
            >
              ABOUT ME
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] font-medium tracking-tight leading-[1.15] text-[#0B3175]"
            >
              Balancing artistic vision with proven commercial results at any scale.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs md:text-sm lg:text-base font-light leading-relaxed text-black/80 max-w-2xl flex flex-col gap-3"
            >
              <p>
                With 30+ years of international fashion retail experience spanning the UAE, Mexico, India, Portugal, and the UK, I translate brand identities into immersive, 360-degree visual storytelling environments.
              </p>
              <p>
                By combining eye-catching window concepts with intentional spatial architecture, my signature style turns ordinary retail spaces into commercial triumphs.
              </p>
              <p className="font-medium italic text-black">
                "This portfolio is my masterpiece."
              </p>
            </motion.div>

            {/* Designer Signature Detail - Straight (not italic) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-0.5 mt-1"
            >
              <span className="font-sans not-italic text-2xl md:text-3xl text-[#0B3175] font-bold tracking-tight select-none">
                Nuno Rosa
              </span>
              <span className="font-sans text-[10px] font-semibold tracking-widest uppercase opacity-40">
                Founder & Creative Director
              </span>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Brands Carousel Section directly under About Me */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-10 md:pt-14 pb-4">
        <motion.h4 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-black/60 mb-6 md:mb-8"
        >
          TRUSTED BY GLOBAL ICONS
        </motion.h4>
        
        <div className="relative w-full flex overflow-hidden py-4 md:py-8">
          <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex items-center py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
            style={{ width: "fit-content" }}
          >
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`} 
                className="flex items-center justify-center shrink-0 w-56 md:w-72 lg:w-80 h-28 md:h-36 lg:h-40 mx-3 md:mx-6 group"
              >
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="max-h-24 md:max-h-32 lg:max-h-36 max-w-[220px] md:max-w-[280px] lg:max-w-[320px] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-108 transform-gpu origin-center filter contrast-105"
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
