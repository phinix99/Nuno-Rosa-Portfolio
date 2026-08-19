import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Award, Mic, Trophy, Newspaper, GraduationCap, Sparkles } from 'lucide-react';

const brandLogos = Array.from({ length: 23 }, (_, i) => ({
  id: `brand-${i + 1}`,
  src: `/brands/${i + 1}.jpg`,
  alt: `Global Brand Icon ${i + 1}`
}));

const accolades = [
  { icon: Award, text: "4 National Window Design Awards" },
  { icon: Mic, text: "2x Asian Retail Keynote Speaker" },
  { icon: Trophy, text: "4x Host of VM Challenge In-Store Asia" },
  { icon: Newspaper, text: "8+ Press Featured Articles" },
  { icon: GraduationCap, text: "2x Fashion School VM Workshops" }
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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Greeting and Philosophy Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-5"
          >
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#7651B9]">
              <span className="w-2 h-2 bg-[#7651B9] rounded-full animate-pulse" />
              <span>ABOUT ME</span>
            </div>
            
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] font-medium tracking-tight leading-[1.15] text-[#7651B9]">
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

            {/* Designer Signature Detail */}
            <div className="flex flex-col gap-0.5 mt-1">
              <span className="font-serif italic text-2xl md:text-3xl text-[#7651B9] font-light tracking-wide select-none">
                Nuno Rosa
              </span>
              <span className="font-sans text-[10px] font-semibold tracking-widest uppercase opacity-40">
                Founder & Creative Director
              </span>
            </div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
            ref={imageRef}
          >
            <div className="relative w-full max-w-[320px] aspect-[3/3.8] rounded-lg overflow-hidden bg-white shadow-[0_10px_30px_rgba(107,76,154,0.12)] group border border-black/10">
              <div className="absolute inset-2.5 border border-[#7651B9]/30 rounded-md pointer-events-none z-10 transition-all duration-500 group-hover:inset-2 group-hover:border-[#7651B9]" />
              
              <motion.img 
                style={{ y, scale: 1.1 }}
                src="https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg" 
                alt="Nuno Rosa Portrait" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.14]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Compact Accolades Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 md:mt-10 p-4 md:p-6 rounded-lg bg-[#FAF9FB] border border-[#7651B9]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          <div className="flex flex-col gap-0.5 shrink-0">
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-[#7651B9] uppercase">
              <Sparkles size={11} /> Recognition
            </div>
            <h3 className="font-sans text-base md:text-lg font-bold tracking-tight text-black">
              GLOBAL RETAIL EXPERT
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3 flex-1">
            {accolades.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-md bg-white border border-black/5 shadow-xs">
                  <div className="w-6 h-6 rounded-md bg-[#7651B9]/10 text-[#7651B9] flex items-center justify-center shrink-0">
                    <Icon size={13} />
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-black/80 leading-tight">
                    {item.text}
                  </span>
                </div>
              );
            })}
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
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            style={{ width: "fit-content" }}
          >
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`} 
                className="flex items-center justify-center shrink-0 w-36 md:w-48 lg:w-56 h-16 md:h-20 mx-4 md:mx-6 group"
              >
                <div className="w-full h-full flex items-center justify-center p-1">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="max-h-12 md:max-h-14 lg:max-h-16 max-w-[150px] md:max-w-[190px] lg:max-w-[220px] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105 transform-gpu origin-center"
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
