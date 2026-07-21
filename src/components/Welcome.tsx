import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Welcome() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="w-full bg-[#fdfdfd] text-[#111] py-20 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#111]/10 overflow-hidden" id="welcome">
      <div className="max-w-[1400px] mx-auto">
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
              <span className="w-2 h-2 bg-[#6B4C9A] rounded-full animate-pulse" />
              <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-[#111]/60">
                WELCOME & INTRODUCTION
              </h2>
            </div>
            
            <h3 className="font-sans text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-[#111]">
              "True visual merchandising is the silent architecture of desire."
            </h3>
            
            <div className="font-sans text-base md:text-lg font-light leading-relaxed text-[#111]/80 max-w-2xl flex flex-col gap-6">
              <p>
                Welcome to my atelier. I believe that space is not merely a volume to be filled, but a canvas for a physical narrative. Over my 30-year journey as an International Head of Visual Merchandising, I have worked at the intersection of psychology, architecture, and brand direction to craft retail experiences that transcend commerce.
              </p>
              <p>
                Every sightline is calculated; every texture and shadow is calibrated to evoke emotion. It is about creating the beautiful tension that leads to curiosity, connection, and ultimately, conversions.
              </p>
            </div>

            {/* Designer Signature Detail */}
            <div className="mt-6 flex flex-col gap-1">
              <span className="font-serif italic text-3xl text-[#6B4C9A] font-light tracking-wide select-none">
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
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#fdfdfd] shadow-[0_12px_40px_rgba(0,0,0,0.03)] group border border-[#111]/10">
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-[#6B4C9A]/30 rounded-xl pointer-events-none z-10 transition-all duration-500 group-hover:inset-3 group-hover:border-[#6B4C9A]/60" />
              
              <motion.img 
                style={{ y, scale: 1.15 }}
                src="https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg" 
                alt="Nuno Rosa Portrait" 
                className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-transform duration-1000 ease-out group-hover:scale-[1.2]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[#6B4C9A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
