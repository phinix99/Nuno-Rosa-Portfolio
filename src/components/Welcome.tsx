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
  { icon: Mic, text: "2x Guest Speaker at Asian National Retail Events" },
  { icon: Trophy, text: "4x Guest Host of the VM Challenge In-Store Asia" },
  { icon: Newspaper, text: "8+ Press Featured Articles" },
  { icon: GraduationCap, text: "2x VM Workshops for Fashion Schools" }
];

export default function Welcome() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="w-full bg-white text-black pt-20 md:pt-32 pb-16 md:pb-24 border-b border-black/10 overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Welcome Greeting and Philosophy Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-8"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#7651B9] rounded-full animate-pulse" />
              <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-black/60">
                ABOUT ME
              </h2>
            </div>
            
            <h3 className="font-sans text-3xl md:text-5xl lg:text-[2.75rem] font-medium tracking-tight leading-[1.15] text-[#7651B9]">
              Balancing artistic vision with proven commercial results at any scale.
            </h3>
            
            <div className="font-sans text-base md:text-lg font-light leading-relaxed text-black/80 max-w-2xl flex flex-col gap-6">
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
            <div className="mt-2 flex flex-col gap-1">
              <span className="font-serif italic text-3xl text-[#7651B9] font-light tracking-wide select-none">
                Nuno Rosa
              </span>
              <span className="font-sans text-[10px] font-semibold tracking-widest uppercase opacity-40">
                Founder & Creative Director
              </span>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
            ref={imageRef}
          >
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-[0_12px_40px_rgba(107,76,154,0.15)] group border border-black/10">
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-[#7651B9]/40 rounded-xl pointer-events-none z-10 transition-all duration-500 group-hover:inset-3 group-hover:border-[#7651B9]" />
              
              <motion.img 
                style={{ y, scale: 1.15 }}
                src="https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg" 
                alt="Nuno Rosa Portrait" 
                className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-transform duration-1000 ease-out group-hover:scale-[1.2]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[#7651B9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
            </div>
          </motion.div>

        </div>

        {/* Global Retail Design Expert Accolades Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAF9FB] border border-[#7651B9]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-1 shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
              <Sparkles size={13} /> Industry Recognition
            </div>
            <h4 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-black">
              GLOBAL RETAIL DESIGN EXPERT
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 flex-1">
            {accolades.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-black/5 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#7651B9]/10 text-[#7651B9] flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="font-sans text-xs md:text-sm font-semibold text-black/80">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* Brands Carousel Section directly under About Me */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-16 md:pt-20">
        <h4 className="text-center font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-black/50 mb-8 md:mb-10">
          TRUSTED BY GLOBAL ICONS
        </h4>
        
        <div className="relative w-full flex overflow-hidden py-8 md:py-14">
          {/* Fade Edges for seamless edge fading on full-screen white background */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex items-center py-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            style={{ width: "fit-content" }}
          >
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`} 
                className="flex items-center justify-center shrink-0 w-44 md:w-60 lg:w-68 h-24 md:h-28 mx-6 md:mx-10 group"
              >
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="max-h-16 md:max-h-20 lg:max-h-24 max-w-[180px] md:max-w-[230px] lg:max-w-[260px] w-auto h-auto object-contain filter grayscale contrast-125 mix-blend-multiply opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-115 transform-gpu origin-center"
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
